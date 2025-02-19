import "./style.css";
console.log("test");

const email = document.getElementById("email");
const country = document.getElementById("country");
const zipcode = document.getElementById("zipcode");
const password = document.getElementById("password");
const passwordconfirm = document.getElementById("passwordconfirm");

const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (email.value === "" || email.value == null) {
    messages.push("Email is required");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});

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
