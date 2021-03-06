// This script is only now used by the extension, and will need changing as of version 2.3.0 when work restarts on the extension.
// Commenting out for now, as it doesn't need to be in the minified core.
/*
const _assignRule = (compConfig, sel, ev, condition, secsel, ruleName, ruleValue, ruleFile, ruleLine, ruleIntID, secSelCounter, eachLoop=null) => {
	let rulePos;

	// Leave this here please.
//	console.log('_assignRule:');
//	console.log('compConfig = ' + compConfig);
//	console.log('sel = ' + sel);
//	console.log('ev = ' + ev);
//	console.log('condition = ' + condition);
//	console.log('secsel = ' + secsel);
//	console.log('ruleName = ' + ruleName);
//	console.log('ruleValue = ' + ruleValue);
//	console.log('ruleFile = ' + ruleFile);
//	console.log('ruleLine = ' + ruleLine);
//	console.log('eachLoop = ' + eachLoop);

	eachLoop = (eachLoop) ? eachLoop : '0';
	if (typeof compConfig[sel][ev][condition][eachLoop] === 'undefined') {
		compConfig[sel][ev][condition][eachLoop] = {};
	}
	if (typeof compConfig[sel][ev][condition][eachLoop][secSelCounter] === 'undefined') {
		compConfig[sel][ev][condition][eachLoop][secSelCounter] = [];
	}
	if (typeof compConfig[sel][ev][condition][eachLoop][secSelCounter][secsel] === 'undefined') {
		// Note this next here needs to be an array and not an object, as we do splicing and adding later on from DevTools,
		// so we need to be flexible in the numbering.
		compConfig[sel][ev][condition][eachLoop][secSelCounter][secsel] = [];
	}

	// See if this rule already exists here.
	rulePos = ActiveCSS._getPosOfRule(compConfig[sel][ev][condition][eachLoop][secsel], ruleName);
	if (rulePos != -1) {
		// Append to the end of the existing rule value with a comma. Assume the developer knows what he or she is doing.
		compConfig[sel][ev][condition][eachLoop][secsel][rulePos].value += ', ' + ruleValue;
		let newRuleFile = '', newRuleLine = '', newRuleIntID = '';
		if (compConfig[sel][ev][condition][eachLoop][secsel][rulePos].file) {
			newRuleFile = ',' + ruleFile;
			newRuleLine = ',' + ruleLine;
			newRuleIntID = ',' + ruleIntID;
		}
		compConfig[sel][ev][condition][eachLoop][secsel][rulePos].file += newRuleFile;
		compConfig[sel][ev][condition][eachLoop][secsel][rulePos].line += newRuleLine;
		compConfig[sel][ev][condition][eachLoop][secsel][rulePos].intID += newRuleIntID;
		return compConfig;
	}

	// Add as a new rule.
	compConfig[sel][ev][condition][eachLoop][secSelCounter][secsel].push({ name: ruleName, value: ruleValue, file: ruleFile, line: ruleLine, intID: ruleIntID });
	return compConfig;
};
*/
