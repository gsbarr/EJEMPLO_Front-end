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
        respuesta = fetch('api/usuarios', {
            
            method: 'POST', //metodo HTTP
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
