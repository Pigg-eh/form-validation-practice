import "./style.css";

let email = document.querySelector("input#email");

email.addEventListener("focusout", () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});

// console.log(`${e.target.checkValidity()} `);

//object
// object{name, length, }
////length
////pattern recognition
////slap on required
////passwords need to equal each other

//onsubmit message
