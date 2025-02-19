import "./style.css";

//logic to make the messages (needs to be made modular)
const email = document.getElementById("email");
const country = document.getElementById("country");
const zipcode = document.getElementById("zipcode");
const password = document.getElementById("password");
const passwordconfirm = document.getElementById("passwordconfirm");

const form = document.getElementById("form");
const errorElement = document.getElementById("error");

//logic to add message
email.addEventListener("input", (e) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});

// console.log(`${e.target.checkValidity()} `);

// --> make error message appear on focusout

//object
// object{name, length, }
////length
////pattern recognition
////required
////passwords need to equal each other

//onsubmit message
