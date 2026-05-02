📦
232876 /ts/client.js
✄
var _s=Object.defineProperty;var ms=(n,e)=>{for(var t in e)_s(n,t,{get:e[t],enumerable:!0})};var we=[],ge=[],Gt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(let n=0,e=Gt.length;n<e;++n)we[n]=Gt[n],ge[Gt.charCodeAt(n)]=n;ge[45]=62;ge[95]=63;function gs(n){let e=n.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");let t=n.indexOf("=");t===-1&&(t=e);let r=t===e?0:4-t%4;return[t,r]}function bs(n,e,t){return(e+t)*3/4-t}function Tr(n){let e=gs(n),t=e[0],r=e[1],o=new Uint8Array(bs(n,t,r)),s=0,i=r>0?t-4:t,l;for(l=0;l<i;l+=4){let a=ge[n.charCodeAt(l)]<<18|ge[n.charCodeAt(l+1)]<<12|ge[n.charCodeAt(l+2)]<<6|ge[n.charCodeAt(l+3)];o[s++]=a>>16&255,o[s++]=a>>8&255,o[s++]=a&255}if(r===2){let a=ge[n.charCodeAt(l)]<<2|ge[n.charCodeAt(l+1)]>>4;o[s++]=a&255}if(r===1){let a=ge[n.charCodeAt(l)]<<10|ge[n.charCodeAt(l+1)]<<4|ge[n.charCodeAt(l+2)]>>2;o[s++]=a>>8&255,o[s++]=a&255}return o}function ys(n){return we[n>>18&63]+we[n>>12&63]+we[n>>6&63]+we[n&63]}function Es(n,e,t){let r=[];for(let o=e;o<t;o+=3){let s=(n[o]<<16&16711680)+(n[o+1]<<8&65280)+(n[o+2]&255);r.push(ys(s))}return r.join("")}function $t(n){let e=n.length,t=e%3,r=[],o=16383;for(let s=0,i=e-t;s<i;s+=o)r.push(Es(n,s,s+o>i?i:s+o));if(t===1){let s=n[e-1];r.push(we[s>>2]+we[s<<4&63]+"==")}else if(t===2){let s=(n[e-2]<<8)+n[e-1];r.push(we[s>>10]+we[s>>4&63]+we[s<<2&63]+"=")}return r.join("")}function nt(n,e,t,r,o){let s,i,l=o*8-r-1,a=(1<<l)-1,c=a>>1,d=-7,p=t?o-1:0,f=t?-1:1,u=n[e+p];for(p+=f,s=u&(1<<-d)-1,u>>=-d,d+=l;d>0;)s=s*256+n[e+p],p+=f,d-=8;for(i=s&(1<<-d)-1,s>>=-d,d+=r;d>0;)i=i*256+n[e+p],p+=f,d-=8;if(s===0)s=1-c;else{if(s===a)return i?NaN:(u?-1:1)*(1/0);i=i+Math.pow(2,r),s=s-c}return(u?-1:1)*i*Math.pow(2,s-r)}function Ht(n,e,t,r,o,s){let i,l,a,c=s*8-o-1,d=(1<<c)-1,p=d>>1,f=o===23?Math.pow(2,-24)-Math.pow(2,-77):0,u=r?0:s-1,_=r?1:-1,h=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(l=isNaN(e)?1:0,i=d):(i=Math.floor(Math.log(e)/Math.LN2),e*(a=Math.pow(2,-i))<1&&(i--,a*=2),i+p>=1?e+=f/a:e+=f*Math.pow(2,1-p),e*a>=2&&(i++,a/=2),i+p>=d?(l=0,i=d):i+p>=1?(l=(e*a-1)*Math.pow(2,o),i=i+p):(l=e*Math.pow(2,p-1)*Math.pow(2,o),i=0));o>=8;)n[t+u]=l&255,u+=_,l/=256,o-=8;for(i=i<<o|l,c+=o;c>0;)n[t+u]=i&255,u+=_,i/=256,c-=8;n[t+u-_]|=h*128}var ws={INSPECT_MAX_BYTES:50},Zt=2147483647;m.TYPED_ARRAY_SUPPORT=!0;Object.defineProperty(m.prototype,"parent",{enumerable:!0,get:function(){if(m.isBuffer(this))return this.buffer}});Object.defineProperty(m.prototype,"offset",{enumerable:!0,get:function(){if(m.isBuffer(this))return this.byteOffset}});function Le(n){if(n>Zt)throw new RangeError('The value "'+n+'" is invalid for option "size"');let e=new Uint8Array(n);return Object.setPrototypeOf(e,m.prototype),e}function m(n,e,t){if(typeof n=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Qt(n)}return xr(n,e,t)}m.poolSize=8192;function xr(n,e,t){if(typeof n=="string")return Ts(n,e);if(ArrayBuffer.isView(n))return Cs(n);if(n==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n);if(n instanceof ArrayBuffer||n&&n.buffer instanceof ArrayBuffer||n instanceof SharedArrayBuffer||n&&n.buffer instanceof SharedArrayBuffer)return Wt(n,e,t);if(typeof n=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let r=n.valueOf&&n.valueOf();if(r!=null&&r!==n)return m.from(r,e,t);let o=As(n);if(o)return o;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof n[Symbol.toPrimitive]=="function")return m.from(n[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n)}m.from=function(n,e,t){return xr(n,e,t)};Object.setPrototypeOf(m.prototype,Uint8Array.prototype);Object.setPrototypeOf(m,Uint8Array);function Nr(n){if(typeof n!="number")throw new TypeError('"size" argument must be of type number');if(n<0)throw new RangeError('The value "'+n+'" is invalid for option "size"')}function Is(n,e,t){return Nr(n),n<=0?Le(n):e!==void 0?typeof t=="string"?Le(n).fill(e,t):Le(n).fill(e):Le(n)}m.alloc=function(n,e,t){return Is(n,e,t)};function Qt(n){return Nr(n),Le(n<0?0:Yt(n)|0)}m.allocUnsafe=function(n){return Qt(n)};m.allocUnsafeSlow=function(n){return Qt(n)};function Ts(n,e){if((typeof e!="string"||e==="")&&(e="utf8"),!m.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=kr(n,e)|0,r=Le(t),o=r.write(n,e);return o!==t&&(r=r.slice(0,o)),r}function qt(n){let e=n.length<0?0:Yt(n.length)|0,t=Le(e);for(let r=0;r<e;r+=1)t[r]=n[r]&255;return t}function Cs(n){if(n instanceof Uint8Array){let e=new Uint8Array(n);return Wt(e.buffer,e.byteOffset,e.byteLength)}return qt(n)}function Wt(n,e,t){if(e<0||n.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(n.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let r;return e===void 0&&t===void 0?r=new Uint8Array(n):t===void 0?r=new Uint8Array(n,e):r=new Uint8Array(n,e,t),Object.setPrototypeOf(r,m.prototype),r}function As(n){if(m.isBuffer(n)){let e=Yt(n.length)|0,t=Le(e);return t.length===0||n.copy(t,0,0,e),t}if(n.length!==void 0)return typeof n.length!="number"||Number.isNaN(n.length)?Le(0):qt(n);if(n.type==="Buffer"&&Array.isArray(n.data))return qt(n.data)}function Yt(n){if(n>=Zt)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Zt.toString(16)+" bytes");return n|0}m.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==m.prototype};m.compare=function(e,t){if(e instanceof Uint8Array&&(e=m.from(e,e.offset,e.byteLength)),t instanceof Uint8Array&&(t=m.from(t,t.offset,t.byteLength)),!m.isBuffer(e)||!m.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,o=t.length;for(let s=0,i=Math.min(r,o);s<i;++s)if(e[s]!==t[s]){r=e[s],o=t[s];break}return r<o?-1:o<r?1:0};m.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};m.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return m.alloc(0);let r;if(t===void 0)for(t=0,r=0;r<e.length;++r)t+=e[r].length;let o=m.allocUnsafe(t),s=0;for(r=0;r<e.length;++r){let i=e[r];if(i instanceof Uint8Array)s+i.length>o.length?(m.isBuffer(i)||(i=m.from(i.buffer,i.byteOffset,i.byteLength)),i.copy(o,s)):Uint8Array.prototype.set.call(o,i,s);else if(m.isBuffer(i))i.copy(o,s);else throw new TypeError('"list" argument must be an Array of Buffers');s+=i.length}return o};function kr(n,e){if(m.isBuffer(n))return n.length;if(ArrayBuffer.isView(n)||n instanceof ArrayBuffer)return n.byteLength;if(typeof n!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof n);let t=n.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;let o=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return Kt(n).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Br(n).length;default:if(o)return r?-1:Kt(n).length;e=(""+e).toLowerCase(),o=!0}}m.byteLength=kr;function Ls(n,e,t){let r=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(n||(n="utf8");;)switch(n){case"hex":return Ds(this,e,t);case"utf8":case"utf-8":return Rr(this,e,t);case"ascii":return js(this,e,t);case"latin1":case"binary":return Fs(this,e,t);case"base64":return Os(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Us(this,e,t);default:if(r)throw new TypeError("Unknown encoding: "+n);n=(n+"").toLowerCase(),r=!0}}m.prototype._isBuffer=!0;function je(n,e,t){let r=n[e];n[e]=n[t],n[t]=r}m.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)je(this,t,t+1);return this};m.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)je(this,t,t+3),je(this,t+1,t+2);return this};m.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)je(this,t,t+7),je(this,t+1,t+6),je(this,t+2,t+5),je(this,t+3,t+4);return this};m.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?Rr(this,0,e):Ls.apply(this,arguments)};m.prototype.toLocaleString=m.prototype.toString;m.prototype.equals=function(e){if(!m.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:m.compare(this,e)===0};m.prototype.inspect=function(){let e="",t=ws.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};m.prototype[Symbol.for("nodejs.util.inspect.custom")]=m.prototype.inspect;m.prototype.compare=function(e,t,r,o,s){if(e instanceof Uint8Array&&(e=m.from(e,e.offset,e.byteLength)),!m.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),r===void 0&&(r=e?e.length:0),o===void 0&&(o=0),s===void 0&&(s=this.length),t<0||r>e.length||o<0||s>this.length)throw new RangeError("out of range index");if(o>=s&&t>=r)return 0;if(o>=s)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,o>>>=0,s>>>=0,this===e)return 0;let i=s-o,l=r-t,a=Math.min(i,l),c=this.slice(o,s),d=e.slice(t,r);for(let p=0;p<a;++p)if(c[p]!==d[p]){i=c[p],l=d[p];break}return i<l?-1:l<i?1:0};function Mr(n,e,t,r,o){if(n.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Number.isNaN(t)&&(t=o?0:n.length-1),t<0&&(t=n.length+t),t>=n.length){if(o)return-1;t=n.length-1}else if(t<0)if(o)t=0;else return-1;if(typeof e=="string"&&(e=m.from(e,r)),m.isBuffer(e))return e.length===0?-1:Cr(n,e,t,r,o);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?o?Uint8Array.prototype.indexOf.call(n,e,t):Uint8Array.prototype.lastIndexOf.call(n,e,t):Cr(n,[e],t,r,o);throw new TypeError("val must be string, number or Buffer")}function Cr(n,e,t,r,o){let s=1,i=n.length,l=e.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(n.length<2||e.length<2)return-1;s=2,i/=2,l/=2,t/=2}function a(d,p){return s===1?d[p]:d.readUInt16BE(p*s)}let c;if(o){let d=-1;for(c=t;c<i;c++)if(a(n,c)===a(e,d===-1?0:c-d)){if(d===-1&&(d=c),c-d+1===l)return d*s}else d!==-1&&(c-=c-d),d=-1}else for(t+l>i&&(t=i-l),c=t;c>=0;c--){let d=!0;for(let p=0;p<l;p++)if(a(n,c+p)!==a(e,p)){d=!1;break}if(d)return c}return-1}m.prototype.includes=function(e,t,r){return this.indexOf(e,t,r)!==-1};m.prototype.indexOf=function(e,t,r){return Mr(this,e,t,r,!0)};m.prototype.lastIndexOf=function(e,t,r){return Mr(this,e,t,r,!1)};function xs(n,e,t,r){t=Number(t)||0;let o=n.length-t;r?(r=Number(r),r>o&&(r=o)):r=o;let s=e.length;r>s/2&&(r=s/2);let i;for(i=0;i<r;++i){let l=parseInt(e.substr(i*2,2),16);if(Number.isNaN(l))return i;n[t+i]=l}return i}function Ns(n,e,t,r){return yt(Kt(e,n.length-t),n,t,r)}function ks(n,e,t,r){return yt(Js(e),n,t,r)}function Ms(n,e,t,r){return yt(Br(e),n,t,r)}function Rs(n,e,t,r){return yt(Gs(e,n.length-t),n,t,r)}m.prototype.write=function(e,t,r,o){if(t===void 0)o="utf8",r=this.length,t=0;else if(r===void 0&&typeof t=="string")o=t,r=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(r)?(r=r>>>0,o===void 0&&(o="utf8")):(o=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let s=this.length-t;if((r===void 0||r>s)&&(r=s),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");let i=!1;for(;;)switch(o){case"hex":return xs(this,e,t,r);case"utf8":case"utf-8":return Ns(this,e,t,r);case"ascii":case"latin1":case"binary":return ks(this,e,t,r);case"base64":return Ms(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Rs(this,e,t,r);default:if(i)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),i=!0}};m.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Os(n,e,t){return e===0&&t===n.length?$t(n):$t(n.slice(e,t))}function Rr(n,e,t){t=Math.min(n.length,t);let r=[],o=e;for(;o<t;){let s=n[o],i=null,l=s>239?4:s>223?3:s>191?2:1;if(o+l<=t){let a,c,d,p;switch(l){case 1:s<128&&(i=s);break;case 2:a=n[o+1],(a&192)===128&&(p=(s&31)<<6|a&63,p>127&&(i=p));break;case 3:a=n[o+1],c=n[o+2],(a&192)===128&&(c&192)===128&&(p=(s&15)<<12|(a&63)<<6|c&63,p>2047&&(p<55296||p>57343)&&(i=p));break;case 4:a=n[o+1],c=n[o+2],d=n[o+3],(a&192)===128&&(c&192)===128&&(d&192)===128&&(p=(s&15)<<18|(a&63)<<12|(c&63)<<6|d&63,p>65535&&p<1114112&&(i=p))}}i===null?(i=65533,l=1):i>65535&&(i-=65536,r.push(i>>>10&1023|55296),i=56320|i&1023),r.push(i),o+=l}return Ps(r)}var Ar=4096;function Ps(n){let e=n.length;if(e<=Ar)return String.fromCharCode.apply(String,n);let t="",r=0;for(;r<e;)t+=String.fromCharCode.apply(String,n.slice(r,r+=Ar));return t}function js(n,e,t){let r="";t=Math.min(n.length,t);for(let o=e;o<t;++o)r+=String.fromCharCode(n[o]&127);return r}function Fs(n,e,t){let r="";t=Math.min(n.length,t);for(let o=e;o<t;++o)r+=String.fromCharCode(n[o]);return r}function Ds(n,e,t){let r=n.length;(!e||e<0)&&(e=0),(!t||t<0||t>r)&&(t=r);let o="";for(let s=e;s<t;++s)o+=$s[n[s]];return o}function Us(n,e,t){let r=n.slice(e,t),o="";for(let s=0;s<r.length-1;s+=2)o+=String.fromCharCode(r[s]+r[s+1]*256);return o}m.prototype.slice=function(e,t){let r=this.length;e=~~e,t=t===void 0?r:~~t,e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),t<e&&(t=e);let o=this.subarray(e,t);return Object.setPrototypeOf(o,m.prototype),o};function se(n,e,t){if(n%1!==0||n<0)throw new RangeError("offset is not uint");if(n+e>t)throw new RangeError("Trying to access beyond buffer length")}m.prototype.readUintLE=m.prototype.readUIntLE=function(e,t,r){e=e>>>0,t=t>>>0,r||se(e,t,this.length);let o=this[e],s=1,i=0;for(;++i<t&&(s*=256);)o+=this[e+i]*s;return o};m.prototype.readUintBE=m.prototype.readUIntBE=function(e,t,r){e=e>>>0,t=t>>>0,r||se(e,t,this.length);let o=this[e+--t],s=1;for(;t>0&&(s*=256);)o+=this[e+--t]*s;return o};m.prototype.readUint8=m.prototype.readUInt8=function(e,t){return e=e>>>0,t||se(e,1,this.length),this[e]};m.prototype.readUint16LE=m.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||se(e,2,this.length),this[e]|this[e+1]<<8};m.prototype.readUint16BE=m.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||se(e,2,this.length),this[e]<<8|this[e+1]};m.prototype.readUint32LE=m.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||se(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};m.prototype.readUint32BE=m.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||se(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};m.prototype.readBigUInt64LE=function(e){e=e>>>0,He(e,"offset");let t=this[e],r=this[e+7];(t===void 0||r===void 0)&&rt(e,this.length-8);let o=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,s=this[++e]+this[++e]*2**8+this[++e]*2**16+r*2**24;return BigInt(o)+(BigInt(s)<<BigInt(32))};m.prototype.readBigUInt64BE=function(e){e=e>>>0,He(e,"offset");let t=this[e],r=this[e+7];(t===void 0||r===void 0)&&rt(e,this.length-8);let o=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],s=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+r;return(BigInt(o)<<BigInt(32))+BigInt(s)};m.prototype.readIntLE=function(e,t,r){e=e>>>0,t=t>>>0,r||se(e,t,this.length);let o=this[e],s=1,i=0;for(;++i<t&&(s*=256);)o+=this[e+i]*s;return s*=128,o>=s&&(o-=Math.pow(2,8*t)),o};m.prototype.readIntBE=function(e,t,r){e=e>>>0,t=t>>>0,r||se(e,t,this.length);let o=t,s=1,i=this[e+--o];for(;o>0&&(s*=256);)i+=this[e+--o]*s;return s*=128,i>=s&&(i-=Math.pow(2,8*t)),i};m.prototype.readInt8=function(e,t){return e=e>>>0,t||se(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};m.prototype.readInt16LE=function(e,t){e=e>>>0,t||se(e,2,this.length);let r=this[e]|this[e+1]<<8;return r&32768?r|4294901760:r};m.prototype.readInt16BE=function(e,t){e=e>>>0,t||se(e,2,this.length);let r=this[e+1]|this[e]<<8;return r&32768?r|4294901760:r};m.prototype.readInt32LE=function(e,t){return e=e>>>0,t||se(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};m.prototype.readInt32BE=function(e,t){return e=e>>>0,t||se(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};m.prototype.readBigInt64LE=function(e){e=e>>>0,He(e,"offset");let t=this[e],r=this[e+7];(t===void 0||r===void 0)&&rt(e,this.length-8);let o=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(r<<24);return(BigInt(o)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)};m.prototype.readBigInt64BE=function(e){e=e>>>0,He(e,"offset");let t=this[e],r=this[e+7];(t===void 0||r===void 0)&&rt(e,this.length-8);let o=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(o)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+r)};m.prototype.readFloatLE=function(e,t){return e=e>>>0,t||se(e,4,this.length),nt(this,e,!0,23,4)};m.prototype.readFloatBE=function(e,t){return e=e>>>0,t||se(e,4,this.length),nt(this,e,!1,23,4)};m.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||se(e,8,this.length),nt(this,e,!0,52,8)};m.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||se(e,8,this.length),nt(this,e,!1,52,8)};function pe(n,e,t,r,o,s){if(!m.isBuffer(n))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<s)throw new RangeError('"value" argument is out of bounds');if(t+r>n.length)throw new RangeError("Index out of range")}m.prototype.writeUintLE=m.prototype.writeUIntLE=function(e,t,r,o){if(e=+e,t=t>>>0,r=r>>>0,!o){let l=Math.pow(2,8*r)-1;pe(this,e,t,r,l,0)}let s=1,i=0;for(this[t]=e&255;++i<r&&(s*=256);)this[t+i]=e/s&255;return t+r};m.prototype.writeUintBE=m.prototype.writeUIntBE=function(e,t,r,o){if(e=+e,t=t>>>0,r=r>>>0,!o){let l=Math.pow(2,8*r)-1;pe(this,e,t,r,l,0)}let s=r-1,i=1;for(this[t+s]=e&255;--s>=0&&(i*=256);)this[t+s]=e/i&255;return t+r};m.prototype.writeUint8=m.prototype.writeUInt8=function(e,t,r){return e=+e,t=t>>>0,r||pe(this,e,t,1,255,0),this[t]=e&255,t+1};m.prototype.writeUint16LE=m.prototype.writeUInt16LE=function(e,t,r){return e=+e,t=t>>>0,r||pe(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};m.prototype.writeUint16BE=m.prototype.writeUInt16BE=function(e,t,r){return e=+e,t=t>>>0,r||pe(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};m.prototype.writeUint32LE=m.prototype.writeUInt32LE=function(e,t,r){return e=+e,t=t>>>0,r||pe(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};m.prototype.writeUint32BE=m.prototype.writeUInt32BE=function(e,t,r){return e=+e,t=t>>>0,r||pe(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function Or(n,e,t,r,o){Ur(e,r,o,n,t,7);let s=Number(e&BigInt(4294967295));n[t++]=s,s=s>>8,n[t++]=s,s=s>>8,n[t++]=s,s=s>>8,n[t++]=s;let i=Number(e>>BigInt(32)&BigInt(4294967295));return n[t++]=i,i=i>>8,n[t++]=i,i=i>>8,n[t++]=i,i=i>>8,n[t++]=i,t}function Pr(n,e,t,r,o){Ur(e,r,o,n,t,7);let s=Number(e&BigInt(4294967295));n[t+7]=s,s=s>>8,n[t+6]=s,s=s>>8,n[t+5]=s,s=s>>8,n[t+4]=s;let i=Number(e>>BigInt(32)&BigInt(4294967295));return n[t+3]=i,i=i>>8,n[t+2]=i,i=i>>8,n[t+1]=i,i=i>>8,n[t]=i,t+8}m.prototype.writeBigUInt64LE=function(e,t=0){return Or(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))};m.prototype.writeBigUInt64BE=function(e,t=0){return Pr(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))};m.prototype.writeIntLE=function(e,t,r,o){if(e=+e,t=t>>>0,!o){let a=Math.pow(2,8*r-1);pe(this,e,t,r,a-1,-a)}let s=0,i=1,l=0;for(this[t]=e&255;++s<r&&(i*=256);)e<0&&l===0&&this[t+s-1]!==0&&(l=1),this[t+s]=(e/i>>0)-l&255;return t+r};m.prototype.writeIntBE=function(e,t,r,o){if(e=+e,t=t>>>0,!o){let a=Math.pow(2,8*r-1);pe(this,e,t,r,a-1,-a)}let s=r-1,i=1,l=0;for(this[t+s]=e&255;--s>=0&&(i*=256);)e<0&&l===0&&this[t+s+1]!==0&&(l=1),this[t+s]=(e/i>>0)-l&255;return t+r};m.prototype.writeInt8=function(e,t,r){return e=+e,t=t>>>0,r||pe(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};m.prototype.writeInt16LE=function(e,t,r){return e=+e,t=t>>>0,r||pe(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};m.prototype.writeInt16BE=function(e,t,r){return e=+e,t=t>>>0,r||pe(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};m.prototype.writeInt32LE=function(e,t,r){return e=+e,t=t>>>0,r||pe(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};m.prototype.writeInt32BE=function(e,t,r){return e=+e,t=t>>>0,r||pe(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};m.prototype.writeBigInt64LE=function(e,t=0){return Or(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))};m.prototype.writeBigInt64BE=function(e,t=0){return Pr(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))};function jr(n,e,t,r,o,s){if(t+r>n.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Fr(n,e,t,r,o){return e=+e,t=t>>>0,o||jr(n,e,t,4,34028234663852886e22,-34028234663852886e22),Ht(n,e,t,r,23,4),t+4}m.prototype.writeFloatLE=function(e,t,r){return Fr(this,e,t,!0,r)};m.prototype.writeFloatBE=function(e,t,r){return Fr(this,e,t,!1,r)};function Dr(n,e,t,r,o){return e=+e,t=t>>>0,o||jr(n,e,t,8,17976931348623157e292,-17976931348623157e292),Ht(n,e,t,r,52,8),t+8}m.prototype.writeDoubleLE=function(e,t,r){return Dr(this,e,t,!0,r)};m.prototype.writeDoubleBE=function(e,t,r){return Dr(this,e,t,!1,r)};m.prototype.copy=function(e,t,r,o){if(!m.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),!o&&o!==0&&(o=this.length),t>=e.length&&(t=e.length),t||(t=0),o>0&&o<r&&(o=r),o===r||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-t<o-r&&(o=e.length-t+r);let s=o-r;return this===e?this.copyWithin(t,r,o):Uint8Array.prototype.set.call(e,this.subarray(r,o),t),s};m.prototype.fill=function(e,t,r,o){if(typeof e=="string"){if(typeof t=="string"?(o=t,t=0,r=this.length):typeof r=="string"&&(o=r,r=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!m.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){let i=e.charCodeAt(0);(o==="utf8"&&i<128||o==="latin1")&&(e=i)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;t=t>>>0,r=r===void 0?this.length:r>>>0,e||(e=0);let s;if(typeof e=="number")for(s=t;s<r;++s)this[s]=e;else{let i=m.isBuffer(e)?e:m.from(e,o),l=i.length;if(l===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<r-t;++s)this[s+t]=i[s%l]}return this};var $e={};function Xt(n,e,t){$e[n]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${n}]`,this.stack,delete this.name}get code(){return n}set code(o){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:o,writable:!0})}toString(){return`${this.name} [${n}]: ${this.message}`}}}Xt("ERR_BUFFER_OUT_OF_BOUNDS",function(n){return n?`${n} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);Xt("ERR_INVALID_ARG_TYPE",function(n,e){return`The "${n}" argument must be of type number. Received type ${typeof e}`},TypeError);Xt("ERR_OUT_OF_RANGE",function(n,e,t){let r=`The value of "${n}" is out of range.`,o=t;return Number.isInteger(t)&&Math.abs(t)>2**32?o=Lr(String(t)):typeof t=="bigint"&&(o=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(o=Lr(o)),o+="n"),r+=` It must be ${e}. Received ${o}`,r},RangeError);function Lr(n){let e="",t=n.length,r=n[0]==="-"?1:0;for(;t>=r+4;t-=3)e=`_${n.slice(t-3,t)}${e}`;return`${n.slice(0,t)}${e}`}function Bs(n,e,t){He(e,"offset"),(n[e]===void 0||n[e+t]===void 0)&&rt(e,n.length-(t+1))}function Ur(n,e,t,r,o,s){if(n>t||n<e){let i=typeof e=="bigint"?"n":"",l;throw s>3?e===0||e===BigInt(0)?l=`>= 0${i} and < 2${i} ** ${(s+1)*8}${i}`:l=`>= -(2${i} ** ${(s+1)*8-1}${i}) and < 2 ** ${(s+1)*8-1}${i}`:l=`>= ${e}${i} and <= ${t}${i}`,new $e.ERR_OUT_OF_RANGE("value",l,n)}Bs(r,o,s)}function He(n,e){if(typeof n!="number")throw new $e.ERR_INVALID_ARG_TYPE(e,"number",n)}function rt(n,e,t){throw Math.floor(n)!==n?(He(n,t),new $e.ERR_OUT_OF_RANGE(t||"offset","an integer",n)):e<0?new $e.ERR_BUFFER_OUT_OF_BOUNDS:new $e.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,n)}var zs=/[^+/0-9A-Za-z-_]/g;function Vs(n){if(n=n.split("=")[0],n=n.trim().replace(zs,""),n.length<2)return"";for(;n.length%4!==0;)n=n+"=";return n}function Kt(n,e){e=e||1/0;let t,r=n.length,o=null,s=[];for(let i=0;i<r;++i){if(t=n.charCodeAt(i),t>55295&&t<57344){if(!o){if(t>56319){(e-=3)>-1&&s.push(239,191,189);continue}else if(i+1===r){(e-=3)>-1&&s.push(239,191,189);continue}o=t;continue}if(t<56320){(e-=3)>-1&&s.push(239,191,189),o=t;continue}t=(o-55296<<10|t-56320)+65536}else o&&(e-=3)>-1&&s.push(239,191,189);if(o=null,t<128){if((e-=1)<0)break;s.push(t)}else if(t<2048){if((e-=2)<0)break;s.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;s.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;s.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return s}function Js(n){let e=[];for(let t=0;t<n.length;++t)e.push(n.charCodeAt(t)&255);return e}function Gs(n,e){let t,r,o,s=[];for(let i=0;i<n.length&&!((e-=2)<0);++i)t=n.charCodeAt(i),r=t>>8,o=t%256,s.push(o),s.push(r);return s}function Br(n){return Tr(Vs(n))}function yt(n,e,t,r){let o;for(o=0;o<r&&!(o+t>=e.length||o>=n.length);++o)e[o+t]=n[o];return o}var $s=function(){let n="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let r=t*16;for(let o=0;o<16;++o)e[r+o]=n[t]+n[o]}return e}();var Dt={};ms(Dt,{ArtMethod:()=>Nt,ArtStackVisitor:()=>Mn,DVM_JNI_ENV_OFFSET_SELF:()=>ao,HandleVector:()=>dt,VariableSizedHandleScope:()=>ut,backtrace:()=>Hn,deoptimizeBootImage:()=>Qn,deoptimizeEverything:()=>Kn,deoptimizeMethod:()=>Wn,ensureClassInitialized:()=>hl,getAndroidApiLevel:()=>re,getAndroidVersion:()=>pt,getApi:()=>J,getArtClassSpec:()=>zn,getArtFieldSpec:()=>jt,getArtMethodSpec:()=>ve,getArtThreadFromEnv:()=>Ft,getArtThreadSpec:()=>We,makeArtClassLoaderVisitor:()=>$n,makeArtClassVisitor:()=>Gn,makeMethodMangler:()=>ec,makeObjectVisitorPredicate:()=>Xn,revertGlobalPatches:()=>Zn,translateMethod:()=>tc,withAllArtThreadsSuspended:()=>Jn,withRunnableArtThread:()=>be});var{pageSize:en,pointerSize:Hs}=Process,tn=class{constructor(e){this.sliceSize=e,this.slicesPerPage=en/e,this.pages=[],this.free=[]}allocateSlice(e,t){let r=e.near===void 0,o=t===1;if(r&&o){let s=this.free.pop();if(s!==void 0)return s}else if(t<en){let{free:s}=this,i=s.length,l=o?null:ptr(t-1);for(let a=0;a!==i;a++){let c=s[a],d=r||this._isSliceNear(c,e),p=o||c.and(l).isNull();if(d&&p)return s.splice(a,1)[0]}}return this._allocatePage(e)}_allocatePage(e){let t=Memory.alloc(en,e),{sliceSize:r,slicesPerPage:o}=this;for(let s=1;s!==o;s++){let i=t.add(s*r);this.free.push(i)}return this.pages.push(t),t}_isSliceNear(e,t){let r=e.add(this.sliceSize),{near:o,maxDistance:s}=t,i=zr(o.sub(e)),l=zr(o.sub(r));return i.compare(s)<=0&&l.compare(s)<=0}freeSlice(e){this.free.push(e)}};function zr(n){let e=Hs===4?31:63,t=ptr(1).shl(e).not();return n.and(t)}function nn(n){return new tn(n)}function de(n,e){if(e!==0)throw new Error(n+" failed: "+e)}var Et={v1_0:805371904,v1_2:805372416},vt={canTagObjects:1},{pointerSize:Zs}=Process,qs={exceptions:"propagate"};function xe(n,e){this.handle=n,this.vm=e,this.vtable=n.readPointer()}xe.prototype.deallocate=ot(47,"int32",["pointer","pointer"],function(n,e){return n(this.handle,e)});xe.prototype.getLoadedClasses=ot(78,"int32",["pointer","pointer","pointer"],function(n,e,t){let r=n(this.handle,e,t);de("EnvJvmti::getLoadedClasses",r)});xe.prototype.iterateOverInstancesOfClass=ot(112,"int32",["pointer","pointer","int","pointer","pointer"],function(n,e,t,r,o){let s=n(this.handle,e,t,r,o);de("EnvJvmti::iterateOverInstancesOfClass",s)});xe.prototype.getObjectsWithTags=ot(114,"int32",["pointer","int","pointer","pointer","pointer","pointer"],function(n,e,t,r,o,s){let i=n(this.handle,e,t,r,o,s);de("EnvJvmti::getObjectsWithTags",i)});xe.prototype.addCapabilities=ot(142,"int32",["pointer","pointer"],function(n,e){return n(this.handle,e)});function ot(n,e,t,r){let o=null;return function(){o===null&&(o=new NativeFunction(this.vtable.add((n-1)*Zs).readPointer(),e,t,qs));let s=[o];return s=s.concat.apply(s,arguments),r.apply(this,s)}}function Me(n,e,{limit:t}){let r=n,o=null;for(let s=0;s!==t;s++){let i=Instruction.parse(r),l=e(i,o);if(l!==null)return l;r=i.next,o=i}return null}function ce(n){let e=null,t=!1;return function(...r){return t||(e=n(...r),t=!0),e}}function y(n,e){this.handle=n,this.vm=e}var St=Process.pointerSize,Re=2,Ws=28,Ks=34,Qs=37,Ys=40,Xs=43,ei=46,ti=49,ni=52,ri=55,oi=58,si=61,ii=64,ai=67,li=70,ci=73,di=76,ui=79,pi=82,fi=85,hi=88,_i=91,mi=114,gi=117,bi=120,yi=123,Ei=126,vi=129,Si=132,wi=135,Ii=138,Ti=141,Ci=95,Ai=96,Li=97,xi=98,Ni=99,ki=100,Mi=101,Ri=102,Oi=103,Pi=104,ji=105,Fi=106,Di=107,Ui=108,Bi=109,zi=110,Vi=111,Ji=112,Gi=145,$i=146,Hi=147,Zi=148,qi=149,Wi=150,Ki=151,Qi=152,Yi=153,Xi=154,ea=155,ta=156,na=157,ra=158,oa=159,sa=160,ia=161,aa=162,la={pointer:Ks,uint8:Qs,int8:Ys,uint16:Xs,int16:ei,int32:ti,int64:ni,float:ri,double:oi,void:si},ca={pointer:ii,uint8:ai,int8:li,uint16:ci,int16:di,int32:ui,int64:pi,float:fi,double:hi,void:_i},da={pointer:mi,uint8:gi,int8:bi,uint16:yi,int16:Ei,int32:vi,int64:Si,float:wi,double:Ii,void:Ti},ua={pointer:Ci,uint8:Ai,int8:Li,uint16:xi,int16:Ni,int32:ki,int64:Mi,float:Ri,double:Oi},pa={pointer:Pi,uint8:ji,int8:Fi,uint16:Di,int16:Ui,int32:Bi,int64:zi,float:Vi,double:Ji},fa={pointer:Gi,uint8:$i,int8:Hi,uint16:Zi,int16:qi,int32:Wi,int64:Ki,float:Qi,double:Yi},ha={pointer:Xi,uint8:ea,int8:ta,uint16:na,int16:ra,int32:oa,int64:sa,float:ia,double:aa},Jr={exceptions:"propagate"},rn=null,_n=[];y.dispose=function(n){_n.forEach(n.deleteGlobalRef,n),_n=[]};function Fe(n){return _n.push(n),n}function wt(n){return rn===null&&(rn=n.handle.readPointer()),rn}function A(n,e,t,r){let o=null;return function(){o===null&&(o=new NativeFunction(wt(this).add(n*St).readPointer(),e,t,Jr));let s=[o];return s=s.concat.apply(s,arguments),r.apply(this,s)}}y.prototype.getVersion=A(4,"int32",["pointer"],function(n){return n(this.handle)});y.prototype.findClass=A(6,"pointer",["pointer","pointer"],function(n,e){let t=n(this.handle,Memory.allocUtf8String(e));return this.throwIfExceptionPending(),t});y.prototype.throwIfExceptionPending=function(){let n=this.exceptionOccurred();if(n.isNull())return;this.exceptionClear();let e=this.newGlobalRef(n);this.deleteLocalRef(n);let t=this.vaMethod("pointer",[])(this.handle,e,this.javaLangObject().toString),r=this.stringFromJni(t);this.deleteLocalRef(t);let o=new Error(r);throw o.$h=e,Script.bindWeak(o,_a(this.vm,e)),o};function _a(n,e){return function(){n.perform(t=>{t.deleteGlobalRef(e)})}}y.prototype.fromReflectedMethod=A(7,"pointer",["pointer","pointer"],function(n,e){return n(this.handle,e)});y.prototype.fromReflectedField=A(8,"pointer",["pointer","pointer"],function(n,e){return n(this.handle,e)});y.prototype.toReflectedMethod=A(9,"pointer",["pointer","pointer","pointer","uint8"],function(n,e,t,r){return n(this.handle,e,t,r)});y.prototype.getSuperclass=A(10,"pointer",["pointer","pointer"],function(n,e){return n(this.handle,e)});y.prototype.isAssignableFrom=A(11,"uint8",["pointer","pointer","pointer"],function(n,e,t){return!!n(this.handle,e,t)});y.prototype.toReflectedField=A(12,"pointer",["pointer","pointer","pointer","uint8"],function(n,e,t,r){return n(this.handle,e,t,r)});y.prototype.throw=A(13,"int32",["pointer","pointer"],function(n,e){return n(this.handle,e)});y.prototype.exceptionOccurred=A(15,"pointer",["pointer"],function(n){return n(this.handle)});y.prototype.exceptionDescribe=A(16,"void",["pointer"],function(n){n(this.handle)});y.prototype.exceptionClear=A(17,"void",["pointer"],function(n){n(this.handle)});y.prototype.pushLocalFrame=A(19,"int32",["pointer","int32"],function(n,e){return n(this.handle,e)});y.prototype.popLocalFrame=A(20,"pointer",["pointer","pointer"],function(n,e){return n(this.handle,e)});y.prototype.newGlobalRef=A(21,"pointer",["pointer","pointer"],function(n,e){return n(this.handle,e)});y.prototype.deleteGlobalRef=A(22,"void",["pointer","pointer"],function(n,e){n(this.handle,e)});y.prototype.deleteLocalRef=A(23,"void",["pointer","pointer"],function(n,e){n(this.handle,e)});y.prototype.isSameObject=A(24,"uint8",["pointer","pointer","pointer"],function(n,e,t){return!!n(this.handle,e,t)});y.prototype.newLocalRef=A(25,"pointer",["pointer","pointer"],function(n,e){return n(this.handle,e)});y.prototype.allocObject=A(27,"pointer",["pointer","pointer"],function(n,e){return n(this.handle,e)});y.prototype.getObjectClass=A(31,"pointer",["pointer","pointer"],function(n,e){return n(this.handle,e)});y.prototype.isInstanceOf=A(32,"uint8",["pointer","pointer","pointer"],function(n,e,t){return!!n(this.handle,e,t)});y.prototype.getMethodId=A(33,"pointer",["pointer","pointer","pointer","pointer"],function(n,e,t,r){return n(this.handle,e,Memory.allocUtf8String(t),Memory.allocUtf8String(r))});y.prototype.getFieldId=A(94,"pointer",["pointer","pointer","pointer","pointer"],function(n,e,t,r){return n(this.handle,e,Memory.allocUtf8String(t),Memory.allocUtf8String(r))});y.prototype.getIntField=A(100,"int32",["pointer","pointer","pointer"],function(n,e,t){return n(this.handle,e,t)});y.prototype.getStaticMethodId=A(113,"pointer",["pointer","pointer","pointer","pointer"],function(n,e,t,r){return n(this.handle,e,Memory.allocUtf8String(t),Memory.allocUtf8String(r))});y.prototype.getStaticFieldId=A(144,"pointer",["pointer","pointer","pointer","pointer"],function(n,e,t,r){return n(this.handle,e,Memory.allocUtf8String(t),Memory.allocUtf8String(r))});y.prototype.getStaticIntField=A(150,"int32",["pointer","pointer","pointer"],function(n,e,t){return n(this.handle,e,t)});y.prototype.getStringLength=A(164,"int32",["pointer","pointer"],function(n,e){return n(this.handle,e)});y.prototype.getStringChars=A(165,"pointer",["pointer","pointer","pointer"],function(n,e){return n(this.handle,e,NULL)});y.prototype.releaseStringChars=A(166,"void",["pointer","pointer","pointer"],function(n,e,t){n(this.handle,e,t)});y.prototype.newStringUtf=A(167,"pointer",["pointer","pointer"],function(n,e){let t=Memory.allocUtf8String(e);return n(this.handle,t)});y.prototype.getStringUtfChars=A(169,"pointer",["pointer","pointer","pointer"],function(n,e){return n(this.handle,e,NULL)});y.prototype.releaseStringUtfChars=A(170,"void",["pointer","pointer","pointer"],function(n,e,t){n(this.handle,e,t)});y.prototype.getArrayLength=A(171,"int32",["pointer","pointer"],function(n,e){return n(this.handle,e)});y.prototype.newObjectArray=A(172,"pointer",["pointer","int32","pointer","pointer"],function(n,e,t,r){return n(this.handle,e,t,r)});y.prototype.getObjectArrayElement=A(173,"pointer",["pointer","pointer","int32"],function(n,e,t){return n(this.handle,e,t)});y.prototype.setObjectArrayElement=A(174,"void",["pointer","pointer","int32","pointer"],function(n,e,t,r){n(this.handle,e,t,r)});y.prototype.newBooleanArray=A(175,"pointer",["pointer","int32"],function(n,e){return n(this.handle,e)});y.prototype.newByteArray=A(176,"pointer",["pointer","int32"],function(n,e){return n(this.handle,e)});y.prototype.newCharArray=A(177,"pointer",["pointer","int32"],function(n,e){return n(this.handle,e)});y.prototype.newShortArray=A(178,"pointer",["pointer","int32"],function(n,e){return n(this.handle,e)});y.prototype.newIntArray=A(179,"pointer",["pointer","int32"],function(n,e){return n(this.handle,e)});y.prototype.newLongArray=A(180,"pointer",["pointer","int32"],function(n,e){return n(this.handle,e)});y.prototype.newFloatArray=A(181,"pointer",["pointer","int32"],function(n,e){return n(this.handle,e)});y.prototype.newDoubleArray=A(182,"pointer",["pointer","int32"],function(n,e){return n(this.handle,e)});y.prototype.getBooleanArrayElements=A(183,"pointer",["pointer","pointer","pointer"],function(n,e){return n(this.handle,e,NULL)});y.prototype.getByteArrayElements=A(184,"pointer",["pointer","pointer","pointer"],function(n,e){return n(this.handle,e,NULL)});y.prototype.getCharArrayElements=A(185,"pointer",["pointer","pointer","pointer"],function(n,e){return n(this.handle,e,NULL)});y.prototype.getShortArrayElements=A(186,"pointer",["pointer","pointer","pointer"],function(n,e){return n(this.handle,e,NULL)});y.prototype.getIntArrayElements=A(187,"pointer",["pointer","pointer","pointer"],function(n,e){return n(this.handle,e,NULL)});y.prototype.getLongArrayElements=A(188,"pointer",["pointer","pointer","pointer"],function(n,e){return n(this.handle,e,NULL)});y.prototype.getFloatArrayElements=A(189,"pointer",["pointer","pointer","pointer"],function(n,e){return n(this.handle,e,NULL)});y.prototype.getDoubleArrayElements=A(190,"pointer",["pointer","pointer","pointer"],function(n,e){return n(this.handle,e,NULL)});y.prototype.releaseBooleanArrayElements=A(191,"pointer",["pointer","pointer","pointer","int32"],function(n,e,t){n(this.handle,e,t,Re)});y.prototype.releaseByteArrayElements=A(192,"pointer",["pointer","pointer","pointer","int32"],function(n,e,t){n(this.handle,e,t,Re)});y.prototype.releaseCharArrayElements=A(193,"pointer",["pointer","pointer","pointer","int32"],function(n,e,t){n(this.handle,e,t,Re)});y.prototype.releaseShortArrayElements=A(194,"pointer",["pointer","pointer","pointer","int32"],function(n,e,t){n(this.handle,e,t,Re)});y.prototype.releaseIntArrayElements=A(195,"pointer",["pointer","pointer","pointer","int32"],function(n,e,t){n(this.handle,e,t,Re)});y.prototype.releaseLongArrayElements=A(196,"pointer",["pointer","pointer","pointer","int32"],function(n,e,t){n(this.handle,e,t,Re)});y.prototype.releaseFloatArrayElements=A(197,"pointer",["pointer","pointer","pointer","int32"],function(n,e,t){n(this.handle,e,t,Re)});y.prototype.releaseDoubleArrayElements=A(198,"pointer",["pointer","pointer","pointer","int32"],function(n,e,t){n(this.handle,e,t,Re)});y.prototype.getByteArrayRegion=A(200,"void",["pointer","pointer","int","int","pointer"],function(n,e,t,r,o){n(this.handle,e,t,r,o)});y.prototype.setBooleanArrayRegion=A(207,"void",["pointer","pointer","int32","int32","pointer"],function(n,e,t,r,o){n(this.handle,e,t,r,o)});y.prototype.setByteArrayRegion=A(208,"void",["pointer","pointer","int32","int32","pointer"],function(n,e,t,r,o){n(this.handle,e,t,r,o)});y.prototype.setCharArrayRegion=A(209,"void",["pointer","pointer","int32","int32","pointer"],function(n,e,t,r,o){n(this.handle,e,t,r,o)});y.prototype.setShortArrayRegion=A(210,"void",["pointer","pointer","int32","int32","pointer"],function(n,e,t,r,o){n(this.handle,e,t,r,o)});y.prototype.setIntArrayRegion=A(211,"void",["pointer","pointer","int32","int32","pointer"],function(n,e,t,r,o){n(this.handle,e,t,r,o)});y.prototype.setLongArrayRegion=A(212,"void",["pointer","pointer","int32","int32","pointer"],function(n,e,t,r,o){n(this.handle,e,t,r,o)});y.prototype.setFloatArrayRegion=A(213,"void",["pointer","pointer","int32","int32","pointer"],function(n,e,t,r,o){n(this.handle,e,t,r,o)});y.prototype.setDoubleArrayRegion=A(214,"void",["pointer","pointer","int32","int32","pointer"],function(n,e,t,r,o){n(this.handle,e,t,r,o)});y.prototype.registerNatives=A(215,"int32",["pointer","pointer","pointer","int32"],function(n,e,t,r){return n(this.handle,e,t,r)});y.prototype.monitorEnter=A(217,"int32",["pointer","pointer"],function(n,e){return n(this.handle,e)});y.prototype.monitorExit=A(218,"int32",["pointer","pointer"],function(n,e){return n(this.handle,e)});y.prototype.getDirectBufferAddress=A(230,"pointer",["pointer","pointer"],function(n,e){return n(this.handle,e)});y.prototype.getObjectRefType=A(232,"int32",["pointer","pointer"],function(n,e){return n(this.handle,e)});var Vr=new Map;function It(n,e,t,r){return gn(this,"p",ga,n,e,t,r)}function mn(n,e,t,r){return gn(this,"v",ba,n,e,t,r)}function ma(n,e,t,r){return gn(this,"n",ya,n,e,t,r)}function gn(n,e,t,r,o,s,i){if(i!==void 0)return t(n,r,o,s,i);let l=[r,e,o].concat(s).join("|"),a=Vr.get(l);return a===void 0&&(a=t(n,r,o,s,Jr),Vr.set(l,a)),a}function ga(n,e,t,r,o){return new NativeFunction(wt(n).add(e*St).readPointer(),t,["pointer","pointer","pointer"].concat(r),o)}function ba(n,e,t,r,o){return new NativeFunction(wt(n).add(e*St).readPointer(),t,["pointer","pointer","pointer","..."].concat(r),o)}function ya(n,e,t,r,o){return new NativeFunction(wt(n).add(e*St).readPointer(),t,["pointer","pointer","pointer","pointer","..."].concat(r),o)}y.prototype.constructor=function(n,e){return mn.call(this,Ws,"pointer",n,e)};y.prototype.vaMethod=function(n,e,t){let r=la[n];if(r===void 0)throw new Error("Unsupported type: "+n);return mn.call(this,r,n,e,t)};y.prototype.nonvirtualVaMethod=function(n,e,t){let r=ca[n];if(r===void 0)throw new Error("Unsupported type: "+n);return ma.call(this,r,n,e,t)};y.prototype.staticVaMethod=function(n,e,t){let r=da[n];if(r===void 0)throw new Error("Unsupported type: "+n);return mn.call(this,r,n,e,t)};y.prototype.getField=function(n){let e=ua[n];if(e===void 0)throw new Error("Unsupported type: "+n);return It.call(this,e,n,[])};y.prototype.getStaticField=function(n){let e=fa[n];if(e===void 0)throw new Error("Unsupported type: "+n);return It.call(this,e,n,[])};y.prototype.setField=function(n){let e=pa[n];if(e===void 0)throw new Error("Unsupported type: "+n);return It.call(this,e,"void",[n])};y.prototype.setStaticField=function(n){let e=ha[n];if(e===void 0)throw new Error("Unsupported type: "+n);return It.call(this,e,"void",[n])};var on=null;y.prototype.javaLangClass=function(){if(on===null){let n=this.findClass("java/lang/Class");try{let e=this.getMethodId.bind(this,n);on={handle:Fe(this.newGlobalRef(n)),getName:e("getName","()Ljava/lang/String;"),getSimpleName:e("getSimpleName","()Ljava/lang/String;"),getGenericSuperclass:e("getGenericSuperclass","()Ljava/lang/reflect/Type;"),getDeclaredConstructors:e("getDeclaredConstructors","()[Ljava/lang/reflect/Constructor;"),getDeclaredMethods:e("getDeclaredMethods","()[Ljava/lang/reflect/Method;"),getDeclaredFields:e("getDeclaredFields","()[Ljava/lang/reflect/Field;"),isArray:e("isArray","()Z"),isPrimitive:e("isPrimitive","()Z"),isInterface:e("isInterface","()Z"),getComponentType:e("getComponentType","()Ljava/lang/Class;")}}finally{this.deleteLocalRef(n)}}return on};var sn=null;y.prototype.javaLangObject=function(){if(sn===null){let n=this.findClass("java/lang/Object");try{let e=this.getMethodId.bind(this,n);sn={handle:Fe(this.newGlobalRef(n)),toString:e("toString","()Ljava/lang/String;"),getClass:e("getClass","()Ljava/lang/Class;")}}finally{this.deleteLocalRef(n)}}return sn};var an=null;y.prototype.javaLangReflectConstructor=function(){if(an===null){let n=this.findClass("java/lang/reflect/Constructor");try{an={getGenericParameterTypes:this.getMethodId(n,"getGenericParameterTypes","()[Ljava/lang/reflect/Type;")}}finally{this.deleteLocalRef(n)}}return an};var ln=null;y.prototype.javaLangReflectMethod=function(){if(ln===null){let n=this.findClass("java/lang/reflect/Method");try{let e=this.getMethodId.bind(this,n);ln={getName:e("getName","()Ljava/lang/String;"),getGenericParameterTypes:e("getGenericParameterTypes","()[Ljava/lang/reflect/Type;"),getParameterTypes:e("getParameterTypes","()[Ljava/lang/Class;"),getGenericReturnType:e("getGenericReturnType","()Ljava/lang/reflect/Type;"),getGenericExceptionTypes:e("getGenericExceptionTypes","()[Ljava/lang/reflect/Type;"),getModifiers:e("getModifiers","()I"),isVarArgs:e("isVarArgs","()Z")}}finally{this.deleteLocalRef(n)}}return ln};var cn=null;y.prototype.javaLangReflectField=function(){if(cn===null){let n=this.findClass("java/lang/reflect/Field");try{let e=this.getMethodId.bind(this,n);cn={getName:e("getName","()Ljava/lang/String;"),getType:e("getType","()Ljava/lang/Class;"),getGenericType:e("getGenericType","()Ljava/lang/reflect/Type;"),getModifiers:e("getModifiers","()I"),toString:e("toString","()Ljava/lang/String;")}}finally{this.deleteLocalRef(n)}}return cn};var dn=null;y.prototype.javaLangReflectTypeVariable=function(){if(dn===null){let n=this.findClass("java/lang/reflect/TypeVariable");try{let e=this.getMethodId.bind(this,n);dn={handle:Fe(this.newGlobalRef(n)),getName:e("getName","()Ljava/lang/String;"),getBounds:e("getBounds","()[Ljava/lang/reflect/Type;"),getGenericDeclaration:e("getGenericDeclaration","()Ljava/lang/reflect/GenericDeclaration;")}}finally{this.deleteLocalRef(n)}}return dn};var un=null;y.prototype.javaLangReflectWildcardType=function(){if(un===null){let n=this.findClass("java/lang/reflect/WildcardType");try{let e=this.getMethodId.bind(this,n);un={handle:Fe(this.newGlobalRef(n)),getLowerBounds:e("getLowerBounds","()[Ljava/lang/reflect/Type;"),getUpperBounds:e("getUpperBounds","()[Ljava/lang/reflect/Type;")}}finally{this.deleteLocalRef(n)}}return un};var pn=null;y.prototype.javaLangReflectGenericArrayType=function(){if(pn===null){let n=this.findClass("java/lang/reflect/GenericArrayType");try{pn={handle:Fe(this.newGlobalRef(n)),getGenericComponentType:this.getMethodId(n,"getGenericComponentType","()Ljava/lang/reflect/Type;")}}finally{this.deleteLocalRef(n)}}return pn};var fn=null;y.prototype.javaLangReflectParameterizedType=function(){if(fn===null){let n=this.findClass("java/lang/reflect/ParameterizedType");try{let e=this.getMethodId.bind(this,n);fn={handle:Fe(this.newGlobalRef(n)),getActualTypeArguments:e("getActualTypeArguments","()[Ljava/lang/reflect/Type;"),getRawType:e("getRawType","()Ljava/lang/reflect/Type;"),getOwnerType:e("getOwnerType","()Ljava/lang/reflect/Type;")}}finally{this.deleteLocalRef(n)}}return fn};var hn=null;y.prototype.javaLangString=function(){if(hn===null){let n=this.findClass("java/lang/String");try{hn={handle:Fe(this.newGlobalRef(n))}}finally{this.deleteLocalRef(n)}}return hn};y.prototype.getClassName=function(n){let e=this.vaMethod("pointer",[])(this.handle,n,this.javaLangClass().getName);try{return this.stringFromJni(e)}finally{this.deleteLocalRef(e)}};y.prototype.getObjectClassName=function(n){let e=this.getObjectClass(n);try{return this.getClassName(e)}finally{this.deleteLocalRef(e)}};y.prototype.getActualTypeArgument=function(n){let e=this.vaMethod("pointer",[])(this.handle,n,this.javaLangReflectParameterizedType().getActualTypeArguments);if(this.throwIfExceptionPending(),!e.isNull())try{return this.getTypeNameFromFirstTypeElement(e)}finally{this.deleteLocalRef(e)}};y.prototype.getTypeNameFromFirstTypeElement=function(n){if(this.getArrayLength(n)>0){let t=this.getObjectArrayElement(n,0);try{return this.getTypeName(t)}finally{this.deleteLocalRef(t)}}else return"java.lang.Object"};y.prototype.getTypeName=function(n,e){let t=this.vaMethod("pointer",[]);if(this.isInstanceOf(n,this.javaLangClass().handle))return this.getClassName(n);if(this.isInstanceOf(n,this.javaLangReflectGenericArrayType().handle))return this.getArrayTypeName(n);if(this.isInstanceOf(n,this.javaLangReflectParameterizedType().handle)){let r=t(this.handle,n,this.javaLangReflectParameterizedType().getRawType);this.throwIfExceptionPending();let o;try{o=this.getTypeName(r)}finally{this.deleteLocalRef(r)}return e&&(o+="<"+this.getActualTypeArgument(n)+">"),o}else return this.isInstanceOf(n,this.javaLangReflectTypeVariable().handle)||this.isInstanceOf(n,this.javaLangReflectWildcardType().handle),"java.lang.Object"};y.prototype.getArrayTypeName=function(n){let e=this.vaMethod("pointer",[]);if(this.isInstanceOf(n,this.javaLangClass().handle))return this.getClassName(n);if(this.isInstanceOf(n,this.javaLangReflectGenericArrayType().handle)){let t=e(this.handle,n,this.javaLangReflectGenericArrayType().getGenericComponentType);this.throwIfExceptionPending();try{return"[L"+this.getTypeName(t)+";"}finally{this.deleteLocalRef(t)}}else return"[Ljava.lang.Object;"};y.prototype.stringFromJni=function(n){let e=this.getStringChars(n);if(e.isNull())throw new Error("Unable to access string");try{let t=this.getStringLength(n);return e.readUtf16String(t)}finally{this.releaseStringChars(n,e)}};var Gr=65542,Ze=Process.pointerSize,bn=Process.getCurrentThreadId(),De=new Map,st=new Map;function Ie(n){let e=n.vm,t=null,r=null,o=null;function s(){let l=e.readPointer(),a={exceptions:"propagate"};t=new NativeFunction(l.add(4*Ze).readPointer(),"int32",["pointer","pointer","pointer"],a),r=new NativeFunction(l.add(5*Ze).readPointer(),"int32",["pointer"],a),o=new NativeFunction(l.add(6*Ze).readPointer(),"int32",["pointer","pointer","int32"],a)}this.handle=e,this.perform=function(l){let a=Process.getCurrentThreadId(),c=i(a);if(c!==null)return l(c);let d=this._tryGetEnv(),p=d!==null;p||(d=this.attachCurrentThread(),De.set(a,!0)),this.link(a,d);try{return l(d)}finally{let f=a===bn;if(f||this.unlink(a),!p&&!f){let u=De.get(a);De.delete(a),u&&this.detachCurrentThread()}}},this.attachCurrentThread=function(){let l=Memory.alloc(Ze);return de("VM::AttachCurrentThread",t(e,l,NULL)),new y(l.readPointer(),this)},this.detachCurrentThread=function(){de("VM::DetachCurrentThread",r(e))},this.preventDetachDueToClassLoader=function(){let l=Process.getCurrentThreadId();De.has(l)&&De.set(l,!1)},this.getEnv=function(){let l=i(Process.getCurrentThreadId());if(l!==null)return l;let a=Memory.alloc(Ze),c=o(e,a,Gr);if(c===-2)throw new Error("Current thread is not attached to the Java VM; please move this code inside a Java.perform() callback");return de("VM::GetEnv",c),new y(a.readPointer(),this)},this.tryGetEnv=function(){let l=i(Process.getCurrentThreadId());return l!==null?l:this._tryGetEnv()},this._tryGetEnv=function(){let l=this.tryGetEnvHandle(Gr);return l===null?null:new y(l,this)},this.tryGetEnvHandle=function(l){let a=Memory.alloc(Ze);return o(e,a,l)!==0?null:a.readPointer()},this.makeHandleDestructor=function(l){return()=>{this.perform(a=>{a.deleteGlobalRef(l)})}},this.link=function(l,a){let c=st.get(l);c===void 0?st.set(l,[a,1]):c[1]++},this.unlink=function(l){let a=st.get(l);a[1]===1?st.delete(l):a[1]--};function i(l){let a=st.get(l);return a===void 0?null:a[0]}s.call(this)}Ie.dispose=function(n){De.get(bn)===!0&&(De.delete(bn),n.detachCurrentThread())};var Ea=4,S=Process.pointerSize,{readU32:va,readPointer:Sa,writeU32:wa,writePointer:Ia}=NativePointer.prototype,Ta=1,Ca=8,Aa=16,Lt=256,La=524288,xa=2097152,io=1073741824,Na=524288,ka=134217728,$r=1048576,Ma=2097152,Ra=268435456,Oa=268435456,Pa=0,Ln=3,xn=5,Un=ptr(1).not(),ja=2147467263,Fa=4294963200,Pt=17*S,Da=18*S,ao=12,Ua=112,Ba=116,za=0,En=56,Hr=4,Va=8,Ja=10,Ga=12,$a=14,Ha=28,Za=36,qa=0,Wa=1,Ka=2,Qa=3,Ya=4,Xa=5,el=6,tl=7,Zr=2147483648,nl=28,ct=3*S,rl=3*S,ol=1,sl=1,lo=ce(ml),il=ce(Tl),ve=ce(Al),We=ce(Ll),al=ce(xl),ll=ce(Fl),pt=ce(Rl),co=ce(Ol),re=ce(Pl),cl=ce(zl),dl=Process.arch==="ia32"?Tc:Ic,W={exceptions:"propagate"},it={},vn=null,Sn=null,uo=null,le=null,Bn=[],xt=new Map,po=[],wn=null,qr=0,Wr=!1,Kr=!1,at=null,ul=[],In=null,Tt=null;function J(){return vn===null&&(vn=pl()),vn}function pl(){let n=Process.enumerateModules().filter(u=>/^lib(art|dvm).so$/.test(u.name)).filter(u=>!/\/system\/fake-libs/.test(u.path));if(n.length===0)return null;let e=n[0],t=e.name.indexOf("art")!==-1?"art":"dalvik",r=t==="art",o={module:e,find(u){let{module:_}=this,h=_.findExportByName(u);return h===null&&(h=_.findSymbolByName(u)),h},flavor:t,addLocalReference:null};o.isApiLevel34OrApexEquivalent=r&&(o.find("_ZN3art7AppInfo29GetPrimaryApkReferenceProfileEv")!==null||o.find("_ZN3art6Thread15RunFlipFunctionEPS0_")!==null);let s=r?{functions:{JNI_GetCreatedJavaVMs:["JNI_GetCreatedJavaVMs","int",["pointer","int","pointer"]],artInterpreterToCompiledCodeBridge:function(u){this.artInterpreterToCompiledCodeBridge=u},_ZN3art9JavaVMExt12AddGlobalRefEPNS_6ThreadENS_6ObjPtrINS_6mirror6ObjectEEE:["art::JavaVMExt::AddGlobalRef","pointer",["pointer","pointer","pointer"]],_ZN3art9JavaVMExt12AddGlobalRefEPNS_6ThreadEPNS_6mirror6ObjectE:["art::JavaVMExt::AddGlobalRef","pointer",["pointer","pointer","pointer"]],_ZN3art17ReaderWriterMutex13ExclusiveLockEPNS_6ThreadE:["art::ReaderWriterMutex::ExclusiveLock","void",["pointer","pointer"]],_ZN3art17ReaderWriterMutex15ExclusiveUnlockEPNS_6ThreadE:["art::ReaderWriterMutex::ExclusiveUnlock","void",["pointer","pointer"]],_ZN3art22IndirectReferenceTable3AddEjPNS_6mirror6ObjectE:function(u){this["art::IndirectReferenceTable::Add"]=new NativeFunction(u,"pointer",["pointer","uint","pointer"],W)},_ZN3art22IndirectReferenceTable3AddENS_15IRTSegmentStateENS_6ObjPtrINS_6mirror6ObjectEEE:function(u){this["art::IndirectReferenceTable::Add"]=new NativeFunction(u,"pointer",["pointer","uint","pointer"],W)},_ZN3art9JavaVMExt12DecodeGlobalEPv:function(u){let _;re()>=26?_=dl(u,["pointer","pointer"]):_=new NativeFunction(u,"pointer",["pointer","pointer"],W),this["art::JavaVMExt::DecodeGlobal"]=function(h,g,b){return _(h,b)}},_ZN3art9JavaVMExt12DecodeGlobalEPNS_6ThreadEPv:["art::JavaVMExt::DecodeGlobal","pointer",["pointer","pointer","pointer"]],_ZNK3art6Thread19DecodeGlobalJObjectEP8_jobject:["art::Thread::DecodeJObject","pointer",["pointer","pointer"]],_ZNK3art6Thread13DecodeJObjectEP8_jobject:["art::Thread::DecodeJObject","pointer",["pointer","pointer"]],_ZN3art10ThreadList10SuspendAllEPKcb:["art::ThreadList::SuspendAll","void",["pointer","pointer","bool"]],_ZN3art10ThreadList10SuspendAllEv:function(u){let _=new NativeFunction(u,"void",["pointer"],W);this["art::ThreadList::SuspendAll"]=function(h,g,b){return _(h)}},_ZN3art10ThreadList9ResumeAllEv:["art::ThreadList::ResumeAll","void",["pointer"]],_ZN3art11ClassLinker12VisitClassesEPNS_12ClassVisitorE:["art::ClassLinker::VisitClasses","void",["pointer","pointer"]],_ZN3art11ClassLinker12VisitClassesEPFbPNS_6mirror5ClassEPvES4_:function(u){let _=new NativeFunction(u,"void",["pointer","pointer","pointer"],W);this["art::ClassLinker::VisitClasses"]=function(h,g){_(h,g,NULL)}},_ZNK3art11ClassLinker17VisitClassLoadersEPNS_18ClassLoaderVisitorE:["art::ClassLinker::VisitClassLoaders","void",["pointer","pointer"]],_ZN3art2gc4Heap12VisitObjectsEPFvPNS_6mirror6ObjectEPvES5_:["art::gc::Heap::VisitObjects","void",["pointer","pointer","pointer"]],_ZN3art2gc4Heap12GetInstancesERNS_24VariableSizedHandleScopeENS_6HandleINS_6mirror5ClassEEEiRNSt3__16vectorINS4_INS5_6ObjectEEENS8_9allocatorISB_EEEE:["art::gc::Heap::GetInstances","void",["pointer","pointer","pointer","int","pointer"]],_ZN3art2gc4Heap12GetInstancesERNS_24VariableSizedHandleScopeENS_6HandleINS_6mirror5ClassEEEbiRNSt3__16vectorINS4_INS5_6ObjectEEENS8_9allocatorISB_EEEE:function(u){let _=new NativeFunction(u,"void",["pointer","pointer","pointer","bool","int","pointer"],W);this["art::gc::Heap::GetInstances"]=function(h,g,b,v,w){_(h,g,b,0,v,w)}},_ZN3art12StackVisitorC2EPNS_6ThreadEPNS_7ContextENS0_13StackWalkKindEjb:["art::StackVisitor::StackVisitor","void",["pointer","pointer","pointer","uint","uint","bool"]],_ZN3art12StackVisitorC2EPNS_6ThreadEPNS_7ContextENS0_13StackWalkKindEmb:["art::StackVisitor::StackVisitor","void",["pointer","pointer","pointer","uint","size_t","bool"]],_ZN3art12StackVisitor9WalkStackILNS0_16CountTransitionsE0EEEvb:["art::StackVisitor::WalkStack","void",["pointer","bool"]],_ZNK3art12StackVisitor9GetMethodEv:["art::StackVisitor::GetMethod","pointer",["pointer"]],_ZNK3art12StackVisitor16DescribeLocationEv:function(u){this["art::StackVisitor::DescribeLocation"]=At(u,["pointer"])},_ZNK3art12StackVisitor24GetCurrentQuickFrameInfoEv:function(u){this["art::StackVisitor::GetCurrentQuickFrameInfo"]=Bl(u)},_ZN3art6Thread18GetLongJumpContextEv:["art::Thread::GetLongJumpContext","pointer",["pointer"]],_ZN3art6mirror5Class13GetDescriptorEPNSt3__112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE:function(u){this["art::mirror::Class::GetDescriptor"]=u},_ZN3art6mirror5Class11GetLocationEv:function(u){this["art::mirror::Class::GetLocation"]=At(u,["pointer"])},_ZN3art9ArtMethod12PrettyMethodEb:function(u){this["art::ArtMethod::PrettyMethod"]=At(u,["pointer","bool"])},_ZN3art12PrettyMethodEPNS_9ArtMethodEb:function(u){this["art::ArtMethod::PrettyMethodNullSafe"]=At(u,["pointer","bool"])},_ZN3art6Thread14CurrentFromGdbEv:["art::Thread::CurrentFromGdb","pointer",[]],_ZN3art6mirror6Object5CloneEPNS_6ThreadE:function(u){this["art::mirror::Object::Clone"]=new NativeFunction(u,"pointer",["pointer","pointer"],W)},_ZN3art6mirror6Object5CloneEPNS_6ThreadEm:function(u){let _=new NativeFunction(u,"pointer",["pointer","pointer","pointer"],W);this["art::mirror::Object::Clone"]=function(h,g){let b=NULL;return _(h,g,b)}},_ZN3art6mirror6Object5CloneEPNS_6ThreadEj:function(u){let _=new NativeFunction(u,"pointer",["pointer","pointer","uint"],W);this["art::mirror::Object::Clone"]=function(h,g){return _(h,g,0)}},_ZN3art3Dbg14SetJdwpAllowedEb:["art::Dbg::SetJdwpAllowed","void",["bool"]],_ZN3art3Dbg13ConfigureJdwpERKNS_4JDWP11JdwpOptionsE:["art::Dbg::ConfigureJdwp","void",["pointer"]],_ZN3art31InternalDebuggerControlCallback13StartDebuggerEv:["art::InternalDebuggerControlCallback::StartDebugger","void",["pointer"]],_ZN3art3Dbg9StartJdwpEv:["art::Dbg::StartJdwp","void",[]],_ZN3art3Dbg8GoActiveEv:["art::Dbg::GoActive","void",[]],_ZN3art3Dbg21RequestDeoptimizationERKNS_21DeoptimizationRequestE:["art::Dbg::RequestDeoptimization","void",["pointer"]],_ZN3art3Dbg20ManageDeoptimizationEv:["art::Dbg::ManageDeoptimization","void",[]],_ZN3art15instrumentation15Instrumentation20EnableDeoptimizationEv:["art::Instrumentation::EnableDeoptimization","void",["pointer"]],_ZN3art15instrumentation15Instrumentation20DeoptimizeEverythingEPKc:["art::Instrumentation::DeoptimizeEverything","void",["pointer","pointer"]],_ZN3art15instrumentation15Instrumentation20DeoptimizeEverythingEv:function(u){let _=new NativeFunction(u,"void",["pointer"],W);this["art::Instrumentation::DeoptimizeEverything"]=function(h,g){_(h)}},_ZN3art7Runtime19DeoptimizeBootImageEv:["art::Runtime::DeoptimizeBootImage","void",["pointer"]],_ZN3art15instrumentation15Instrumentation10DeoptimizeEPNS_9ArtMethodE:["art::Instrumentation::Deoptimize","void",["pointer","pointer"]],_ZN3art3jni12JniIdManager14DecodeMethodIdEP10_jmethodID:["art::jni::JniIdManager::DecodeMethodId","pointer",["pointer","pointer"]],_ZN3art3jni12JniIdManager13DecodeFieldIdEP9_jfieldID:["art::jni::JniIdManager::DecodeFieldId","pointer",["pointer","pointer"]],_ZN3art11interpreter18GetNterpEntryPointEv:["art::interpreter::GetNterpEntryPoint","pointer",[]],_ZN3art7Monitor17TranslateLocationEPNS_9ArtMethodEjPPKcPi:["art::Monitor::TranslateLocation","void",["pointer","uint32","pointer","pointer"]]},variables:{_ZN3art3Dbg9gRegistryE:function(u){this.isJdwpStarted=()=>!u.readPointer().isNull()},_ZN3art3Dbg15gDebuggerActiveE:function(u){this.isDebuggerActive=()=>!!u.readU8()}},optionals:new Set(["artInterpreterToCompiledCodeBridge","_ZN3art9JavaVMExt12AddGlobalRefEPNS_6ThreadENS_6ObjPtrINS_6mirror6ObjectEEE","_ZN3art9JavaVMExt12AddGlobalRefEPNS_6ThreadEPNS_6mirror6ObjectE","_ZN3art9JavaVMExt12DecodeGlobalEPv","_ZN3art9JavaVMExt12DecodeGlobalEPNS_6ThreadEPv","_ZNK3art6Thread19DecodeGlobalJObjectEP8_jobject","_ZNK3art6Thread13DecodeJObjectEP8_jobject","_ZN3art10ThreadList10SuspendAllEPKcb","_ZN3art10ThreadList10SuspendAllEv","_ZN3art11ClassLinker12VisitClassesEPNS_12ClassVisitorE","_ZN3art11ClassLinker12VisitClassesEPFbPNS_6mirror5ClassEPvES4_","_ZNK3art11ClassLinker17VisitClassLoadersEPNS_18ClassLoaderVisitorE","_ZN3art6mirror6Object5CloneEPNS_6ThreadE","_ZN3art6mirror6Object5CloneEPNS_6ThreadEm","_ZN3art6mirror6Object5CloneEPNS_6ThreadEj","_ZN3art22IndirectReferenceTable3AddEjPNS_6mirror6ObjectE","_ZN3art22IndirectReferenceTable3AddENS_15IRTSegmentStateENS_6ObjPtrINS_6mirror6ObjectEEE","_ZN3art2gc4Heap12VisitObjectsEPFvPNS_6mirror6ObjectEPvES5_","_ZN3art2gc4Heap12GetInstancesERNS_24VariableSizedHandleScopeENS_6HandleINS_6mirror5ClassEEEiRNSt3__16vectorINS4_INS5_6ObjectEEENS8_9allocatorISB_EEEE","_ZN3art2gc4Heap12GetInstancesERNS_24VariableSizedHandleScopeENS_6HandleINS_6mirror5ClassEEEbiRNSt3__16vectorINS4_INS5_6ObjectEEENS8_9allocatorISB_EEEE","_ZN3art12StackVisitorC2EPNS_6ThreadEPNS_7ContextENS0_13StackWalkKindEjb","_ZN3art12StackVisitorC2EPNS_6ThreadEPNS_7ContextENS0_13StackWalkKindEmb","_ZN3art12StackVisitor9WalkStackILNS0_16CountTransitionsE0EEEvb","_ZNK3art12StackVisitor9GetMethodEv","_ZNK3art12StackVisitor16DescribeLocationEv","_ZNK3art12StackVisitor24GetCurrentQuickFrameInfoEv","_ZN3art6Thread18GetLongJumpContextEv","_ZN3art6mirror5Class13GetDescriptorEPNSt3__112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE","_ZN3art6mirror5Class11GetLocationEv","_ZN3art9ArtMethod12PrettyMethodEb","_ZN3art12PrettyMethodEPNS_9ArtMethodEb","_ZN3art3Dbg13ConfigureJdwpERKNS_4JDWP11JdwpOptionsE","_ZN3art31InternalDebuggerControlCallback13StartDebuggerEv","_ZN3art3Dbg15gDebuggerActiveE","_ZN3art15instrumentation15Instrumentation20EnableDeoptimizationEv","_ZN3art15instrumentation15Instrumentation20DeoptimizeEverythingEPKc","_ZN3art15instrumentation15Instrumentation20DeoptimizeEverythingEv","_ZN3art7Runtime19DeoptimizeBootImageEv","_ZN3art15instrumentation15Instrumentation10DeoptimizeEPNS_9ArtMethodE","_ZN3art3Dbg9StartJdwpEv","_ZN3art3Dbg8GoActiveEv","_ZN3art3Dbg21RequestDeoptimizationERKNS_21DeoptimizationRequestE","_ZN3art3Dbg20ManageDeoptimizationEv","_ZN3art3Dbg9gRegistryE","_ZN3art3jni12JniIdManager14DecodeMethodIdEP10_jmethodID","_ZN3art3jni12JniIdManager13DecodeFieldIdEP9_jfieldID","_ZN3art11interpreter18GetNterpEntryPointEv","_ZN3art7Monitor17TranslateLocationEPNS_9ArtMethodEjPPKcPi"])}:{functions:{_Z20dvmDecodeIndirectRefP6ThreadP8_jobject:["dvmDecodeIndirectRef","pointer",["pointer","pointer"]],_Z15dvmUseJNIBridgeP6MethodPv:["dvmUseJNIBridge","void",["pointer","pointer"]],_Z20dvmHeapSourceGetBasev:["dvmHeapSourceGetBase","pointer",[]],_Z21dvmHeapSourceGetLimitv:["dvmHeapSourceGetLimit","pointer",[]],_Z16dvmIsValidObjectPK6Object:["dvmIsValidObject","uint8",["pointer"]],JNI_GetCreatedJavaVMs:["JNI_GetCreatedJavaVMs","int",["pointer","int","pointer"]]},variables:{gDvmJni:function(u){this.gDvmJni=u},gDvm:function(u){this.gDvm=u}}},{functions:i={},variables:l={},optionals:a=new Set}=s,c=[];for(let[u,_]of Object.entries(i)){let h=o.find(u);h!==null?typeof _=="function"?_.call(o,h):o[_[0]]=new NativeFunction(h,_[1],_[2],W):a.has(u)||c.push(u)}for(let[u,_]of Object.entries(l)){let h=o.find(u);h!==null?_.call(o,h):a.has(u)||c.push(u)}if(c.length>0)throw new Error("Java API only partially available; please file a bug. Missing: "+c.join(", "));let d=Memory.alloc(S),p=Memory.alloc(Ea);if(de("JNI_GetCreatedJavaVMs",o.JNI_GetCreatedJavaVMs(d,1,p)),p.readInt()===0)return null;if(o.vm=d.readPointer(),r){let u=re(),_;u>=27?_=33554432:u>=24?_=16777216:_=0,o.kAccCompileDontBother=_;let h=o.vm.add(S).readPointer();o.artRuntime=h;let g=lo(o),b=g.offset,v=b.instrumentation;o.artInstrumentation=v!==null?h.add(v):null,o.artHeap=h.add(b.heap).readPointer(),o.artThreadList=h.add(b.threadList).readPointer();let w=h.add(b.classLinker).readPointer(),N=Cl(h,g).offset,M=w.add(N.quickResolutionTrampoline).readPointer(),R=w.add(N.quickImtConflictTrampoline).readPointer(),k=w.add(N.quickGenericJniTrampoline).readPointer(),x=w.add(N.quickToInterpreterBridgeTrampoline).readPointer();o.artClassLinker={address:w,quickResolutionTrampoline:M,quickImtConflictTrampoline:R,quickGenericJniTrampoline:k,quickToInterpreterBridgeTrampoline:x};let E=new Ie(o);o.artQuickGenericJniTrampoline=Tn(k,E),o.artQuickToInterpreterBridge=Tn(x,E),o.artQuickResolutionTrampoline=Tn(M,E),o["art::JavaVMExt::AddGlobalRef"]===void 0&&(o["art::JavaVMExt::AddGlobalRef"]=bc(o)),o["art::JavaVMExt::DecodeGlobal"]===void 0&&(o["art::JavaVMExt::DecodeGlobal"]=yc(o)),o["art::ArtMethod::PrettyMethod"]===void 0&&(o["art::ArtMethod::PrettyMethod"]=o["art::ArtMethod::PrettyMethodNullSafe"]),o["art::interpreter::GetNterpEntryPoint"]!==void 0?o.artNterpEntryPoint=o["art::interpreter::GetNterpEntryPoint"]():o.artNterpEntryPoint=o.find("ExecuteNterpImpl"),le=Gl(o,E),wc(o);let L=null;Object.defineProperty(o,"jvmti",{get(){return L===null&&(L=[fl(E,this.artRuntime)]),L[0]}})}let f=e.enumerateImports().filter(u=>u.name.indexOf("_Z")===0).reduce((u,_)=>(u[_.name]=_.address,u),{});return o.$new=new NativeFunction(f._Znwm||f._Znwj,"pointer",["ulong"],W),o.$delete=new NativeFunction(f._ZdlPv,"void",["pointer"],W),uo=r?Pn:jn,o}function fl(n,e){let t=null;return n.perform(()=>{let r=J().find("_ZN3art7Runtime18EnsurePluginLoadedEPKcPNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE");if(r===null)return;let o=new NativeFunction(r,"bool",["pointer","pointer","pointer"]),s=Memory.alloc(S);if(!o(e,Memory.allocUtf8String("libopenjdkjvmti.so"),s))return;let l=Et.v1_2|1073741824,a=n.tryGetEnvHandle(l);if(a===null)return;t=new xe(a,n);let c=Memory.alloc(8);c.writeU64(vt.canTagObjects),t.addCapabilities(c)!==0&&(t=null)}),t}function hl(n,e){J().flavor==="art"&&(n.getFieldId(e,"x","Z"),n.exceptionClear())}function _l(n){return{offset:S===4?{globalsLock:32,globals:72}:{globalsLock:64,globals:112}}}function ml(n){let e=n.vm,t=n.artRuntime,r=S===4?200:384,o=r+100*S,s=re(),i=co(),{isApiLevel34OrApexEquivalent:l}=n,a=null;for(let c=r;c!==o;c+=S)if(t.add(c).readPointer().equals(e)){let p,f=null;s>=33||i==="Tiramisu"||l?(p=[c-4*S],f=c-S):s>=30||i==="R"?(p=[c-3*S,c-4*S],f=c-S):s>=29?p=[c-2*S]:s>=27?p=[c-ct-3*S]:p=[c-ct-2*S];for(let u of p){let _=u-S,h=_-S,g;l?g=h-9*S:s>=24?g=h-8*S:s>=23?g=h-7*S:g=h-4*S;let b={offset:{heap:g,threadList:h,internTable:_,classLinker:u,jniIdManager:f}};if(fo(t,b)!==null){a=b;break}}break}if(a===null)throw new Error("Unable to determine Runtime field offsets");return a.offset.instrumentation=bl(n),a.offset.jniIdsIndirection=Sl(n),a}var gl={ia32:Qr,x64:Qr,arm:yl,arm64:El};function bl(n){let e=n["art::Runtime::DeoptimizeBootImage"];return e===void 0?null:Me(e,gl[Process.arch],{limit:30})}function Qr(n){if(n.mnemonic!=="lea")return null;let e=n.operands[1].value.disp;return e<256||e>1024?null:e}function yl(n){if(n.mnemonic!=="add.w")return null;let e=n.operands;if(e.length!==3)return null;let t=e[2];return t.type!=="imm"?null:t.value}function El(n){if(n.mnemonic!=="add")return null;let e=n.operands;if(e.length!==3||e[0].value==="sp"||e[1].value==="sp")return null;let t=e[2];if(t.type!=="imm")return null;let r=t.value.valueOf();return r<256||r>1024?null:r}var vl={ia32:Yr,x64:Yr,arm:wl,arm64:Il};function Sl(n){let e=n.find("_ZN3art7Runtime12SetJniIdTypeENS_9JniIdTypeE");if(e===null)return null;let t=Me(e,vl[Process.arch],{limit:20});if(t===null)throw new Error("Unable to determine Runtime.jni_ids_indirection_ offset");return t}function Yr(n){return n.mnemonic==="cmp"?n.operands[0].value.disp:null}function wl(n){return n.mnemonic==="ldr.w"?n.operands[1].value.disp:null}function Il(n,e){if(e===null)return null;let{mnemonic:t}=n,{mnemonic:r}=e;return t==="cmp"&&r==="ldr"||t==="bl"&&r==="str"?e.operands[1].value.disp:null}function Tl(){let e={"4-21":136,"4-22":136,"4-23":172,"4-24":196,"4-25":196,"4-26":196,"4-27":196,"4-28":212,"4-29":172,"4-30":180,"4-31":180,"8-21":224,"8-22":224,"8-23":296,"8-24":344,"8-25":344,"8-26":352,"8-27":352,"8-28":392,"8-29":328,"8-30":336,"8-31":336}[`${S}-${re()}`];if(e===void 0)throw new Error("Unable to determine Instrumentation field offsets");return{offset:{forcedInterpretOnly:4,deoptimizationEnabled:e}}}function Cl(n,e){let t=fo(n,e);if(t===null)throw new Error("Unable to determine ClassLinker field offsets");return t}function fo(n,e){if(Sn!==null)return Sn;let{classLinker:t,internTable:r}=e.offset,o=n.add(t).readPointer(),s=n.add(r).readPointer(),i=S===4?100:200,l=i+100*S,a=re(),c=null;for(let d=i;d!==l;d+=S)if(o.add(d).readPointer().equals(s)){let f;a>=30||co()==="R"?f=6:a>=29?f=4:a>=23?f=3:f=5;let u=d+f*S,_;a>=23?_=u-2*S:_=u-3*S,c={offset:{quickResolutionTrampoline:_,quickImtConflictTrampoline:u-S,quickGenericJniTrampoline:u,quickToInterpreterBridgeTrampoline:u+S}};break}return c!==null&&(Sn=c),c}function zn(n){let t=null;return n.perform(r=>{let o=jt(n),s=ve(n),i={artArrayLengthSize:4,artArrayEntrySize:o.size,artArrayMax:50},l={artArrayLengthSize:S,artArrayEntrySize:s.size,artArrayMax:100},a=(f,u,_)=>{let h=f.add(u).readPointer();if(h.isNull())return null;let g=_===4?h.readU32():h.readU64().valueOf();return g<=0?null:{length:g,data:h.add(_)}},c=(f,u,_,h)=>{try{let g=a(f,u,h.artArrayLengthSize);if(g===null)return!1;let b=Math.min(g.length,h.artArrayMax);for(let v=0;v!==b;v++)if(g.data.add(v*h.artArrayEntrySize).equals(_))return!0}catch{}return!1},d=r.findClass("java/lang/Thread"),p=r.newGlobalRef(d);try{let f;be(n,r,x=>{f=J()["art::JavaVMExt::DecodeGlobal"](n,x,p)});let u=to(r.getFieldId(p,"name","Ljava/lang/String;")),_=to(r.getStaticFieldId(p,"MAX_PRIORITY","I")),h=-1,g=-1;for(let x=0;x!==256;x+=4)h===-1&&c(f,x,_,i)&&(h=x),g===-1&&c(f,x,u,i)&&(g=x);if(g===-1||h===-1)throw new Error("Unable to find fields in java/lang/Thread; please file a bug");let b=g!==h?h:0,v=g,w=-1,N=qn(r.getMethodId(p,"getName","()Ljava/lang/String;"));for(let x=0;x!==256;x+=4)w===-1&&c(f,x,N,l)&&(w=x);if(w===-1)throw new Error("Unable to find methods in java/lang/Thread; please file a bug");let M=-1,k=a(f,w,l.artArrayLengthSize).length;for(let x=w;x!==256;x+=4)if(f.add(x).readU16()===k){M=x;break}if(M===-1)throw new Error("Unable to find copied methods in java/lang/Thread; please file a bug");t={offset:{ifields:v,methods:w,sfields:b,copiedMethodsOffset:M}}}finally{r.deleteLocalRef(d),r.deleteGlobalRef(p)}}),t}function Al(n){let e=J(),t;return n.perform(r=>{let o=r.findClass("android/os/Process"),s=qn(r.getStaticMethodId(o,"getElapsedCpuTime","()J"));r.deleteLocalRef(o);let i=Process.getModuleByName("libandroid_runtime.so"),l=i.base,a=l.add(i.size),c=re(),d=c<=21?8:S,p=Ta|Ca|Aa|Lt,f=~(io|Ra|Ma)>>>0,u=null,_=null,h=2;for(let v=0;v!==64&&h!==0;v+=4){let w=s.add(v);if(u===null){let N=w.readPointer();N.compare(l)>=0&&N.compare(a)<0&&(u=v,h--)}_===null&&(w.readU32()&f)===p&&(_=v,h--)}if(h!==0)throw new Error("Unable to determine ArtMethod field offsets");let g=u+d;t={size:c<=21?g+32:g+S,offset:{jniCode:u,quickCode:g,accessFlags:_}},"artInterpreterToCompiledCodeBridge"in e&&(t.offset.interpreterCode=u-d)}),t}function jt(n){let e=re();return e>=23?{size:16,offset:{accessFlags:4}}:e>=21?{size:24,offset:{accessFlags:12}}:null}function Ll(n){let e=re(),t;return n.perform(r=>{let o=Ft(r),s=r.handle,i=null,l=null,a=null,c=null,d=null,p=null;for(let f=144;f!==256;f+=S)if(o.add(f).readPointer().equals(s)){l=f-6*S,d=f-4*S,p=f+2*S,e<=22&&(l-=S,i=l-S-9*8-3*4,a=f+6*S,d-=S,p-=S),c=f+9*S,e<=22&&(c+=2*S+4,S===8&&(c+=4)),e>=23&&(c+=S);break}if(c===null)throw new Error("Unable to determine ArtThread field offsets");t={offset:{isExceptionReportedToInstrumentation:i,exception:l,throwLocation:a,topHandleScope:c,managedStack:d,self:p}}}),t}function xl(){return re()>=23?{offset:{topQuickFrame:0,link:S}}:{offset:{topQuickFrame:2*S,link:0}}}var Nl={ia32:Xr,x64:Xr,arm:kl,arm64:Ml};function Tn(n,e){let t;return e.perform(r=>{let o=Ft(r),s=Nl[Process.arch],i=Instruction.parse(n),l=s(i);l!==null?t=o.add(l).readPointer():t=n}),t}function Xr(n){return n.mnemonic==="jmp"?n.operands[0].value.disp:null}function kl(n){return n.mnemonic==="ldr.w"?n.operands[1].value.disp:null}function Ml(n){return n.mnemonic==="ldr"?n.operands[1].value.disp:null}function Ft(n){return n.handle.add(S).readPointer()}function Rl(){return Vn("ro.build.version.release")}function Ol(){return Vn("ro.build.version.codename")}function Pl(){return parseInt(Vn("ro.build.version.sdk"),10)}var Cn=null,jl=92;function Vn(n){Cn===null&&(Cn=new NativeFunction(Process.getModuleByName("libc.so").getExportByName("__system_property_get"),"int",["pointer","pointer"],W));let e=Memory.alloc(jl);return Cn(Memory.allocUtf8String(n),e),e.readUtf8String()}function be(n,e,t){let r=ll(n,e),o=Ft(e).toString();if(it[o]=t,r(e.handle),it[o]!==void 0)throw delete it[o],new Error("Unable to perform state transition; please file a bug")}function Fl(n,e){let t=new NativeCallback(Dl,"void",["pointer"]);return mo(n,e,t)}function Dl(n){let e=n.toString(),t=it[e];delete it[e],t(n)}function Jn(n){let e=J(),t=e.artThreadList;e["art::ThreadList::SuspendAll"](t,Memory.allocUtf8String("frida"),!1?1:0);try{n()}finally{e["art::ThreadList::ResumeAll"](t)}}var Nn=class{constructor(e){let t=Memory.alloc(4*S),r=t.add(S);t.writePointer(r);let o=new NativeCallback((s,i)=>e(i)===!0?1:0,"bool",["pointer","pointer"]);r.add(2*S).writePointer(o),this.handle=t,this._onVisit=o}};function Gn(n){return J()["art::ClassLinker::VisitClasses"]instanceof NativeFunction?new Nn(n):new NativeCallback(t=>n(t)===!0?1:0,"bool",["pointer","pointer"])}var kn=class{constructor(e){let t=Memory.alloc(4*S),r=t.add(S);t.writePointer(r);let o=new NativeCallback((s,i)=>{e(i)},"void",["pointer","pointer"]);r.add(2*S).writePointer(o),this.handle=t,this._onVisit=o}};function $n(n){return new kn(n)}var Ul={"include-inlined-frames":0,"skip-inlined-frames":1},Mn=class{constructor(e,t,r,o=0,s=!0){let i=J(),l=512,a=3*S,c=Memory.alloc(l+a);i["art::StackVisitor::StackVisitor"](c,e,t,Ul[r],o,s?1:0);let d=c.add(l);c.writePointer(d);let p=new NativeCallback(this._visitFrame.bind(this),"bool",["pointer"]);d.add(2*S).writePointer(p),this.handle=c,this._onVisitFrame=p;let f=c.add(S===4?12:24);this._curShadowFrame=f,this._curQuickFrame=f.add(S),this._curQuickFramePc=f.add(2*S),this._curOatQuickMethodHeader=f.add(3*S),this._getMethodImpl=i["art::StackVisitor::GetMethod"],this._descLocImpl=i["art::StackVisitor::DescribeLocation"],this._getCQFIImpl=i["art::StackVisitor::GetCurrentQuickFrameInfo"]}walkStack(e=!1){J()["art::StackVisitor::WalkStack"](this.handle,e?1:0)}_visitFrame(){return this.visitFrame()?1:0}visitFrame(){throw new Error("Subclass must implement visitFrame")}getMethod(){let e=this._getMethodImpl(this.handle);return e.isNull()?null:new Nt(e)}getCurrentQuickFramePc(){return this._curQuickFramePc.readPointer()}getCurrentQuickFrame(){return this._curQuickFrame.readPointer()}getCurrentShadowFrame(){return this._curShadowFrame.readPointer()}describeLocation(){let e=new Rt;return this._descLocImpl(e,this.handle),e.disposeToString()}getCurrentOatQuickMethodHeader(){return this._curOatQuickMethodHeader.readPointer()}getCurrentQuickFrameInfo(){return this._getCQFIImpl(this.handle)}},Nt=class{constructor(e){this.handle=e}prettyMethod(e=!0){let t=new Rt;return J()["art::ArtMethod::PrettyMethod"](t,this.handle,e?1:0),t.disposeToString()}toString(){return`ArtMethod(handle=${this.handle})`}};function Bl(n){return function(e){let t=Memory.alloc(12);return cl(n)(t,e),{frameSizeInBytes:t.readU32(),coreSpillMask:t.add(4).readU32(),fpSpillMask:t.add(8).readU32()}}}function zl(n){let e=NULL;switch(Process.arch){case"ia32":e=qe(32,t=>{t.putMovRegRegOffsetPtr("ecx","esp",4),t.putMovRegRegOffsetPtr("edx","esp",8),t.putCallAddressWithArguments(n,["ecx","edx"]),t.putMovRegReg("esp","ebp"),t.putPopReg("ebp"),t.putRet()});break;case"x64":e=qe(32,t=>{t.putPushReg("rdi"),t.putCallAddressWithArguments(n,["rsi"]),t.putPopReg("rdi"),t.putMovRegPtrReg("rdi","rax"),t.putMovRegOffsetPtrReg("rdi",8,"edx"),t.putRet()});break;case"arm":e=qe(16,t=>{t.putCallAddressWithArguments(n,["r0","r1"]),t.putPopRegs(["r0","lr"]),t.putMovRegReg("pc","lr")});break;case"arm64":e=qe(64,t=>{t.putPushRegReg("x0","lr"),t.putCallAddressWithArguments(n,["x1"]),t.putPopRegReg("x2","lr"),t.putStrRegRegOffset("x0","x2",0),t.putStrRegRegOffset("w1","x2",8),t.putRet()});break}return new NativeFunction(e,"void",["pointer","pointer"],W)}var Vl={ia32:globalThis.X86Relocator,x64:globalThis.X86Relocator,arm:globalThis.ThumbRelocator,arm64:globalThis.Arm64Relocator},Rn={ia32:globalThis.X86Writer,x64:globalThis.X86Writer,arm:globalThis.ThumbWriter,arm64:globalThis.Arm64Writer};function qe(n,e){wn===null&&(wn=Memory.alloc(Process.pageSize));let t=wn.add(qr),r=Process.arch,o=Rn[r];return Memory.patchCode(t,n,s=>{let i=new o(s,{pc:t});if(e(i),i.flush(),i.offset>n)throw new Error(`Wrote ${i.offset}, exceeding maximum of ${n}`)}),qr+=n,r==="arm"?t.or(1):t}function Jl(n,e){$l(e),ql(e)}function Gl(n,e){let t=We(e).offset,r=al().offset,o=`
#include <gum/guminterceptor.h>

extern GMutex lock;
extern GHashTable * methods;
extern GHashTable * replacements;
extern gpointer last_seen_art_method;

extern gpointer get_oat_quick_method_header_impl (gpointer method, gpointer pc);

void
init (void)
{
  g_mutex_init (&lock);
  methods = g_hash_table_new_full (NULL, NULL, NULL, NULL);
  replacements = g_hash_table_new_full (NULL, NULL, NULL, NULL);
}

void
finalize (void)
{
  g_hash_table_unref (replacements);
  g_hash_table_unref (methods);
  g_mutex_clear (&lock);
}

gboolean
is_replacement_method (gpointer method)
{
  gboolean is_replacement;

  g_mutex_lock (&lock);

  is_replacement = g_hash_table_contains (replacements, method);

  g_mutex_unlock (&lock);

  return is_replacement;
}

gpointer
get_replacement_method (gpointer original_method)
{
  gpointer replacement_method;

  g_mutex_lock (&lock);

  replacement_method = g_hash_table_lookup (methods, original_method);

  g_mutex_unlock (&lock);

  return replacement_method;
}

void
set_replacement_method (gpointer original_method,
                        gpointer replacement_method)
{
  g_mutex_lock (&lock);

  g_hash_table_insert (methods, original_method, replacement_method);
  g_hash_table_insert (replacements, replacement_method, original_method);

  g_mutex_unlock (&lock);
}

void
delete_replacement_method (gpointer original_method)
{
  gpointer replacement_method;

  g_mutex_lock (&lock);

  replacement_method = g_hash_table_lookup (methods, original_method);
  if (replacement_method != NULL)
  {
    g_hash_table_remove (methods, original_method);
    g_hash_table_remove (replacements, replacement_method);
  }

  g_mutex_unlock (&lock);
}

gpointer
translate_method (gpointer method)
{
  gpointer translated_method;

  g_mutex_lock (&lock);

  translated_method = g_hash_table_lookup (replacements, method);

  g_mutex_unlock (&lock);

  return (translated_method != NULL) ? translated_method : method;
}

gpointer
find_replacement_method_from_quick_code (gpointer method,
                                         gpointer thread)
{
  gpointer replacement_method;
  gpointer managed_stack;
  gpointer top_quick_frame;
  gpointer link_managed_stack;
  gpointer * link_top_quick_frame;

  replacement_method = get_replacement_method (method);
  if (replacement_method == NULL)
    return NULL;

  /*
   * Stack check.
   *
   * Return NULL to indicate that the original method should be invoked, otherwise
   * return a pointer to the replacement ArtMethod.
   *
   * If the caller is our own JNI replacement stub, then a stack transition must
   * have been pushed onto the current thread's linked list.
   *
   * Therefore, we invoke the original method if the following conditions are met:
   *   1- The current managed stack is empty.
   *   2- The ArtMethod * inside the linked managed stack's top quick frame is the
   *      same as our replacement.
   */
  managed_stack = thread + ${t.managedStack};
  top_quick_frame = *((gpointer *) (managed_stack + ${r.topQuickFrame}));
  if (top_quick_frame != NULL)
    return replacement_method;

  link_managed_stack = *((gpointer *) (managed_stack + ${r.link}));
  if (link_managed_stack == NULL)
    return replacement_method;

  link_top_quick_frame = GSIZE_TO_POINTER (*((gsize *) (link_managed_stack + ${r.topQuickFrame})) & ~((gsize) 1));
  if (link_top_quick_frame == NULL || *link_top_quick_frame != replacement_method)
    return replacement_method;

  return NULL;
}

void
on_interpreter_do_call (GumInvocationContext * ic)
{
  gpointer method, replacement_method;

  method = gum_invocation_context_get_nth_argument (ic, 0);

  replacement_method = get_replacement_method (method);
  if (replacement_method != NULL)
    gum_invocation_context_replace_nth_argument (ic, 0, replacement_method);
}

gpointer
on_art_method_get_oat_quick_method_header (gpointer method,
                                           gpointer pc)
{
  if (is_replacement_method (method))
    return NULL;

  return get_oat_quick_method_header_impl (method, pc);
}

void
on_art_method_pretty_method (GumInvocationContext * ic)
{
  const guint this_arg_index = ${Process.arch==="arm64"?0:1};
  gpointer method;

  method = gum_invocation_context_get_nth_argument (ic, this_arg_index);
  if (method == NULL)
    gum_invocation_context_replace_nth_argument (ic, this_arg_index, last_seen_art_method);
  else
    last_seen_art_method = method;
}

void
on_leave_gc_concurrent_copying_copying_phase (GumInvocationContext * ic)
{
  GHashTableIter iter;
  gpointer hooked_method, replacement_method;

  g_mutex_lock (&lock);

  g_hash_table_iter_init (&iter, methods);
  while (g_hash_table_iter_next (&iter, &hooked_method, &replacement_method))
    *((uint32_t *) replacement_method) = *((uint32_t *) hooked_method);

  g_mutex_unlock (&lock);
}
`,s=8,i=S,l=S,a=S,d=Memory.alloc(s+i+l+a),p=d.add(s),f=p.add(i),u=f.add(l),_=n.find(S===4?"_ZN3art9ArtMethod23GetOatQuickMethodHeaderEj":"_ZN3art9ArtMethod23GetOatQuickMethodHeaderEm"),h=new CModule(o,{lock:d,methods:p,replacements:f,last_seen_art_method:u,get_oat_quick_method_header_impl:_??ptr("0xdeadbeef")}),g={exceptions:"propagate",scheduling:"exclusive"};return{handle:h,replacedMethods:{isReplacement:new NativeFunction(h.is_replacement_method,"bool",["pointer"],g),get:new NativeFunction(h.get_replacement_method,"pointer",["pointer"],g),set:new NativeFunction(h.set_replacement_method,"void",["pointer","pointer"],g),delete:new NativeFunction(h.delete_replacement_method,"void",["pointer"],g),translate:new NativeFunction(h.translate_method,"pointer",["pointer"],g),findReplacementFromQuickCode:h.find_replacement_method_from_quick_code},getOatQuickMethodHeaderImpl:_,hooks:{Interpreter:{doCall:h.on_interpreter_do_call},ArtMethod:{getOatQuickMethodHeader:h.on_art_method_get_oat_quick_method_header,prettyMethod:h.on_art_method_pretty_method},Gc:{copyingPhase:{onLeave:h.on_leave_gc_concurrent_copying_copying_phase},runFlip:{onEnter:h.on_leave_gc_concurrent_copying_copying_phase}}}}}function $l(n){Kr||(Kr=!0,Hl(n),Zl())}function Hl(n){let e=J();[e.artQuickGenericJniTrampoline,e.artQuickToInterpreterBridge,e.artQuickResolutionTrampoline].forEach(r=>{Memory.protect(r,32,"rwx");let o=new Mt(r);o.activate(n),po.push(o)})}function Zl(){let n=J(),e=re(),{isApiLevel34OrApexEquivalent:t}=n,r;if(e<=22)r=/^_ZN3art11interpreter6DoCallILb[0-1]ELb[0-1]EEEbPNS_6mirror9ArtMethodEPNS_6ThreadERNS_11ShadowFrameEPKNS_11InstructionEtPNS_6JValueE$/;else if(e<=33&&!t)r=/^_ZN3art11interpreter6DoCallILb[0-1]ELb[0-1]EEEbPNS_9ArtMethodEPNS_6ThreadERNS_11ShadowFrameEPKNS_11InstructionEtPNS_6JValueE$/;else if(t)r=/^_ZN3art11interpreter6DoCallILb[0-1]EEEbPNS_9ArtMethodEPNS_6ThreadERNS_11ShadowFrameEPKNS_11InstructionEtbPNS_6JValueE$/;else throw new Error("Unable to find method invocation in ART; please file a bug");let o=n.module,s=[...o.enumerateExports(),...o.enumerateSymbols()].filter(i=>r.test(i.name));if(s.length===0)throw new Error("Unable to find method invocation in ART; please file a bug");for(let i of s)Interceptor.attach(i.address,le.hooks.Interpreter.doCall)}function ql(n){if(Wr)return;if(Wr=!0,!Kl()){let{getOatQuickMethodHeaderImpl:s}=le;if(s===null)return;try{Interceptor.replace(s,le.hooks.ArtMethod.getOatQuickMethodHeader)}catch{}}let e=re(),t=null,r=J();e>28?t=r.find("_ZN3art2gc9collector17ConcurrentCopying12CopyingPhaseEv"):e>22&&(t=r.find("_ZN3art2gc9collector17ConcurrentCopying12MarkingPhaseEv")),t!==null&&Interceptor.attach(t,le.hooks.Gc.copyingPhase);let o=null;o=r.find("_ZN3art6Thread15RunFlipFunctionEPS0_"),o===null&&(o=r.find("_ZN3art6Thread15RunFlipFunctionEPS0_b")),o!==null&&Interceptor.attach(o,le.hooks.Gc.runFlip)}var Wl={arm:{signatures:[{pattern:["b0 68","01 30","0c d0","1b 98",":","c0 ff","c0 ff","00 ff","00 2f"],validateMatch:An},{pattern:["d8 f8 08 00","01 30","0c d0","1b 98",":","f0 ff ff 0f","ff ff","00 ff","00 2f"],validateMatch:An},{pattern:["b0 68","01 30","40 f0 c3 80","00 25",":","c0 ff","c0 ff","c0 fb 00 d0","ff f8"],validateMatch:An}],instrument:Yl},arm64:{signatures:[{pattern:["0a 40 b9","1f 05 00 31","40 01 00 54","88 39 00 f0",":","fc ff ff","1f fc ff ff","1f 00 00 ff","00 00 00 9f"],offset:1,validateMatch:eo},{pattern:["0a 40 b9","1f 05 00 31","01 34 00 54","e0 03 1f aa",":","fc ff ff","1f fc ff ff","1f 00 00 ff","e0 ff ff ff"],offset:1,validateMatch:eo}],instrument:Xl}};function An({address:n,size:e}){let t=Instruction.parse(n.or(1)),[r,o]=t.operands,s=o.value.base,i=r.value,l=Instruction.parse(t.next.add(2)),a=ptr(l.operands[0].value),c=l.address.add(l.size),d,p;return l.mnemonic==="beq"?(d=c,p=a):(d=a,p=c),Me(d.or(1),f,{limit:3});function f(u){let{mnemonic:_}=u;if(!(_==="ldr"||_==="ldr.w"))return null;let{base:h,disp:g}=u.operands[1].value;return h===s&&g===20?{methodReg:s,scratchReg:i,target:{whenTrue:a,whenRegularMethod:d,whenRuntimeMethod:p}}:null}}function eo({address:n,size:e}){let[t,r]=Instruction.parse(n).operands,o=r.value.base,s="x"+t.value.substring(1),i=Instruction.parse(n.add(8)),l=ptr(i.operands[0].value),a=n.add(12),c,d;return i.mnemonic==="b.eq"?(c=a,d=l):(c=l,d=a),Me(c,p,{limit:3});function p(f){if(f.mnemonic!=="ldr")return null;let{base:u,disp:_}=f.operands[1].value;return u===o&&_===24?{methodReg:o,scratchReg:s,target:{whenTrue:l,whenRegularMethod:c,whenRuntimeMethod:d}}:null}}function Kl(){if(re()<31)return!1;let n=Wl[Process.arch];if(n===void 0)return!1;let e=n.signatures.map(({pattern:r,offset:o=0,validateMatch:s=Ql})=>({pattern:new MatchPattern(r.join("")),offset:o,validateMatch:s})),t=[];for(let{base:r,size:o}of J().module.enumerateRanges("--x"))for(let{pattern:s,offset:i,validateMatch:l}of e){let a=Memory.scanSync(r,o,s).map(({address:c,size:d})=>({address:c.sub(i),size:d+i})).filter(c=>{let d=l(c);return d===null?!1:(c.validationResult=d,!0)});t.push(...a)}return t.length===0?!1:(t.forEach(n.instrument),!0)}function Ql(){return{}}var kt=class{constructor(e,t,r){this.address=e,this.size=t,this.originalCode=e.readByteArray(t),this.trampoline=r}revert(){Memory.patchCode(this.address,this.size,e=>{e.writeByteArray(this.originalCode)})}};function Yl({address:n,size:e,validationResult:t}){let{methodReg:r,target:o}=t,s=Memory.alloc(Process.pageSize),i=e;Memory.patchCode(s,256,l=>{let a=new ThumbWriter(l,{pc:s}),c=new ThumbRelocator(n,a);for(let _=0;_!==2;_++)c.readOne();c.writeAll(),c.readOne(),c.skipOne(),a.putBCondLabel("eq","runtime_or_replacement_method");let d=[45,237,16,10];a.putBytes(d);let p=["r0","r1","r2","r3"];a.putPushRegs(p),a.putCallAddressWithArguments(le.replacedMethods.isReplacement,[r]),a.putCmpRegImm("r0",0),a.putPopRegs(p);let f=[189,236,16,10];a.putBytes(f),a.putBCondLabel("ne","runtime_or_replacement_method"),a.putBLabel("regular_method"),c.readOne();let u=c.input.address.equals(o.whenRegularMethod);for(a.putLabel(u?"regular_method":"runtime_or_replacement_method"),c.writeOne();i<10;){let _=c.readOne();if(_===0){i=10;break}i=_}c.writeAll(),a.putBranchAddress(n.add(i+1)),a.putLabel(u?"runtime_or_replacement_method":"regular_method"),a.putBranchAddress(o.whenTrue),a.flush()}),Bn.push(new kt(n,i,s)),Memory.patchCode(n,i,l=>{let a=new ThumbWriter(l,{pc:n});a.putLdrRegAddress("pc",s.or(1)),a.flush()})}function Xl({address:n,size:e,validationResult:t}){let{methodReg:r,scratchReg:o,target:s}=t,i=Memory.alloc(Process.pageSize);Memory.patchCode(i,256,l=>{let a=new Arm64Writer(l,{pc:i}),c=new Arm64Relocator(n,a);for(let _=0;_!==2;_++)c.readOne();c.writeAll(),c.readOne(),c.skipOne(),a.putBCondLabel("eq","runtime_or_replacement_method");let d=["d0","d1","d2","d3","d4","d5","d6","d7","x0","x1","x2","x3","x4","x5","x6","x7","x8","x9","x10","x11","x12","x13","x14","x15","x16","x17"],p=d.length;for(let _=0;_!==p;_+=2)a.putPushRegReg(d[_],d[_+1]);a.putCallAddressWithArguments(le.replacedMethods.isReplacement,[r]),a.putCmpRegReg("x0","xzr");for(let _=p-2;_>=0;_-=2)a.putPopRegReg(d[_],d[_+1]);a.putBCondLabel("ne","runtime_or_replacement_method"),a.putBLabel("regular_method"),c.readOne();let f=c.input,u=f.address.equals(s.whenRegularMethod);a.putLabel(u?"regular_method":"runtime_or_replacement_method"),c.writeOne(),a.putBranchAddress(f.next),a.putLabel(u?"runtime_or_replacement_method":"regular_method"),a.putBranchAddress(s.whenTrue),a.flush()}),Bn.push(new kt(n,e,i)),Memory.patchCode(n,e,l=>{let a=new Arm64Writer(l,{pc:n});a.putLdrRegAddress(o,i),a.putBrReg(o),a.flush()})}function ec(n){return new uo(n)}function tc(n){return le.replacedMethods.translate(n)}function Hn(n,e={}){let{limit:t=16}=e,r=n.getEnv();return at===null&&(at=nc(n,r)),at.backtrace(r,t)}function nc(n,e){let t=J(),r=Memory.alloc(Process.pointerSize),o=new CModule(`
#include <glib.h>
#include <stdbool.h>
#include <string.h>
#include <gum/gumtls.h>
#include <json-glib/json-glib.h>

typedef struct _ArtBacktrace ArtBacktrace;
typedef struct _ArtStackFrame ArtStackFrame;

typedef struct _ArtStackVisitor ArtStackVisitor;
typedef struct _ArtStackVisitorVTable ArtStackVisitorVTable;

typedef struct _ArtClass ArtClass;
typedef struct _ArtMethod ArtMethod;
typedef struct _ArtThread ArtThread;
typedef struct _ArtContext ArtContext;

typedef struct _JNIEnv JNIEnv;

typedef struct _StdString StdString;
typedef struct _StdTinyString StdTinyString;
typedef struct _StdLargeString StdLargeString;

typedef enum {
  STACK_WALK_INCLUDE_INLINED_FRAMES,
  STACK_WALK_SKIP_INLINED_FRAMES,
} StackWalkKind;

struct _StdTinyString
{
  guint8 unused;
  gchar data[(3 * sizeof (gpointer)) - 1];
};

struct _StdLargeString
{
  gsize capacity;
  gsize size;
  gchar * data;
};

struct _StdString
{
  union
  {
    guint8 flags;
    StdTinyString tiny;
    StdLargeString large;
  };
};

struct _ArtBacktrace
{
  GChecksum * id;
  GArray * frames;
  gchar * frames_json;
};

struct _ArtStackFrame
{
  ArtMethod * method;
  gsize dexpc;
  StdString description;
};

struct _ArtStackVisitorVTable
{
  void (* unused1) (void);
  void (* unused2) (void);
  bool (* visit) (ArtStackVisitor * visitor);
};

struct _ArtStackVisitor
{
  ArtStackVisitorVTable * vtable;

  guint8 padding[512];

  ArtStackVisitorVTable vtable_storage;

  ArtBacktrace * backtrace;
};

struct _ArtMethod
{
  guint32 declaring_class;
  guint32 access_flags;
};

extern GumTlsKey current_backtrace;

extern void (* perform_art_thread_state_transition) (JNIEnv * env);

extern ArtContext * art_thread_get_long_jump_context (ArtThread * thread);

extern void art_stack_visitor_init (ArtStackVisitor * visitor, ArtThread * thread, void * context, StackWalkKind walk_kind,
    size_t num_frames, bool check_suspended);
extern void art_stack_visitor_walk_stack (ArtStackVisitor * visitor, bool include_transitions);
extern ArtMethod * art_stack_visitor_get_method (ArtStackVisitor * visitor);
extern void art_stack_visitor_describe_location (StdString * description, ArtStackVisitor * visitor);
extern ArtMethod * translate_method (ArtMethod * method);
extern void translate_location (ArtMethod * method, guint32 pc, const gchar ** source_file, gint32 * line_number);
extern void get_class_location (StdString * result, ArtClass * klass);
extern void cxx_delete (void * mem);
extern unsigned long strtoul (const char * str, char ** endptr, int base);

static bool visit_frame (ArtStackVisitor * visitor);
static void art_stack_frame_destroy (ArtStackFrame * frame);

static void append_jni_type_name (GString * s, const gchar * name, gsize length);

static void std_string_destroy (StdString * str);
static gchar * std_string_get_data (StdString * str);

void
init (void)
{
  current_backtrace = gum_tls_key_new ();
}

void
finalize (void)
{
  gum_tls_key_free (current_backtrace);
}

ArtBacktrace *
_create (JNIEnv * env,
         guint limit)
{
  ArtBacktrace * bt;

  bt = g_new (ArtBacktrace, 1);
  bt->id = g_checksum_new (G_CHECKSUM_SHA1);
  bt->frames = (limit != 0)
      ? g_array_sized_new (FALSE, FALSE, sizeof (ArtStackFrame), limit)
      : g_array_new (FALSE, FALSE, sizeof (ArtStackFrame));
  g_array_set_clear_func (bt->frames, (GDestroyNotify) art_stack_frame_destroy);
  bt->frames_json = NULL;

  gum_tls_key_set_value (current_backtrace, bt);

  perform_art_thread_state_transition (env);

  gum_tls_key_set_value (current_backtrace, NULL);

  return bt;
}

void
_on_thread_state_transition_complete (ArtThread * thread)
{
  ArtContext * context;
  ArtStackVisitor visitor = {
    .vtable_storage = {
      .visit = visit_frame,
    },
  };

  context = art_thread_get_long_jump_context (thread);

  art_stack_visitor_init (&visitor, thread, context, STACK_WALK_SKIP_INLINED_FRAMES, 0, true);
  visitor.vtable = &visitor.vtable_storage;
  visitor.backtrace = gum_tls_key_get_value (current_backtrace);

  art_stack_visitor_walk_stack (&visitor, false);

  cxx_delete (context);
}

static bool
visit_frame (ArtStackVisitor * visitor)
{
  ArtBacktrace * bt = visitor->backtrace;
  ArtStackFrame frame;
  const gchar * description, * dexpc_part;

  frame.method = art_stack_visitor_get_method (visitor);

  art_stack_visitor_describe_location (&frame.description, visitor);

  description = std_string_get_data (&frame.description);
  if (strstr (description, " '<") != NULL)
    goto skip;

  dexpc_part = strstr (description, " at dex PC 0x");
  if (dexpc_part == NULL)
    goto skip;
  frame.dexpc = strtoul (dexpc_part + 13, NULL, 16);

  g_array_append_val (bt->frames, frame);

  g_checksum_update (bt->id, (guchar *) &frame.method, sizeof (frame.method));
  g_checksum_update (bt->id, (guchar *) &frame.dexpc, sizeof (frame.dexpc));

  return true;

skip:
  std_string_destroy (&frame.description);
  return true;
}

static void
art_stack_frame_destroy (ArtStackFrame * frame)
{
  std_string_destroy (&frame->description);
}

void
_destroy (ArtBacktrace * backtrace)
{
  g_free (backtrace->frames_json);
  g_array_free (backtrace->frames, TRUE);
  g_checksum_free (backtrace->id);
  g_free (backtrace);
}

const gchar *
_get_id (ArtBacktrace * backtrace)
{
  return g_checksum_get_string (backtrace->id);
}

const gchar *
_get_frames (ArtBacktrace * backtrace)
{
  GArray * frames = backtrace->frames;
  JsonBuilder * b;
  guint i;
  JsonNode * root;

  if (backtrace->frames_json != NULL)
    return backtrace->frames_json;

  b = json_builder_new_immutable ();

  json_builder_begin_array (b);

  for (i = 0; i != frames->len; i++)
  {
    ArtStackFrame * frame = &g_array_index (frames, ArtStackFrame, i);
    gchar * description, * ret_type, * paren_open, * paren_close, * arg_types, * token, * method_name, * class_name;
    GString * signature;
    gchar * cursor;
    ArtMethod * translated_method;
    StdString location;
    gsize dexpc;
    const gchar * source_file;
    gint32 line_number;

    description = std_string_get_data (&frame->description);

    ret_type = strchr (description, '\\'') + 1;

    paren_open = strchr (ret_type, '(');
    paren_close = strchr (paren_open, ')');
    *paren_open = '\\0';
    *paren_close = '\\0';

    arg_types = paren_open + 1;

    token = strrchr (ret_type, '.');
    *token = '\\0';

    method_name = token + 1;

    token = strrchr (ret_type, ' ');
    *token = '\\0';

    class_name = token + 1;

    signature = g_string_sized_new (128);

    append_jni_type_name (signature, class_name, method_name - class_name - 1);
    g_string_append_c (signature, ',');
    g_string_append (signature, method_name);
    g_string_append (signature, ",(");

    if (arg_types != paren_close)
    {
      for (cursor = arg_types; cursor != NULL;)
      {
        gsize length;
        gchar * next;

        token = strstr (cursor, ", ");
        if (token != NULL)
        {
          length = token - cursor;
          next = token + 2;
        }
        else
        {
          length = paren_close - cursor;
          next = NULL;
        }

        append_jni_type_name (signature, cursor, length);

        cursor = next;
      }
    }

    g_string_append_c (signature, ')');

    append_jni_type_name (signature, ret_type, class_name - ret_type - 1);

    translated_method = translate_method (frame->method);
    dexpc = (translated_method == frame->method) ? frame->dexpc : 0;

    get_class_location (&location, GSIZE_TO_POINTER (translated_method->declaring_class));

    translate_location (translated_method, dexpc, &source_file, &line_number);

    json_builder_begin_object (b);

    json_builder_set_member_name (b, "signature");
    json_builder_add_string_value (b, signature->str);

    json_builder_set_member_name (b, "origin");
    json_builder_add_string_value (b, std_string_get_data (&location));

    json_builder_set_member_name (b, "className");
    json_builder_add_string_value (b, class_name);

    json_builder_set_member_name (b, "methodName");
    json_builder_add_string_value (b, method_name);

    json_builder_set_member_name (b, "methodFlags");
    json_builder_add_int_value (b, translated_method->access_flags);

    json_builder_set_member_name (b, "fileName");
    json_builder_add_string_value (b, source_file);

    json_builder_set_member_name (b, "lineNumber");
    json_builder_add_int_value (b, line_number);

    json_builder_end_object (b);

    std_string_destroy (&location);
    g_string_free (signature, TRUE);
  }

  json_builder_end_array (b);

  root = json_builder_get_root (b);
  backtrace->frames_json = json_to_string (root, FALSE);
  json_node_unref (root);

  return backtrace->frames_json;
}

static void
append_jni_type_name (GString * s,
                      const gchar * name,
                      gsize length)
{
  gchar shorty = '\\0';
  gsize i;

  switch (name[0])
  {
    case 'b':
      if (strncmp (name, "boolean", length) == 0)
        shorty = 'Z';
      else if (strncmp (name, "byte", length) == 0)
        shorty = 'B';
      break;
    case 'c':
      if (strncmp (name, "char", length) == 0)
        shorty = 'C';
      break;
    case 'd':
      if (strncmp (name, "double", length) == 0)
        shorty = 'D';
      break;
    case 'f':
      if (strncmp (name, "float", length) == 0)
        shorty = 'F';
      break;
    case 'i':
      if (strncmp (name, "int", length) == 0)
        shorty = 'I';
      break;
    case 'l':
      if (strncmp (name, "long", length) == 0)
        shorty = 'J';
      break;
    case 's':
      if (strncmp (name, "short", length) == 0)
        shorty = 'S';
      break;
    case 'v':
      if (strncmp (name, "void", length) == 0)
        shorty = 'V';
      break;
  }

  if (shorty != '\\0')
  {
    g_string_append_c (s, shorty);

    return;
  }

  if (length > 2 && name[length - 2] == '[' && name[length - 1] == ']')
  {
    g_string_append_c (s, '[');
    append_jni_type_name (s, name, length - 2);

    return;
  }

  g_string_append_c (s, 'L');

  for (i = 0; i != length; i++)
  {
    gchar ch = name[i];
    if (ch != '.')
      g_string_append_c (s, ch);
    else
      g_string_append_c (s, '/');
  }

  g_string_append_c (s, ';');
}

static void
std_string_destroy (StdString * str)
{
  bool is_large = (str->flags & 1) != 0;
  if (is_large)
    cxx_delete (str->large.data);
}

static gchar *
std_string_get_data (StdString * str)
{
  bool is_large = (str->flags & 1) != 0;
  return is_large ? str->large.data : str->tiny.data;
}
`,{current_backtrace:Memory.alloc(Process.pointerSize),perform_art_thread_state_transition:r,art_thread_get_long_jump_context:t["art::Thread::GetLongJumpContext"],art_stack_visitor_init:t["art::StackVisitor::StackVisitor"],art_stack_visitor_walk_stack:t["art::StackVisitor::WalkStack"],art_stack_visitor_get_method:t["art::StackVisitor::GetMethod"],art_stack_visitor_describe_location:t["art::StackVisitor::DescribeLocation"],translate_method:le.replacedMethods.translate,translate_location:t["art::Monitor::TranslateLocation"],get_class_location:t["art::mirror::Class::GetLocation"],cxx_delete:t.$delete,strtoul:Process.getModuleByName("libc.so").getExportByName("strtoul")}),s=new NativeFunction(o._create,"pointer",["pointer","uint"],W),i=new NativeFunction(o._destroy,"void",["pointer"],W),l={exceptions:"propagate",scheduling:"exclusive"},a=new NativeFunction(o._get_id,"pointer",["pointer"],l),c=new NativeFunction(o._get_frames,"pointer",["pointer"],l),d=mo(n,e,o._on_thread_state_transition_complete);o._performData=d,r.writePointer(d),o.backtrace=(f,u)=>{let _=s(f,u),h=new On(_);return Script.bindWeak(h,p.bind(null,_)),h};function p(f){i(f)}return o.getId=f=>a(f).readUtf8String(),o.getFrames=f=>JSON.parse(c(f).readUtf8String()),o}var On=class{constructor(e){this.handle=e}get id(){return at.getId(this.handle)}get frames(){return at.getFrames(this.handle)}};function Zn(){xt.forEach(n=>{n.vtablePtr.writePointer(n.vtable),n.vtableCountPtr.writeS32(n.vtableCount)}),xt.clear();for(let n of po.splice(0))n.deactivate();for(let n of Bn.splice(0))n.revert()}function qn(n){return ho(n,"art::jni::JniIdManager::DecodeMethodId")}function to(n){return ho(n,"art::jni::JniIdManager::DecodeFieldId")}function ho(n,e){let t=J(),r=lo(t).offset,o=r.jniIdManager,s=r.jniIdsIndirection;if(o!==null&&s!==null){let i=t.artRuntime;if(i.add(s).readInt()!==Pa){let a=i.add(o).readPointer();return t[e](a,n)}}return n}var rc={ia32:oc,x64:sc,arm:ic,arm64:ac};function oc(n,e,t,r,o){let s=We(o).offset,i=ve(o).offset,l;return Memory.patchCode(n,128,a=>{let c=new X86Writer(a,{pc:n}),d=new X86Relocator(e,c),p=[15,174,4,36],f=[15,174,12,36];c.putPushax(),c.putMovRegReg("ebp","esp"),c.putAndRegU32("esp",4294967280),c.putSubRegImm("esp",512),c.putBytes(p),c.putMovRegFsU32Ptr("ebx",s.self),c.putCallAddressWithAlignedArguments(le.replacedMethods.findReplacementFromQuickCode,["eax","ebx"]),c.putTestRegReg("eax","eax"),c.putJccShortLabel("je","restore_registers","no-hint"),c.putMovRegOffsetPtrReg("ebp",7*4,"eax"),c.putLabel("restore_registers"),c.putBytes(f),c.putMovRegReg("esp","ebp"),c.putPopax(),c.putJccShortLabel("jne","invoke_replacement","no-hint");do l=d.readOne();while(l<t&&!d.eoi);d.writeAll(),d.eoi||c.putJmpAddress(e.add(l)),c.putLabel("invoke_replacement"),c.putJmpRegOffsetPtr("eax",i.quickCode),c.flush()}),l}function sc(n,e,t,r,o){let s=We(o).offset,i=ve(o).offset,l;return Memory.patchCode(n,256,a=>{let c=new X86Writer(a,{pc:n}),d=new X86Relocator(e,c),p=[15,174,4,36],f=[15,174,12,36];c.putPushax(),c.putMovRegReg("rbp","rsp"),c.putAndRegU32("rsp",4294967280),c.putSubRegImm("rsp",512),c.putBytes(p),c.putMovRegGsU32Ptr("rbx",s.self),c.putCallAddressWithAlignedArguments(le.replacedMethods.findReplacementFromQuickCode,["rdi","rbx"]),c.putTestRegReg("rax","rax"),c.putJccShortLabel("je","restore_registers","no-hint"),c.putMovRegOffsetPtrReg("rbp",8*8,"rax"),c.putLabel("restore_registers"),c.putBytes(f),c.putMovRegReg("rsp","rbp"),c.putPopax(),c.putJccShortLabel("jne","invoke_replacement","no-hint");do l=d.readOne();while(l<t&&!d.eoi);d.writeAll(),d.eoi||c.putJmpAddress(e.add(l)),c.putLabel("invoke_replacement"),c.putJmpRegOffsetPtr("rdi",i.quickCode),c.flush()}),l}function ic(n,e,t,r,o){let s=ve(o).offset,i=e.and(Un),l;return Memory.patchCode(n,128,a=>{let c=new ThumbWriter(a,{pc:n}),d=new ThumbRelocator(i,c),p=[45,237,16,10],f=[189,236,16,10];c.putPushRegs(["r1","r2","r3","r5","r6","r7","r8","r10","r11","lr"]),c.putBytes(p),c.putSubRegRegImm("sp","sp",8),c.putStrRegRegOffset("r0","sp",0),c.putCallAddressWithArguments(le.replacedMethods.findReplacementFromQuickCode,["r0","r9"]),c.putCmpRegImm("r0",0),c.putBCondLabel("eq","restore_registers"),c.putStrRegRegOffset("r0","sp",0),c.putLabel("restore_registers"),c.putLdrRegRegOffset("r0","sp",0),c.putAddRegRegImm("sp","sp",8),c.putBytes(f),c.putPopRegs(["lr","r11","r10","r8","r7","r6","r5","r3","r2","r1"]),c.putBCondLabel("ne","invoke_replacement");do l=d.readOne();while(l<t&&!d.eoi);d.writeAll(),d.eoi||c.putLdrRegAddress("pc",e.add(l)),c.putLabel("invoke_replacement"),c.putLdrRegRegOffset("pc","r0",s.quickCode),c.flush()}),l}function ac(n,e,t,{availableScratchRegs:r},o){let s=ve(o).offset,i;return Memory.patchCode(n,256,l=>{let a=new Arm64Writer(l,{pc:n}),c=new Arm64Relocator(e,a);a.putPushRegReg("d0","d1"),a.putPushRegReg("d2","d3"),a.putPushRegReg("d4","d5"),a.putPushRegReg("d6","d7"),a.putPushRegReg("x1","x2"),a.putPushRegReg("x3","x4"),a.putPushRegReg("x5","x6"),a.putPushRegReg("x7","x20"),a.putPushRegReg("x21","x22"),a.putPushRegReg("x23","x24"),a.putPushRegReg("x25","x26"),a.putPushRegReg("x27","x28"),a.putPushRegReg("x29","lr"),a.putSubRegRegImm("sp","sp",16),a.putStrRegRegOffset("x0","sp",0),a.putCallAddressWithArguments(le.replacedMethods.findReplacementFromQuickCode,["x0","x19"]),a.putCmpRegReg("x0","xzr"),a.putBCondLabel("eq","restore_registers"),a.putStrRegRegOffset("x0","sp",0),a.putLabel("restore_registers"),a.putLdrRegRegOffset("x0","sp",0),a.putAddRegRegImm("sp","sp",16),a.putPopRegReg("x29","lr"),a.putPopRegReg("x27","x28"),a.putPopRegReg("x25","x26"),a.putPopRegReg("x23","x24"),a.putPopRegReg("x21","x22"),a.putPopRegReg("x7","x20"),a.putPopRegReg("x5","x6"),a.putPopRegReg("x3","x4"),a.putPopRegReg("x1","x2"),a.putPopRegReg("d6","d7"),a.putPopRegReg("d4","d5"),a.putPopRegReg("d2","d3"),a.putPopRegReg("d0","d1"),a.putBCondLabel("ne","invoke_replacement");do i=c.readOne();while(i<t&&!c.eoi);if(c.writeAll(),!c.eoi){let d=Array.from(r)[0];a.putLdrRegAddress(d,e.add(i)),a.putBrReg(d)}a.putLabel("invoke_replacement"),a.putLdrRegRegOffset("x16","x0",s.quickCode),a.putBrReg("x16"),a.flush()}),i}var lc={ia32:no,x64:no,arm:cc,arm64:dc};function no(n,e,t){Memory.patchCode(n,16,r=>{let o=new X86Writer(r,{pc:n});o.putJmpAddress(e),o.flush()})}function cc(n,e,t){let r=n.and(Un);Memory.patchCode(r,16,o=>{let s=new ThumbWriter(o,{pc:r});s.putLdrRegAddress("pc",e.or(1)),s.flush()})}function dc(n,e,t){Memory.patchCode(n,16,r=>{let o=new Arm64Writer(r,{pc:n});t===16?o.putLdrRegAddress("x16",e):o.putAdrpRegAddress("x16",e),o.putBrReg("x16"),o.flush()})}var uc={ia32:5,x64:16,arm:8,arm64:16},Mt=class{constructor(e){this.quickCode=e,this.quickCodeAddress=Process.arch==="arm"?e.and(Un):e,this.redirectSize=0,this.trampoline=null,this.overwrittenPrologue=null,this.overwrittenPrologueLength=0}_canRelocateCode(e,t){let r=Rn[Process.arch],o=Vl[Process.arch],{quickCodeAddress:s}=this,i=new r(s),l=new o(s,i),a;if(Process.arch==="arm64"){let c=new Set(["x16","x17"]);do{let d=l.readOne(),p=new Set(c),{read:f,written:u}=l.input.regsAccessed;for(let _ of[f,u])for(let h of _){let g;h.startsWith("w")?g="x"+h.substring(1):g=h,p.delete(g)}if(p.size===0)break;a=d,c=p}while(a<e&&!l.eoi);t.availableScratchRegs=c}else do a=l.readOne();while(a<e&&!l.eoi);return a>=e}_allocateTrampoline(){Tt===null&&(Tt=nn(S===4?128:256));let e=uc[Process.arch],t,r,o=1,s={};if(S===4||this._canRelocateCode(e,s))t=e,r={};else{let i;Process.arch==="x64"?(t=5,i=ja):Process.arch==="arm64"&&(t=8,i=Fa,o=4096),r={near:this.quickCodeAddress,maxDistance:i}}return this.redirectSize=t,this.trampoline=Tt.allocateSlice(r,o),s}_destroyTrampoline(){Tt.freeSlice(this.trampoline)}activate(e){let t=this._allocateTrampoline(),{trampoline:r,quickCode:o,redirectSize:s}=this,i=rc[Process.arch],l=i(r,o,s,t,e);this.overwrittenPrologueLength=l,this.overwrittenPrologue=Memory.dup(this.quickCodeAddress,l);let a=lc[Process.arch];a(o,r,s)}deactivate(){let{quickCodeAddress:e,overwrittenPrologueLength:t}=this,r=Rn[Process.arch];Memory.patchCode(e,t,o=>{let s=new r(o,{pc:e}),{overwrittenPrologue:i}=this;s.putBytes(i.readByteArray(t)),s.flush()}),this._destroyTrampoline()}};function pc(n){let e=J(),{module:t,artClassLinker:r}=e;return n.equals(r.quickGenericJniTrampoline)||n.equals(r.quickToInterpreterBridgeTrampoline)||n.equals(r.quickResolutionTrampoline)||n.equals(r.quickImtConflictTrampoline)||n.compare(t.base)>=0&&n.compare(t.base.add(t.size))<0}var Pn=class{constructor(e){let t=qn(e);this.methodId=t,this.originalMethod=null,this.hookedMethodId=t,this.replacementMethodId=null,this.interceptor=null}replace(e,t,r,o,s){let{kAccCompileDontBother:i,artNterpEntryPoint:l}=s;this.originalMethod=ro(this.methodId,o);let a=this.originalMethod.accessFlags;if((a&Oa)!==0&&fc()){let u=this.originalMethod.jniCode;this.hookedMethodId=u.add(2*S).readPointer(),this.originalMethod=ro(this.hookedMethodId,o)}let{hookedMethodId:c}=this,d=_c(c,o);this.replacementMethodId=d,Ct(d,{jniCode:e,accessFlags:(a&~(xa|La|$r)|Lt|i)>>>0,quickCode:s.artClassLinker.quickGenericJniTrampoline,interpreterCode:s.artInterpreterToCompiledCodeBridge},o);let p=io|ka|$r;(a&Lt)===0&&(p|=Na),Ct(c,{accessFlags:(a&~p|i)>>>0},o);let f=this.originalMethod.quickCode;if(l!==null&&f.equals(l)&&Ct(c,{quickCode:s.artQuickToInterpreterBridge},o),!pc(f)){let u=new Mt(f);u.activate(o),this.interceptor=u}le.replacedMethods.set(c,d),Jl(c,o)}revert(e){let{hookedMethodId:t,interceptor:r}=this;Ct(t,this.originalMethod,e),le.replacedMethods.delete(t),r!==null&&(r.deactivate(),this.interceptor=null)}resolveTarget(e,t,r,o){return this.hookedMethodId}};function fc(){return re()<28}function ro(n,e){let r=ve(e).offset;return["jniCode","accessFlags","quickCode","interpreterCode"].reduce((o,s)=>{let i=r[s];if(i===void 0)return o;let l=n.add(i),a=s==="accessFlags"?va:Sa;return o[s]=a.call(l),o},{})}function Ct(n,e,t){let o=ve(t).offset;Object.keys(e).forEach(s=>{let i=o[s];if(i===void 0)return;let l=n.add(i);(s==="accessFlags"?wa:Ia).call(l,e[s])})}var jn=class{constructor(e){this.methodId=e,this.originalMethod=null}replace(e,t,r,o,s){let{methodId:i}=this;this.originalMethod=Memory.dup(i,En);let l=r.reduce((f,u)=>f+u.size,0);t&&l++;let a=(i.add(Hr).readU32()|Lt)>>>0,c=l,d=0,p=l;i.add(Hr).writeU32(a),i.add(Ja).writeU16(c),i.add(Ga).writeU16(d),i.add($a).writeU16(p),i.add(Za).writeU32(hc(i)),s.dvmUseJNIBridge(i,e)}revert(e){Memory.copy(this.methodId,this.originalMethod,En)}resolveTarget(e,t,r,o){let s=r.handle.add(ao).readPointer(),i;if(t)i=o.dvmDecodeIndirectRef(s,e.$h);else{let f=e.$borrowClassHandle(r);i=o.dvmDecodeIndirectRef(s,f.value),f.unref(r)}let l;t?l=i.add(za).readPointer():l=i;let a=l.toString(16),c=xt.get(a);if(c===void 0){let f=l.add(Ba),u=l.add(Ua),_=f.readPointer(),h=u.readS32(),g=h*S,b=Memory.alloc(2*g);Memory.copy(b,_,g),f.writePointer(b),c={classObject:l,vtablePtr:f,vtableCountPtr:u,vtable:_,vtableCount:h,shadowVtable:b,shadowVtableCount:h,targetMethods:new Map},xt.set(a,c)}let d=this.methodId.toString(16),p=c.targetMethods.get(d);if(p===void 0){p=Memory.dup(this.originalMethod,En);let f=c.shadowVtableCount++;c.shadowVtable.add(f*S).writePointer(p),p.add(Va).writeU16(f),c.vtableCountPtr.writeS32(c.shadowVtableCount),c.targetMethods.set(d,p)}return p}};function hc(n){if(Process.arch!=="ia32")return Zr;let e=n.add(Ha).readPointer().readCString();if(e===null||e.length===0||e.length>65535)return Zr;let t;switch(e[0]){case"V":t=qa;break;case"F":t=Wa;break;case"D":t=Ka;break;case"J":t=Qa;break;case"Z":case"B":t=tl;break;case"C":t=el;break;case"S":t=Xa;break;default:t=Ya;break}let r=0;for(let o=e.length-1;o>0;o--){let s=e[o];r+=s==="D"||s==="J"?2:1}return t<<nl|r}function _c(n,e){let t=J();if(re()<23){let r=t["art::Thread::CurrentFromGdb"]();return t["art::mirror::Object::Clone"](n,r)}return Memory.dup(n,ve(e).size)}function Wn(n,e,t){_o(n,e,xn,t)}function Kn(n,e){_o(n,e,Ln)}function Qn(n,e){let t=J();if(re()<26)throw new Error("This API is only available on Android >= 8.0");be(n,e,r=>{t["art::Runtime::DeoptimizeBootImage"](t.artRuntime)})}function _o(n,e,t,r){let o=J();if(re()<24)throw new Error("This API is only available on Android >= 7.0");be(n,e,s=>{if(re()<30){if(!o.isJdwpStarted()){let l=mc(o);ul.push(l)}o.isDebuggerActive()||o["art::Dbg::GoActive"]();let i=Memory.alloc(8+S);switch(i.writeU32(t),t){case Ln:break;case xn:i.add(8).writePointer(r);break;default:throw new Error("Unsupported deoptimization kind")}o["art::Dbg::RequestDeoptimization"](i),o["art::Dbg::ManageDeoptimization"]()}else{let i=o.artInstrumentation;if(i===null)throw new Error("Unable to find Instrumentation class in ART; please file a bug");let l=o["art::Instrumentation::EnableDeoptimization"];switch(l!==void 0&&(i.add(il().offset.deoptimizationEnabled).readU8()||l(i)),t){case Ln:o["art::Instrumentation::DeoptimizeEverything"](i,Memory.allocUtf8String("frida"));break;case xn:o["art::Instrumentation::Deoptimize"](i,r);break;default:throw new Error("Unsupported deoptimization kind")}}})}var Fn=class{constructor(){let e=Process.getModuleByName("libart.so"),t=e.getExportByName("_ZN3art4JDWP12JdwpAdbState6AcceptEv"),r=e.getExportByName("_ZN3art4JDWP12JdwpAdbState15ReceiveClientFdEv"),o=oo(),s=oo();this._controlFd=o[0],this._clientFd=s[0];let i=null;i=Interceptor.attach(t,function(l){let a=l[0];Memory.scanSync(a.add(8252),256,"00 ff ff ff ff 00")[0].address.add(1).writeS32(o[1]),i.detach()}),Interceptor.replace(r,new NativeCallback(function(l){return Interceptor.revert(r),s[1]},"int",["pointer"])),Interceptor.flush(),this._handshakeRequest=this._performHandshake()}async _performHandshake(){let e=new UnixInputStream(this._clientFd,{autoClose:!1}),t=new UnixOutputStream(this._clientFd,{autoClose:!1}),r=[74,68,87,80,45,72,97,110,100,115,104,97,107,101];try{await t.writeAll(r),await e.readAll(r.length)}catch{}}};function mc(n){let e=new Fn;n["art::Dbg::SetJdwpAllowed"](1);let t=gc();n["art::Dbg::ConfigureJdwp"](t);let r=n["art::InternalDebuggerControlCallback::StartDebugger"];return r!==void 0?r(NULL):n["art::Dbg::StartJdwp"](),e}function gc(){let n=re()<28?2:3,e=0,t=n,r=!0,o=!1,s=e,i=8+ct+2,l=Memory.alloc(i);return l.writeU32(t).add(4).writeU8(r?1:0).add(1).writeU8(o?1:0).add(1).add(ct).writeU16(s),l}function oo(){In===null&&(In=new NativeFunction(Process.getModuleByName("libc.so").getExportByName("socketpair"),"int",["int","int","int","pointer"]));let n=Memory.alloc(8);if(In(ol,sl,0,n)===-1)throw new Error("Unable to create socketpair for JDWP");return[n.readS32(),n.add(4).readS32()]}function bc(n){let e=_l().offset,t=n.vm.add(e.globalsLock),r=n.vm.add(e.globals),o=n["art::IndirectReferenceTable::Add"],s=n["art::ReaderWriterMutex::ExclusiveLock"],i=n["art::ReaderWriterMutex::ExclusiveUnlock"],l=0;return function(a,c,d){s(t,c);try{return o(r,l,d)}finally{i(t,c)}}}function yc(n){let e=n["art::Thread::DecodeJObject"];if(e===void 0)throw new Error("art::Thread::DecodeJObject is not available; please file a bug");return function(t,r,o){return e(r,o)}}var Ec={ia32:so,x64:so,arm:vc,arm64:Sc};function mo(n,e,t){let r=J(),o=e.handle.readPointer(),s,i=r.find("_ZN3art3JNIILb1EE14ExceptionClearEP7_JNIEnv");i!==null?s=i:s=o.add(Pt).readPointer();let l,a=r.find("_ZN3art3JNIILb1EE10FatalErrorEP7_JNIEnvPKc");a!==null?l=a:l=o.add(Da).readPointer();let c=Ec[Process.arch];if(c===void 0)throw new Error("Not yet implemented for "+Process.arch);let d=null,p=We(n).offset,f=p.exception,u=new Set,_=p.isExceptionReportedToInstrumentation;_!==null&&u.add(_);let h=p.throwLocation;h!==null&&(u.add(h),u.add(h+S),u.add(h+2*S));let g=65536,b=Memory.alloc(g);return Memory.patchCode(b,g,v=>{d=c(v,b,s,l,f,u,t)}),d._code=b,d._callback=t,d}function so(n,e,t,r,o,s,i){let l={},a=new Set,c=[t];for(;c.length>0;){let h=c.shift();if(Object.values(l).some(({begin:M,end:R})=>h.compare(M)>=0&&h.compare(R)<0))continue;let b=h.toString(),v={begin:h},w=null,N=!1;do{if(h.equals(r)){N=!0;break}let M=Instruction.parse(h);w=M;let R=l[M.address.toString()];if(R!==void 0){delete l[R.begin.toString()],l[b]=R,R.begin=v.begin,v=null;break}let k=null;switch(M.mnemonic){case"jmp":k=ptr(M.operands[0].value),N=!0;break;case"je":case"jg":case"jle":case"jne":case"js":k=ptr(M.operands[0].value);break;case"ret":N=!0;break}k!==null&&(a.add(k.toString()),c.push(k),c.sort((x,E)=>x.compare(E))),h=M.next}while(!N);v!==null&&(v.end=w.address.add(w.size),l[b]=v)}let d=Object.keys(l).map(h=>l[h]);d.sort((h,g)=>h.begin.compare(g.begin));let p=l[t.toString()];d.splice(d.indexOf(p),1),d.unshift(p);let f=new X86Writer(n,{pc:e}),u=!1,_=null;return d.forEach(h=>{let g=h.end.sub(h.begin).toInt32(),b=new X86Relocator(h.begin,f),v;for(;(v=b.readOne())!==0;){let w=b.input,{mnemonic:N}=w,M=w.address.toString();a.has(M)&&f.putLabel(M);let R=!0;switch(N){case"jmp":f.putJmpNearLabel(fe(w.operands[0])),R=!1;break;case"je":case"jg":case"jle":case"jne":case"js":f.putJccNearLabel(N,fe(w.operands[0]),"no-hint"),R=!1;break;case"mov":{let[k,x]=w.operands;if(k.type==="mem"&&x.type==="imm"){let E=k.value,L=E.disp;if(L===o&&x.value.valueOf()===0){if(_=E.base,f.putPushfx(),f.putPushax(),f.putMovRegReg("xbp","xsp"),S===4)f.putAndRegU32("esp",4294967280);else{let O=_!=="rdi"?"rdi":"rsi";f.putMovRegU64(O,uint64("0xfffffffffffffff0")),f.putAndRegReg("rsp",O)}f.putCallAddressWithAlignedArguments(i,[_]),f.putMovRegReg("xsp","xbp"),f.putPopax(),f.putPopfx(),u=!0,R=!1}else s.has(L)&&E.base===_&&(R=!1)}break}case"call":{let k=w.operands[0];k.type==="mem"&&k.value.disp===Pt&&(S===4?(f.putPopReg("eax"),f.putMovRegRegOffsetPtr("eax","eax",4),f.putPushReg("eax")):f.putMovRegRegOffsetPtr("rdi","rdi",8),f.putCallAddressWithArguments(i,[]),u=!0,R=!1);break}}if(R?b.writeAll():b.skipOne(),v===g)break}b.dispose()}),f.dispose(),u||Yn(),new NativeFunction(e,"void",["pointer"],W)}function vc(n,e,t,r,o,s,i){let l={},a=new Set,c=ptr(1).not(),d=[t];for(;d.length>0;){let b=d.shift();if(Object.values(l).some(({begin:L,end:O})=>b.compare(L)>=0&&b.compare(O)<0))continue;let w=b.and(c),N=w.toString(),M=b.and(1),R={begin:w},k=null,x=!1,E=0;do{if(b.equals(r)){x=!0;break}let L=Instruction.parse(b),{mnemonic:O}=L;k=L;let P=b.and(c).toString(),D=l[P];if(D!==void 0){delete l[D.begin.toString()],l[N]=D,D.begin=R.begin,R=null;break}let U=E===0,F=null;switch(O){case"b":F=ptr(L.operands[0].value),x=U;break;case"beq.w":case"beq":case"bne":case"bne.w":case"bgt":F=ptr(L.operands[0].value);break;case"cbz":case"cbnz":F=ptr(L.operands[1].value);break;case"pop.w":U&&(x=L.operands.filter(z=>z.value==="pc").length===1);break}switch(O){case"it":E=1;break;case"itt":E=2;break;case"ittt":E=3;break;case"itttt":E=4;break;default:E>0&&E--;break}F!==null&&(a.add(F.toString()),d.push(F.or(M)),d.sort((z,X)=>z.compare(X))),b=L.next}while(!x);R!==null&&(R.end=k.address.add(k.size),l[N]=R)}let p=Object.keys(l).map(b=>l[b]);p.sort((b,v)=>b.begin.compare(v.begin));let f=l[t.and(c).toString()];p.splice(p.indexOf(f),1),p.unshift(f);let u=new ThumbWriter(n,{pc:e}),_=!1,h=null,g=null;return p.forEach(b=>{let v=new ThumbRelocator(b.begin,u),w=b.begin,N=b.end,M=0;do{if(v.readOne()===0)throw new Error("Unexpected end of block");let k=v.input;w=k.address,M=k.size;let{mnemonic:x}=k,E=w.toString();a.has(E)&&u.putLabel(E);let L=!0;switch(x){case"b":u.putBLabel(fe(k.operands[0])),L=!1;break;case"beq.w":u.putBCondLabelWide("eq",fe(k.operands[0])),L=!1;break;case"bne.w":u.putBCondLabelWide("ne",fe(k.operands[0])),L=!1;break;case"beq":case"bne":case"bgt":u.putBCondLabelWide(x.substr(1),fe(k.operands[0])),L=!1;break;case"cbz":{let O=k.operands;u.putCbzRegLabel(O[0].value,fe(O[1])),L=!1;break}case"cbnz":{let O=k.operands;u.putCbnzRegLabel(O[0].value,fe(O[1])),L=!1;break}case"str":case"str.w":{let O=k.operands[1].value,I=O.disp;if(I===o){h=O.base;let P=h!=="r4"?"r4":"r5",D=["r0","r1","r2","r3",P,"r9","r12","lr"];u.putPushRegs(D),u.putMrsRegReg(P,"apsr-nzcvq"),u.putCallAddressWithArguments(i,[h]),u.putMsrRegReg("apsr-nzcvq",P),u.putPopRegs(D),_=!0,L=!1}else s.has(I)&&O.base===h&&(L=!1);break}case"ldr":{let[O,I]=k.operands;if(I.type==="mem"){let P=I.value;P.base[0]==="r"&&P.disp===Pt&&(g=O.value)}break}case"blx":k.operands[0].value===g&&(u.putLdrRegRegOffset("r0","r0",4),u.putCallAddressWithArguments(i,["r0"]),_=!0,g=null,L=!1);break}L?v.writeAll():v.skipOne()}while(!w.add(M).equals(N));v.dispose()}),u.dispose(),_||Yn(),new NativeFunction(e.or(1),"void",["pointer"],W)}function Sc(n,e,t,r,o,s,i){let l={},a=new Set,c=[t];for(;c.length>0;){let b=c.shift();if(Object.values(l).some(({begin:k,end:x})=>b.compare(k)>=0&&b.compare(x)<0))continue;let w=b.toString(),N={begin:b},M=null,R=!1;do{if(b.equals(r)){R=!0;break}let k;try{k=Instruction.parse(b)}catch(L){if(b.readU32()===0){R=!0;break}else throw L}M=k;let x=l[k.address.toString()];if(x!==void 0){delete l[x.begin.toString()],l[w]=x,x.begin=N.begin,N=null;break}let E=null;switch(k.mnemonic){case"b":E=ptr(k.operands[0].value),R=!0;break;case"b.eq":case"b.ne":case"b.le":case"b.gt":E=ptr(k.operands[0].value);break;case"cbz":case"cbnz":E=ptr(k.operands[1].value);break;case"tbz":case"tbnz":E=ptr(k.operands[2].value);break;case"ret":R=!0;break}E!==null&&(a.add(E.toString()),c.push(E),c.sort((L,O)=>L.compare(O))),b=k.next}while(!R);N!==null&&(N.end=M.address.add(M.size),l[w]=N)}let d=Object.keys(l).map(b=>l[b]);d.sort((b,v)=>b.begin.compare(v.begin));let p=l[t.toString()];d.splice(d.indexOf(p),1),d.unshift(p);let f=new Arm64Writer(n,{pc:e});f.putBLabel("performTransition");let u=e.add(f.offset);f.putPushAllXRegisters(),f.putCallAddressWithArguments(i,["x0"]),f.putPopAllXRegisters(),f.putRet(),f.putLabel("performTransition");let _=!1,h=null,g=null;return d.forEach(b=>{let v=b.end.sub(b.begin).toInt32(),w=new Arm64Relocator(b.begin,f),N;for(;(N=w.readOne())!==0;){let M=w.input,{mnemonic:R}=M,k=M.address.toString();a.has(k)&&f.putLabel(k);let x=!0;switch(R){case"b":f.putBLabel(fe(M.operands[0])),x=!1;break;case"b.eq":case"b.ne":case"b.le":case"b.gt":f.putBCondLabel(R.substr(2),fe(M.operands[0])),x=!1;break;case"cbz":{let E=M.operands;f.putCbzRegLabel(E[0].value,fe(E[1])),x=!1;break}case"cbnz":{let E=M.operands;f.putCbnzRegLabel(E[0].value,fe(E[1])),x=!1;break}case"tbz":{let E=M.operands;f.putTbzRegImmLabel(E[0].value,E[1].value.valueOf(),fe(E[2])),x=!1;break}case"tbnz":{let E=M.operands;f.putTbnzRegImmLabel(E[0].value,E[1].value.valueOf(),fe(E[2])),x=!1;break}case"str":{let E=M.operands,L=E[0].value,O=E[1].value,I=O.disp;L==="xzr"&&I===o?(h=O.base,f.putPushRegReg("x0","lr"),f.putMovRegReg("x0",h),f.putBlImm(u),f.putPopRegReg("x0","lr"),_=!0,x=!1):s.has(I)&&O.base===h&&(x=!1);break}case"ldr":{let E=M.operands,L=E[1].value;L.base[0]==="x"&&L.disp===Pt&&(g=E[0].value);break}case"blr":M.operands[0].value===g&&(f.putLdrRegRegOffset("x0","x0",8),f.putCallAddressWithArguments(i,["x0"]),_=!0,g=null,x=!1);break}if(x?w.writeAll():w.skipOne(),N===v)break}w.dispose()}),f.dispose(),_||Yn(),new NativeFunction(e,"void",["pointer"],W)}function Yn(){throw new Error("Unable to parse ART internals; please file a bug")}function wc(n){let e=n["art::ArtMethod::PrettyMethod"];e!==void 0&&(Interceptor.attach(e.impl,le.hooks.ArtMethod.prettyMethod),Interceptor.flush())}function fe(n){return ptr(n.value).toString()}function Ic(n,e){return new NativeFunction(n,"pointer",e,W)}function Tc(n,e){let t=new NativeFunction(n,"void",["pointer"].concat(e),W);return function(){let r=Memory.alloc(S);return t(r,...arguments),r.readPointer()}}function At(n,e){let{arch:t}=Process;switch(t){case"ia32":case"arm64":{let r;t==="ia32"?r=qe(64,i=>{let l=1+e.length,a=l*4;i.putSubRegImm("esp",a);for(let c=0;c!==l;c++){let d=c*4;i.putMovRegRegOffsetPtr("eax","esp",a+4+d),i.putMovRegOffsetPtrReg("esp",d,"eax")}i.putCallAddress(n),i.putAddRegImm("esp",a-4),i.putRet()}):r=qe(32,i=>{i.putMovRegReg("x8","x0"),e.forEach((l,a)=>{i.putMovRegReg("x"+a,"x"+(a+1))}),i.putLdrRegAddress("x7",n),i.putBrReg("x7")});let o=new NativeFunction(r,"void",["pointer"].concat(e),W),s=function(...i){o(...i)};return s.handle=r,s.impl=n,s}default:{let r=new NativeFunction(n,"void",["pointer"].concat(e),W);return r.impl=n,r}}}var Rt=class{constructor(){this.handle=Memory.alloc(ct)}dispose(){let[e,t]=this._getData();t||J().$delete(e)}disposeToString(){let e=this.toString();return this.dispose(),e}toString(){let[e]=this._getData();return e.readUtf8String()}_getData(){let e=this.handle,t=(e.readU8()&1)===0;return[t?e.add(1):e.add(2*S).readPointer(),t]}},Dn=class{$delete(){this.dispose(),J().$delete(this)}constructor(e,t){this.handle=e,this._begin=e,this._end=e.add(S),this._storage=e.add(2*S),this._elementSize=t}init(){this.begin=NULL,this.end=NULL,this.storage=NULL}dispose(){J().$delete(this.begin)}get begin(){return this._begin.readPointer()}set begin(e){this._begin.writePointer(e)}get end(){return this._end.readPointer()}set end(e){this._end.writePointer(e)}get storage(){return this._storage.readPointer()}set storage(e){this._storage.writePointer(e)}get size(){return this.end.sub(this.begin).toInt32()/this._elementSize}},dt=class n extends Dn{static $new(){let e=new n(J().$new(rl));return e.init(),e}constructor(e){super(e,S)}get handles(){let e=[],t=this.begin,r=this.end;for(;!t.equals(r);)e.push(t.readPointer()),t=t.add(S);return e}},Cc=0,go=S,bo=go+4,Ac=-1,Ot=class n{$delete(){this.dispose(),J().$delete(this)}constructor(e){this.handle=e,this._link=e.add(Cc),this._numberOfReferences=e.add(go)}init(e,t){this.link=e,this.numberOfReferences=t}dispose(){}get link(){return new n(this._link.readPointer())}set link(e){this._link.writePointer(e)}get numberOfReferences(){return this._numberOfReferences.readS32()}set numberOfReferences(e){this._numberOfReferences.writeS32(e)}},yo=kc(bo),Eo=yo+S,Lc=Eo+S,ut=class n extends Ot{static $new(e,t){let r=new n(J().$new(Lc));return r.init(e,t),r}constructor(e){super(e),this._self=e.add(yo),this._currentScope=e.add(Eo);let o=(64-S-4-4)/4;this._scopeLayout=lt.layoutForCapacity(o),this._topHandleScopePtr=null}init(e,t){let r=e.add(We(t).offset.topHandleScope);this._topHandleScopePtr=r,super.init(r.readPointer(),Ac),this.self=e,this.currentScope=lt.$new(this._scopeLayout),r.writePointer(this)}dispose(){this._topHandleScopePtr.writePointer(this.link);let e;for(;(e=this.currentScope)!==null;){let t=e.link;e.$delete(),this.currentScope=t}}get self(){return this._self.readPointer()}set self(e){this._self.writePointer(e)}get currentScope(){let e=this._currentScope.readPointer();return e.isNull()?null:new lt(e,this._scopeLayout)}set currentScope(e){this._currentScope.writePointer(e)}newHandle(e){return this.currentScope.newHandle(e)}},lt=class n extends Ot{static $new(e){let t=new n(J().$new(e.size),e);return t.init(),t}constructor(e,t){super(e);let{offset:r}=t;this._refsStorage=e.add(r.refsStorage),this._pos=e.add(r.pos),this._layout=t}init(){super.init(NULL,this._layout.numberOfReferences),this.pos=0}get pos(){return this._pos.readU32()}set pos(e){this._pos.writeU32(e)}newHandle(e){let t=this.pos,r=this._refsStorage.add(t*4);return r.writeS32(e.toInt32()),this.pos=t+1,r}static layoutForCapacity(e){let t=bo,r=t+e*4;return{size:r+4,numberOfReferences:e,offset:{refsStorage:t,pos:r}}}},xc={arm:function(n,e){let t=Process.pageSize,r=Memory.alloc(t);Memory.protect(r,t,"rwx");let o=new NativeCallback(e,"void",["pointer"]);r._onMatchCallback=o;let s=[26625,18947,17041,53505,19202,18200,18288,48896],i=s.length*2,l=i+4,a=l+4;return Memory.patchCode(r,a,function(c){s.forEach((d,p)=>{c.add(p*2).writeU16(d)}),c.add(i).writeS32(n),c.add(l).writePointer(o)}),r.or(1)},arm64:function(n,e){let t=Process.pageSize,r=Memory.alloc(t);Memory.protect(r,t,"rwx");let o=new NativeCallback(e,"void",["pointer"]);r._onMatchCallback=o;let s=[3107979265,402653378,1795293247,1409286241,1476395139,3592355936,3596551104],i=s.length*4,l=i+4,a=l+8;return Memory.patchCode(r,a,function(c){s.forEach((d,p)=>{c.add(p*4).writeU32(d)}),c.add(i).writeS32(n),c.add(l).writePointer(o)}),r}};function Xn(n,e){return(xc[Process.arch]||Nc)(n,e)}function Nc(n,e){return new NativeCallback(t=>{t.readS32()===n&&e(t)},"void",["pointer","pointer"])}function kc(n){let e=n%S;return e!==0?n+S-e:n}var Mc=4,{pointerSize:V}=Process,Rc=256,Oc=65536,Pc=131072,jc=33554432,Fc=67108864,Dc=134217728,Ue={exceptions:"propagate"},Io=ce(Qc),Uc=ce(Xc),Bc=ce(qc),er=null,tr=!1,Ut=new Map,ft=new Map;function Te(){return er===null&&(er=zc()),er}function zc(){let n=Process.enumerateModules().filter(a=>/jvm.(dll|dylib|so)$/.test(a.name));if(n.length===0)return null;let e=n[0],t={flavor:"jvm"},r=Process.platform==="windows"?[{module:e,functions:{JNI_GetCreatedJavaVMs:["JNI_GetCreatedJavaVMs","int",["pointer","int","pointer"]],JVM_Sleep:["JVM_Sleep","void",["pointer","pointer","long"]],"VMThread::execute":["VMThread::execute","void",["pointer"]],"Method::size":["Method::size","int",["int"]],"Method::set_native_function":["Method::set_native_function","void",["pointer","pointer","int"]],"Method::clear_native_function":["Method::clear_native_function","void",["pointer"]],"Method::jmethod_id":["Method::jmethod_id","pointer",["pointer"]],"ClassLoaderDataGraph::classes_do":["ClassLoaderDataGraph::classes_do","void",["pointer"]],"NMethodSweeper::sweep_code_cache":["NMethodSweeper::sweep_code_cache","void",[]],"OopMapCache::flush_obsolete_entries":["OopMapCache::flush_obsolete_entries","void",["pointer"]]},variables:{"VM_RedefineClasses::`vftable'":function(a){this.vtableRedefineClasses=a},"VM_RedefineClasses::doit":function(a){this.redefineClassesDoIt=a},"VM_RedefineClasses::doit_prologue":function(a){this.redefineClassesDoItPrologue=a},"VM_RedefineClasses::doit_epilogue":function(a){this.redefineClassesDoItEpilogue=a},"VM_RedefineClasses::allow_nested_vm_operations":function(a){this.redefineClassesAllow=a},"NMethodSweeper::_traversals":function(a){this.traversals=a},"NMethodSweeper::_should_sweep":function(a){this.shouldSweep=a}},optionals:[]}]:[{module:e,functions:{JNI_GetCreatedJavaVMs:["JNI_GetCreatedJavaVMs","int",["pointer","int","pointer"]],_ZN6Method4sizeEb:["Method::size","int",["int"]],_ZN6Method19set_native_functionEPhb:["Method::set_native_function","void",["pointer","pointer","int"]],_ZN6Method21clear_native_functionEv:["Method::clear_native_function","void",["pointer"]],_ZN6Method24restore_unshareable_infoEP10JavaThread:["Method::restore_unshareable_info","void",["pointer","pointer"]],_ZN6Method24restore_unshareable_infoEP6Thread:["Method::restore_unshareable_info","void",["pointer","pointer"]],_ZN6Method11link_methodERK12methodHandleP10JavaThread:["Method::link_method","void",["pointer","pointer","pointer"]],_ZN6Method10jmethod_idEv:["Method::jmethod_id","pointer",["pointer"]],_ZN6Method10clear_codeEv:function(a){let c=new NativeFunction(a,"void",["pointer"],Ue);this["Method::clear_code"]=function(d){c(d)}},_ZN6Method10clear_codeEb:function(a){let c=new NativeFunction(a,"void",["pointer","int"],Ue),d=0;this["Method::clear_code"]=function(p){c(p,d)}},_ZN18VM_RedefineClasses19mark_dependent_codeEP13InstanceKlass:["VM_RedefineClasses::mark_dependent_code","void",["pointer","pointer"]],_ZN18VM_RedefineClasses20flush_dependent_codeEv:["VM_RedefineClasses::flush_dependent_code","void",[]],_ZN18VM_RedefineClasses20flush_dependent_codeEP13InstanceKlassP6Thread:["VM_RedefineClasses::flush_dependent_code","void",["pointer","pointer","pointer"]],_ZN18VM_RedefineClasses20flush_dependent_codeE19instanceKlassHandleP6Thread:["VM_RedefineClasses::flush_dependent_code","void",["pointer","pointer","pointer"]],_ZN19ResolvedMethodTable21adjust_method_entriesEPb:["ResolvedMethodTable::adjust_method_entries","void",["pointer"]],_ZN15MemberNameTable21adjust_method_entriesEP13InstanceKlassPb:["MemberNameTable::adjust_method_entries","void",["pointer","pointer","pointer"]],_ZN17ConstantPoolCache21adjust_method_entriesEPb:function(a){let c=new NativeFunction(a,"void",["pointer","pointer"],Ue);this["ConstantPoolCache::adjust_method_entries"]=function(d,p,f){c(d,f)}},_ZN17ConstantPoolCache21adjust_method_entriesEP13InstanceKlassPb:function(a){let c=new NativeFunction(a,"void",["pointer","pointer","pointer"],Ue);this["ConstantPoolCache::adjust_method_entries"]=function(d,p,f){c(d,p,f)}},_ZN20ClassLoaderDataGraph10classes_doEP12KlassClosure:["ClassLoaderDataGraph::classes_do","void",["pointer"]],_ZN20ClassLoaderDataGraph22clean_deallocate_listsEb:["ClassLoaderDataGraph::clean_deallocate_lists","void",["int"]],_ZN10JavaThread27thread_from_jni_environmentEP7JNIEnv_:["JavaThread::thread_from_jni_environment","pointer",["pointer"]],_ZN8VMThread7executeEP12VM_Operation:["VMThread::execute","void",["pointer"]],_ZN11OopMapCache22flush_obsolete_entriesEv:["OopMapCache::flush_obsolete_entries","void",["pointer"]],_ZN14NMethodSweeper11force_sweepEv:["NMethodSweeper::force_sweep","void",[]],_ZN14NMethodSweeper16sweep_code_cacheEv:["NMethodSweeper::sweep_code_cache","void",[]],_ZN14NMethodSweeper17sweep_in_progressEv:["NMethodSweeper::sweep_in_progress","bool",[]],JVM_Sleep:["JVM_Sleep","void",["pointer","pointer","long"]]},variables:{_ZN18VM_RedefineClasses14_the_class_oopE:function(a){this.redefineClass=a},_ZN18VM_RedefineClasses10_the_classE:function(a){this.redefineClass=a},_ZN18VM_RedefineClasses25AdjustCpoolCacheAndVtable8do_klassEP5Klass:function(a){this.doKlass=a},_ZN18VM_RedefineClasses22AdjustAndCleanMetadata8do_klassEP5Klass:function(a){this.doKlass=a},_ZTV18VM_RedefineClasses:function(a){this.vtableRedefineClasses=a},_ZN18VM_RedefineClasses4doitEv:function(a){this.redefineClassesDoIt=a},_ZN18VM_RedefineClasses13doit_prologueEv:function(a){this.redefineClassesDoItPrologue=a},_ZN18VM_RedefineClasses13doit_epilogueEv:function(a){this.redefineClassesDoItEpilogue=a},_ZN18VM_RedefineClassesD0Ev:function(a){this.redefineClassesDispose0=a},_ZN18VM_RedefineClassesD1Ev:function(a){this.redefineClassesDispose1=a},_ZNK18VM_RedefineClasses26allow_nested_vm_operationsEv:function(a){this.redefineClassesAllow=a},_ZNK18VM_RedefineClasses14print_on_errorEP12outputStream:function(a){this.redefineClassesOnError=a},_ZN13InstanceKlass33create_new_default_vtable_indicesEiP10JavaThread:function(a){this.createNewDefaultVtableIndices=a},_ZN13InstanceKlass33create_new_default_vtable_indicesEiP6Thread:function(a){this.createNewDefaultVtableIndices=a},_ZN19Abstract_VM_Version19jre_release_versionEv:function(a){let d=new NativeFunction(a,"pointer",[],Ue)().readCString();this.version=d.startsWith("1.8")?8:d.startsWith("9.")?9:parseInt(d.slice(0,2),10),this.versionS=d},_ZN14NMethodSweeper11_traversalsE:function(a){this.traversals=a},_ZN14NMethodSweeper21_sweep_fractions_leftE:function(a){this.fractions=a},_ZN14NMethodSweeper13_should_sweepE:function(a){this.shouldSweep=a}},optionals:["_ZN6Method24restore_unshareable_infoEP10JavaThread","_ZN6Method24restore_unshareable_infoEP6Thread","_ZN6Method11link_methodERK12methodHandleP10JavaThread","_ZN6Method10clear_codeEv","_ZN6Method10clear_codeEb","_ZN18VM_RedefineClasses19mark_dependent_codeEP13InstanceKlass","_ZN18VM_RedefineClasses20flush_dependent_codeEv","_ZN18VM_RedefineClasses20flush_dependent_codeEP13InstanceKlassP6Thread","_ZN18VM_RedefineClasses20flush_dependent_codeE19instanceKlassHandleP6Thread","_ZN19ResolvedMethodTable21adjust_method_entriesEPb","_ZN15MemberNameTable21adjust_method_entriesEP13InstanceKlassPb","_ZN17ConstantPoolCache21adjust_method_entriesEPb","_ZN17ConstantPoolCache21adjust_method_entriesEP13InstanceKlassPb","_ZN20ClassLoaderDataGraph22clean_deallocate_listsEb","_ZN10JavaThread27thread_from_jni_environmentEP7JNIEnv_","_ZN14NMethodSweeper11force_sweepEv","_ZN14NMethodSweeper17sweep_in_progressEv","_ZN18VM_RedefineClasses14_the_class_oopE","_ZN18VM_RedefineClasses10_the_classE","_ZN18VM_RedefineClasses25AdjustCpoolCacheAndVtable8do_klassEP5Klass","_ZN18VM_RedefineClasses22AdjustAndCleanMetadata8do_klassEP5Klass","_ZN18VM_RedefineClassesD0Ev","_ZN18VM_RedefineClassesD1Ev","_ZNK18VM_RedefineClasses14print_on_errorEP12outputStream","_ZN13InstanceKlass33create_new_default_vtable_indicesEiP10JavaThread","_ZN13InstanceKlass33create_new_default_vtable_indicesEiP6Thread","_ZN14NMethodSweeper21_sweep_fractions_leftE"]}],o=[];if(r.forEach(function(a){let c=a.module,d=a.functions||{},p=a.variables||{},f=new Set(a.optionals||[]),u=c.enumerateExports().reduce(function(h,g){return h[g.name]=g,h},{}),_=c.enumerateSymbols().reduce(function(h,g){return h[g.name]=g,h},u);Object.keys(d).forEach(function(h){let g=_[h];if(g!==void 0){let b=d[h];typeof b=="function"?b.call(t,g.address):t[b[0]]=new NativeFunction(g.address,b[1],b[2],Ue)}else f.has(h)||o.push(h)}),Object.keys(p).forEach(function(h){let g=_[h];g!==void 0?p[h].call(t,g.address):f.has(h)||o.push(h)})}),o.length>0)throw new Error("Java API only partially available; please file a bug. Missing: "+o.join(", "));let s=Memory.alloc(V),i=Memory.alloc(Mc);if(de("JNI_GetCreatedJavaVMs",t.JNI_GetCreatedJavaVMs(s,1,i)),i.readInt()===0)return null;t.vm=s.readPointer();let l=Process.platform==="windows"?{$new:["??2@YAPEAX_K@Z","pointer",["ulong"]],$delete:["??3@YAXPEAX@Z","void",["pointer"]]}:{$new:["_Znwm","pointer",["ulong"]],$delete:["_ZdlPv","void",["pointer"]]};for(let[a,[c,d,p]]of Object.entries(l)){let f=Module.findGlobalExportByName(c);if(f===null&&(f=DebugSymbol.fromName(c).address,f.isNull()))throw new Error(`unable to find C++ allocator API, missing: '${c}'`);t[a]=new NativeFunction(f,d,p,Ue)}return t.jvmti=Vc(t),t["JavaThread::thread_from_jni_environment"]===void 0&&(t["JavaThread::thread_from_jni_environment"]=Gc(t)),t}function Vc(n){let e=new Ie(n),t;return e.perform(()=>{let r=e.tryGetEnvHandle(Et.v1_0);if(r===null)throw new Error("JVMTI not available");t=new xe(r,e);let o=Memory.alloc(8);o.writeU64(vt.canTagObjects);let s=t.addCapabilities(o);de("getEnvJvmti::AddCapabilities",s)}),t}var Jc={x64:$c};function Gc(n){let e=null,t=Jc[Process.arch];if(t!==void 0){let o=new Ie(n).perform(s=>s.handle.readPointer().add(6*V).readPointer());e=Me(o,t,{limit:11})}return e===null?()=>{throw new Error("Unable to make thread_from_jni_environment() helper for the current architecture")}:r=>r.add(e)}function $c(n){if(n.mnemonic!=="lea")return null;let{base:e,disp:t}=n.operands[1].value;return e==="rdi"&&t<0?t:null}function To(n,e){}var nr=class{constructor(e){this.methodId=e,this.method=e.readPointer(),this.originalMethod=null,this.newMethod=null,this.resolved=null,this.impl=null,this.key=e.toString(16)}replace(e,t,r,o,s){let{key:i}=this,l=ft.get(i);l!==void 0&&(ft.delete(i),this.method=l.method,this.originalMethod=l.originalMethod,this.newMethod=l.newMethod,this.resolved=l.resolved),this.impl=e,Ut.set(i,this),vo(o)}revert(e){let{key:t}=this;Ut.delete(t),ft.set(t,this),vo(e)}resolveTarget(e,t,r,o){let{resolved:s,originalMethod:i,methodId:l}=this;if(s!==null)return s;if(i===null)return l;i.oldMethod.vtableIndexPtr.writeS32(-2);let c=Memory.alloc(V);return c.writePointer(this.method),this.resolved=c,c}};function vo(n){tr||(tr=!0,Script.nextTick(Hc,n))}function Hc(n){let e=new Map(Ut),t=new Map(ft);Ut.clear(),ft.clear(),tr=!1,n.perform(r=>{let o=Te(),s=o["JavaThread::thread_from_jni_environment"](r.handle),i=!1;Co(()=>{e.forEach(l=>{let{method:a,originalMethod:c,impl:d,methodId:p,newMethod:f}=l;c===null?(l.originalMethod=Lo(a),l.newMethod=Wc(a,d,s),So(l.newMethod,p,s)):o["Method::set_native_function"](f.method,d,0)}),t.forEach(l=>{let{originalMethod:a,methodId:c,newMethod:d}=l;if(a!==null){Kc(a);let p=a.oldMethod;p.oldMethod=d,So(p,c,s),i=!0}})}),i&&Zc(r.handle)})}function Zc(n){let{fractions:e,shouldSweep:t,traversals:r,"NMethodSweeper::sweep_code_cache":o,"NMethodSweeper::sweep_in_progress":s,"NMethodSweeper::force_sweep":i,JVM_Sleep:l}=Te();if(i!==void 0)Thread.sleep(.05),i(),Thread.sleep(.05),i();else{let a=r.readS64(),c=a+2;for(;c>a;)e.writeS32(1),l(n,NULL,50),s()||Co(()=>{Thread.sleep(.05)}),t.readU8()===0&&(e.writeS32(1),o()),a=r.readS64()}}function Co(n,e,t){let{execute:r,vtable:o,vtableSize:s,doItOffset:i,prologueOffset:l,epilogueOffset:a}=Bc(),c=Memory.dup(o,s),d=Memory.alloc(V*25);d.writePointer(c);let p=new NativeCallback(n,"void",["pointer"]);c.add(i).writePointer(p);let f=null;e!==void 0&&(f=new NativeCallback(e,"int",["pointer"]),c.add(l).writePointer(f));let u=null;t!==void 0&&(u=new NativeCallback(t,"void",["pointer"]),c.add(a).writePointer(u)),r(d)}function qc(){let{vtableRedefineClasses:n,redefineClassesDoIt:e,redefineClassesDoItPrologue:t,redefineClassesDoItEpilogue:r,redefineClassesOnError:o,redefineClassesAllow:s,redefineClassesDispose0:i,redefineClassesDispose1:l,"VMThread::execute":a}=Te(),c=n.add(2*V),d=15*V,p=Memory.dup(c,d),f=new NativeCallback(()=>{},"void",["pointer"]),u,_,h;for(let g=0;g!==d;g+=V){let b=p.add(g),v=b.readPointer();o!==void 0&&v.equals(o)||i!==void 0&&v.equals(i)||l!==void 0&&v.equals(l)?b.writePointer(f):v.equals(e)?u=g:v.equals(t)?(_=g,b.writePointer(s)):v.equals(r)&&(h=g,b.writePointer(f))}return{execute:a,emptyCallback:f,vtable:p,vtableSize:d,doItOffset:u,prologueOffset:_,epilogueOffset:h}}function Ao(n){return new nr(n)}function So(n,e,t){let{method:r,oldMethod:o}=n,s=Te();n.methodsArray.add(n.methodIndex*V).writePointer(r),n.vtableIndex>=0&&n.vtable.add(n.vtableIndex*V).writePointer(r),e.writePointer(r),o.accessFlagsPtr.writeU32((o.accessFlags|Oc|Pc)>>>0);let i=s["OopMapCache::flush_obsolete_entries"];if(i!==void 0){let{oopMapCache:_}=n;_.isNull()||i(_)}let l=s["VM_RedefineClasses::mark_dependent_code"],a=s["VM_RedefineClasses::flush_dependent_code"];l!==void 0?(l(NULL,n.instanceKlass),a()):a(NULL,n.instanceKlass,t);let c=Memory.alloc(1);c.writeU8(1),s["ConstantPoolCache::adjust_method_entries"](n.cache,n.instanceKlass,c);let d=Memory.alloc(3*V),p=Memory.alloc(V);p.writePointer(s.doKlass),d.writePointer(p),d.add(V).writePointer(t),d.add(2*V).writePointer(t),s.redefineClass!==void 0&&s.redefineClass.writePointer(n.instanceKlass),s["ClassLoaderDataGraph::classes_do"](d);let f=s["ResolvedMethodTable::adjust_method_entries"];if(f!==void 0)f(c);else{let{memberNames:_}=n;if(!_.isNull()){let h=s["MemberNameTable::adjust_method_entries"];h!==void 0&&h(_,n.instanceKlass,c)}}let u=s["ClassLoaderDataGraph::clean_deallocate_lists"];u!==void 0&&u(0)}function Wc(n,e,t){let r=Te(),o=Lo(n);o.constPtr.writePointer(o.const);let s=(o.accessFlags|Rc|jc|Fc|Dc)>>>0;if(o.accessFlagsPtr.writeU32(s),o.signatureHandler.writePointer(NULL),o.adapter.writePointer(NULL),o.i2iEntry.writePointer(NULL),r["Method::clear_code"](o.method),o.dataPtr.writePointer(NULL),o.countersPtr.writePointer(NULL),o.stackmapPtr.writePointer(NULL),r["Method::clear_native_function"](o.method),r["Method::set_native_function"](o.method,e,0),r["Method::restore_unshareable_info"](o.method,t),r.version>=17){let i=Memory.alloc(2*V);i.writePointer(o.method),i.add(V).writePointer(t),r["Method::link_method"](o.method,i,t)}return o}function Lo(n){let e=Io(),t=n.add(e.method.constMethodOffset).readPointer(),r=t.add(e.constMethod.sizeOffset).readS32()*V,o=Memory.alloc(r+e.method.size);Memory.copy(o,t,r);let s=o.add(r);Memory.copy(s,n,e.method.size);let i=wo(s,o,r),l=wo(n,t,r);return i.oldMethod=l,i}function wo(n,e,t){let r=Te(),o=Io(),s=n.add(o.method.constMethodOffset),i=n.add(o.method.methodDataOffset),l=n.add(o.method.methodCountersOffset),a=n.add(o.method.accessFlagsOffset),c=a.readU32(),d=o.getAdapterPointer(n,e),p=n.add(o.method.i2iEntryOffset),f=n.add(o.method.signatureHandlerOffset),u=e.add(o.constMethod.constantPoolOffset).readPointer(),_=e.add(o.constMethod.stackmapDataOffset),h=u.add(o.constantPool.instanceKlassOffset).readPointer(),g=u.add(o.constantPool.cacheOffset).readPointer(),b=Uc(),v=h.add(b.methodsOffset).readPointer(),w=v.readS32(),N=v.add(V),M=e.add(o.constMethod.methodIdnumOffset).readU16(),R=n.add(o.method.vtableIndexOffset),k=R.readS32(),x=h.add(b.vtableOffset),E=h.add(b.oopMapCacheOffset).readPointer(),L=r.version>=10?h.add(b.memberNamesOffset).readPointer():NULL;return{method:n,methodSize:o.method.size,const:e,constSize:t,constPtr:s,dataPtr:i,countersPtr:l,stackmapPtr:_,instanceKlass:h,methodsArray:N,methodsCount:w,methodIndex:M,vtableIndex:k,vtableIndexPtr:R,vtable:x,accessFlags:c,accessFlagsPtr:a,adapter:d,i2iEntry:p,signatureHandler:f,memberNames:L,cache:g,oopMapCache:E}}function Kc(n){let{oldMethod:e}=n;e.accessFlagsPtr.writeU32(e.accessFlags),e.vtableIndexPtr.writeS32(e.vtableIndex)}function Qc(){let n=Te(),{version:e}=n,t;e>=17?t="method:early":e>=9&&e<=16?t="const-method":t="method:late";let o=n["Method::size"](1)*V,s=V,i=2*V,l=3*V,a=4*V,c=t==="method:early"?V:0,d=a+c,p=d+4,f=p+4+8,u=f+V,_=c!==0?a:u,h=o-2*V,g=o-V,b=8,v=b+V,w=v+V,N=t==="const-method"?V:0,M=w+N,R=M+14,k=2*V,x=3*V;return{getAdapterPointer:N!==0?function(L,O){return O.add(w)}:function(L,O){return L.add(_)},method:{size:o,constMethodOffset:s,methodDataOffset:i,methodCountersOffset:l,accessFlagsOffset:d,vtableIndexOffset:p,i2iEntryOffset:f,nativeFunctionOffset:h,signatureHandlerOffset:g},constMethod:{constantPoolOffset:b,stackmapDataOffset:v,sizeOffset:M,methodIdnumOffset:R},constantPool:{cacheOffset:k,instanceKlassOffset:x}}}var Yc={x64:ed};function Xc(){let{version:n,createNewDefaultVtableIndices:e}=Te(),t=Yc[Process.arch];if(t===void 0)throw new Error(`Missing vtable offset parser for ${Process.arch}`);let r=Me(e,t,{limit:32});if(r===null)throw new Error("Unable to deduce vtable offset");let o=n>=10&&n<=11||n>=15?17:18,s=r-7*V,i=r-17*V,l=r-o*V;return{vtableOffset:r,methodsOffset:s,memberNamesOffset:i,oopMapCacheOffset:l}}function ed(n){if(n.mnemonic!=="mov")return null;let e=n.operands[0];if(e.type!=="mem")return null;let{value:t}=e;if(t.scale!==1)return null;let{disp:r}=t;return r<256?null:r+16}var xo=J;try{pt()}catch{xo=Te}var No=xo;var td=`#include <json-glib/json-glib.h>
#include <string.h>

#define kAccStatic 0x0008
#define kAccConstructor 0x00010000

typedef struct _Model Model;
typedef struct _EnumerateMethodsContext EnumerateMethodsContext;

typedef struct _JavaApi JavaApi;
typedef struct _JavaClassApi JavaClassApi;
typedef struct _JavaMethodApi JavaMethodApi;
typedef struct _JavaFieldApi JavaFieldApi;

typedef struct _JNIEnv JNIEnv;
typedef guint8 jboolean;
typedef gint32 jint;
typedef jint jsize;
typedef gpointer jobject;
typedef jobject jclass;
typedef jobject jstring;
typedef jobject jarray;
typedef jarray jobjectArray;
typedef gpointer jfieldID;
typedef gpointer jmethodID;

typedef struct _jvmtiEnv jvmtiEnv;
typedef enum
{
  JVMTI_ERROR_NONE = 0
} jvmtiError;

typedef struct _ArtApi ArtApi;
typedef guint32 ArtHeapReference;
typedef struct _ArtObject ArtObject;
typedef struct _ArtClass ArtClass;
typedef struct _ArtClassLinker ArtClassLinker;
typedef struct _ArtClassVisitor ArtClassVisitor;
typedef struct _ArtClassVisitorVTable ArtClassVisitorVTable;
typedef struct _ArtMethod ArtMethod;
typedef struct _ArtString ArtString;

typedef union _StdString StdString;
typedef struct _StdStringShort StdStringShort;
typedef struct _StdStringLong StdStringLong;

typedef void (* ArtVisitClassesFunc) (ArtClassLinker * linker, ArtClassVisitor * visitor);
typedef const char * (* ArtGetClassDescriptorFunc) (ArtClass * klass, StdString * storage);
typedef void (* ArtPrettyMethodFunc) (StdString * result, ArtMethod * method, jboolean with_signature);

struct _Model
{
  GHashTable * members;
};

struct _EnumerateMethodsContext
{
  GPatternSpec * class_query;
  GPatternSpec * method_query;
  jboolean include_signature;
  jboolean ignore_case;
  jboolean skip_system_classes;
  GHashTable * groups;
};

struct _JavaClassApi
{
  jmethodID get_declared_methods;
  jmethodID get_declared_fields;
};

struct _JavaMethodApi
{
  jmethodID get_name;
  jmethodID get_modifiers;
};

struct _JavaFieldApi
{
  jmethodID get_name;
  jmethodID get_modifiers;
};

struct _JavaApi
{
  JavaClassApi clazz;
  JavaMethodApi method;
  JavaFieldApi field;
};

struct _JNIEnv
{
  gpointer * functions;
};

struct _jvmtiEnv
{
  gpointer * functions;
};

struct _ArtApi
{
  gboolean available;

  guint class_offset_ifields;
  guint class_offset_methods;
  guint class_offset_sfields;
  guint class_offset_copied_methods_offset;

  guint method_size;
  guint method_offset_access_flags;

  guint field_size;
  guint field_offset_access_flags;

  guint alignment_padding;

  ArtClassLinker * linker;
  ArtVisitClassesFunc visit_classes;
  ArtGetClassDescriptorFunc get_class_descriptor;
  ArtPrettyMethodFunc pretty_method;

  void (* free) (gpointer mem);
};

struct _ArtObject
{
  ArtHeapReference klass;
  ArtHeapReference monitor;
};

struct _ArtClass
{
  ArtObject parent;

  ArtHeapReference class_loader;
};

struct _ArtClassVisitor
{
  ArtClassVisitorVTable * vtable;
  gpointer user_data;
};

struct _ArtClassVisitorVTable
{
  void (* reserved1) (ArtClassVisitor * self);
  void (* reserved2) (ArtClassVisitor * self);
  jboolean (* visit) (ArtClassVisitor * self, ArtClass * klass);
};

struct _ArtString
{
  ArtObject parent;

  gint32 count;
  guint32 hash_code;

  union
  {
    guint16 value[0];
    guint8 value_compressed[0];
  };
};

struct _StdStringShort
{
  guint8 size;
  gchar data[(3 * sizeof (gpointer)) - sizeof (guint8)];
};

struct _StdStringLong
{
  gsize capacity;
  gsize size;
  gchar * data;
};

union _StdString
{
  StdStringShort s;
  StdStringLong l;
};

static void model_add_method (Model * self, const gchar * name, jmethodID id, jint modifiers);
static void model_add_field (Model * self, const gchar * name, jfieldID id, jint modifiers);
static void model_free (Model * model);

static jboolean collect_matching_class_methods (ArtClassVisitor * self, ArtClass * klass);
static gchar * finalize_method_groups_to_json (GHashTable * groups);
static GPatternSpec * make_pattern_spec (const gchar * pattern, jboolean ignore_case);
static gchar * class_name_from_signature (const gchar * signature);
static gchar * format_method_signature (const gchar * name, const gchar * signature);
static void append_type (GString * output, const gchar ** type);

static gpointer read_art_array (gpointer object_base, guint field_offset, guint length_size, guint * length);

static void std_string_destroy (StdString * str);
static gchar * std_string_c_str (StdString * self);

extern GMutex lock;
extern GArray * models;
extern JavaApi java_api;
extern ArtApi art_api;

void
init (void)
{
  g_mutex_init (&lock);
  models = g_array_new (FALSE, FALSE, sizeof (Model *));
}

void
finalize (void)
{
  guint n, i;

  n = models->len;
  for (i = 0; i != n; i++)
  {
    Model * model = g_array_index (models, Model *, i);
    model_free (model);
  }

  g_array_unref (models);
  g_mutex_clear (&lock);
}

Model *
model_new (jclass class_handle,
           gpointer class_object,
           JNIEnv * env)
{
  Model * model;
  GHashTable * members;
  gpointer * funcs = env->functions;
  jmethodID (* from_reflected_method) (JNIEnv *, jobject) = funcs[7];
  jfieldID (* from_reflected_field) (JNIEnv *, jobject) = funcs[8];
  jobject (* to_reflected_method) (JNIEnv *, jclass, jmethodID, jboolean) = funcs[9];
  jobject (* to_reflected_field) (JNIEnv *, jclass, jfieldID, jboolean) = funcs[12];
  void (* delete_local_ref) (JNIEnv *, jobject) = funcs[23];
  jobject (* call_object_method) (JNIEnv *, jobject, jmethodID, ...) = funcs[34];
  jint (* call_int_method) (JNIEnv *, jobject, jmethodID, ...) = funcs[49];
  const char * (* get_string_utf_chars) (JNIEnv *, jstring, jboolean *) = funcs[169];
  void (* release_string_utf_chars) (JNIEnv *, jstring, const char *) = funcs[170];
  jsize (* get_array_length) (JNIEnv *, jarray) = funcs[171];
  jobject (* get_object_array_element) (JNIEnv *, jobjectArray, jsize) = funcs[173];
  jsize n, i;

  model = g_new (Model, 1);

  members = g_hash_table_new_full (g_str_hash, g_str_equal, g_free, g_free);
  model->members = members;

  if (art_api.available)
  {
    gpointer elements;
    guint n, i;
    const guint field_arrays[] = {
      art_api.class_offset_ifields,
      art_api.class_offset_sfields
    };
    guint field_array_cursor;
    gboolean merged_fields = art_api.class_offset_sfields == 0;

    elements = read_art_array (class_object, art_api.class_offset_methods, sizeof (gsize), NULL);
    n = *(guint16 *) (class_object + art_api.class_offset_copied_methods_offset);
    for (i = 0; i != n; i++)
    {
      jmethodID id;
      guint32 access_flags;
      jboolean is_static;
      jobject method, name;
      const char * name_str;
      jint modifiers;

      id = elements + (i * art_api.method_size);

      access_flags = *(guint32 *) (id + art_api.method_offset_access_flags);
      if ((access_flags & kAccConstructor) != 0)
        continue;
      is_static = (access_flags & kAccStatic) != 0;
      method = to_reflected_method (env, class_handle, id, is_static);
      name = call_object_method (env, method, java_api.method.get_name);
      name_str = get_string_utf_chars (env, name, NULL);
      modifiers = access_flags & 0xffff;

      model_add_method (model, name_str, id, modifiers);

      release_string_utf_chars (env, name, name_str);
      delete_local_ref (env, name);
      delete_local_ref (env, method);
    }

    for (field_array_cursor = 0; field_array_cursor != G_N_ELEMENTS (field_arrays); field_array_cursor++)
    {
      jboolean is_static;

      if (field_arrays[field_array_cursor] == 0)
        continue;

      if (!merged_fields)
        is_static = field_array_cursor == 1;

      elements = read_art_array (class_object, field_arrays[field_array_cursor], sizeof (guint32), &n);
      for (i = 0; i != n; i++)
      {
        jfieldID id;
        guint32 access_flags;
        jobject field, name;
        const char * name_str;
        jint modifiers;

        id = elements + (i * art_api.field_size);

        access_flags = *(guint32 *) (id + art_api.field_offset_access_flags);
        if (merged_fields)
          is_static = (access_flags & kAccStatic) != 0;
        field = to_reflected_field (env, class_handle, id, is_static);
        name = call_object_method (env, field, java_api.field.get_name);
        name_str = get_string_utf_chars (env, name, NULL);
        modifiers = access_flags & 0xffff;

        model_add_field (model, name_str, id, modifiers);

        release_string_utf_chars (env, name, name_str);
        delete_local_ref (env, name);
        delete_local_ref (env, field);
      }
    }
  }
  else
  {
    jobject elements;

    elements = call_object_method (env, class_handle, java_api.clazz.get_declared_methods);
    n = get_array_length (env, elements);
    for (i = 0; i != n; i++)
    {
      jobject method, name;
      const char * name_str;
      jmethodID id;
      jint modifiers;

      method = get_object_array_element (env, elements, i);
      name = call_object_method (env, method, java_api.method.get_name);
      name_str = get_string_utf_chars (env, name, NULL);
      id = from_reflected_method (env, method);
      modifiers = call_int_method (env, method, java_api.method.get_modifiers);

      model_add_method (model, name_str, id, modifiers);

      release_string_utf_chars (env, name, name_str);
      delete_local_ref (env, name);
      delete_local_ref (env, method);
    }
    delete_local_ref (env, elements);

    elements = call_object_method (env, class_handle, java_api.clazz.get_declared_fields);
    n = get_array_length (env, elements);
    for (i = 0; i != n; i++)
    {
      jobject field, name;
      const char * name_str;
      jfieldID id;
      jint modifiers;

      field = get_object_array_element (env, elements, i);
      name = call_object_method (env, field, java_api.field.get_name);
      name_str = get_string_utf_chars (env, name, NULL);
      id = from_reflected_field (env, field);
      modifiers = call_int_method (env, field, java_api.field.get_modifiers);

      model_add_field (model, name_str, id, modifiers);

      release_string_utf_chars (env, name, name_str);
      delete_local_ref (env, name);
      delete_local_ref (env, field);
    }
    delete_local_ref (env, elements);
  }

  g_mutex_lock (&lock);
  g_array_append_val (models, model);
  g_mutex_unlock (&lock);

  return model;
}

static void
model_add_method (Model * self,
                  const gchar * name,
                  jmethodID id,
                  jint modifiers)
{
  GHashTable * members = self->members;
  gchar * key, type;
  const gchar * value;

  if (name[0] == '$')
    key = g_strdup_printf ("_%s", name);
  else
    key = g_strdup (name);

  type = (modifiers & kAccStatic) != 0 ? 's' : 'i';

  value = g_hash_table_lookup (members, key);
  if (value == NULL)
    g_hash_table_insert (members, key, g_strdup_printf ("m:%c0x%zx", type, id));
  else
    g_hash_table_insert (members, key, g_strdup_printf ("%s:%c0x%zx", value, type, id));
}

static void
model_add_field (Model * self,
                 const gchar * name,
                 jfieldID id,
                 jint modifiers)
{
  GHashTable * members = self->members;
  gchar * key, type;

  if (name[0] == '$')
    key = g_strdup_printf ("_%s", name);
  else
    key = g_strdup (name);
  while (g_hash_table_contains (members, key))
  {
    gchar * new_key = g_strdup_printf ("_%s", key);
    g_free (key);
    key = new_key;
  }

  type = (modifiers & kAccStatic) != 0 ? 's' : 'i';

  g_hash_table_insert (members, key, g_strdup_printf ("f:%c0x%zx", type, id));
}

static void
model_free (Model * model)
{
  g_hash_table_unref (model->members);

  g_free (model);
}

gboolean
model_has (Model * self,
           const gchar * member)
{
  return g_hash_table_contains (self->members, member);
}

const gchar *
model_find (Model * self,
            const gchar * member)
{
  return g_hash_table_lookup (self->members, member);
}

gchar *
model_list (Model * self)
{
  GString * result;
  GHashTableIter iter;
  guint i;
  const gchar * name;

  result = g_string_sized_new (128);

  g_string_append_c (result, '[');

  g_hash_table_iter_init (&iter, self->members);
  for (i = 0; g_hash_table_iter_next (&iter, (gpointer *) &name, NULL); i++)
  {
    if (i > 0)
      g_string_append_c (result, ',');

    g_string_append_c (result, '"');
    g_string_append (result, name);
    g_string_append_c (result, '"');
  }

  g_string_append_c (result, ']');

  return g_string_free (result, FALSE);
}

gchar *
enumerate_methods_art (const gchar * class_query,
                       const gchar * method_query,
                       jboolean include_signature,
                       jboolean ignore_case,
                       jboolean skip_system_classes)
{
  gchar * result;
  EnumerateMethodsContext ctx;
  ArtClassVisitor visitor;
  ArtClassVisitorVTable visitor_vtable = { NULL, };

  ctx.class_query = make_pattern_spec (class_query, ignore_case);
  ctx.method_query = make_pattern_spec (method_query, ignore_case);
  ctx.include_signature = include_signature;
  ctx.ignore_case = ignore_case;
  ctx.skip_system_classes = skip_system_classes;
  ctx.groups = g_hash_table_new_full (NULL, NULL, NULL, NULL);

  visitor.vtable = &visitor_vtable;
  visitor.user_data = &ctx;

  visitor_vtable.visit = collect_matching_class_methods;

  art_api.visit_classes (art_api.linker, &visitor);

  result = finalize_method_groups_to_json (ctx.groups);

  g_hash_table_unref (ctx.groups);
  g_pattern_spec_free (ctx.method_query);
  g_pattern_spec_free (ctx.class_query);

  return result;
}

static jboolean
collect_matching_class_methods (ArtClassVisitor * self,
                                ArtClass * klass)
{
  EnumerateMethodsContext * ctx = self->user_data;
  const char * descriptor;
  StdString descriptor_storage = { 0, };
  gchar * class_name = NULL;
  gchar * class_name_copy = NULL;
  const gchar * normalized_class_name;
  JsonBuilder * group;
  size_t class_name_length;
  GHashTable * seen_method_names;
  gpointer elements;
  guint n, i;

  if (ctx->skip_system_classes && klass->class_loader == 0)
    goto skip_class;

  descriptor = art_api.get_class_descriptor (klass, &descriptor_storage);
  if (descriptor[0] != 'L')
    goto skip_class;

  class_name = class_name_from_signature (descriptor);

  if (ctx->ignore_case)
  {
    class_name_copy = g_utf8_strdown (class_name, -1);
    normalized_class_name = class_name_copy;
  }
  else
  {
    normalized_class_name = class_name;
  }

  if (!g_pattern_match_string (ctx->class_query, normalized_class_name))
    goto skip_class;

  group = NULL;
  class_name_length = strlen (class_name);
  seen_method_names = ctx->include_signature ? NULL : g_hash_table_new_full (g_str_hash, g_str_equal, g_free, NULL);

  elements = read_art_array (klass, art_api.class_offset_methods, sizeof (gsize), NULL);
  n = *(guint16 *) ((gpointer) klass + art_api.class_offset_copied_methods_offset);
  for (i = 0; i != n; i++)
  {
    ArtMethod * method;
    guint32 access_flags;
    jboolean is_constructor;
    StdString method_name = { 0, };
    const gchar * bare_method_name;
    gchar * bare_method_name_copy = NULL;
    const gchar * normalized_method_name;
    gchar * normalized_method_name_copy = NULL;

    method = elements + (i * art_api.method_size);

    access_flags = *(guint32 *) ((gpointer) method + art_api.method_offset_access_flags);
    is_constructor = (access_flags & kAccConstructor) != 0;

    art_api.pretty_method (&method_name, method, ctx->include_signature);
    bare_method_name = std_string_c_str (&method_name);
    if (ctx->include_signature)
    {
      const gchar * return_type_end, * name_begin;
      GString * name;

      return_type_end = strchr (bare_method_name, ' ');
      name_begin = return_type_end + 1 + class_name_length + 1;
      if (is_constructor && g_str_has_prefix (name_begin, "<clinit>"))
        goto skip_method;

      name = g_string_sized_new (64);

      if (is_constructor)
      {
        g_string_append (name, "$init");
        g_string_append (name, strchr (name_begin, '>') + 1);
      }
      else
      {
        g_string_append (name, name_begin);
      }
      g_string_append (name, ": ");
      g_string_append_len (name, bare_method_name, return_type_end - bare_method_name);

      bare_method_name_copy = g_string_free (name, FALSE);
      bare_method_name = bare_method_name_copy;
    }
    else
    {
      const gchar * name_begin;

      name_begin = bare_method_name + class_name_length + 1;
      if (is_constructor && strcmp (name_begin, "<clinit>") == 0)
        goto skip_method;

      if (is_constructor)
        bare_method_name = "$init";
      else
        bare_method_name += class_name_length + 1;
    }

    if (seen_method_names != NULL && g_hash_table_contains (seen_method_names, bare_method_name))
      goto skip_method;

    if (ctx->ignore_case)
    {
      normalized_method_name_copy = g_utf8_strdown (bare_method_name, -1);
      normalized_method_name = normalized_method_name_copy;
    }
    else
    {
      normalized_method_name = bare_method_name;
    }

    if (!g_pattern_match_string (ctx->method_query, normalized_method_name))
      goto skip_method;

    if (group == NULL)
    {
      group = g_hash_table_lookup (ctx->groups, GUINT_TO_POINTER (klass->class_loader));
      if (group == NULL)
      {
        group = json_builder_new_immutable ();
        g_hash_table_insert (ctx->groups, GUINT_TO_POINTER (klass->class_loader), group);

        json_builder_begin_object (group);

        json_builder_set_member_name (group, "loader");
        json_builder_add_int_value (group, klass->class_loader);

        json_builder_set_member_name (group, "classes");
        json_builder_begin_array (group);
      }

      json_builder_begin_object (group);

      json_builder_set_member_name (group, "name");
      json_builder_add_string_value (group, class_name);

      json_builder_set_member_name (group, "methods");
      json_builder_begin_array (group);
    }

    json_builder_add_string_value (group, bare_method_name);

    if (seen_method_names != NULL)
      g_hash_table_add (seen_method_names, g_strdup (bare_method_name));

skip_method:
    g_free (normalized_method_name_copy);
    g_free (bare_method_name_copy);
    std_string_destroy (&method_name);
  }

  if (seen_method_names != NULL)
    g_hash_table_unref (seen_method_names);

  if (group == NULL)
    goto skip_class;

  json_builder_end_array (group);
  json_builder_end_object (group);

skip_class:
  g_free (class_name_copy);
  g_free (class_name);
  std_string_destroy (&descriptor_storage);

  return TRUE;
}

gchar *
enumerate_methods_jvm (const gchar * class_query,
                       const gchar * method_query,
                       jboolean include_signature,
                       jboolean ignore_case,
                       jboolean skip_system_classes,
                       JNIEnv * env,
                       jvmtiEnv * jvmti)
{
  gchar * result;
  GPatternSpec * class_pattern, * method_pattern;
  GHashTable * groups;
  gpointer * ef = env->functions;
  jobject (* new_global_ref) (JNIEnv *, jobject) = ef[21];
  void (* delete_local_ref) (JNIEnv *, jobject) = ef[23];
  jboolean (* is_same_object) (JNIEnv *, jobject, jobject) = ef[24];
  gpointer * jf = jvmti->functions - 1;
  jvmtiError (* deallocate) (jvmtiEnv *, void * mem) = jf[47];
  jvmtiError (* get_class_signature) (jvmtiEnv *, jclass, char **, char **) = jf[48];
  jvmtiError (* get_class_methods) (jvmtiEnv *, jclass, jint *, jmethodID **) = jf[52];
  jvmtiError (* get_class_loader) (jvmtiEnv *, jclass, jobject *) = jf[57];
  jvmtiError (* get_method_name) (jvmtiEnv *, jmethodID, char **, char **, char **) = jf[64];
  jvmtiError (* get_loaded_classes) (jvmtiEnv *, jint *, jclass **) = jf[78];
  jint class_count, class_index;
  jclass * classes;

  class_pattern = make_pattern_spec (class_query, ignore_case);
  method_pattern = make_pattern_spec (method_query, ignore_case);
  groups = g_hash_table_new_full (NULL, NULL, NULL, NULL);

  if (get_loaded_classes (jvmti, &class_count, &classes) != JVMTI_ERROR_NONE)
    goto emit_results;

  for (class_index = 0; class_index != class_count; class_index++)
  {
    jclass klass = classes[class_index];
    jobject loader = NULL;
    gboolean have_loader = FALSE;
    char * signature = NULL;
    gchar * class_name = NULL;
    gchar * class_name_copy = NULL;
    const gchar * normalized_class_name;
    jint method_count, method_index;
    jmethodID * methods = NULL;
    JsonBuilder * group = NULL;
    GHashTable * seen_method_names = NULL;

    if (skip_system_classes)
    {
      if (get_class_loader (jvmti, klass, &loader) != JVMTI_ERROR_NONE)
        goto skip_class;
      have_loader = TRUE;

      if (loader == NULL)
        goto skip_class;
    }

    if (get_class_signature (jvmti, klass, &signature, NULL) != JVMTI_ERROR_NONE)
      goto skip_class;

    class_name = class_name_from_signature (signature);

    if (ignore_case)
    {
      class_name_copy = g_utf8_strdown (class_name, -1);
      normalized_class_name = class_name_copy;
    }
    else
    {
      normalized_class_name = class_name;
    }

    if (!g_pattern_match_string (class_pattern, normalized_class_name))
      goto skip_class;

    if (get_class_methods (jvmti, klass, &method_count, &methods) != JVMTI_ERROR_NONE)
      goto skip_class;

    if (!include_signature)
      seen_method_names = g_hash_table_new_full (g_str_hash, g_str_equal, g_free, NULL);

    for (method_index = 0; method_index != method_count; method_index++)
    {
      jmethodID method = methods[method_index];
      const gchar * method_name;
      char * method_name_value = NULL;
      char * method_signature_value = NULL;
      gchar * method_name_copy = NULL;
      const gchar * normalized_method_name;
      gchar * normalized_method_name_copy = NULL;

      if (get_method_name (jvmti, method, &method_name_value, include_signature ? &method_signature_value : NULL, NULL) != JVMTI_ERROR_NONE)
        goto skip_method;
      method_name = method_name_value;

      if (method_name[0] == '<')
      {
        if (strcmp (method_name, "<init>") == 0)
          method_name = "$init";
        else if (strcmp (method_name, "<clinit>") == 0)
          goto skip_method;
      }

      if (include_signature)
      {
        method_name_copy = format_method_signature (method_name, method_signature_value);
        method_name = method_name_copy;
      }

      if (seen_method_names != NULL && g_hash_table_contains (seen_method_names, method_name))
        goto skip_method;

      if (ignore_case)
      {
        normalized_method_name_copy = g_utf8_strdown (method_name, -1);
        normalized_method_name = normalized_method_name_copy;
      }
      else
      {
        normalized_method_name = method_name;
      }

      if (!g_pattern_match_string (method_pattern, normalized_method_name))
        goto skip_method;

      if (group == NULL)
      {
        if (!have_loader && get_class_loader (jvmti, klass, &loader) != JVMTI_ERROR_NONE)
          goto skip_method;

        if (loader == NULL)
        {
          group = g_hash_table_lookup (groups, NULL);
        }
        else
        {
          GHashTableIter iter;
          jobject cur_loader;
          JsonBuilder * cur_group;

          g_hash_table_iter_init (&iter, groups);
          while (g_hash_table_iter_next (&iter, (gpointer *) &cur_loader, (gpointer *) &cur_group))
          {
            if (cur_loader != NULL && is_same_object (env, cur_loader, loader))
            {
              group = cur_group;
              break;
            }
          }
        }

        if (group == NULL)
        {
          jobject l;
          gchar * str;

          l = (loader != NULL) ? new_global_ref (env, loader) : NULL;

          group = json_builder_new_immutable ();
          g_hash_table_insert (groups, l, group);

          json_builder_begin_object (group);

          json_builder_set_member_name (group, "loader");
          str = g_strdup_printf ("0x%" G_GSIZE_MODIFIER "x", GPOINTER_TO_SIZE (l));
          json_builder_add_string_value (group, str);
          g_free (str);

          json_builder_set_member_name (group, "classes");
          json_builder_begin_array (group);
        }

        json_builder_begin_object (group);

        json_builder_set_member_name (group, "name");
        json_builder_add_string_value (group, class_name);

        json_builder_set_member_name (group, "methods");
        json_builder_begin_array (group);
      }

      json_builder_add_string_value (group, method_name);

      if (seen_method_names != NULL)
        g_hash_table_add (seen_method_names, g_strdup (method_name));

skip_method:
      g_free (normalized_method_name_copy);
      g_free (method_name_copy);
      deallocate (jvmti, method_signature_value);
      deallocate (jvmti, method_name_value);
    }

skip_class:
    if (group != NULL)
    {
      json_builder_end_array (group);
      json_builder_end_object (group);
    }

    if (seen_method_names != NULL)
      g_hash_table_unref (seen_method_names);

    deallocate (jvmti, methods);

    g_free (class_name_copy);
    g_free (class_name);
    deallocate (jvmti, signature);

    if (loader != NULL)
      delete_local_ref (env, loader);

    delete_local_ref (env, klass);
  }

  deallocate (jvmti, classes);

emit_results:
  result = finalize_method_groups_to_json (groups);

  g_hash_table_unref (groups);
  g_pattern_spec_free (method_pattern);
  g_pattern_spec_free (class_pattern);

  return result;
}

static gchar *
finalize_method_groups_to_json (GHashTable * groups)
{
  GString * result;
  GHashTableIter iter;
  guint i;
  JsonBuilder * group;

  result = g_string_sized_new (1024);

  g_string_append_c (result, '[');

  g_hash_table_iter_init (&iter, groups);
  for (i = 0; g_hash_table_iter_next (&iter, NULL, (gpointer *) &group); i++)
  {
    JsonNode * root;
    gchar * json;

    if (i > 0)
      g_string_append_c (result, ',');

    json_builder_end_array (group);
    json_builder_end_object (group);

    root = json_builder_get_root (group);
    json = json_to_string (root, FALSE);
    g_string_append (result, json);
    g_free (json);
    json_node_unref (root);

    g_object_unref (group);
  }

  g_string_append_c (result, ']');

  return g_string_free (result, FALSE);
}

static GPatternSpec *
make_pattern_spec (const gchar * pattern,
                   jboolean ignore_case)
{
  GPatternSpec * spec;

  if (ignore_case)
  {
    gchar * str = g_utf8_strdown (pattern, -1);
    spec = g_pattern_spec_new (str);
    g_free (str);
  }
  else
  {
    spec = g_pattern_spec_new (pattern);
  }

  return spec;
}

static gchar *
class_name_from_signature (const gchar * descriptor)
{
  gchar * result, * c;

  result = g_strdup (descriptor + 1);

  for (c = result; *c != '\\0'; c++)
  {
    if (*c == '/')
      *c = '.';
  }

  c[-1] = '\\0';

  return result;
}

static gchar *
format_method_signature (const gchar * name,
                         const gchar * signature)
{
  GString * sig;
  const gchar * cursor;
  gint arg_index;

  sig = g_string_sized_new (128);

  g_string_append (sig, name);

  cursor = signature;
  arg_index = -1;
  while (TRUE)
  {
    const gchar c = *cursor;

    if (c == '(')
    {
      g_string_append_c (sig, c);
      cursor++;
      arg_index = 0;
    }
    else if (c == ')')
    {
      g_string_append_c (sig, c);
      cursor++;
      break;
    }
    else
    {
      if (arg_index >= 1)
        g_string_append (sig, ", ");

      append_type (sig, &cursor);

      if (arg_index != -1)
        arg_index++;
    }
  }

  g_string_append (sig, ": ");
  append_type (sig, &cursor);

  return g_string_free (sig, FALSE);
}

static void
append_type (GString * output,
             const gchar ** type)
{
  const gchar * cursor = *type;

  switch (*cursor)
  {
    case 'Z':
      g_string_append (output, "boolean");
      cursor++;
      break;
    case 'B':
      g_string_append (output, "byte");
      cursor++;
      break;
    case 'C':
      g_string_append (output, "char");
      cursor++;
      break;
    case 'S':
      g_string_append (output, "short");
      cursor++;
      break;
    case 'I':
      g_string_append (output, "int");
      cursor++;
      break;
    case 'J':
      g_string_append (output, "long");
      cursor++;
      break;
    case 'F':
      g_string_append (output, "float");
      cursor++;
      break;
    case 'D':
      g_string_append (output, "double");
      cursor++;
      break;
    case 'V':
      g_string_append (output, "void");
      cursor++;
      break;
    case 'L':
    {
      gchar ch;

      cursor++;
      for (; (ch = *cursor) != ';'; cursor++)
      {
        g_string_append_c (output, (ch != '/') ? ch : '.');
      }
      cursor++;

      break;
    }
    case '[':
      *type = cursor + 1;
      append_type (output, type);
      g_string_append (output, "[]");
      return;
    default:
      g_string_append (output, "BUG");
      cursor++;
  }

  *type = cursor;
}

void
dealloc (gpointer mem)
{
  g_free (mem);
}

static gpointer
read_art_array (gpointer object_base,
                guint field_offset,
                guint length_size,
                guint * length)
{
  gpointer result, header;
  guint n;

  header = GSIZE_TO_POINTER (*(guint64 *) (object_base + field_offset));
  if (header != NULL)
  {
    result = header + length_size;
    if (length_size == sizeof (guint32))
      n = *(guint32 *) header;
    else
      n = *(guint64 *) header;
  }
  else
  {
    result = NULL;
    n = 0;
  }

  if (length != NULL)
    *length = n;

  return result;
}

static void
std_string_destroy (StdString * str)
{
  if ((str->l.capacity & 1) != 0)
    art_api.free (str->l.data);
}

static gchar *
std_string_c_str (StdString * self)
{
  if ((self->l.capacity & 1) != 0)
    return self->l.data;

  return self->s.data;
}
`,nd=/(.+)!([^/]+)\/?([isu]+)?/,ye=null,Mo=null,Be=class n{static build(e,t){return ko(t),Mo(e,t,r=>new n(ye.new(e,r,t)))}static enumerateMethods(e,t,r){ko(r);let o=e.match(nd);if(o===null)throw new Error("Invalid query; format is: class!method -- see documentation of Java.enumerateMethods(query) for details");let s=Memory.allocUtf8String(o[1]),i=Memory.allocUtf8String(o[2]),l=!1,a=!1,c=!1,d=o[3];d!==void 0&&(l=d.indexOf("s")!==-1,a=d.indexOf("i")!==-1,c=d.indexOf("u")!==-1);let p;if(t.flavor==="jvm"){let f=ye.enumerateMethodsJvm(s,i,Ke(l),Ke(a),Ke(c),r,t.jvmti);try{p=JSON.parse(f.readUtf8String()).map(u=>{let _=ptr(u.loader);return u.loader=_.isNull()?null:_,u})}finally{ye.dealloc(f)}}else be(r.vm,r,f=>{let u=ye.enumerateMethodsArt(s,i,Ke(l),Ke(a),Ke(c));try{let _=t["art::JavaVMExt::AddGlobalRef"],{vm:h}=t;p=JSON.parse(u.readUtf8String()).map(g=>{let b=g.loader;return g.loader=b!==0?_(h,f,ptr(b)):null,g})}finally{ye.dealloc(u)}});return p}constructor(e){this.handle=e}has(e){return ye.has(this.handle,Memory.allocUtf8String(e))!==0}find(e){return ye.find(this.handle,Memory.allocUtf8String(e)).readUtf8String()}list(){let e=ye.list(this.handle);try{return JSON.parse(e.readUtf8String())}finally{ye.dealloc(e)}}};function ko(n){ye===null&&(ye=rd(n),Mo=od(ye,n.vm))}function rd(n){let{pointerSize:e}=Process,t=8,r=e,o=6*e,s=10*4+5*e,i=t+r+o+s,a=Memory.alloc(i),c=a.add(t),d=c.add(r),{getDeclaredMethods:p,getDeclaredFields:f}=n.javaLangClass(),u=n.javaLangReflectMethod(),_=n.javaLangReflectField(),h=d;[p,f,u.getName,u.getModifiers,_.getName,_.getModifiers].forEach(R=>{h=h.writePointer(R).add(e)});let g=d.add(o),{vm:b}=n,v=zn(b);if(v!==null){let R=v.offset,k=ve(b),x=jt(b),E=g;[1,R.ifields,R.methods,R.sfields,R.copiedMethodsOffset,k.size,k.offset.accessFlags,x.size,x.offset.accessFlags,4294967295].forEach(O=>{E=E.writeUInt(O).add(4)});let L=J();[L.artClassLinker.address,L["art::ClassLinker::VisitClasses"],L["art::mirror::Class::GetDescriptor"],L["art::ArtMethod::PrettyMethod"],Process.getModuleByName("libc.so").getExportByName("free")].forEach((O,I)=>{O===void 0&&(O=NULL),E=E.writePointer(O).add(e)})}let w=new CModule(td,{lock:a,models:c,java_api:d,art_api:g}),N={exceptions:"propagate"},M={exceptions:"propagate",scheduling:"exclusive"};return{handle:w,mode:v!==null?"full":"basic",new:new NativeFunction(w.model_new,"pointer",["pointer","pointer","pointer"],N),has:new NativeFunction(w.model_has,"bool",["pointer","pointer"],M),find:new NativeFunction(w.model_find,"pointer",["pointer","pointer"],M),list:new NativeFunction(w.model_list,"pointer",["pointer"],M),enumerateMethodsArt:new NativeFunction(w.enumerate_methods_art,"pointer",["pointer","pointer","bool","bool","bool"],N),enumerateMethodsJvm:new NativeFunction(w.enumerate_methods_jvm,"pointer",["pointer","pointer","bool","bool","bool","pointer","pointer"],N),dealloc:new NativeFunction(w.dealloc,"void",["pointer"],M)}}function od(n,e){if(n.mode==="basic")return sd;let t=J()["art::JavaVMExt::DecodeGlobal"];return function(r,o,s){let i;return be(e,o,l=>{let a=t(e,l,r);i=s(a)}),i}}function sd(n,e,t){return t(NULL)}function Ke(n){return n?1:0}var ht=class{constructor(e,t){this.items=new Map,this.capacity=e,this.destroy=t}dispose(e){let{items:t,destroy:r}=this;t.forEach(o=>{r(o,e)}),t.clear()}get(e){let{items:t}=this,r=t.get(e);return r!==void 0&&(t.delete(e),t.set(e,r)),r}set(e,t,r){let{items:o}=this,s=o.get(e);if(s!==void 0)o.delete(e),this.destroy(s,r);else if(o.size===this.capacity){let i=o.keys().next().value,l=o.get(i);o.delete(i),this.destroy(l,r)}o.set(e,t)}};var _t=1,sr=256,Ro=65536,id=305419896,Oo=32,Po=12,jo=8,Fo=8,Do=4,Uo=4,Bo=12,ad=0,ld=1,cd=2,dd=3,ud=4,pd=5,fd=6,hd=4096,_d=4097,md=4099,gd=8192,bd=8193,yd=8194,Ed=8195,vd=8196,Sd=8198,wd=24,Id=28,Td=2,Cd=24,zo=m.from([3,0,7,14,0]),rr="Ldalvik/annotation/Throws;",Ad=m.from([0]);function Ld(n){let e=new ir,t=Object.assign({},n);return e.addClass(t),e.build()}var ir=class{constructor(){this.classes=[]}addClass(e){this.classes.push(e)}build(){let e=kd(this.classes),{classes:t,interfaces:r,fields:o,methods:s,protos:i,parameters:l,annotationDirectories:a,annotationSets:c,throwsAnnotations:d,types:p,strings:f}=e,u=0,_=0,h=8,g=12,b=20,v=112;u+=v;let w=u,N=f.length*Uo;u+=N;let M=u,R=p.length*Do;u+=R;let k=u,x=i.length*Po;u+=x;let E=u,L=o.length*jo;u+=L;let O=u,I=s.length*Fo;u+=I;let P=u,D=t.length*Oo;u+=D;let U=u,F=c.map(C=>{let j=u;return C.offset=j,u+=4+C.items.length*4,j}),z=t.reduce((C,j)=>(j.classData.constructorMethods.forEach(H=>{let[,q,Z]=H;(q&sr)===0&&Z>=0&&(H.push(u),C.push({offset:u,superConstructor:Z}),u+=Cd)}),C),[]);a.forEach(C=>{C.offset=u,u+=16+C.methods.length*8});let X=r.map(C=>{u=or(u,4);let j=u;return C.offset=j,u+=4+2*C.types.length,j}),ee=l.map(C=>{u=or(u,4);let j=u;return C.offset=j,u+=4+2*C.types.length,j}),ie=[],Q=f.map(C=>{let j=u,B=m.from(_e(C.length)),H=m.from(C,"utf8"),q=m.concat([B,H,Ad]);return ie.push(q),u+=q.length,j}),oe=z.map(C=>{let j=u;return u+=zo.length,j}),Y=d.map(C=>{let j=Nd(C);return C.offset=u,u+=j.length,j}),te=t.map((C,j)=>{C.classData.offset=u;let B=xd(C);return u+=B.length,B}),Se=0,et=0;u=or(u,4);let $=u,he=r.length+l.length,Ae=4+(o.length>0?1:0)+2+c.length+z.length+a.length+(he>0?1:0)+1+oe.length+d.length+t.length+1,Pe=4+Ae*Bo;u+=Pe;let ke=u-U,Ge=u,T=m.alloc(Ge);T.write(`dex
035`),T.writeUInt32LE(Ge,32),T.writeUInt32LE(v,36),T.writeUInt32LE(id,40),T.writeUInt32LE(Se,44),T.writeUInt32LE(et,48),T.writeUInt32LE($,52),T.writeUInt32LE(f.length,56),T.writeUInt32LE(w,60),T.writeUInt32LE(p.length,64),T.writeUInt32LE(M,68),T.writeUInt32LE(i.length,72),T.writeUInt32LE(k,76),T.writeUInt32LE(o.length,80),T.writeUInt32LE(o.length>0?E:0,84),T.writeUInt32LE(s.length,88),T.writeUInt32LE(O,92),T.writeUInt32LE(t.length,96),T.writeUInt32LE(P,100),T.writeUInt32LE(ke,104),T.writeUInt32LE(U,108),Q.forEach((C,j)=>{T.writeUInt32LE(C,w+j*Uo)}),p.forEach((C,j)=>{T.writeUInt32LE(C,M+j*Do)}),i.forEach((C,j)=>{let[B,H,q]=C,Z=k+j*Po;T.writeUInt32LE(B,Z),T.writeUInt32LE(H,Z+4),T.writeUInt32LE(q!==null?q.offset:0,Z+8)}),o.forEach((C,j)=>{let[B,H,q]=C,Z=E+j*jo;T.writeUInt16LE(B,Z),T.writeUInt16LE(H,Z+2),T.writeUInt32LE(q,Z+4)}),s.forEach((C,j)=>{let[B,H,q]=C,Z=O+j*Fo;T.writeUInt16LE(B,Z),T.writeUInt16LE(H,Z+2),T.writeUInt32LE(q,Z+4)}),t.forEach((C,j)=>{let{interfaces:B,annotationsDirectory:H}=C,q=B!==null?B.offset:0,Z=H!==null?H.offset:0,tt=0,me=P+j*Oo;T.writeUInt32LE(C.index,me),T.writeUInt32LE(C.accessFlags,me+4),T.writeUInt32LE(C.superClassIndex,me+8),T.writeUInt32LE(q,me+12),T.writeUInt32LE(C.sourceFileIndex,me+16),T.writeUInt32LE(Z,me+20),T.writeUInt32LE(C.classData.offset,me+24),T.writeUInt32LE(tt,me+28)}),c.forEach((C,j)=>{let{items:B}=C,H=F[j];T.writeUInt32LE(B.length,H),B.forEach((q,Z)=>{T.writeUInt32LE(q.offset,H+4+Z*4)})}),z.forEach((C,j)=>{let{offset:B,superConstructor:H}=C,q=1,Z=1,tt=1,me=0,bt=4;T.writeUInt16LE(q,B),T.writeUInt16LE(Z,B+2),T.writeUInt16LE(tt,B+4),T.writeUInt16LE(me,B+6),T.writeUInt32LE(oe[j],B+8),T.writeUInt32LE(bt,B+12),T.writeUInt16LE(4208,B+16),T.writeUInt16LE(H,B+18),T.writeUInt16LE(0,B+20),T.writeUInt16LE(14,B+22)}),a.forEach(C=>{let j=C.offset,B=0,H=0,q=C.methods.length,Z=0;T.writeUInt32LE(B,j),T.writeUInt32LE(H,j+4),T.writeUInt32LE(q,j+8),T.writeUInt32LE(Z,j+12),C.methods.forEach((tt,me)=>{let bt=j+16+me*8,[fs,hs]=tt;T.writeUInt32LE(fs,bt),T.writeUInt32LE(hs.offset,bt+4)})}),r.forEach((C,j)=>{let B=X[j];T.writeUInt32LE(C.types.length,B),C.types.forEach((H,q)=>{T.writeUInt16LE(H,B+4+q*2)})}),l.forEach((C,j)=>{let B=ee[j];T.writeUInt32LE(C.types.length,B),C.types.forEach((H,q)=>{T.writeUInt16LE(H,B+4+q*2)})}),ie.forEach((C,j)=>{C.copy(T,Q[j])}),oe.forEach(C=>{zo.copy(T,C)}),Y.forEach((C,j)=>{C.copy(T,d[j].offset)}),te.forEach((C,j)=>{C.copy(T,t[j].classData.offset)}),T.writeUInt32LE(Ae,$);let ae=[[ad,1,_],[ld,f.length,w],[cd,p.length,M],[dd,i.length,k]];o.length>0&&ae.push([ud,o.length,E]),ae.push([pd,s.length,O]),ae.push([fd,t.length,P]),c.forEach((C,j)=>{ae.push([md,C.items.length,F[j]])}),z.forEach(C=>{ae.push([bd,1,C.offset])}),a.forEach(C=>{ae.push([Sd,1,C.offset])}),he>0&&ae.push([_d,he,X.concat(ee)[0]]),ae.push([yd,f.length,Q[0]]),oe.forEach(C=>{ae.push([Ed,1,C])}),d.forEach(C=>{ae.push([vd,1,C.offset])}),t.forEach(C=>{ae.push([gd,1,C.classData.offset])}),ae.push([hd,1,$]),ae.forEach((C,j)=>{let[B,H,q]=C,Z=$+4+j*Bo;T.writeUInt16LE(B,Z),T.writeUInt32LE(H,Z+4),T.writeUInt32LE(q,Z+8)});let Ir=new Checksum("sha1");return Ir.update(T.slice(g+b)),m.from(Ir.getDigest()).copy(T,g),T.writeUInt32LE(Fd(T,g),h),T}};function xd(n){let{instanceFields:e,constructorMethods:t,virtualMethods:r}=n.classData;return m.from([0].concat(_e(e.length)).concat(_e(t.length)).concat(_e(r.length)).concat(e.reduce((s,[i,l])=>s.concat(_e(i)).concat(_e(l)),[])).concat(t.reduce((s,[i,l,,a])=>s.concat(_e(i)).concat(_e(l)).concat(_e(a||0)),[])).concat(r.reduce((s,[i,l])=>s.concat(_e(i)).concat(_e(l)).concat([0]),[])))}function Nd(n){let{thrownTypes:e}=n;return m.from([Td].concat(_e(n.type)).concat([1]).concat(_e(n.value)).concat([Id,e.length]).concat(e.reduce((t,r)=>(t.push(wd,r),t),[])))}function kd(n){let e=new Set,t=new Set,r={},o=[],s=[],i={},l=new Set,a=new Set;n.forEach(I=>{let{name:P,superClass:D,sourceFileName:U}=I;e.add("this"),e.add(P),t.add(P),e.add(D),t.add(D),e.add(U),I.interfaces.forEach(F=>{e.add(F),t.add(F)}),I.fields.forEach(F=>{let[z,X]=F;e.add(z),e.add(X),t.add(X),o.push([I.name,X,z])}),I.methods.some(([F])=>F==="<init>")||(I.methods.unshift(["<init>","V",[]]),l.add(P)),I.methods.forEach(F=>{let[z,X,ee,ie=[],Q]=F;e.add(z);let oe=c(X,ee),Y=null;if(ie.length>0){let te=ie.slice();te.sort(),Y=te.join("|");let Se=i[Y];Se===void 0&&(Se={id:Y,types:te},i[Y]=Se),e.add(rr),t.add(rr),ie.forEach(et=>{e.add(et),t.add(et)}),e.add("value")}if(s.push([I.name,oe,z,Y,Q]),z==="<init>"){a.add(P+"|"+oe);let te=D+"|"+oe;l.has(P)&&!a.has(te)&&(s.push([D,oe,z,null,0]),a.add(te))}})});function c(I,P){let D=[I].concat(P),U=D.join("|");if(r[U]!==void 0)return U;e.add(I),t.add(I),P.forEach(z=>{e.add(z),t.add(z)});let F=D.map(jd).join("");return e.add(F),r[U]=[U,F,I,P],U}let d=Array.from(e);d.sort();let p=d.reduce((I,P,D)=>(I[P]=D,I),{}),f=Array.from(t).map(I=>p[I]);f.sort(Vo);let u=f.reduce((I,P,D)=>(I[d[P]]=D,I),{}),_=Object.keys(r).map(I=>r[I]);_.sort(Rd);let h={},g=_.map(I=>{let[,P,D,U]=I,F;if(U.length>0){let z=U.join("|");F=h[z],F===void 0&&(F={types:U.map(X=>u[X]),offset:-1},h[z]=F)}else F=null;return[p[P],u[D],F]}),b=_.reduce((I,P,D)=>{let[U]=P;return I[U]=D,I},{}),v=Object.keys(h).map(I=>h[I]),w=o.map(I=>{let[P,D,U]=I;return[u[P],u[D],p[U]]});w.sort(Od);let N=s.map(I=>{let[P,D,U,F,z]=I;return[u[P],b[D],p[U],F,z]});N.sort(Pd);let M=Object.keys(i).map(I=>i[I]).map(I=>({id:I.id,type:u[rr],value:p.value,thrownTypes:I.types.map(P=>u[P]),offset:-1})),R=M.map(I=>({id:I.id,items:[I],offset:-1})),k=R.reduce((I,P,D)=>(I[P.id]=D,I),{}),x={},E=[],L=n.map(I=>{let P=u[I.name],D=_t,U=u[I.superClass],F,z=I.interfaces.map($=>u[$]);if(z.length>0){z.sort(Vo);let $=z.join("|");F=x[$],F===void 0&&(F={types:z,offset:-1},x[$]=F)}else F=null;let X=p[I.sourceFileName],ee=N.reduce(($,he,Ae)=>{let[Pe,ke,Ge,T,ae]=he;return Pe===P&&$.push([Ae,Ge,T,ke,ae]),$},[]),ie=null,Q=ee.filter(([,,$])=>$!==null).map(([$,,he])=>[$,R[k[he]]]);Q.length>0&&(ie={methods:Q,offset:-1},E.push(ie));let oe=w.reduce(($,he,Ae)=>{let[Pe]=he;return Pe===P&&$.push([Ae>0?1:0,_t]),$},[]),Y=p["<init>"],te=ee.filter(([,$])=>$===Y).map(([$,,,he])=>{if(l.has(I.name)){let Ae=-1,Pe=N.length;for(let ke=0;ke!==Pe;ke++){let[Ge,T,ae]=N[ke];if(Ge===U&&ae===Y&&T===he){Ae=ke;break}}return[$,_t|Ro,Ae]}else return[$,_t|Ro|sr,-1]}),Se=Md(ee.filter(([,$])=>$!==Y).map(([$,,,,he])=>[$,he|_t|sr]));return{index:P,accessFlags:D,superClassIndex:U,interfaces:F,sourceFileIndex:X,annotationsDirectory:ie,classData:{instanceFields:oe,constructorMethods:te,virtualMethods:Se,offset:-1}}}),O=Object.keys(x).map(I=>x[I]);return{classes:L,interfaces:O,fields:w,methods:N,protos:g,parameters:v,annotationDirectories:E,annotationSets:R,throwsAnnotations:M,types:f,strings:d}}function Md(n){let e=0;return n.map(([t,r],o)=>{let s;return o===0?s=[t,r]:s=[t-e,r],e=t,s})}function Vo(n,e){return n-e}function Rd(n,e){let[,,t,r]=n,[,,o,s]=e;if(t<o)return-1;if(t>o)return 1;let i=r.join("|"),l=s.join("|");return i<l?-1:i>l?1:0}function Od(n,e){let[t,r,o]=n,[s,i,l]=e;return t!==s?t-s:o!==l?o-l:r-i}function Pd(n,e){let[t,r,o]=n,[s,i,l]=e;return t!==s?t-s:o!==l?o-l:r-i}function jd(n){let e=n[0];return e==="L"||e==="["?"L":n}function _e(n){if(n<=127)return[n];let e=[],t=!1;do{let r=n&127;n>>=7,t=n!==0,t&&(r|=128),e.push(r)}while(t);return e}function or(n,e){let t=n%e;return t===0?n:n+e-t}function Fd(n,e){let t=1,r=0,o=n.length;for(let s=e;s<o;s++)t=(t+n[s])%65521,r=(r+t)%65521;return(r<<16|t)>>>0}var Jo=Ld;var Dd=1,ar=null,Go=null;function $o(n){ar=n}function lr(n,e,t){let r=Qe(n);return r===null&&(n.indexOf("[")===0?r=cr(n,e,t):(n[0]==="L"&&n[n.length-1]===";"&&(n=n.substring(1,n.length-1)),r=Bd(n,e,t))),Object.assign({className:n},r)}var Ho={boolean:{name:"Z",type:"uint8",size:1,byteSize:1,defaultValue:!1,isCompatible(n){return typeof n=="boolean"},fromJni(n){return!!n},toJni(n){return n?1:0},read(n){return n.readU8()},write(n,e){n.writeU8(e)},toString(){return this.name}},byte:{name:"B",type:"int8",size:1,byteSize:1,defaultValue:0,isCompatible(n){return Number.isInteger(n)&&n>=-128&&n<=127},fromJni:Ee,toJni:Ee,read(n){return n.readS8()},write(n,e){n.writeS8(e)},toString(){return this.name}},char:{name:"C",type:"uint16",size:1,byteSize:2,defaultValue:0,isCompatible(n){if(typeof n!="string"||n.length!==1)return!1;let e=n.charCodeAt(0);return e>=0&&e<=65535},fromJni(n){return String.fromCharCode(n)},toJni(n){return n.charCodeAt(0)},read(n){return n.readU16()},write(n,e){n.writeU16(e)},toString(){return this.name}},short:{name:"S",type:"int16",size:1,byteSize:2,defaultValue:0,isCompatible(n){return Number.isInteger(n)&&n>=-32768&&n<=32767},fromJni:Ee,toJni:Ee,read(n){return n.readS16()},write(n,e){n.writeS16(e)},toString(){return this.name}},int:{name:"I",type:"int32",size:1,byteSize:4,defaultValue:0,isCompatible(n){return Number.isInteger(n)&&n>=-2147483648&&n<=2147483647},fromJni:Ee,toJni:Ee,read(n){return n.readS32()},write(n,e){n.writeS32(e)},toString(){return this.name}},long:{name:"J",type:"int64",size:2,byteSize:8,defaultValue:0,isCompatible(n){return typeof n=="number"||n instanceof Int64},fromJni:Ee,toJni:Ee,read(n){return n.readS64()},write(n,e){n.writeS64(e)},toString(){return this.name}},float:{name:"F",type:"float",size:1,byteSize:4,defaultValue:0,isCompatible(n){return typeof n=="number"},fromJni:Ee,toJni:Ee,read(n){return n.readFloat()},write(n,e){n.writeFloat(e)},toString(){return this.name}},double:{name:"D",type:"double",size:2,byteSize:8,defaultValue:0,isCompatible(n){return typeof n=="number"},fromJni:Ee,toJni:Ee,read(n){return n.readDouble()},write(n,e){n.writeDouble(e)},toString(){return this.name}},void:{name:"V",type:"void",size:0,byteSize:0,defaultValue:void 0,isCompatible(n){return n===void 0},fromJni(){},toJni(){return NULL},toString(){return this.name}}},Ud=new Set(Object.values(Ho).map(n=>n.name));function Qe(n){let e=Ho[n];return e!==void 0?e:null}function Bd(n,e,t){let r=t._types[e?1:0],o=r[n];return o!==void 0||(n==="java.lang.Object"?o=zd(t):o=Vd(n,e,t),r[n]=o),o}function zd(n){return{name:"Ljava/lang/Object;",type:"pointer",size:1,defaultValue:NULL,isCompatible(e){return e===null?!0:e===void 0?!1:e.$h instanceof NativePointer?!0:typeof e=="string"},fromJni(e,t,r){return e.isNull()?null:n.cast(e,n.use("java.lang.Object"),r)},toJni(e,t){return e===null?NULL:typeof e=="string"?t.newStringUtf(e):e.$h}}}function Vd(n,e,t){let r=null,o=null,s=null;function i(){return r===null&&(r=t.use(n).class),r}function l(c){let d=i();return o===null&&(o=d.isInstance.overload("java.lang.Object")),o.call(d,c)}function a(){if(s===null){let c=i();s=t.use("java.lang.String").class.isAssignableFrom(c)}return s}return{name:ze(n),type:"pointer",size:1,defaultValue:NULL,isCompatible(c){return c===null?!0:c===void 0?!1:c.$h instanceof NativePointer?l(c):typeof c=="string"&&a()},fromJni(c,d,p){return c.isNull()?null:a()&&e?d.stringFromJni(c):t.cast(c,t.use(n),p)},toJni(c,d){return c===null?NULL:typeof c=="string"?d.newStringUtf(c):c.$h},toString(){return this.name}}}var Jd=[["Z","boolean"],["B","byte"],["C","char"],["D","double"],["F","float"],["I","int"],["J","long"],["S","short"]].reduce((n,[e,t])=>(n["["+e]=Gd("["+e,t),n),{});function Gd(n,e){let t=y.prototype,r=Wd(e),o={typeName:e,newArray:t["new"+r+"Array"],setRegion:t["set"+r+"ArrayRegion"],getElements:t["get"+r+"ArrayElements"],releaseElements:t["release"+r+"ArrayElements"]};return{name:n,type:"pointer",size:1,defaultValue:NULL,isCompatible(s){return qd(s,e)},fromJni(s,i,l){return Hd(s,o,i,l)},toJni(s,i){return Zd(s,o,i)}}}function cr(n,e,t){let r=Jd[n];if(r!==void 0)return r;if(n.indexOf("[")!==0)throw new Error("Unsupported type: "+n);let o=n.substring(1),s=lr(o,e,t),i=0,l=o.length;for(;i!==l&&o[i]==="[";)i++;o=o.substring(i),o[0]==="L"&&o[o.length-1]===";"&&(o=o.substring(1,o.length-1));let a=o.replace(/\./g,"/");Ud.has(a)?a="[".repeat(i)+a:a="[".repeat(i)+"L"+a+";";let c="["+a;return o="[".repeat(i)+o,{name:n.replace(/\./g,"/"),type:"pointer",size:1,defaultValue:NULL,isCompatible(d){return d===null?!0:typeof d!="object"||d.length===void 0?!1:d.every(function(p){return s.isCompatible(p)})},fromJni(d,p,f){if(d.isNull())return null;let u=[],_=p.getArrayLength(d);for(let h=0;h!==_;h++){let g=p.getObjectArrayElement(d,h);try{u.push(s.fromJni(g,p))}finally{p.deleteLocalRef(g)}}try{u.$w=t.cast(d,t.use(c),f)}catch{t.use("java.lang.reflect.Array").newInstance(t.use(o).class,0),u.$w=t.cast(d,t.use(c),f)}return u.$dispose=$d,u},toJni(d,p){if(d===null)return NULL;if(!(d instanceof Array))throw new Error("Expected an array");let f=d.$w;if(f!==void 0)return f.$h;let u=d.length,h=t.use(o).$borrowClassHandle(p);try{let g=p.newObjectArray(u,h.value,NULL);p.throwIfExceptionPending();for(let b=0;b!==u;b++){let v=s.toJni(d[b],p);try{p.setObjectArrayElement(g,b,v)}finally{s.type==="pointer"&&p.getObjectRefType(v)===Dd&&p.deleteLocalRef(v)}p.throwIfExceptionPending()}return g}finally{h.unref(p)}}}}function $d(){let n=this.length;for(let e=0;e!==n;e++){let t=this[e];if(t===null)continue;let r=t.$dispose;if(r===void 0)break;r.call(t)}this.$w.$dispose()}function Hd(n,e,t,r){if(n.isNull())return null;let o=Qe(e.typeName),s=t.getArrayLength(n);return new Bt(n,e,o,s,t,r)}function Zd(n,e,t){if(n===null)return NULL;let r=n.$h;if(r!==void 0)return r;let o=n.length,s=Qe(e.typeName),i=e.newArray.call(t,o);if(i.isNull())throw new Error("Unable to construct array");if(o>0){let l=s.byteSize,a=s.write,c=s.toJni,d=Memory.alloc(o*s.byteSize);for(let p=0;p!==o;p++)a(d.add(p*l),c(n[p]));e.setRegion.call(t,i,0,o,d),t.throwIfExceptionPending()}return i}function qd(n,e){if(n===null)return!0;if(n instanceof Bt)return n.$s.typeName===e;if(!(typeof n=="object"&&n.length!==void 0))return!1;let r=Qe(e);return Array.prototype.every.call(n,o=>r.isCompatible(o))}function Bt(n,e,t,r,o,s=!0){if(s){let i=o.newGlobalRef(n);this.$h=i,this.$r=Script.bindWeak(this,o.vm.makeHandleDestructor(i))}else this.$h=n,this.$r=null;return this.$s=e,this.$t=t,this.length=r,new Proxy(this,Go)}Go={has(n,e){return e in n?!0:n.tryParseIndex(e)!==null},get(n,e,t){let r=n.tryParseIndex(e);return r===null?n[e]:n.readElement(r)},set(n,e,t,r){let o=n.tryParseIndex(e);return o===null?(n[e]=t,!0):(n.writeElement(o,t),!0)},ownKeys(n){let e=[],{length:t}=n;for(let r=0;r!==t;r++){let o=r.toString();e.push(o)}return e.push("length"),e},getOwnPropertyDescriptor(n,e){return n.tryParseIndex(e)!==null?{writable:!0,configurable:!0,enumerable:!0}:Object.getOwnPropertyDescriptor(n,e)}};Object.defineProperties(Bt.prototype,{$dispose:{enumerable:!0,value(){let n=this.$r;n!==null&&(this.$r=null,Script.unbindWeak(n))}},$clone:{value(n){return new Bt(this.$h,this.$s,this.$t,this.length,n)}},tryParseIndex:{value(n){if(typeof n=="symbol")return null;let e=parseInt(n);return isNaN(e)||e<0||e>=this.length?null:e}},readElement:{value(n){return this.withElements(e=>{let t=this.$t;return t.fromJni(t.read(e.add(n*t.byteSize)))})}},writeElement:{value(n,e){let{$h:t,$s:r,$t:o}=this,s=ar.getEnv(),i=Memory.alloc(o.byteSize);o.write(i,o.toJni(e)),r.setRegion.call(s,t,n,1,i)}},withElements:{value(n){let{$h:e,$s:t}=this,r=ar.getEnv(),o=t.getElements.call(r,e);if(o.isNull())throw new Error("Unable to get array elements");try{return n(o)}finally{t.releaseElements.call(r,e,o)}}},toJSON:{value(){let{length:n,$t:e}=this,{byteSize:t,fromJni:r,read:o}=e;return this.withElements(s=>{let i=[];for(let l=0;l!==n;l++){let a=r(o(s.add(l*t)));i.push(a)}return i})}},toString:{value(){return this.toJSON().toString()}}});function ze(n){return"L"+n.replace(/\./g,"/")+";"}function Wd(n){return n.charAt(0).toUpperCase()+n.slice(1)}function Ee(n){return n}var Kd=4,{ensureClassInitialized:Zo,makeMethodMangler:Xo}=Dt,Qd=8,pr=1,gt=2,Ne=3,dr=1,fr=2,zt=1,es=2,qo=Symbol("PENDING_USE"),Wo="/data/local/tmp",{getCurrentThreadId:Jt,pointerSize:mt}=Process,ue={state:"empty",factories:[],loaders:null,Integer:null},G=null,K=null,ts=null,ns=null,rs=null,os=null,ss=null,Ko=null,ur=null,Xe=new Map,Oe=class n{static _initialize(e,t){G=e,K=t,ts=t.flavor==="art",t.flavor==="jvm"&&(Zo=To,Xo=Ao)}static _disposeAll(e){ue.factories.forEach(t=>{t._dispose(e)})}static get(e){let t=gu(),r=t.factories[0];if(e===null)return r;let o=t.loaders.get(e);if(o!==null){let i=r.cast(o,t.Integer);return t.factories[i.intValue()]}let s=new n;return s.loader=e,s.cacheDir=r.cacheDir,mr(s,e),s}constructor(){this.cacheDir=Wo,this.codeCacheDir=Wo+"/dalvik-cache",this.tempFileNaming={prefix:"frida",suffix:""},this._classes={},this._classHandles=new ht(10,Xd),this._patchedMethods=new Set,this._loader=null,this._types=[{},{}],ue.factories.push(this)}_dispose(e){Array.from(this._patchedMethods).forEach(t=>{t.implementation=null}),this._patchedMethods.clear(),Zn(),this._classHandles.dispose(e),this._classes={}}get loader(){return this._loader}set loader(e){let t=this._loader===null&&e!==null;this._loader=e,t&&ue.state==="ready"&&this===ue.factories[0]&&mr(this,e)}use(e,t={}){let r=t.cache!=="skip",o=r?this._getUsedClass(e):void 0;if(o===void 0)try{let s=G.getEnv(),{_loader:i}=this,l=i!==null?tu(e,i,s):eu(e);o=this._make(e,l,s)}finally{r&&this._setUsedClass(e,o)}return o}_getUsedClass(e){let t;for(;(t=this._classes[e])===qo;)Thread.sleep(.05);return t===void 0&&(this._classes[e]=qo),t}_setUsedClass(e,t){t!==void 0?this._classes[e]=t:delete this._classes[e]}_make(e,t,r){let o=Yd(),s=Object.create(br.prototype,{[Symbol.for("n")]:{value:e},$n:{get(){return this[Symbol.for("n")]}},[Symbol.for("C")]:{value:o},$C:{get(){return this[Symbol.for("C")]}},[Symbol.for("w")]:{value:null,writable:!0},$w:{get(){return this[Symbol.for("w")]},set(a){this[Symbol.for("w")]=a}},[Symbol.for("_s")]:{writable:!0},$_s:{get(){return this[Symbol.for("_s")]},set(a){this[Symbol.for("_s")]=a}},[Symbol.for("c")]:{value:[null]},$c:{get(){return this[Symbol.for("c")]}},[Symbol.for("m")]:{value:new Map},$m:{get(){return this[Symbol.for("m")]}},[Symbol.for("l")]:{value:null,writable:!0},$l:{get(){return this[Symbol.for("l")]},set(a){this[Symbol.for("l")]=a}},[Symbol.for("gch")]:{value:t},$gch:{get(){return this[Symbol.for("gch")]}},[Symbol.for("f")]:{value:this},$f:{get(){return this[Symbol.for("f")]}}});o.prototype=s;let i=new o(null);s[Symbol.for("w")]=i,s.$w=i;let l=i.$borrowClassHandle(r);try{let a=l.value;Zo(r,a),s.$l=Be.build(a,r)}finally{l.unref(r)}return i}retain(e){let t=G.getEnv();return e.$clone(t)}cast(e,t,r){let o=G.getEnv(),s=e.$h;s===void 0&&(s=e);let i=t.$borrowClassHandle(o);try{if(!o.isInstanceOf(s,i.value))throw new Error(`Cast from '${o.getObjectClassName(s)}' to '${t.$n}' isn't possible`)}finally{i.unref(o)}let l=t.$C;return new l(s,zt,o,r)}wrap(e,t,r){let o=t.$C,s=new o(e,zt,r,!1);return s.$r=Script.bindWeak(s,G.makeHandleDestructor(e)),s}array(e,t){let r=G.getEnv(),o=Qe(e);o!==null&&(e=o.name);let s=cr("["+e,!1,this),i=s.toJni(t,r);return s.fromJni(i,r,!0)}registerClass(e){let t=G.getEnv(),r=[];try{let o=this.use("java.lang.Class"),s=t.javaLangReflectMethod(),i=t.vaMethod("pointer",[]),l=e.name,a=e.implements||[],c=e.superClass||this.use("java.lang.Object"),d=[],p=[],f={name:ze(l),sourceFileName:yu(l),superClass:ze(c.$n),interfaces:a.map(E=>ze(E.$n)),fields:d,methods:p},u=a.slice();a.forEach(E=>{Array.prototype.slice.call(E.class.getInterfaces()).forEach(L=>{let O=this.cast(L,o).getCanonicalName();u.push(this.use(O))})});let _=e.fields||{};Object.getOwnPropertyNames(_).forEach(E=>{let L=this._getType(_[E]);d.push([E,L.name])});let h={},g={};u.forEach(E=>{let L=E.$borrowClassHandle(t);r.push(L);let O=L.value;E.$ownMembers.filter(I=>E[I].overloads!==void 0).forEach(I=>{let P=E[I],D=P.overloads,U=D.map(F=>Qo(I,F.returnType,F.argumentTypes));h[I]=[P,U,O],D.forEach((F,z)=>{let X=U[z];g[X]=[F,O]})})});let b=e.methods||{},w=Object.keys(b).reduce((E,L)=>{let O=b[L],I=L==="$init"?"<init>":L;return O instanceof Array?E.push(...O.map(P=>[I,P])):E.push([I,O]),E},[]),N=[];w.forEach(([E,L])=>{let O=Ne,I,P,D=[],U;if(typeof L=="function"){let ee=h[E];if(ee!==void 0&&Array.isArray(ee)){let[ie,Q,oe]=ee;if(Q.length>1)throw new Error(`More than one overload matching '${E}': signature must be specified`);delete g[Q[0]];let Y=ie.overloads[0];O=Y.type,I=Y.returnType,P=Y.argumentTypes,U=L;let te=t.toReflectedMethod(oe,Y.handle,0),Se=i(t.handle,te,s.getGenericExceptionTypes);D=gr(t,Se).map(ze),t.deleteLocalRef(Se),t.deleteLocalRef(te)}else I=this._getType("void"),P=[],U=L}else{if(L.isStatic&&(O=gt),I=this._getType(L.returnType||"void"),P=(L.argumentTypes||[]).map(Q=>this._getType(Q)),U=L.implementation,typeof U!="function")throw new Error("Expected a function implementation for method: "+E);let ee=Qo(E,I,P),ie=g[ee];if(ie!==void 0){let[Q,oe]=ie;delete g[ee],O=Q.type,I=Q.returnType,P=Q.argumentTypes;let Y=t.toReflectedMethod(oe,Q.handle,0),te=i(t.handle,Y,s.getGenericExceptionTypes);D=gr(t,te).map(ze),t.deleteLocalRef(te),t.deleteLocalRef(Y)}}let F=I.name,z=P.map(ee=>ee.name),X="("+z.join("")+")"+F;p.push([E,F,z,D,O===gt?Qd:0]),N.push([E,X,O,I,P,U])});let M=Object.keys(g);if(M.length>0)throw new Error("Missing implementation for: "+M.join(", "));let R=Vt.fromBuffer(Jo(f),this);try{R.load()}finally{R.file.delete()}let k=this.use(e.name),x=w.length;if(x>0){let E=3*mt,L=Memory.alloc(x*E),O=[],I=[];N.forEach(([U,F,z,X,ee,ie],Q)=>{let oe=Memory.allocUtf8String(U),Y=Memory.allocUtf8String(F),te=is(U,k,z,X,ee,ie);L.add(Q*E).writePointer(oe),L.add(Q*E+mt).writePointer(Y),L.add(Q*E+2*mt).writePointer(te),I.push(oe,Y),O.push(te)});let P=k.$borrowClassHandle(t);r.push(P);let D=P.value;t.registerNatives(D,L,x),t.throwIfExceptionPending(),k.$nativeMethods=O}return k}finally{r.forEach(o=>{o.unref(t)})}}choose(e,t){let r=G.getEnv(),{flavor:o}=K;if(o==="jvm")this._chooseObjectsJvm(e,r,t);else if(o==="art"){let s=K["art::gc::Heap::VisitObjects"]===void 0;if(s&&K["art::gc::Heap::GetInstances"]===void 0)return this._chooseObjectsJvm(e,r,t);be(G,r,i=>{s?this._chooseObjectsArtPreA12(e,r,i,t):this._chooseObjectsArtLegacy(e,r,i,t)})}else this._chooseObjectsDalvik(e,r,t)}_chooseObjectsJvm(e,t,r){let o=this.use(e),{jvmti:s}=K,i=1,l=3,a=o.$borrowClassHandle(t),c=int64(a.value.toString());try{let d=new NativeCallback((b,v,w,N)=>(w.writeS64(c),i),"int",["int64","int64","pointer","pointer"]);s.iterateOverInstancesOfClass(a.value,l,d,a.value);let p=Memory.alloc(8);p.writeS64(c);let f=Memory.alloc(Kd),u=Memory.alloc(mt);s.getObjectsWithTags(1,p,f,u,NULL);let _=f.readS32(),h=u.readPointer(),g=[];for(let b=0;b!==_;b++)g.push(h.add(b*mt).readPointer());s.deallocate(h);try{for(let b of g){let v=this.cast(b,o);if(r.onMatch(v)==="stop")break}r.onComplete()}finally{g.forEach(b=>{t.deleteLocalRef(b)})}}finally{a.unref(t)}}_chooseObjectsArtPreA12(e,t,r,o){let s=this.use(e),i=ut.$new(r,G),l,a=s.$borrowClassHandle(t);try{let f=K["art::JavaVMExt::DecodeGlobal"](K.vm,r,a.value);l=i.newHandle(f)}finally{a.unref(t)}let c=0,d=dt.$new();K["art::gc::Heap::GetInstances"](K.artHeap,i,l,c,d);let p=d.handles.map(f=>t.newGlobalRef(f));d.$delete(),i.$delete();try{for(let f of p){let u=this.cast(f,s);if(o.onMatch(u)==="stop")break}o.onComplete()}finally{p.forEach(f=>{t.deleteGlobalRef(f)})}}_chooseObjectsArtLegacy(e,t,r,o){let s=this.use(e),i=[],l=K["art::JavaVMExt::AddGlobalRef"],a=K.vm,c,d=s.$borrowClassHandle(t);try{c=K["art::JavaVMExt::DecodeGlobal"](a,r,d.value).toInt32()}finally{d.unref(t)}let p=Xn(c,f=>{i.push(l(a,r,f))});K["art::gc::Heap::VisitObjects"](K.artHeap,p,NULL);try{for(let f of i){let u=this.cast(f,s);if(o.onMatch(u)==="stop")break}}finally{i.forEach(f=>{t.deleteGlobalRef(f)})}o.onComplete()}_chooseObjectsDalvik(e,t,r){let o=this.use(e);if(K.addLocalReference===null){let i=Process.getModuleByName("libdvm.so"),l;switch(Process.arch){case"arm":l="2d e9 f0 41 05 46 15 4e 0c 46 7e 44 11 b3 43 68";break;case"ia32":l="8d 64 24 d4 89 5c 24 1c 89 74 24 20 e8 ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? 85 d2";break}Memory.scan(i.base,i.size,l,{onMatch:(a,c)=>{let d;if(Process.arch==="arm")a=a.or(1),d=new NativeFunction(a,"pointer",["pointer","pointer"]);else{let p=Memory.alloc(Process.pageSize);Memory.patchCode(p,16,f=>{let u=new X86Writer(f,{pc:p});u.putMovRegRegOffsetPtr("eax","esp",4),u.putMovRegRegOffsetPtr("edx","esp",8),u.putJmpAddress(a),u.flush()}),d=new NativeFunction(p,"pointer",["pointer","pointer"]),d._thunk=p}return K.addLocalReference=d,G.perform(p=>{s(this,p)}),"stop"},onError(a){},onComplete(){K.addLocalReference===null&&r.onComplete()}})}else s(this,t);function s(i,l){let{DVM_JNI_ENV_OFFSET_SELF:a}=Dt,c=l.handle.add(a).readPointer(),d,p=o.$borrowClassHandle(l);try{d=K.dvmDecodeIndirectRef(c,p.value)}finally{p.unref(l)}let f=d.toMatchPattern(),u=K.dvmHeapSourceGetBase(),h=K.dvmHeapSourceGetLimit().sub(u).toInt32();Memory.scan(u,h,f,{onMatch:(g,b)=>{K.dvmIsValidObject(g)&&G.perform(v=>{let w=v.handle.add(a).readPointer(),N,M=K.addLocalReference(w,g);try{N=i.cast(M,o)}finally{v.deleteLocalRef(M)}if(r.onMatch(N)==="stop")return"stop"})},onError(g){},onComplete(){r.onComplete()}})}}openClassFile(e){return new Vt(e,null,this)}_getType(e,t=!0){return lr(e,t,this)}};function Yd(){return function(n,e,t,r){return br.call(this,n,e,t,r)}}function br(n,e,t,r=!0){if(n!==null)if(r){let o=t.newGlobalRef(n);this.$h=o,this.$r=Script.bindWeak(this,G.makeHandleDestructor(o))}else this.$h=n,this.$r=null;else this.$h=null,this.$r=null;return this.$t=e,new Proxy(this,ns)}ns={has(n,e){return e in n?!0:n.$has(e)},get(n,e,t){if(typeof e!="string"||e.startsWith("$")||e==="class")return n[e];let r=n.$find(e);return r!==null?r(t):n[e]},set(n,e,t,r){return n[e]=t,!0},ownKeys(n){return n.$list()},getOwnPropertyDescriptor(n,e){return Object.prototype.hasOwnProperty.call(n,e)?Object.getOwnPropertyDescriptor(n,e):{writable:!1,configurable:!0,enumerable:!0}}};Object.defineProperties(br.prototype,{[Symbol.for("new")]:{enumerable:!1,get(){return this.$getCtor("allocAndInit")}},$new:{enumerable:!0,get(){return this[Symbol.for("new")]}},[Symbol.for("alloc")]:{enumerable:!1,value(){let n=G.getEnv(),e=this.$borrowClassHandle(n);try{let t=n.allocObject(e.value);return this.$f.cast(t,this)}finally{e.unref(n)}}},$alloc:{enumerable:!0,get(){return this[Symbol.for("alloc")]}},[Symbol.for("init")]:{enumerable:!1,get(){return this.$getCtor("initOnly")}},$init:{enumerable:!0,get(){return this[Symbol.for("init")]}},[Symbol.for("dispose")]:{enumerable:!1,value(){let n=this.$r;n!==null&&(this.$r=null,Script.unbindWeak(n)),this.$h!==null&&(this.$h=void 0)}},$dispose:{enumerable:!0,get(){return this[Symbol.for("dispose")]}},[Symbol.for("clone")]:{enumerable:!1,value(n){let e=this.$C;return new e(this.$h,this.$t,n)}},$clone:{value(n){return this[Symbol.for("clone")](n)}},[Symbol.for("class")]:{enumerable:!1,get(){let n=G.getEnv(),e=this.$borrowClassHandle(n);try{let t=this.$f;return t.cast(e.value,t.use("java.lang.Class"))}finally{e.unref(n)}}},class:{enumerable:!0,get(){return this[Symbol.for("class")]}},[Symbol.for("className")]:{enumerable:!1,get(){let n=this.$h;return n===null?this.$n:G.getEnv().getObjectClassName(n)}},$className:{enumerable:!0,get(){return this[Symbol.for("className")]}},[Symbol.for("ownMembers")]:{enumerable:!1,get(){return this.$l.list()}},$ownMembers:{enumerable:!0,get(){return this[Symbol.for("ownMembers")]}},[Symbol.for("super")]:{enumerable:!1,get(){let n=G.getEnv(),e=this.$s.$C;return new e(this.$h,es,n)}},$super:{enumerable:!0,get(){return this[Symbol.for("super")]}},[Symbol.for("s")]:{enumerable:!1,get(){let n=Object.getPrototypeOf(this),e=n.$_s;if(e===void 0){let t=G.getEnv(),r=this.$borrowClassHandle(t);try{let o=t.getSuperclass(r.value);if(o.isNull())e=null;else try{let s=t.getClassName(o),i=n.$f;if(e=i._getUsedClass(s),e===void 0)try{let l=nu(this);e=i._make(s,l,t)}finally{i._setUsedClass(s,e)}}finally{t.deleteLocalRef(o)}}finally{r.unref(t)}n.$_s=e}return e}},$s:{get(){return this[Symbol.for("s")]}},[Symbol.for("isSameObject")]:{enumerable:!1,value(n){return G.getEnv().isSameObject(n.$h,this.$h)}},$isSameObject:{value(n){return this[Symbol.for("isSameObject")](n)}},[Symbol.for("getCtor")]:{enumerable:!1,value(n){let e=this.$c,t=e[0];if(t===null){let r=G.getEnv(),o=this.$borrowClassHandle(r);try{t=ru(o.value,this.$w,r),e[0]=t}finally{o.unref(r)}}return t[n]}},$getCtor:{value(n){return this[Symbol.for("getCtor")](n)}},[Symbol.for("borrowClassHandle")]:{enumerable:!1,value(n){let e=this.$n,t=this.$f._classHandles,r=t.get(e);return r===void 0&&(r=new yr(this.$gch(n),n),t.set(e,r,n)),r.ref()}},$borrowClassHandle:{value(n){return this[Symbol.for("borrowClassHandle")](n)}},[Symbol.for("copyClassHandle")]:{enumerable:!1,value(n){let e=this.$borrowClassHandle(n);try{return n.newLocalRef(e.value)}finally{e.unref(n)}}},$copyClassHandle:{value(n){return this[Symbol.for("copyClassHandle")](n)}},[Symbol.for("getHandle")]:{enumerable:!1,value(n){let e=this.$h;if(e===void 0)throw new Error("Wrapper is disposed; perhaps it was borrowed from a hook instead of calling Java.retain() to make a long-lived wrapper?");return e}},$getHandle:{value(n){return this[Symbol.for("getHandle")](n)}},[Symbol.for("list")]:{enumerable:!1,value(){let n=this.$s,e=n!==null?n.$list():[],t=this.$l;return Array.from(new Set(e.concat(t.list())))}},$list:{get(){return this[Symbol.for("list")]}},[Symbol.for("has")]:{enumerable:!1,value(n){if(this.$m.has(n)||this.$l.has(n))return!0;let r=this.$s;return!!(r!==null&&r.$has(n))}},$has:{value(n){return this[Symbol.for("has")](n)}},[Symbol.for("find")]:{enumerable:!1,value(n){let e=this.$m,t=e.get(n);if(t!==void 0)return t;let o=this.$l.find(n);if(o!==null){let i=G.getEnv(),l=this.$borrowClassHandle(i);try{t=ou(n,o,l.value,this.$w,i)}finally{l.unref(i)}return e.set(n,t),t}let s=this.$s;return s!==null?s.$find(n):null}},$find:{value(n){return this[Symbol.for("find")](n)}},[Symbol.for("toJSON")]:{enumerable:!1,value(){let n=this.$n;if(this.$h===null)return`<class: ${n}>`;let t=this.$className;return n===t?`<instance: ${n}>`:`<instance: ${n}, $className: ${t}>`}},toJSON:{get(){return this[Symbol.for("toJSON")]}}});function yr(n,e){this.value=e.newGlobalRef(n),e.deleteLocalRef(n),this.refs=1}yr.prototype.ref=function(){return this.refs++,this};yr.prototype.unref=function(n){--this.refs===0&&n.deleteGlobalRef(this.value)};function Xd(n,e){n.unref(e)}function eu(n){let e=n.replace(/\./g,"/");return function(t){let r=Jt();ls(r);try{return t.findClass(e)}finally{cs(r)}}}function tu(n,e,t){return ur===null&&(Ko=t.vaMethod("pointer",["pointer"]),ur=e.loadClass.overload("java.lang.String").handle),t=null,function(r){let o=r.newStringUtf(n),s=Jt();ls(s);try{let i=Ko(r.handle,e.$h,ur,o);return r.throwIfExceptionPending(),i}finally{cs(s),r.deleteLocalRef(o)}}}function nu(n){return function(e){let t=n.$borrowClassHandle(e);try{return e.getSuperclass(t.value)}finally{t.unref(e)}}}function ru(n,e,t){let{$n:r,$f:o}=e,s=bu(r),i=t.javaLangClass(),l=t.javaLangReflectConstructor(),a=t.vaMethod("pointer",[]),c=t.vaMethod("uint8",[]),d=[],p=[],f=o._getType(r,!1),u=o._getType("void",!1),_=a(t.handle,n,i.getDeclaredConstructors);try{let h=t.getArrayLength(_);if(h!==0)for(let g=0;g!==h;g++){let b,v,w=t.getObjectArrayElement(_,g);try{b=t.fromReflectedMethod(w),v=a(t.handle,w,l.getGenericParameterTypes)}finally{t.deleteLocalRef(w)}let N;try{N=gr(t,v).map(M=>o._getType(M))}finally{t.deleteLocalRef(v)}d.push(Ye(s,e,pr,b,f,N,t)),p.push(Ye(s,e,Ne,b,u,N,t))}else{if(c(t.handle,n,i.isInterface))throw new Error("cannot instantiate an interface");let b=t.javaLangObject(),v=t.getMethodId(b,"<init>","()V");d.push(Ye(s,e,pr,v,f,[],t)),p.push(Ye(s,e,Ne,v,u,[],t))}}finally{t.deleteLocalRef(_)}if(p.length===0)throw new Error("no supported overloads");return{allocAndInit:hr(d),initOnly:hr(p)}}function ou(n,e,t,r,o){return e.startsWith("m")?su(n,e,t,r,o):hu(n,e,t,r,o)}function su(n,e,t,r,o){let{$f:s}=r,i=e.split(":").slice(1),l=o.javaLangReflectMethod(),a=o.vaMethod("pointer",[]),c=o.vaMethod("uint8",[]),d=i.map(f=>{let u=f[0]==="s"?gt:Ne,_=ptr(f.substr(1)),h,g=[],b=o.toReflectedMethod(t,_,u===gt?1:0);try{let v=!!c(o.handle,b,l.isVarArgs),w=a(o.handle,b,l.getGenericReturnType);o.throwIfExceptionPending();try{h=s._getType(o.getTypeName(w))}finally{o.deleteLocalRef(w)}let N=a(o.handle,b,l.getParameterTypes);try{let M=o.getArrayLength(N);for(let R=0;R!==M;R++){let k=o.getObjectArrayElement(N,R),x;try{x=v&&R===M-1?o.getArrayTypeName(k):o.getTypeName(k)}finally{o.deleteLocalRef(k)}let E=s._getType(x);g.push(E)}}finally{o.deleteLocalRef(N)}}catch{return null}finally{o.deleteLocalRef(b)}return Ye(n,r,u,_,h,g,o)}).filter(f=>f!==null);if(d.length===0)throw new Error("No supported overloads");n==="valueOf"&&uu(d);let p=hr(d);return function(f){return p}}function hr(n){let e=iu();return Object.setPrototypeOf(e,rs),e._o=n,e}function iu(){let n=function(){return n.invoke(this,arguments)};return n}rs=Object.create(Function.prototype,{overloads:{enumerable:!0,get(){return this._o}},overload:{value(...n){let e=this._o,t=n.length,r=n.join(":");for(let o=0;o!==e.length;o++){let s=e[o],{argumentTypes:i}=s;if(i.length!==t)continue;if(i.map(a=>a.className).join(":")===r)return s}_r(this.methodName,this.overloads,"specified argument types do not match any of:")}},methodName:{enumerable:!0,get(){return this._o[0].methodName}},holder:{enumerable:!0,get(){return this._o[0].holder}},type:{enumerable:!0,get(){return this._o[0].type}},handle:{enumerable:!0,get(){return Ve(this),this._o[0].handle}},implementation:{enumerable:!0,get(){return Ve(this),this._o[0].implementation},set(n){Ve(this),this._o[0].implementation=n}},returnType:{enumerable:!0,get(){return Ve(this),this._o[0].returnType}},argumentTypes:{enumerable:!0,get(){return Ve(this),this._o[0].argumentTypes}},canInvokeWith:{enumerable:!0,get(n){return Ve(this),this._o[0].canInvokeWith}},clone:{enumerable:!0,value(n){return Ve(this),this._o[0].clone(n)}},invoke:{value(n,e){let t=this._o,r=n.$h!==null;for(let o=0;o!==t.length;o++){let s=t[o];if(s.canInvokeWith(e)){if(s.type===Ne&&!r){let i=this.methodName;if(i==="toString")return`<class: ${n.$n}>`;throw new Error(i+": cannot call instance method without an instance")}return s.apply(n,e)}}if(this.methodName==="toString")return`<class: ${n.$n}>`;_r(this.methodName,this.overloads,"argument types do not match any of:")}}});function Qo(n,e,t){return`${e.className} ${n}(${t.map(r=>r.className).join(", ")})`}function Ve(n){let e=n._o;e.length>1&&_r(e[0].methodName,e,"has more than one overload, use .overload(<signature>) to choose from:")}function _r(n,e,t){let o=e.slice().sort((s,i)=>s.argumentTypes.length-i.argumentTypes.length).map(s=>s.argumentTypes.length>0?".overload('"+s.argumentTypes.map(l=>l.className).join("', '")+"')":".overload()");throw new Error(`${n}(): ${t}
	${o.join(`
	`)}`)}function Ye(n,e,t,r,o,s,i,l){let a=o.type,c=s.map(f=>f.type);i===null&&(i=G.getEnv());let d,p;return t===Ne?(d=i.vaMethod(a,c,l),p=i.nonvirtualVaMethod(a,c,l)):t===gt?(d=i.staticVaMethod(a,c,l),p=d):(d=i.constructor(c,l),p=d),au([n,e,t,r,o,s,d,p])}function au(n){let e=lu();return Object.setPrototypeOf(e,os),e._p=n,e}function lu(){let n=function(){return n.invoke(this,arguments)};return n}os=Object.create(Function.prototype,{methodName:{enumerable:!0,get(){return this._p[0]}},holder:{enumerable:!0,get(){return this._p[1]}},type:{enumerable:!0,get(){return this._p[2]}},handle:{enumerable:!0,get(){return this._p[3]}},implementation:{enumerable:!0,get(){let n=this._r;return n!==void 0?n:null},set(n){let e=this._p,t=e[1];if(e[2]===pr)throw new Error("Reimplementing $new is not possible; replace implementation of $init instead");let o=this._r;if(o!==void 0&&(t.$f._patchedMethods.delete(this),o._m.revert(G),this._r=void 0),n!==null){let[s,i,l,a,c,d]=e,p=is(s,i,l,c,d,n,this),f=Xo(a);p._m=f,this._r=p,f.replace(p,l===Ne,d,G,K),t.$f._patchedMethods.add(this)}}},returnType:{enumerable:!0,get(){return this._p[4]}},argumentTypes:{enumerable:!0,get(){return this._p[5]}},canInvokeWith:{enumerable:!0,value(n){let e=this._p[5];return n.length!==e.length?!1:e.every((t,r)=>t.isCompatible(n[r]))}},clone:{enumerable:!0,value(n){let e=this._p.slice(0,6);return Ye(...e,null,n)}},invoke:{value(n,e){let t=G.getEnv(),r=this._p,o=r[2],s=r[4],i=r[5],l=this._r,a=o===Ne,c=e.length,d=2+c;t.pushLocalFrame(d);let p=null;try{let f;a?f=n.$getHandle():(p=n.$borrowClassHandle(t),f=p.value);let u,_=n.$t;l===void 0?u=r[3]:(u=l._m.resolveTarget(n,a,t,K),ts&&l._c.has(Jt())&&(_=es));let h=[t.handle,f,u];for(let v=0;v!==c;v++)h.push(i[v].toJni(e[v],t));let g;_===zt?g=r[6]:(g=r[7],a&&h.splice(2,0,n.$copyClassHandle(t)));let b=g.apply(null,h);return t.throwIfExceptionPending(),s.fromJni(b,t,!0)}finally{p!==null&&p.unref(t),t.popLocalFrame(NULL)}}},toString:{enumerable:!0,value(){return`function ${this.methodName}(${this.argumentTypes.map(n=>n.className).join(", ")}): ${this.returnType.className}`}}});function is(n,e,t,r,o,s,i=null){let l=new Set,a=cu([n,e,t,r,o,s,i,l]),c=new NativeCallback(a,r.type,["pointer","pointer"].concat(o.map(d=>d.type)));return c._c=l,c}function cu(n){return function(){return du(arguments,n)}}function du(n,e){let t=new y(n[0],G),[r,o,s,i,l,a,c,d]=e,p=[],f;if(s===Ne){let h=o.$C;f=new h(n[1],zt,t,!1)}else f=o;let u=Jt();t.pushLocalFrame(3);let _=!0;G.link(u,t);try{d.add(u);let h;c===null||!Xe.has(u)?h=a:h=c;let g=[],b=n.length-2;for(let N=0;N!==b;N++){let R=l[N].fromJni(n[2+N],t,!1);g.push(R),p.push(R)}let v=h.apply(f,g);if(!i.isCompatible(v))throw new Error(`Implementation for ${r} expected return value compatible with ${i.className}`);let w=i.toJni(v,t);return i.type==="pointer"&&(w=t.popLocalFrame(w),_=!1,p.push(v)),w}catch(h){let g=h.$h;return g!==void 0?t.throw(g):Script.nextTick(()=>{throw h}),i.defaultValue}finally{G.unlink(u),_&&t.popLocalFrame(NULL),d.delete(u),p.forEach(h=>{if(h===null)return;let g=h.$dispose;g!==void 0&&g.call(h)})}}function uu(n){let{holder:e,type:t}=n[0];n.some(o=>o.type===t&&o.argumentTypes.length===0)||n.push(pu([e,t]))}function pu(n){let e=fu();return Object.setPrototypeOf(e,ss),e._p=n,e}function fu(){return function(){return this}}ss=Object.create(Function.prototype,{methodName:{enumerable:!0,get(){return"valueOf"}},holder:{enumerable:!0,get(){return this._p[0]}},type:{enumerable:!0,get(){return this._p[1]}},handle:{enumerable:!0,get(){return NULL}},implementation:{enumerable:!0,get(){return null},set(n){}},returnType:{enumerable:!0,get(){let n=this.holder;return n.$f.use(n.$n)}},argumentTypes:{enumerable:!0,get(){return[]}},canInvokeWith:{enumerable:!0,value(n){return n.length===0}},clone:{enumerable:!0,value(n){throw new Error("Invalid operation")}}});function hu(n,e,t,r,o){let s=e[2]==="s"?dr:fr,i=ptr(e.substr(3)),{$f:l}=r,a,c=o.toReflectedField(t,i,s===dr?1:0);try{a=o.vaMethod("pointer",[])(o.handle,c,o.javaLangReflectField().getGenericType),o.throwIfExceptionPending()}finally{o.deleteLocalRef(c)}let d;try{d=l._getType(o.getTypeName(a))}finally{o.deleteLocalRef(a)}let p,f,u=d.type;return s===dr?(p=o.getStaticField(u),f=o.setStaticField(u)):(p=o.getField(u),f=o.setField(u)),_u([s,d,i,p,f])}function _u(n){return function(e){return new as([e].concat(n))}}function as(n){this._p=n}Object.defineProperties(as.prototype,{value:{enumerable:!0,get(){let[n,e,t,r,o]=this._p,s=G.getEnv();s.pushLocalFrame(4);let i=null;try{let l;if(e===fr){if(l=n.$getHandle(),l===null)throw new Error("Cannot access an instance field without an instance")}else i=n.$borrowClassHandle(s),l=i.value;let a=o(s.handle,l,r);return s.throwIfExceptionPending(),t.fromJni(a,s,!0)}finally{i!==null&&i.unref(s),s.popLocalFrame(NULL)}},set(n){let[e,t,r,o,,s]=this._p,i=G.getEnv();i.pushLocalFrame(4);let l=null;try{let a;if(t===fr){if(a=e.$getHandle(),a===null)throw new Error("Cannot access an instance field without an instance")}else l=e.$borrowClassHandle(i),a=l.value;if(!r.isCompatible(n))throw new Error(`Expected value compatible with ${r.className}`);let c=r.toJni(n,i);s(i.handle,a,o,c),i.throwIfExceptionPending()}finally{l!==null&&l.unref(i),i.popLocalFrame(NULL)}}},holder:{enumerable:!0,get(){return this._p[0]}},fieldType:{enumerable:!0,get(){return this._p[1]}},fieldReturnType:{enumerable:!0,get(){return this._p[2]}},toString:{enumerable:!0,value(){let n=`Java.Field{holder: ${this.holder}, fieldType: ${this.fieldType}, fieldReturnType: ${this.fieldReturnType}, value: ${this.value}}`;return n.length<200?n:`Java.Field{
	holder: ${this.holder},
	fieldType: ${this.fieldType},
	fieldReturnType: ${this.fieldReturnType},
	value: ${this.value},
}`.split(`
`).map(t=>t.length>200?t.slice(0,t.indexOf(" ")+1)+"...,":t).join(`
`)}}});var Vt=class n{static fromBuffer(e,t){let r=Yo(t),o=r.getCanonicalPath().toString(),s=new File(o,"w");return s.write(e.buffer),s.close(),mu(o,t),new n(o,r,t)}constructor(e,t,r){this.path=e,this.file=t,this._factory=r}load(){let{_factory:e}=this,{codeCacheDir:t}=e,r=e.use("dalvik.system.DexClassLoader"),o=e.use("java.io.File"),s=this.file;if(s===null&&(s=e.use("java.io.File").$new(this.path)),!s.exists())throw new Error("File not found");o.$new(t).mkdirs(),e.loader=r.$new(s.getCanonicalPath(),t,null,e.loader),G.preventDetachDueToClassLoader()}getClassNames(){let{_factory:e}=this,t=e.use("dalvik.system.DexFile"),r=Yo(e),o=t.loadDex(this.path,r.getCanonicalPath(),0),s=[],i=o.entries();for(;i.hasMoreElements();)s.push(i.nextElement().toString());return s}};function Yo(n){let{cacheDir:e,tempFileNaming:t}=n,r=n.use("java.io.File"),o=r.$new(e);return o.mkdirs(),r.createTempFile(t.prefix,t.suffix+".dex",o)}function mu(n,e){e.use("java.io.File").$new(n).setWritable(!1,!1)}function gu(){switch(ue.state){case"empty":{ue.state="pending";let n=ue.factories[0],e=n.use("java.util.HashMap"),t=n.use("java.lang.Integer");ue.loaders=e.$new(),ue.Integer=t;let r=n.loader;return r!==null&&mr(n,r),ue.state="ready",ue}case"pending":do Thread.sleep(.05);while(ue.state==="pending");return ue;case"ready":return ue}}function mr(n,e){let{factories:t,loaders:r,Integer:o}=ue,s=o.$new(t.indexOf(n));r.put(e,s);for(let i=e.getParent();i!==null&&!r.containsKey(i);i=i.getParent())r.put(i,s)}function ls(n){let e=Xe.get(n);e===void 0&&(e=0),e++,Xe.set(n,e)}function cs(n){let e=Xe.get(n);if(e===void 0)throw new Error(`Thread ${n} is not ignored`);e--,e===0?Xe.delete(n):Xe.set(n,e)}function bu(n){return n.slice(n.lastIndexOf(".")+1)}function gr(n,e){let t=[],r=n.getArrayLength(e);for(let o=0;o!==r;o++){let s=n.getObjectArrayElement(e,o);try{t.push(n.getTypeName(s))}finally{n.deleteLocalRef(s)}}return t}function yu(n){let e=n.split(".");return e[e.length-1]+".java"}var Eu=4,ds=Process.pointerSize,Er=class{ACC_PUBLIC=1;ACC_PRIVATE=2;ACC_PROTECTED=4;ACC_STATIC=8;ACC_FINAL=16;ACC_SYNCHRONIZED=32;ACC_BRIDGE=64;ACC_VARARGS=128;ACC_NATIVE=256;ACC_ABSTRACT=1024;ACC_STRICT=2048;ACC_SYNTHETIC=4096;constructor(){this.classFactory=null,this.ClassFactory=Oe,this.vm=null,this.api=null,this._initialized=!1,this._apiError=null,this._wakeupHandler=null,this._pollListener=null,this._pendingMainOps=[],this._pendingVmOps=[],this._cachedIsAppProcess=null;try{this._tryInitialize()}catch{}}_tryInitialize(){if(this._initialized)return!0;if(this._apiError!==null)throw this._apiError;let e;try{e=No(),this.api=e}catch(r){throw this._apiError=r,r}if(e===null)return!1;let t=new Ie(e);return this.vm=t,$o(t),Oe._initialize(t,e),this.classFactory=new Oe,this._initialized=!0,!0}_dispose(){if(this.api===null)return;let{vm:e}=this;e.perform(t=>{Oe._disposeAll(t),y.dispose(t)}),Script.nextTick(()=>{Ie.dispose(e)})}get available(){return this._tryInitialize()}get androidVersion(){return pt()}synchronized(e,t){let{$h:r=e}=e;if(!(r instanceof NativePointer))throw new Error("Java.synchronized: the first argument `obj` must be either a pointer or a Java instance");let o=this.vm.getEnv();de("VM::MonitorEnter",o.monitorEnter(r));try{t()}finally{o.monitorExit(r)}}enumerateLoadedClasses(e){this._checkAvailable();let{flavor:t}=this.api;t==="jvm"?this._enumerateLoadedClassesJvm(e):t==="art"?this._enumerateLoadedClassesArt(e):this._enumerateLoadedClassesDalvik(e)}enumerateLoadedClassesSync(){let e=[];return this.enumerateLoadedClasses({onMatch(t){e.push(t)},onComplete(){}}),e}enumerateClassLoaders(e){this._checkAvailable();let{flavor:t}=this.api;if(t==="jvm")this._enumerateClassLoadersJvm(e);else if(t==="art")this._enumerateClassLoadersArt(e);else throw new Error("Enumerating class loaders is not supported on Dalvik")}enumerateClassLoadersSync(){let e=[];return this.enumerateClassLoaders({onMatch(t){e.push(t)},onComplete(){}}),e}_enumerateLoadedClassesJvm(e){let{api:t,vm:r}=this,{jvmti:o}=t,s=r.getEnv(),i=Memory.alloc(Eu),l=Memory.alloc(ds);o.getLoadedClasses(i,l);let a=i.readS32(),c=l.readPointer(),d=[];for(let p=0;p!==a;p++)d.push(c.add(p*ds).readPointer());o.deallocate(c);try{for(let p of d){let f=s.getClassName(p);e.onMatch(f,p)}e.onComplete()}finally{d.forEach(p=>{s.deleteLocalRef(p)})}}_enumerateClassLoadersJvm(e){this.choose("java.lang.ClassLoader",e)}_enumerateLoadedClassesArt(e){let{vm:t,api:r}=this,o=t.getEnv(),s=r["art::JavaVMExt::AddGlobalRef"],{vm:i}=r;be(t,o,l=>{let a=Gn(c=>{let d=s(i,l,c);try{let p=o.getClassName(d);e.onMatch(p,d)}finally{o.deleteGlobalRef(d)}return!0});r["art::ClassLinker::VisitClasses"](r.artClassLinker.address,a)}),e.onComplete()}_enumerateClassLoadersArt(e){let{classFactory:t,vm:r,api:o}=this,s=r.getEnv(),i=o["art::ClassLinker::VisitClassLoaders"];if(i===void 0)throw new Error("This API is only available on Android >= 7.0");let l=t.use("java.lang.ClassLoader"),a=[],c=o["art::JavaVMExt::AddGlobalRef"],{vm:d}=o;be(r,s,p=>{let f=$n(u=>(a.push(c(d,p,u)),!0));Jn(()=>{i(o.artClassLinker.address,f)})});try{a.forEach(p=>{let f=t.cast(p,l);e.onMatch(f)})}finally{a.forEach(p=>{s.deleteGlobalRef(p)})}e.onComplete()}_enumerateLoadedClassesDalvik(e){let{api:t}=this,r=ptr("0xcbcacccd"),o=172,s=8,l=t.gDvm.add(o).readPointer(),a=l.readS32(),d=l.add(12).readPointer(),p=a*s;for(let f=0;f<p;f+=s){let _=d.add(f).add(4).readPointer();if(_.isNull()||_.equals(r))continue;let g=_.add(24).readPointer().readUtf8String();if(g.startsWith("L")){let b=g.substring(1,g.length-1).replace(/\//g,".");e.onMatch(b)}}e.onComplete()}enumerateMethods(e){let{classFactory:t}=this,r=this.vm.getEnv(),o=t.use("java.lang.ClassLoader");return Be.enumerateMethods(e,this.api,r).map(s=>{let i=s.loader;return s.loader=i!==null?t.wrap(i,o,r):null,s})}scheduleOnMainThread(e){this.performNow(()=>{this._pendingMainOps.push(e);let{_wakeupHandler:t}=this;if(t===null){let{classFactory:r}=this,o=r.use("android.os.Handler"),s=r.use("android.os.Looper");t=o.$new(s.getMainLooper()),this._wakeupHandler=t}this._pollListener===null&&(this._pollListener=Interceptor.attach(Process.getModuleByName("libc.so").getExportByName("epoll_wait"),this._makePollHook()),Interceptor.flush()),t.sendEmptyMessage(1)})}_makePollHook(){let e=Process.id,{_pendingMainOps:t}=this;return function(){if(this.threadId!==e)return;let r;for(;(r=t.shift())!==void 0;)try{r()}catch(o){Script.nextTick(()=>{throw o})}}}perform(e){if(this._checkAvailable(),!this._isAppProcess()||this.classFactory.loader!==null)try{this.vm.perform(e)}catch(t){Script.nextTick(()=>{throw t})}else this._pendingVmOps.push(e),this._pendingVmOps.length===1&&this._performPendingVmOpsWhenReady()}performNow(e){return this._checkAvailable(),this.vm.perform(()=>{let{classFactory:t}=this;if(this._isAppProcess()&&t.loader===null){let o=t.use("android.app.ActivityThread").currentApplication();o!==null&&us(t,o)}return e()})}_performPendingVmOpsWhenReady(){this.vm.perform(()=>{let{classFactory:e}=this,t=e.use("android.app.ActivityThread"),r=t.currentApplication();if(r!==null){us(e,r),this._performPendingVmOps();return}let o=this,s=!1,i="early",l=t.handleBindApplication;l.implementation=function(d){if(d.instrumentationName.value!==null){i="late";let f=e.use("android.app.LoadedApk").makeApplication;f.implementation=function(u,_){return s||(s=!0,ps(e,this),o._performPendingVmOps()),f.apply(this,arguments)}}l.apply(this,arguments)};let c=t.getPackageInfo.overloads.map(d=>[d.argumentTypes.length,d]).sort(([d],[p])=>p-d).map(([d,p])=>p)[0];c.implementation=function(...d){let p=c.call(this,...d);return!s&&i==="early"&&(s=!0,ps(e,p),o._performPendingVmOps()),p}})}_performPendingVmOps(){let{vm:e,_pendingVmOps:t}=this,r;for(;(r=t.shift())!==void 0;)try{e.perform(r)}catch(o){Script.nextTick(()=>{throw o})}}use(e,t){return this.classFactory.use(e,t)}openClassFile(e){return this.classFactory.openClassFile(e)}choose(e,t){this.classFactory.choose(e,t)}retain(e){return this.classFactory.retain(e)}cast(e,t){return this.classFactory.cast(e,t)}array(e,t){return this.classFactory.array(e,t)}backtrace(e){return Hn(this.vm,e)}isMainThread(){let e=this.classFactory.use("android.os.Looper"),t=e.getMainLooper(),r=e.myLooper();return r===null?!1:t.$isSameObject(r)}registerClass(e){return this.classFactory.registerClass(e)}deoptimizeEverything(){let{vm:e}=this;return Kn(e,e.getEnv())}deoptimizeBootImage(){let{vm:e}=this;return Qn(e,e.getEnv())}deoptimizeMethod(e){let{vm:t}=this;return Wn(t,t.getEnv(),e)}_checkAvailable(){if(!this.available)throw new Error("Java API not available")}_isAppProcess(){let e=this._cachedIsAppProcess;if(e===null){if(this.api.flavor==="jvm")return e=!1,this._cachedIsAppProcess=e,e;let t=new NativeFunction(Module.getGlobalExportByName("readlink"),"pointer",["pointer","pointer","pointer"],{exceptions:"propagate"}),r=Memory.allocUtf8String("/proc/self/exe"),o=1024,s=Memory.alloc(o),i=t(r,s,ptr(o)).toInt32();if(i!==-1){let l=s.readUtf8String(i);e=/^\/system\/bin\/app_process/.test(l)}else e=!0;this._cachedIsAppProcess=e}return e}};function us(n,e){let t=n.use("android.os.Process");n.loader=e.getClassLoader(),t.myUid()===t.SYSTEM_UID.value?(n.cacheDir="/data/system",n.codeCacheDir="/data/dalvik-cache"):"getCodeCacheDir"in e?(n.cacheDir=e.getCacheDir().getCanonicalPath(),n.codeCacheDir=e.getCodeCacheDir().getCanonicalPath()):(n.cacheDir=e.getFilesDir().getCanonicalPath(),n.codeCacheDir=e.getCacheDir().getCanonicalPath())}function ps(n,e){let t=n.use("java.io.File");n.loader=e.getClassLoader();let r=t.$new(e.getDataDir()).getCanonicalPath();n.cacheDir=r,n.codeCacheDir=r+"/cache"}var vr=new Er;Script.bindWeak(vr,()=>{vr._dispose()});var Ce=vr;var vu="bgyb",Su="bgyd",Je=null,Sr=!1,wr=!1;Ce.perform(function(){let n=Ce.use(vu);n.dispatchTransaction.implementation=function(t,r,o,s){console.log("[+] client.ts: dispatchTransaction called"),r=Ce.cast(r,Ce.use("android.os.Parcel"));let i=r.dataPosition();r.readInt();let l=Ce.use("android.os.Bundle"),a=Ce.cast(l.CREATOR.value.createFromParcel(r),l);r.setDataPosition(i);let c=a.getByteArray("nonce"),d=a.getString("package.name");if(console.log("[+] Sending nonce, cloud_project_number and package_name to Python"),send({type:"nonce",data:c}),a.containsKey("cloud.prj")){let f=a.getLong("cloud.prj");send({type:"cloud_project_number",data:f})}else send({type:"cloud_project_number",data:0});return send({type:"package_name",data:d}),Sr=!0,wr=!1,this.dispatchTransaction(t,r,o,s)};let e=Ce.use(Su);e.a.implementation=function(t){if(console.log("[+] client.ts: integrityResponseClass.a called - this is where we inject data!"),!Sr)return console.log("[+] client.ts: No request in progress, calling original method"),this.a(t);let r=Ce.use("android.os.Bundle");t=Ce.cast(t,r);let o=t.getLong("request.token.sid"),s=t.getString("token");return console.log("[+] client.ts: original sid: "+o),console.log("[+] clients.ts: original token: "+(s?s.substring(0,50)+"...":"null")),wr||(console.log("[+] client.ts: waiting for server_data from Python..."),recv("server_data",function(l){Je=l,console.log("[+] client.ts: received server_data from Python")}).wait(),wr=!0),Je?(console.log("[+] client.ts: Replacing bundle data with server response"),console.log(`    New Timestamp: ${Je.timestamp}`),console.log(`    New Token: ${Je.token.substring(0,50)}...`),t.clear(),t.putLong("request.token.sid",Je.timestamp),t.putString("token",Je.token),Sr=!1,Je=null,console.log("[+] client.ts calling original method with replaced data")):console.log("[-] clients.ts no data received, using original data"),this.a(t)},console.log("[+] client.ts: all client hooks installed successfully")});
