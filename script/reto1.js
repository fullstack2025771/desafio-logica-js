console.log("hola, Reto1");
           // 1. Declaro las variables
          
          let nombre = "";
          let edad    = "";
          let invitacion = "";
        


            // 2. Establesco el codigo

          nombre = prompt("Ingresa tu nombre: ");
          edad = prompt("¿Cual es tu edad");
          invitacion = confirm("¿Tienes invitacion");



          

          console.log("El tipo de dato de edad es: " + typeof(edad));
          console.log("El tipo de dato invitacion es: " + typeof(invitacion));
          edad = parseInt("edad");

         

           if(edad>= 18 && invitacion == true){
            alert("Puedes entrar");
            } else{
                alert("No puedes entrar Sera en otra oportunidad");
              }
          
          









































