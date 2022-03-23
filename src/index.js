import Validator from "./Validator.js"

//create sample request object
const sampleQuery = {
    title: ["required"],
    message: ["required"],
    author: ["required", "alphaStrict"],
    age: ["required", "int"]
}

//create sample values object
const sampleFieldValues = {
    title: "",
    message: "",
    author: ""
}

//create Validator
const SimpleValidator = new Validator(sampleQuery);

//call validator.validate
const results = SimpleValidator.validate(sampleFieldValues);

//log response
console.log("Validation complete!:", results);