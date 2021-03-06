const _replaceScopedVars = (str, obj=null, func='', o=null, fromUpdate=false, shadHost=null, compRef=null) => {
	// Evaluate and insert scoped variables. This could be a HTML string containing nodes.
	// This should only happen after attribute substitution has occurred, otherwise binding in attributes won't work fully.
	// Eg.: set-attribute: data-name "{{firstName}} {@id}{{surname}} {{surname}}". Simply put, the ID is not easily obtainable when updating the attribute with
	// a bound variable. If this becomes a problem later, we would have to store the expand this to reference the location of the attribute via the active ID. But
	// it is fine as it is at this point in development.
	// This function is also called when an variable change triggers an attribute update.
	let fragment, fragRoot, treeWalker, owner, txt, cid;
	// Convert string into DOM tree. Walk DOM and set up active IDs, search for vars to replace, etc. Then convert back to string. Hopefully this will be quick.
	// Handle inner text first.
	if (str.indexOf('{{') !== -1 && !fromUpdate && str.indexOf('</') !== -1) {
		fragRoot = document.createElement('template');
		fragRoot.innerHTML = str;
		treeWalker = document.createTreeWalker(
			fragRoot.content,
			NodeFilter.SHOW_TEXT
		);
		while (treeWalker.nextNode()) {
			owner = treeWalker.currentNode.parentNode;
			if (owner.nodeType == 11) continue;
			cid = _getActiveID(owner);
			txt = treeWalker.currentNode.textContent;
			treeWalker.currentNode.textContent = _replaceScopedVarsDo(txt, owner, 'Render', null, true, shadHost, compRef);
		}

		// Now handle any attributes.
		treeWalker = document.createTreeWalker(
			fragRoot.content,
			NodeFilter.SHOW_ELEMENT
		);
		while (treeWalker.nextNode()) {
			owner = treeWalker.currentNode;
			let attrs = owner.attributes, attr;
			for (attr of attrs) {
				if (['data-activeid'].indexOf(attr.nodeName) !== -1) continue;
				let newAttr = _replaceScopedVarsDo(attr.nodeValue, null, 'SetAttribute', { secSelObj: owner, actVal: attr.nodeName + ' ' + attr.nodeValue }, true, shadHost, compRef);
				treeWalker.currentNode.setAttribute(attr.nodeName, newAttr);
			}
		}
		// Convert the fragment back into a string.
		str = fragRoot.innerHTML;
		str = str.replace(/_cj_s_lt_/gm, '<!--');
		str = str.replace(/_cj_s_gt_/gm, '-->');
		str = str.replace(/_cj_s_lts_/gm, '/*');
		str = str.replace(/_cj_s_gts_/gm, '*/');
	} else {
		// Come in from an var change or there are no nodes - so no point creating a tree and going through all that stuff to set up sub Active IDs and all that
		// sort of thing.
		str = _replaceScopedVarsDo(str, obj, func, o, false, shadHost, compRef);
	}
	return str;
};
