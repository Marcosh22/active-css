_a.LoadConfig = o => {
	// Dynamically load additional config if it has not already been loaded and append to existing unprocessed concatenated config.
	o.actVal = o.actVal._ACSSRepQuo().trim();
	_addActValRaw(o);
	if (!configArr.includes(o.avRaw)) {
		o.file = o.actVal;	// We want the original to show in the extensions.
		_getFile(o.actVal, 'txt', o);
	} else {
		// Run the success script - we should still do this, we just didn't need to load the config.
		_handleEvents({ obj: o.obj, evType: 'afterLoadConfig', eve: o.e, compRef: o.compRef, compDoc: o.compDoc, component: o.component, _maEvCo: o._maEvCo, _taEvCo: o._taEvCo });
	}
};
