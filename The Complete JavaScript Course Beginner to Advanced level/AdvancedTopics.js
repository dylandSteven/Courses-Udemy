//-------REPLACE-------
/*var str = "Hola , Dyland. Mi nombre es Steven"
var n  = str.replace(/Steven/g,"Pedro")

console.log(n)
*/

//-------POW-------
/*
function pow(x, n) {
    
    let result = 1

    for(let i =0;i<n;i++)
    {
        result *=x
    }
    return result
}
or

    function pow(x,n)
    {
        if(n==1)
        {
            return x
        }
        else
        {
            return x* pow(x,n-1)
        }
    }
*/

//-------BITWISE-------------
/*
const bigInt = 1234567890123456789n;

const sameBigint = BigInt("123456789123456789");

const biginFromNumber = BigInt(10);

let big = 1n;

let number = 2;

console.log(big + BigInt(number));
console.log(Number(big) + number);
*/


//------------SYMBOL---FUNCTION--------
/*
let id1 = Symbol.for("id");
let id2 = Symbol.for("id");
console.log(id1==id2)

let sym = Symbol.for("name")
let sym1 = Symbol.for("id")

console.log(Symbol.keyFor(sym))
console.log(Symbol.keyFor(sym1))*/


//---------------EVAL--FUNCTION------------


 /*
let result = 'console.log("Hello World")'

eval(result)
*/


//----------AJAX(Asynchronous JavaScript XML)------------------
//XMLHttpRequest(XHR)
/*
function displayFullName()
{
    var request = new XMLHttpRequest()

    request.open("GET","")
    request.onreadystatechange = function()
    {
        if(this.readyState ===4 && this.status ===200)
        {
            document.write(this.responseText)
        }
    } 
    request.send()
}
*/
//-------------TRY- CATCH----------
/*function myFunction()
{

    var message , x
    message = document.getElementById("p1")
    x       = document.getElementById("demo").nodeValue
    message.innerHTML =""
    try 
    {
        if(x =="") throw"empty"
        if(isNaN(x)) throw "no es un numero"
        x = Number(x)
        if(x<5) throw "es muy bajo"
        if(x>10)throw "es muy alto"

    }catch(error)
    {
      message.innerHTML="La entrada " + error
     //  alert(error)
    }
}
*/



//--------ERRORS---------

 

