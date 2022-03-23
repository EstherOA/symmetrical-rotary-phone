import { equal } from "assert";
import { it } from "mocha"
import Validator from "../src/Validator.js"

describe("Validation examples", () => {
    it("should create validator and validate request [required]", () => {
        const sampleQuery = {
            title: ["required"],
            message: ["required"],
        }
        
        const sampleFieldValues = {
            title: "hi",
        }
        
        const SimpleValidator = new Validator(sampleQuery);
        const expectedResults = {
            message: [ 'This value is required' ],
            title: [ 'This value is required' ],
          };

        const results = SimpleValidator.validate(sampleFieldValues);
        equal(expectedResults.message.length, results.message.length)
        equal(expectedResults.title.length, results.title.length)
    });

    // it("should create validator and validate request [alphaStrict, alpha, int, number, decimal]", () => {
    //     const sampleQuery = {
    //         title: ["alphaStrict"],
    //         message: ["alpha"],
    //         age: ["int"],
    //         level: ["number"],
    //         price: ["decimal"]
    //     }
        
    //     const sampleFieldValues = {
    //         title: "4kahd$",
    //         message: "",
    //         age: 18,
    //         level: "ant",
    //         price: 0
    //     }
        
    //     const SimpleValidator = new Validator(sampleQuery);
    //     const expectedResults = {
    //         message: [ 'This value is required' ],
    //         title: [ 'This value is required' ],
    //       };

    //     const results = SimpleValidator.validate(sampleFieldValues);
    //     equal(expectedResults.message.length, results.message.length)
    //     equal(expectedResults.title.length, results.title.length)
    // });

    // it("should create validator and validate request [email, date, before, after]", () => {
    //     const sampleQuery = {
    //         title: ["required"],
    //         message: ["required"],
    //         author: ["required", "alphaStrict"],
    //         age: ["required", "int"]
    //     }
        
    //     const sampleFieldValues = {
    //         title: "hi",
    //         author: "",
    //         age: 18
    //     }
        
    //     const SimpleValidator = new Validator(sampleQuery);
    //     const expectedResults: Array<string> = [];
    //     const results = SimpleValidator.validate(sampleFieldValues);
    //     equal(expectedResults, results)
    // });
});