_a.SetProperty = o => {
	o.actVal = o.actVal._ACSSSpaceQuoIn();
	let attrArr = o.actVal.split(' ');
	attrArr[1] = _handleQuoAjax(o, attrArr[1])._ACSSSpaceQuoOut();
	o.secSelObj[attrArr[0]] = (attrArr[1] == 'true') ? true : (attrArr[1] == 'false') ? false : attrArr[1];
};
