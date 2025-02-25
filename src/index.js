import "./style.css";

//logic to make the messages (needs to be made modular)
//use a function

const email = document.getElementById("email");
const validityState = email.validity;

email.addEventListener("blur", (e) => {
  if (validityState.valueMissing) {
    email.setCustomValidity("I am expecting an email address!");
  } else if (validityState.typeMismatch) {
    email.setCustomValidity("misak");
  } else {
    email.setCustomValidity("");
  }

  email.reportValidity();
});

// console.log(`${e.target.checkValidity()} `);

//object
// object{name, length, }
////length
////pattern recognition
////required
////passwords need to equal each other

//onsubmit message
