

function hideLang() {
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("c#").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden")
  document.getElementById("whatTheHeck").setAttribute("class", "hidden")

}

window.onload = function () {
  document.querySelector("form").onsubmit = function (event) {
    event.preventDefault();
    hideLang();
    let cats = document.querySelector("input#cats").value;
    let gummyBears = document.querySelector("input#gummyBears").value;
    let metal = document.querySelector("input#metal").value;
    let hats = document.querySelector("input#hats").value;
    let pizza = document.querySelector('input#pizza').value

    if (gummyBears > 5 && cats > 1) {
      document.getElementById("python").removeAttribute("class");
    }
    if (hats < 3 && metal === "gold", "Gold") {
      document.getElementById("c#").removeAttribute("class")
    }
    if (gummyBears < 5 && cats === 0) {
      document.getElementById("ruby").removeAttribute("class")
    }
    if (pizza === "No", "no", "NO") {
      document.getElementById("whatTheHeck").removeAttribute("class")
    }
  }

};
