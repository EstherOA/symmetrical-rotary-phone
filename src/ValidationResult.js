
class  ValidationResults {
    successfulFields;
    failedFields;
    errorMessages;

    constructor(errorMessages, failedFields, successfulFields) {
        this.errorMessages = errorMessages;
        this.failedFields = failedFields;
        this.successfulFields = successfulFields;
    }

}

 