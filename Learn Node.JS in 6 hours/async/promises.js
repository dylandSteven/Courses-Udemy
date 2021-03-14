const check = false;

const promise = new Promise((resolve, reject) => {
  if (check) {
    resolve("Terminado");
  } else {
    reject("No terminado");
  }
});


promise.then((res)=>
{
    console.log(res)
})
.catch(err=>
    {
        console.log(err)
    })


console.log(promise)