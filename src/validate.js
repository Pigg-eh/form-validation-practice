class Validator {
  constructor(type, minLength, maxLength, pattern, required) {
    this.type = type;
    [this.minLength, this.maxLength] = [minLength, maxLength];
    this.pattern = pattern;
    this.required = required;
  }
}

export default Validator;
