import "./style.css";
import Validator from "./validate";
//logic to make the messages (needs to be made modular)
//use a function // errMessage()

const input = document.getElementById("email");
const validityState = input.validity;

const email = new Validator(
  "Email",
  5,
  30,
  "[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}",
  true,
);

const county = new Validator("Country", 4, 20, "regex", true);

const zipcode = new Validator("zip code", 4, 4, "[0-9]+", true);

const password = new Validator("password", 7, 25, "regex", true);

const pwConfirm = new Validator("Email", 7, 25, "regex", true);

//addeventlistener to all of the inputs
input.addEventListener("blur", (e) => {
  if (validityState.valueMissing) {
    input.setCustomValidity("Please fill in the text field");
  } else if (validityState.typeMismatch) {
    input.setCustomValidity(`I am expecting an ${input.id} address`);
  } else {
    input.setCustomValidity("");
  }

  input.reportValidity();
});

// console.log(`${e.target.checkValidity()} `);

//object
// object{name, length, }
////length
////pattern recognition
////required
////passwords need to equal each other

//onsubmit message
