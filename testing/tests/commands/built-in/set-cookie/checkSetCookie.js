function checkSetCookie(o) {
	let testEl = _initTest('checkSetCookie');
	if (!testEl) return;

	let test1 = _getCookie('test1');
	let test2 = _getCookie('test2');
	let test3 = _getCookie('test3');
	let test4 = _getCookie('test4');
	let test5 = _getCookie('test5');

	if (test1 != 'Y') {
		_fail(testEl, 'test1 cookie is not set to "Y"');
	}

	if (test2 != 'some%20info%22\'') {
		_fail(testEl, 'test2 cookie is not set to "some%20info%22\'"');
	}

	if (test3 == 'fred') {	// This shouldn't exist!
		_fail(testEl, 'test3 cookie is set to "Fred" but shouldn\'t be - it should be expired.');
	}

	if (test4 == 'expired%20cookie' || test5 != 'non-expired%20cookie') {
		// Both these checks need to occur to ascertain whether a correctly formatted string date test works.
		_fail(testEl, 'test4 cookie straight date test failed.');
	}

	_addSuccessClass(testEl);
}
