function validateForm()
{
    var name = document.contactForm.name.value
    var email = document.contactForm.email.value 
    var mobile = document.contactForm.mobile.value 
    var country = document.contactForm.country.value 
    var gender = document.contactForm.gender.value
    var hobbies = []
    var checkboxes = document.getElementById("hobbies[]")
    
    
    for(var i = 0 ; i< checkboxes.length;i++)
    {
        if(checkboxes[i].checked)
        {
            hobbies.push(checkboxes[i].value)
        }
    }

    var nameErr = emailErr = mobileErr= countryErr= genderErr = true

    if(name =="")
    {
        printErr("nameErr","Por favor ingrese su nombre")
        
    }else{
        var regex = /^[a-zA-z\s]+$/
        if (regex.test(name)===false)
        {
            printErr("nameErr","Por favor ingrese un nombre valido")

        }else{
              printErr("nameErr","")
              nameErr= false
        }
    }

    if(email =="")
    {
        printErr("emailErr","Por favor ingrese una direccion valida")
        
    }else{
        var regex = /^\S+@\S+\.\S+$/
        if (regex.test(email)===false)
        {
            printErr("nameErr","Por favor ingrese un correo valido")

        }else{
              printErr("emailErr","")
              nameErr= false
        }
    }

    if(mobile == ""){
        printError("mobileErr","Please enter your mobile number");
        
      }else{
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false){
          printError("mobileErr","Please enter a valid 10 digit mobile number")
        }else{
          printError("mobileErr","");
          mobileErr = false
        }
      }
      
      
      if(country == "Select"){
        printError("countryErr","Please select your country")
      }else{
        printError("countryErr","")
        countryErr = false;
      }
      
      if(gender == ""){
        printError("genderErr","Please select your gender")
      }else{
        printError("genderErr","");
        genderErr = false
      }

      if((nameErr||emailErr||mobileErr||countryErr||genderErr)==true)
      {
        return false
      }
      else{
          var dataPreview = "Tu ingresaste los siguientes detalles:\n"+
          "Name" +name +"\n"+"Email"+email+"\n"+"Numero"+mobile+"\n"+"Pais"+
          country+"\n"+"Genero"+gender+"\n"

          if(hobbies.length)
          {
              dataPreview +="Hobbies"+hobbies.join(", ")
          }

          alert(dataPreview)
      }
}