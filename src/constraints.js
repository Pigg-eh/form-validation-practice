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
    console.log(type);
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
  if (
    required &&
    !inputData.value &&
    type != "password" &&
    type != "second password"
  ) {
    inputData.setCustomValidity(`A ${type} is absolutely needed. Oink!`);
  }

  // if (type === "second password" && password.value) {
  //   if (password.value != inputData.value) {
  //     inputData.setCustomValidity(`The passwords do not match. Oink`);
  //   }
  // }

  // if (type === "password" && passwordconfirm.value) {
  //   if (passwordconfirm.value != inputData.value) {
  //     inputData.setCustomValidity(`The passwords do not match. Oink`);
  //   }
  // }

  if (type === "second password") {
    // Check if password is set and second password is not equal to it
    if (password.value && password.value !== inputData.value) {
      inputData.setCustomValidity(`The passwords do not match. Oink`);
    } else {
      inputData.setCustomValidity(""); // Clear the error if passwords match
    }

    if (type === "password") {
      // Check if password confirm is set and password confirm is not equal to it
      if (passwordconfirm.value && passwordconfirm.value !== inputData.value) {
        inputData.setCustomValidity(`The passwords do not match. Oink`);
      } else {
        inputData.setCustomValidity(""); // Clear the error if passwords match
      }
    }

    // setTimeout(() => inputData.setCustomValidity(""), 2000);
  }
}
export default Constraints;
export { constraintsBool };
