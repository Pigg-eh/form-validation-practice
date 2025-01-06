import "./style.css";

//object
// object{name, length, }

function validateInput() {
  let value = document.forms["fooForm"]["email"].value;
  if (value != "") {
    alert("Name must be filled out");
    return false;
  }
}
////length
////pattern recognition
////slap on required
////passwords need to equal each other

//onsubmit message
