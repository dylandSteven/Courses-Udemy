let firstNumber = parseInt(Math.random() * 10);
let secondNumber = parseInt(Math.random() * 10);

let total = firstNumber +secondNumber;

let primary = document.getElementById("primary-number")

primary.innerHTML = `<p>${firstNumber}</p>`

let secondary = document.getElementById("secondary-number")

secondary.innerHTML = `<p>${secondNumber}</p>`

let button = document.getElementById("btn")

button.addEventListener('click',function()
{
    let guess = document.getElementById("guess").value

    guess = Number(guess)

    if(guess== total)
    {
        alert("Correcto")
        window.location.reload()
    }
    else
    {
        alert("Lo siento Incorrecto, La correcta respuesta fue"+total+".")
        window.location.reload()
    }
})