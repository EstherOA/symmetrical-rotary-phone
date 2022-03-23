import * as ruleOps from './utils/ruleOps.js';

//list of errors
const ErrorMessages = {
    required: "This value is required",
    alpha: "An alphabetic string is expected",
    in: "This value is not included in the specified array",
    number: "A number is expected",
    int: "An integer is expected",
    email: "An email is expected",
    alphaStrict: "An alphabetic string with no special chars is expected",
    date: "A date is expected",
    before: "This value is not before specified date",
    after: "This value is not after specified date",
    decimal: "A decimal is expected"
};

//create Rule Object 
const EstablishedRulesToOps = {
    required: ruleOps.exists,
    alpha: ruleOps.isAlpha,
    in: ruleOps.inArray,
    number: ruleOps.isNumeric,
    int: ruleOps.isInteger,
    email: ruleOps.isEmail,
    alphaStrict: ruleOps.isAlphaStrict,
    date: ruleOps.isDate,
    before: ruleOps.isDateBefore,
    after: ruleOps.isDateAfter,
    decimal: ruleOps.isDecimal,
    notIn: ruleOps.notInArray
}

Object.freeze(EstablishedRulesToOps);
class Rule {

    message; 
    ruleFunc;
    ruleCheckOperand;

    constructor(message) {
        this.message = message;
    }

    /**
     * @param {string} message
     */
    set message(message) {
        this.message = message;
    }

    get message() {
        return this.message;
    }

    checkValue(value) {
        const results = this.ruleFunc(this.ruleCheckOperand, value);
        if(!results) return this.message;
    }

    /**
     * @param {func} ruleOp
     */
    set ruleOp(ruleOp) {
        this.ruleFunc = ruleOp;
    }

    get ruleOp() {
        return this.ruleFunc;
    }

    /**
     * @param {string} operand
     */
    set ruleCheckOperand(operand) {
        this.ruleCheckOperand = operand;
    }

    get ruleCheckOperand() {
        this.ruleCheckOperand;
    }

}

const createRuleObjects = () => {
    let rulePool = {};

    Object.keys(EstablishedRulesToOps).map(r => {
        const rule = new Rule(ErrorMessages[r]); 
        rule.ruleOp = EstablishedRulesToOps[r];
        rulePool[r] = rule;
    });
    return rulePool;
}

const RULES = createRuleObjects();

export {EstablishedRulesToOps, createRuleObjects, RULES};