const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  const result = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Por favor ingrese una altura valida";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Por favor ingrese un peso valido";
  } else {
      const imc = (weight/((height*height)/10000)).toFixed(2)

      result.innerHTML=`<span>${imc}</span>`
  }
});
