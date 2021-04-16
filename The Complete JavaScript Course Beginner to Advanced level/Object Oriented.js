/*let user =
{
    name:"John"
}

let descriptor = Object.getOwnPropertyDescriptor(user,'name')

console.log(JSON.stringify(descriptor,null,2))

Object.defineProperty(obj,propertyName,descriptor)
*/
/*
let user = {}

Object.defineProperty(user,"name",
{
    value:"Peter"
})

let descriptor = Object.getOwnPropertyDescriptor(user,"name")

console.log(JSON.stringify(descriptor,null,2))
*/
/*

var person = 
{
    fullName: function(city, country)
    {
        return this.firstname + " " +this.lastName + "," +city +","+country
    }
}


var person1 =
{
    firstname:"Farda",
    lastName :"Karimov"
}

console.log(person.fullName.call(person1,"Oslo","Normaly"))
*/
/*
var getValue, setValue

(function()
{
    var secret = 0

    getValue = function ()
    {
        return secret;
    }

    setValue = function(x)
    {
        if(typeof x === "number")
        {
            secret = x
        }
    }
}())



getValue()
getValue(10)*/
/*let sum = new Function ('a','b','return a +b')

console.log(sum(5,3))

let sayHi = new Function('console.log("Hola mundo")')

sayHi()
*/
/*

function Person(first, last, age, eyecolor)
{
    this.first= first;
    this.lastName= last;
    this.age= age;
    this.eyecolor= eyecolor;

}

Person.prototype.fullname = "English"

var myFather = new Person("William","Saldaña",40,"brown")
var myMother = new Person("Monica","Del Rosario",47,"brown")


console.log(myFather.eyecolor)
*/
/*
let animal =
{
    eats: true
}

let rabbit = Object.create(animal, 
    {
        jumps:
        {
            value:true
        }
    })

    console.log(rabbit.jumps)

*/



