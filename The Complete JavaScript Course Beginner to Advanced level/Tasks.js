//_________COnVERT CELCIUS TO  FARENHEIT _______________________
/*
function convertToF(celcius)
{   
    var f = celcius*(9/5)+32

    if(typeof f!="undefined")
    {
        console.log(f)
    }else{
        console.log("f no esta definido")
    }
}

convertToF(40)
*/

//________________REVERSE-STRING______________
/*
function reverseString(str)
{
    for(var reverseStr="",i=str.length-1;i>=0;i--)
    {
        reverseStr+=str[i]
    }
    console.log(reverseStr)
}

reverseString("Dyland")

*/


//_____________FACTORIZAR_NUMERO_____________
/*function factorialize(num)
{
    for(var product =1 ; num>0;num--)
    {
        product*=num
    }

    console.log(product)
}


factorialize(3)
*/


//____________ENCONTRAR LA PALABRA MAS LARGA DE UN STRING_____________
/*
function findLongestWordLength(str)
{
    var words = str.split(" ")
    var maxLength = 0
    for(var i =0;i<words.length;i++)
    {
        if(words[i].length>maxLength)
        {maxLength= words[i].length}
    }
    return maxLength
 }

console.log(findLongestWordLength("ESTA ES MI PRIMERA"))

*/




//------ENCONTRAR EL NMUMERO MAS LARGO EN EL ARRAY-----------------
/*function largestOfFour(arr)
{
    var result = []

    for (var n =0;n<arr,length;n++)
    {
        var largestNumber = arr[n][0]

        for(var sb = 1;sb= arr[n].length;sb++)
        {
            if(arr[n][sb]>largestNumber)
            {
                largestNumber=arr[n][sb]
            }
        }

        result[n]= largestNumber
    }
}


function largestOfFour2(arr){
    return arguments.map(function(group)
    {
        return group.reduce(function(prev,current)
        {
            return current> prev? current:prev
        })
    })
}


[[15,32,48,86],[-15,45,37,55],[-9,84,35,76]]


*/



//____________CONFIRMAR EL FINAL__________________________
/*function  confirmEnding(str,target)
{
    return str.slice(str.length - target.length)===target
}


function confirmEnding2(str,target)
{
    let re = new RegExp(target+"$","i")
    return re.test(str)
}
*/

//______________REOETIR UN STRING_________________________
/*
function repeatStringNumTimes(str,num)
{

    if(num<1)
    {
        return""
    }
    else if(num==1)
    {
        return str
    }else{
        return str+repeatStringNumTimes(str,num-1)
    }
}

function repeatStringNumTimes2(str, num)
{
    var accumulateStr = " "
    while(num>0)
    {
        accumulateStr+= str
        num--
    }
}


console.log(repeatStringNumTimes("Dyland",5))
*/

//_____________ENCONTRAR LOS KEEPERS________________________________
/*

function findElement(arr,func)
{
    let num =0

    for(var i =0;i<arr.length;i++)
    {
        num=arr[i]
        if(func(num))
        {
            return num
        }
        return undefined
    }
}

function findElement2(arr,func)
{
    return arr.find(func)
}

function func()
{

}
*/


//_______________TITLE CASE A SENTENCE

/*
function titleCase(str)
{
    var newTitle = str.split(" ")
    var updateTitle = []

    for(var st in newTitle){

        updateTitle[st] = newTitle[st].toLowerCase().replaceAt(0,newTitle[st].charAt(0).toUpperCase())
    }

    return updateTitle.join(" ")

}

function titleCase2(str)
{
    var convertToArray = str.toLowerCase().split(" ")

    var result = convertToArray.map(function(val)
    {
        return val.replace(val.charAt(0),val.charAt(0).toUpperCase())
    })

    return result.join(" ")
}
*/

//__________ CORTAR Y JUNTAR __________________________
/*

function frankenSplice(arr1,arr2,n)
{
    let localArray = arr2.slice()
    for(let  i =0;i<arr1.length;i++)
    {
        localArray.splice(n,0,arr1[i])
        n++
    }
    return localArray
}

function frankenSplice2(arr1,arr2,n)
{
    let localArr =arr2.slice()

    localArr.slice(n,0,...arr1)
    
    return localArr

}

console.log( frankenSplice2("abcccccc","mnkljkdef",5))
*/


//__________________CHUNKY__MONKEY_______________________________

/*function chunkArrayinGroups(arr,length)
{
    var temp = []
    var result = []

    for(var a = 0;a<arr.length;a++)
    {
        if(a%size !== size-1)
        {
            temp.push(arr[a])
        }else{
            temp.push(arr[a])
            result.push(temp)
            temp = []
        }
    }
    if(temp.length!==0)
    {
        result.push(temp)
    }
    return result
}



function chunkArrayinGroups2(arr,size)
{
    var arr2 = []

    for(var i =0; i<arr.length;i++)
    {
        arr2.push(arr.slice(i,i+size))
    }
}
*/


//___________LETRAS DESAPARECIDAS________________________
/*function fearNotLetter(str)
{
    var compare =str.charCodeAt(0),missing;
    str.split(" ").map(function(letter,index)
    {
        if(str.charCodeAt(index)==compare)
        {
        ++compare

        }else{
            missing =String.fromCharCode(compare)
        }
    }) 
    return missing
}
*/

//___________FALSY BOUNCER ___________________________________
/*
function bouncer(arr)
{
    let newArray = []

    for(var i =0 ;i<arr.lenth;i++)
    {
        if(arr[i])
        {
            newArray.push(arr[i])
        }
        return newArray
    }
}
*/

//______________MUTATION_______________________

function mutation(arr)
{
    var test =arr[1].toLowerCase()
    var target = arr[0].toLowerCase()

    for(var i =0;i <test.length;i++)
    {
        if(target.indexOf(test[i])<0)
        {
            return false
        }
    }


    return true
}


function mutation2(arr)
{
    return arr[1].toLowerCase().split("".every(function(letter)
    {
        return arr[0].toLowerCase().indexOf(letter)!=-1
    }))
}


















































