
class  ValidationResults {
    constructor() {
        this.isError   = false
        this.isWarning = false
        this.message = null
    }

    set message(message) {
        this.message = message;
    }

    get message() {
        return this.message;
    }
    
}

 class ValidationError extends ValidationResults {

    constructor() {
        this.isError   = true
        this.isWarning = false
    }

    
}

 class ValidationWarning extends ValidationResults {

    constructor() {
        this.isError   = false
        this.isWarning = true
    }

}
