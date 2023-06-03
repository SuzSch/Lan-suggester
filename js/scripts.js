

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
    const cats = document.querySelector("input#cats").value;
    const gummyBears = document.querySelector("input#gummyBears").value;
    const metal = document.querySelector("input#metal").value;
    const hats = document.querySelector("input#hats").value;
    const sloth = document.querySelector('input#sloth').value

    if (sloth < 10) {
      document.getElementById("whatTheHeck").removeAttribute("class");
    } else if (cats === 0) {
      document.getElementById("c#").removeAttribute("class");
    } else if (cats > 0) {
      document.getElementById("ruby#").removeAttribute("class");
    }
  }
};