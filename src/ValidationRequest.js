import { RULES } from './Rules.js';
import {exists} from './utils/ruleOps.js';

class ValidationRequest {

    constructor(field, ruleStringArray) {
        this.field = field;
        this.ruleArray = this.getRulesFromString(ruleStringArray);
    }

    getRulesFromString(ruleStringArray) {
        return ruleStringArray.map(r => {
            const [ruleKey, ruleOperand] = r.split(":").map(r => r.trim())
            const rule = RULES[ruleKey];
            rule.ruleOperand = ruleOperand;
            return rule;
        });
    }

}

export {ValidationRequest};