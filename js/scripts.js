

function hideLang() {
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("c#").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("whatTheHeck").setAttribute("class", "hidden");

}

window.onload = function () {
  document.querySelector("form").onsubmit = function (event) {
    event.preventDefault();
    hideLang();
    const cats = document.querySelector("input#cats").value;
    const gummyBears = document.querySelector("input#gummyBears").value;
    const age = document.querySelector("input#age").value;
    const hats = document.querySelector("input#hats").value;
    const sloth = document.querySelector('input#sloth').value;

    if (sloth < 20) {
      document.getElementById("whatTheHeck").removeAttribute("class");
    } else if (age >= 40) {
      document.getElementById("c#").removeAttribute("class");
    } else if (gummyBears > 4) {
      document.getElementById("ruby").removeAttribute("class");
    } else if (cats >= 1 || hats >= 1) {
      document.getElementById("python").removeAttribute("class");
    } else {
      document.getElementById("c#").removeAttribute("class");
    }
  };
};





