

function hideLang() {
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("c#").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden")
}

window.onload = function () {
  document.querySelector("form").onsubmit = function (event) {
    event.preventDefault();
    hideLang();
    let cats = document.querySelector("input#cats").value;
    let gummyBears = document.querySelector("input#gummyBears").value;
    let metal = document.querySelector("input#metal").value;
    let pizza = document.querySelector("input#pizza").value;
    let hats = document.querySelector("input#hats").value;

    if (cats >= 1 && metal === "Gold", "gold") {
      document.getElementById("ruby").removeAttribute("class")
    };
  };
};

