+------------------------------+
 PlayIntegrity ProVerif model
+------------------------------+

* ProVerif
-----------

Verifying the models requires ProVerif (version 2.05), which is available at

https://bblanche.gitlabpages.inria.fr/proverif/

or can alternatively be installed e.g. from OPAM.


* Structure of the files
-------------------------
As the PlayIntegrity model is quite long, it was split into several files,
using ProVerif's library mechanism.

This helps organising the model and making it more readable,
and also allows for modularity when modelling the proposed mitigation:
since the mitigation only affects the behaviour of the Google server,
the files containing the rest of the model do not need to be duplicated.

The files are as follows:

- `protocol/declarations.pvl`
  contains the declarations of primitives, types, and constants
  used in the model

- `protocol/events.pvl`
  contains the declarations of events used in the model

- `protocol/components.pvl`
  contains the processes modelling all components of the protocol
  (Keystore, App, Cloud, etc.) except the Google server

- `protocol/google.pvl`
  contains the model of the Google server

- `protocol/google-mitigation.pvl`
  contains the model of the Google server implementing the proposed mitigation

- `protocol/devices.pvl`
  contains the model of the devices (rooted, unrooted, etc.
  and the corresponding sessions of the protocol, which rely on the processes
  defined in `components.pvl` and (`google.pvl` or `google-mitigation.pvl`)

- `protocol/protocol.pvl`
  contains the final model of the protocol, obtained by putting several
  replicated devices in parallel.
  Depending on whether `google.pvl` or `google-mitigation.pvl` is
  included before `protocol.pvl`, this is a model of either the actual protocol,
  or the mitigation

- `protocol/restrictions.pvl`
  contains restrictions that are part of the model.
  These are not assumptions, but rather a modelling technique:
  e.g. the processes allow the attacker to arbitrarily choose any appID
  for honest and corrupted apps, and a restriction enforces that
  this choice is consistent, i.e. one given appID is either
  always corrupted or always honest.

- `properties/lemmas.pvl`
  contains useful lemmas to prove the sanity checks

- `properties/sanity.pv`
  contains queries that express sanity checks on the model
  e.g. checking that the expected trace is indeed executable

- `properties/queries.pv`
  contains queries that express the required security properties




* Verifying the models
----------------------

A `makefile` is provided to run ProVerif on the models.
ProVerif v2.05 is known to work.

- To verify the properties on the PlayIntegrity protocol:
  `make properties`

- To verify the properties on the modified protocol that includes
  the mitigation:
  `make properties-mitigation`

These two commands run ProVerif on the file `queries.pv` with the appropriate
library includes.
This file contains successively properties 1, 2, 3, 4, 5, 6, 7,
and ProVerif outputs in the end a summary of which of these properties hold.

Alternatively, one can run ProVerif manually by writing e.g.
```
  proverif -lib protocol/declarations.pvl -lib protocol/events \
           -lib protocol/components.pvl -lib protocol/google.pvl \
           -lib protocol/devices.pvl -lib protocol/protocol.pvl \
           -lib protocol/restrictions.pvl \
           -lib properties/lemmas.pvl \
           properties/queries.pv
```
for the protocol, and replacing `google.pvl` with `google-mitigation.pvl`
for the modified version.


* Sanity checks
---------------

The makefile can also run the sanity checks, using the following commands.
These run ProVerif on the file sanity.pv, which contain queries asking
ProVerif to show that the executability checks do not hold.
Normally, ProVerif should find all these queries to be false.

- To run the sanity checks on the protocol:
  make sanity

- To run the sanity checks on the modified protocol:
  make sanity-mitigation



