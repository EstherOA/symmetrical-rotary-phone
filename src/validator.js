import { exists } from './utils/ruleOps.js';
import {ValidationRequest} from './ValidationRequest.js';

export default class Validator {

    ruleToRequestArray;

    constructor(validationQuery) {
        this.ruleToRequestArray = this.createValidationRequest(validationQuery);
        this.validate = this.validate.bind(this);
        this.createValidationRequest = this.createValidationRequest.bind(this);
    }

    createValidationRequest(rules) {
        return Object.keys(rules).map(r => new ValidationRequest(r, rules[r]));
    }

    //TODO: update to return ValidationResult
    validate(fieldValues) {
        let response = {};
        this.ruleToRequestArray.map(req => {
            response[req.field] = req.ruleArray.map(rule => rule.checkValue(fieldValues[req.field]))
            .filter(r => exists(r))
        });
        return response;
    }
    
}