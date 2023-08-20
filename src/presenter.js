import bisiesto from "./Bisiesto.js";

const yearInput = document.querySelector("#anio-input");
const form = document.querySelector("#bisiesto-form");
const resultadoDiv = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const year = Number.parseInt(yearInput.value);

  if (bisiesto(year)) {
    resultadoDiv.innerHTML = "<p>El año es bisiesto.</p>";
  } else {
    resultadoDiv.innerHTML = "<p>El año no es bisiesto.</p>";
  }
});
