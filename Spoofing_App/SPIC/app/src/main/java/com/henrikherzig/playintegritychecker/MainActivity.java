package com.henrikherzig.playintegritychecker;

import android.os.Bundle;

import com.google.android.gms.tasks.Task;

import androidx.appcompat.app.AppCompatActivity;

import android.util.Base64;
import android.util.Log;
import android.view.View;

import androidx.navigation.NavController;
import androidx.navigation.Navigation;
import androidx.navigation.ui.AppBarConfiguration;
import androidx.navigation.ui.NavigationUI;

import com.google.android.play.core.integrity.IntegrityManager;
import com.google.android.play.core.integrity.IntegrityManagerFactory;
import com.google.android.play.core.integrity.IntegrityServiceException;
import com.google.android.play.core.integrity.IntegrityTokenRequest;
import com.google.android.play.core.integrity.IntegrityTokenResponse;
import com.henrikherzig.playintegritychecker.databinding.ActivityMainBinding;

import android.view.Menu;
import android.view.MenuItem;

import org.jose4j.jwe.JsonWebEncryption;
import org.jose4j.jws.JsonWebSignature;
import org.jose4j.jwx.JsonWebStructure;
import org.jose4j.lang.JoseException;

import java.security.KeyFactory;
import java.security.NoSuchAlgorithmException;
import java.security.PublicKey;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.X509EncodedKeySpec;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

public class MainActivity extends AppCompatActivity {

    private AppBarConfiguration appBarConfiguration;
    private ActivityMainBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        binding = ActivityMainBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        setSupportActionBar(binding.toolbar);

        NavController navController = Navigation.findNavController(this, R.id.nav_host_fragment_content_main);
        appBarConfiguration = new AppBarConfiguration.Builder(navController.getGraph()).build();
        NavigationUI.setupActionBarWithNavController(this, navController, appBarConfiguration);

        binding.fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                targetFunction();
            }
        });
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    public void targetFunction() {
        String nonce = "QWxsIHlvdXIgYmFzZSBhcmUgYmVsb25nIHRvIHVzZQ==";
        IntegrityManager integrityManager = IntegrityManagerFactory.create(getApplicationContext());

        Task<IntegrityTokenResponse> integrityTokenResponse = integrityManager.requestIntegrityToken(IntegrityTokenRequest.builder()
                .setNonce(nonce)
                .build());
        integrityTokenResponse.addOnSuccessListener(response -> {
            String base64_of_encoded_decryption_key = "E6qoMnNaBBnki9S398nQVbljl6E1TGmoxNI/sBKE7Mw=";
            String base64_of_encoded_verification_key = "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEwBGC/IMBGL6maxYzDNnkD4izXewqX2fC99hRtDKS8hU38/fYhuRxb9rpvEVe+RPAW4ehP0m9Nv61HjdIYhQAtA==";
            JsonWebEncryption jwe = null;
            try {
                jwe = (JsonWebEncryption) JsonWebStructure
                        .fromCompactSerialization(response.token());

                byte[] decryptionKeyBytes = Base64.decode(base64_of_encoded_decryption_key, Base64.DEFAULT);
                SecretKey decryptionKey =
                        new SecretKeySpec(
                                decryptionKeyBytes,
                                0,
                                decryptionKeyBytes.length,
                                "AES");

                jwe.setKey(decryptionKey);


                String compactJws = jwe.getPayload();

                JsonWebSignature jws =
                        (JsonWebSignature) JsonWebStructure.fromCompactSerialization(compactJws);
                byte[] verificationKeyBytes = Base64.decode(base64_of_encoded_verification_key, Base64.DEFAULT);
                PublicKey verificationKey =
                        KeyFactory.getInstance("EC")
                                .generatePublic(new X509EncodedKeySpec(verificationKeyBytes));

                jws.setKey(verificationKey);
                String verification = jws.getPayload();
                Log.i("SPIC", verification);
            } catch (JoseException | InvalidKeySpecException | NoSuchAlgorithmException e) {
                throw new RuntimeException(String.valueOf(e));
            }


        }).addOnFailureListener(e -> {
            Log.e("SPIC", "Failure" + e.getMessage());
            if (e instanceof IntegrityServiceException) {
                Log.e("SPIC", "Error code: " + ((IntegrityServiceException) e).getErrorCode());
            }
        });
    }

    @Override
    public boolean onSupportNavigateUp() {
        NavController navController = Navigation.findNavController(this, R.id.nav_host_fragment_content_main);
        return NavigationUI.navigateUp(navController, appBarConfiguration)
                || super.onSupportNavigateUp();
    }
}