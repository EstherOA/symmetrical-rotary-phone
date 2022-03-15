//string value is not empty or blank 
const isEmpty = (value) => {
    return String(value) && String(value).trim().length > 0;
}

//value is not null or undefined or NaN
const exists = (value) => {
    return Number.isNaN(value) || value !== undefined || value !== null;
}

//string value/array is less than/equal to specified length
const maxLength = (value, limit) => {
    return String(value) && String(value).length <= limit;
}

//string value/array is greater than/equal to specified length
const minLength = (value, limit) => {
    return String(value) && String(value).length >= limit;
}

//numeric value is less than/equal to specified length
const maxNumber = (value, limit) => {
   return Number(value) && value <= limit;
}

//numeric value is greater than/equal to specified length
const minNumber = (value, limit) => {
    return Number(value) && value >= limit;
}

//is alphabetic string (can contain special chars)
const isAlpha = (value) => {
    return String(value) && matchAlphabetRegex(value);// regex does not contain numbers
}

//is strictly alphabetic string (cannot contain special chars)
const isAlphaStrict = (value) => {
    return String(value) && matchAlphabetRegex(value); // regex does not contain numbers or special chars
}

const isNumeric = (value) => {
    return Number(value) && matchNumericRegex(value);
}

//is whole numeric value >= 0
const isInteger = (value) => {
    return Number(value) && Number.isInteger(value);
}

//value is numeric 
const isDecimal = (value) => {
    return Number.parseFloat(value);
}


const isEmail = (value) => {
    
}

const matchRegex = (value, regex) => {
    return regex.test(value);
}

// const isUrl = (value) => {
    
// }

const inArray = (value, array) => {
    return exists(value) && array.includes(value);
}

const notInArray = (value, array) => {
    return exists(value) && !array.includes(value);
}

const isDate = (value) => {
    return !(Number.isNaN(Date.parse(value)));
}

const isDateBefore = (value, dateLimit) => {
    return isDate(value) && value < Date.parse(dateLimit);
}

const isDateAfter = (value, dateLimit) => {
    return isDate(value) && value > Date.parse(dateLimit);
}

const matchEmailRegex = (email) => {
    const emailRegex = /.+@.+\..+/;
    return emailRegex.test(email);
}

const matchAlphabetRegex = (text) => {
    const alphaRegex = /^\D+$/;
    return alphaRegex.test(text);
}

const matchNumericRegex = (text) => {
    const numericRegex = /^\d+$/;
    return numericRegex.test(text);
}
