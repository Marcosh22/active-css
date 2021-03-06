const _handleClickOutside = el => {
	// Does this element pass the click outside test?
	// Iterate the click outside selectors from the config.
	let cid, clickOutsideObj;
	for (cid in clickOutsideSels) {
		// Check the state of the clickoutside for this container. Will be true if active.
		if (clickOutsideSels[cid][0]) {
			// Does this clicked object exist in the clickoutside main element?
			clickOutsideObj = document.querySelector('[data-activeid="' + cid + '"]');
			if (clickOutsideObj && !clickOutsideObj.contains(el)) {
				// This is outside.
				if (_handleEvents({ obj: clickOutsideObj, evType: 'clickoutside', otherObj: el })) {	// clickoutside sends the target also.
					if (!clickOutsideSels[cid][1]) {
						// This is a blocking click outside, so cancel any further actions.
						return false;
					}
				}
			}
		}
	}
	return true;
};
