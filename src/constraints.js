class Constraints {
  constructor(type, minLength, maxLength, pattern, required) {
    this.type = type;
    this.minLength = minLength;
    this.maxLength = maxLength;
    this.pattern = pattern;
    this.required = required;
  }
}

//constraint function
function constraintsBool(inputData, constraints) {
  const { type, minLength, maxLength, pattern, required } = constraints;

  inputData.setCustomValidity("");

  if (inputData.value.length < minLength) {
    inputData.setCustomValidity(
      `This ${type} is too short, please input a longer ${type}. Oink!`,
    );
  }
  if (inputData.value.length > maxLength) {
    inputData.setCustomValidity(
      `This ${type} is too long please input a shorter ${type}. Oink!`,
    );
  }
  if (!new RegExp(pattern).test(inputData.value)) {
    inputData.setCustomValidity(
      `This ${type} is invalid, please input a ${type}. Oink!`,
    );
  }
  if (required && !inputData.value) {
    inputData.setCustomValidity(`A ${type} is absolutely needed. Oink!`);
  }

  // if () {
  // }
}
export default Constraints;
export { constraintsBool };
