const _ajaxDisplay = o => {
	let ev = 'afterAjax' + ((o.formSubmit) ? 'Form' + (o.formPreview ? 'Preview' : o.formSubmit ? 'Submit' : '') : '');
	if (o.error) ev += o.errorCode;
	_handleEvents({ obj: o.obj, evType: ev, otherObj: o, compRef: o.compRef, compDoc: o.compDoc, component: o.component });
	if (o.hash !== '') {
		document.location.hash = '';	// Needed as Chrome doesn't work without it.
		document.location.hash = o.hash;
	}
};
