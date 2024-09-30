function crearUser(){

    inputUsuario = document.querySelector("#usuario");
    inputPassword = document.querySelector("#contra");

    let datos = {};
    let codigoResp;

  

    // Armamos el JSON con los datos del registro
    datos.usuario = inputUsuario.value;
    //datos.last_name = inputLastName.value;
    datos.email = "prueba@gmail.com";
    datos.password = inputPassword.value;
    
    console.log(JSON.stringify(datos));
    console.log("creando usuario... ");
    // Petición HTTP
    try{   
        respuesta = fetch('api/usuarios', {  // REEMPLAZAR ACA POR LA RUTA CORRESPONDIENTE
            
            method: 'POST', //metodo HTTP -- REEMPLAZAR POR EL METODO CORRESPONDIENTE
            headers: {   //aca decimos que devuelve un JSON
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datos)     //Acá van los datos del registro    
        })
        .then(response => {
            codigoResp = response.status;
            console.log("Respuesta de petición: "+response.status);

            //recargamos la pagina
            if(codigoResp >= 200 && codigoResp < 300){
            alert("Usuario registrado correctamente");
            console.log("Recargando pagina...")
            location.reload();
            }
        });
    }
    catch (error){
        //hubo un error
        console.log("Error en registro: " + error);
    }

}


function eliminarUser(){
    idUsuario = document.querySelector("#idUser");

    if (confirm("¿Desea eliminar el usuario")){

        console.log("eliminando usuario "+idUsuario.value);
        try{
            
            respuesta = fetch('api/usuarios/del/' + idUsuario.value, { // REEMPLAZAR ACA POR LA RUTA CORRESPONDIENTE
                method: 'DELETE', //metodo HTTP -- REEMPLAZAR POR EL METODO CORRESPONDIENTE
                headers: {   
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            console.log("Respuesta HTTP: " + respuesta.status);
        }
        catch (error){
            //hubo un error
            console.log("Error en borrado: " + error);
        }

        console.log("Usuario eliminado");
        
    }
    
    
}

async function iniciarSesion(){
    inputUsuario = document.querySelector("#usuario");
    inputContra = document.querySelector("#contraseña");

    let codigoResp;

    console.log("Usuario: "+ inputUsuario.value);
    console.log("Contraseña: "+ inputContra.value);
    console.log("iniciando sesion... ");
    // Petición HTTP
    try{   
        respuesta = fetch('http://localhost:3000/usuario/iniciar_sesion', {  // REEMPLAZAR ACA POR LA RUTA CORRESPONDIENTE
            
            method: 'POST', //metodo HTTP -- REEMPLAZAR POR EL METODO CORRESPONDIENTE
            headers: {   //aca decimos que devuelve un JSON
                'Accept': '*/*',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({    // ACA VAN LOS DATOS
                'usuario': inputUsuario.value,
                'password': inputContra.value
              })   
        })
        .then(response => {
            codigoResp = response.status;
            console.log("Respuesta de petición: "+response.status);

            //recargamos la pagina
            if(codigoResp >= 200 && codigoResp < 300){
            alert("inicio_sesion");
            
            }
        });
    }
    catch (error){
        //hubo un error
        console.log("Error en registro: " + error);
    }

}