import "./style.css";
import Constraints from "./constraints";
import addInputListeners from "./addListeners";
//e.target grabs element
//type, minLength, maxLength, pattern, required
addInputListeners();

const emailConstraints = new Constraints(
  "Email",
  5,
  30,
  "[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}",
  true,
);

const countyConstraints = new Constraints("Country", 4, 20, "regex", true);

const zipcodeConstraints = new Constraints("zip code", 4, 4, "[0-9]+", true);

const passwordConstraints = new Constraints("password", 7, 25, "regex", true);

const pwConfirmConstraints = new Constraints("Email", 7, 25, "regex", true);

// console.log(`${e.target.checkValidity()} `);

//object
// object{name, length, }
////length
////pattern recognition
////required
////passwords need to equal each other

//onsubmit message
