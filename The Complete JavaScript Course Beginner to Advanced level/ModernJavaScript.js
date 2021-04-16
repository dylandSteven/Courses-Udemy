//---------------ARRO-FUNCTION-------------------
/*
var name = prompt("¿Cual es tu nombre ?")
/*var hello = function()
{
    alert ("Hola,"+name)
} 

var hello = ()=>
{
    alert ("Hola,"+name)
} 
*/

//----------LET-KEYWORD--------------
/*for(var i =0;i<5;i++)
{
    console.log(i)
}
con let no se puede hacer lo de abajo
console.log(i)
*/

//-----REST-OPERATOR--------
/*function sortNames(...names)
{
    return names.sort()
}

console.log(sortNames("Sarah","Harry","Peter"))
console.log(sortNames("Tony","Ben","Rick","Jos"))

function myFunction(a,b,args)
{
    return args
}
console.log(myFunction(1,2,3,4,5))
*/

//------SPREAD--OPERATOR----
/*
function addNumbers(a,b,c)
{
    return a+b+c
}

let numbers = [5,12,8]

console.log(addNumbers.apply(null, numbers))
console.log(addNumbers(...numbers))

let pets =["Gato","Perro","Pajaro"]
let bugs= ["Ant","Bee"]

let animals= [...pets,"Leon","Oso",...bugs]

console.log(animals)*/

//--------DESTRUCTING-ASSIGMENT
/*
var fruits =["Apple","Banana","Mango"]
let [a,...r]= fruits
console.log(a)
console.log(r)
console.log(Array.isArray(r))

var person = {name:"Dyland",age:19}
var {name,age}= person
console.log(name)
console.log(age)*/

//------STATIC---METHOD
/*

class Article 
{
    constructor(title, date)
    {
        this.title = title;
        this.date = date
    }
    static compare (articleA,articleB)
    {
        return articleA.date - articleB.date
   }


   static createDays()
   {
       return new this("Resumen de hoy",new Date())
   }
}

let articles =[
    new Article("HTML",new Date(2021,4,16)),
    new Article("CSS",new Date(2021,4,16)),
    new Article("JavaScript",new Date(2021,4,16))] 

articles.sort(Article.compare)

//console.log(articles[0].title)


let article2 = Article.createDays()
console.log(article2.title)*/

//--------MAP--FUNCTION--------------
/*let map = new Map()
map.set("1","one")
map.set(2,"two")
map.set(true,"true")
let john = {name:"John"}
map.set(john,123)


let recipeMap = new Map([
    ["cucumber",500],
    ["tomatoes",300],
    ["onion",50]]
    )

for (let vegetable of recipeMap.keys())
{
    console.log(vegetable)
}

for(let amount of recipeMap.values())
{
    console.log(amount)
}

for(let entry of recipeMap)
{
    console.log(entry)
}*/

//-------SET-FUNCTION----------
/*
let set  = new Set()

let john = {name:"John"}
let pete = {name:"Pete"}
let mary = {name:"Mary"}

set.add(john)
set.add(mary)
set.add(pete)
set.add(pete)
set.add(pete)

console.log(set.size)
*/


//-----WEAKMAP--WEAKSET----------------
/*
let weakMap = new WeakMap()


let obj ={name:"John"}

weakMap.set(obj,"..")
onj = null
weakMap.set("test","Whoops")


let visitedSet = new WeakSet()

let john ={name:"John"}
let mary ={name:"Mary"}
let pete ={name:"Pete"}


visitedSet.add(john)
visitedSet.add(mary)
visitedSet.add(pete)

console.log(visitedSet.has(pete))
console.log(visitedSet.has(mary))*/


//-------PROMISE---------
/*

let promise = new Promise(function(resolve,reject){

    setTimeout(()=>resolve("done",1000))

}).finally(()=>console.log("Promesa lista"))
.then(result=>console.log(result))

*/