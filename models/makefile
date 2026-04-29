.PHONY: sanity sanity-fix properties properties-fix

pc = protocol
pp = properties

pv = proverif

includes-before = -lib $(pc)/declarations.pvl -lib $(pc)/events.pvl -lib $(pc)/components.pvl
includes-after = -lib $(pc)/devices.pvl -lib $(pc)/protocol.pvl -lib $(pc)/restrictions.pvl
model = $(includes-before) -lib $(pc)/google.pvl $(includes-after)
mitigation = $(includes-before) -lib $(pc)/google-mitigation.pvl $(includes-after)
lemmas = -lib $(pp)/lemmas.pvl

sanity:
	$(pv) $(model) $(lemmas) $(pp)/sanity.pv

sanity-mitigation:
	$(pv) $(mitigation) $(lemmas) $(pp)/sanity.pv

properties:
	$(pv) $(model) $(pp)/queries.pv

properties-mitigation:
	$(pv) $(mitigation) $(pp)/queries.pv

