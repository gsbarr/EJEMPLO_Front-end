async function cargar_noticias(){


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


cargar_noticias();