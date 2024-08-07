async function cargar_noticias(){


    const respuesta = await fetch("http://localhost:3000/noticias/listar"
        , {
            method: "GET", // *GET, POST, PUT, DELETE, etc.    
            headers: {
                "Content-Type": "application/json",
            },
            mode: "no-cors"
        });

    datos = respuesta.json(); 

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