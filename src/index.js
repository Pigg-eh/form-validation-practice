import "./style.css";

function component() {
  const element = document.createElement("div");

  function testLog() {
    const foo = prompt("type");
    console.log("test");

    return (element.innerHTML = `foo ${foo}`);
  }

  testLog();
  element.classList.add("hello");

  return element;
}

document.body.appendChild(component());
