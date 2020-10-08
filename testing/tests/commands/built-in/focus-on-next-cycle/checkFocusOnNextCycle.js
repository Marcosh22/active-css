/*
		<div class="focusOnNextCycleBlock">
		    <a id="focusOnNextCycleEnd" href="">Apples</a>
		    <a href="">Oranges</a>
		    <a href="">Pears</a>
		    <a id="focusOnNextCycleStart" href="">Bananas</a>
		    <a id="focusOnNextCycleSecond" href="">Grapes</a>
		</div>

	focus-on: #focusOnNextCycleStart after 6000ms;
	focus-on-next: .focusOnNextCycleBlock a after 6250ms;
	focus-on-next: .focusOnNextCycleBlock a after 6500ms;
 	focus-on-next: .focusOnNextCycleBlock a after 6750ms;

*/

function checkFocusOnNextCycle(o) {
	let testEl = _initTest('checkFocusOnNextCycle');
	if (!testEl) return;

	let firstEl = _getObj('#focusOnNextCycleStart');
	let secondEl = _getObj('#focusOnNextCycleSecond');
	let thirdEl = _getObj('#focusOnNextCycleEnd');

	// We want not in focus at start.
	if (!firstEl.isSameNode(document.activeElement)) {
		setTimeout(function() {
			if (firstEl.isSameNode(document.activeElement)) {
				setTimeout(function() {
					if (secondEl.isSameNode(document.activeElement)) {
						setTimeout(function() {
							if (thirdEl.isSameNode(document.activeElement)) {
								// That looked good.
								_addSuccessClass(testEl);
							} else {
								_fail(testEl, '#focusOnNextCycleEnd is not in focus at the end');
							}
						}, 250);
					} else {
						_fail(testEl, '#focusOnNextCycleSecond has not moved into focus');
					}
				}, 250);
			} else {
				_fail(testEl, '#focusOnNextCycleStart is not in focus after 4s and it should be.');
			}
		}, 6100);
	} else {
		_fail(testEl, '#focusOnNextCycleStart in focus at the start and it shouldn\'t be.');
	}
}
