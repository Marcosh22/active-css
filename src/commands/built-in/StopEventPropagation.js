_a.StopEventPropagation = o => {
	// Don't bubble up the Active CSS component element hierarchy.
	// Short variable names are used here as there are a lot of passing around of variables and it help keeps the core small.
	// maEv = main event object, o._maEvCo = main event object counter
	// taEv = target event object, o._taEvCo = target event object counter
	if (typeof taEv[o._taEvCo] !== 'undefined') taEv[o._taEvCo]._acssStopEventProp = true;
	if (typeof maEv[o._maEvCo] !== 'undefined') maEv[o._maEvCo]._acssStopEventProp = true;
};
