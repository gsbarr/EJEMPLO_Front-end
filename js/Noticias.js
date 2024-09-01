async function listar_noticias(){


    const respuesta = await fetch("http://localhost:3000/noticias/listar"
        , {
            method: "GET", // *GET, POST, PUT, DELETE, etc.    
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            }
        });

    datos = await respuesta.json(); 


    //datos = `[{"_id":"667ca5e2cb1799a0fe91c011","titulo":"se contrató a un canguro como secretario","subtitulo":"es muy bueno en su trabajo","texto":"En el día de ayer hubo una lciitación en la cual concursaron un canguro, un tigre y un elefante. Casi gana el elefante pero se olvidó un colmillo en su casa.","fechahora":"24/07/26 17:55hs"},{"_id":"667cacbe48071f1a90ce56e0","titulo":"se contrató a un canguro como secretario","subtitulo":"es muy bueno en su trabajo","texto":"En el día de ayer hubo una lciitación en la cual concursaron un canguro, un tigre y un elefante. Casi gana el elefante pero se olvidó un colmillo en su casa.","fechahora":"24/07/26 17:55hs"},{"_id":"667cacc248071f1a90ce56e1","titulo":"se contrató a un canguro como secretario","subtitulo":"es muy bueno en su trabajo","texto":"En el día de ayer hubo una lciitación en la cual concursaron un canguro, un tigre y un elefante. Casi gana el elefante pero se olvidó un colmillo en su casa.","fechahora":"24/07/26 17:55hs"},{"_id":"66b16159134105ec643de902","titulo":"hola","texto":"asdsada"}]`;

    console.log(datos);


    datos.forEach(noti => {

        nuevaNoticia = `<div class="row">
                <div class="col s12">
                    <div class="card-panel noticias">
                        <h6 class="fecha">${noti.fechahora}</h6>
                        <h2 class="titulo"> ${noti.titulo}</h2>
                        <span class="texto">${noti.texto}
                        </span>
                    </div>
                </div>
            </div>
        `;

        seccionNoticias = document.querySelector(".SeccionNoticias");
        seccionNoticias.innerHTML += nuevaNoticia;

    });
}


async function buscarNoticiaPorID(){
    inputIDNoticia = document.querySelector("#idNoticia");
    inputAutor = document.querySelector("#autorNoticia");
    inputTitulo = document.querySelector("#tituloNoticia");
    inputTexto = document.querySelector("#textoNoticia");
    
    const respuesta = await fetch("http://localhost:3000/noticias/porID/" + inputIDNoticia.value
        , {
            method: "GET", // *GET, POST, PUT, DELETE, etc.    
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            }
        });

    datos = await respuesta.json(); 


    console.log(datos);

    

    datos.forEach(noti => {

        inputIDNoticia.value= noti._id;
        inputAutor.value = noti.autor;
        inputTitulo.value = noti.titulo;
        inputTexto.value = noti.texto;
    });
}


async function buscarNoticiaPorTitulo(){
    inputIDNoticia = document.querySelector("#idNoticia");
    inputAutor = document.querySelector("#autorNoticia");
    inputTitulo = document.querySelector("#tituloNoticia");
    inputTexto = document.querySelector("#textoNoticia");
    
    const respuesta = await fetch("http://localhost:3000/noticias/porTitulo/" + inputTitulo.value
        , {
            method: "GET", // *GET, POST, PUT, DELETE, etc.    
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            }
        });

    datos = await respuesta.json(); 


    console.log(datos);

    

    datos.forEach(noti => {

        inputIDNoticia.value= noti._id;
        inputAutor.value = noti.autor;
        inputTitulo.value = noti.titulo;
        inputTexto.value = noti.texto;
    });
}



async function  crearNoticia(){

    inputAutor = document.querySelector("#autorNoticia");
    inputTitulo = document.querySelector("#tituloNoticia");
    inputTexto = document.querySelector("#textoNoticia");

    let datos = {};
    let codigoResp;

  

    // Armamos el JSON con los datos del registro
    datos.autor = inputAutor.value;
    //datos.last_name = inputLastName.value;
    datos.titulo = inputTitulo.value;
    datos.texto = inputTexto.value;
    
    console.log(JSON.stringify(datos));
    console.log("creando usuario... ");
    // Petición HTTP
    try{   
        respuesta = fetch('http://localhost:3000/noticias/crear', {  // REEMPLAZAR ACA POR LA RUTA CORRESPONDIENTE
            
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


async function  modificarNoticia(){

    inputIDNoticia = document.querySelector("#idNoticia");
    inputAutor = document.querySelector("#autorNoticia");
    inputTitulo = document.querySelector("#tituloNoticia");
    inputTexto = document.querySelector("#textoNoticia");
    
    if(inputIDNoticia.value && inputAutor && inputTitulo && inputTexto){

        let datos = {};
        let codigoResp;

    

        // Armamos el JSON con los datos del registro
        datos.autor = inputAutor.value;
        //datos.last_name = inputLastName.value;
        datos.titulo = inputTitulo.value;
        datos.texto = inputTexto.value;
        
        console.log(JSON.stringify(datos));
        console.log("ACtualizando noticia... ");
        // Petición HTTP
        try{   
            respuesta = fetch('http://localhost:3000/noticias/actualizar/' + inputIDNoticia.value
            , {  // REEMPLAZAR ACA POR LA RUTA CORRESPONDIENTE
                
                method: 'PUT', //metodo HTTP -- REEMPLAZAR POR EL METODO CORRESPONDIENTe
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
                alert("Noticia actualizada correctamente");
                console.log("Recargando pagina...")
                location.reload();
                }
            });
        }
        catch (error){
            //hubo un error
            console.log("Error: " + error);
        }

    }
    else{
        alert("Buscar primero una noticia");
    }

}


async function  eliminarNoticia(){

    inputIDNoticia = document.querySelector("#idNoticia");
    inputAutor = document.querySelector("#autorNoticia");
    inputTitulo = document.querySelector("#tituloNoticia");
    inputTexto = document.querySelector("#textoNoticia");
    
    if(inputIDNoticia.value){

        let datos = {};
        let codigoResp;

    

        // Armamos el JSON con los datos del registro
        datos.autor = inputAutor.value;
        //datos.last_name = inputLastName.value;
        datos.titulo = inputTitulo.value;
        datos.texto = inputTexto.value;
        
        console.log(JSON.stringify(datos));
        console.log("Eliminando noticia... ");
        // Petición HTTP
        try{   
            respuesta = fetch('http://localhost:3000/noticias/eliminar/' + inputIDNoticia.value
            , {  // REEMPLAZAR ACA POR LA RUTA CORRESPONDIENTE
                
                method: 'DELETE', //metodo HTTP -- REEMPLAZAR POR EL METODO CORRESPONDIENTe
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
                alert("Noticia eliminada correctamente");
                console.log("Recargando pagina...")
                location.reload();
                }
            });
        }
        catch (error){
            //hubo un error
            console.log("Error: " + error);
        }

    }
    else{
        alert("Especificar un ID");
    }

}