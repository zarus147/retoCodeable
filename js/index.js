


//
const Notasa = [
    {
        id: "1",
        nota: "All templates were built by designers using Webflow without writing code. That means you can customize them using our visual interface too.",

    }
    
];


const listanotas = document.querySelector(".nota");

function agregarNota(contenidorecibido) {

    if (contenidorecibido.length === 0 ) {
        console.log("dgdfhg")
        
    }else{
        const nuevaNota = {
            id: (Notasa.length + 1).toString(), 
            nota: contenidorecibido
        };
        Notasa.push(nuevaNota);

    

    }

    
}

function eliminarNota(id) {
    const indice = Notasa.findIndex(nota => nota.id === id);
    if (indice !== -1) {
        Notasa.splice(indice, 1);
    }
}




function componeteNota(nota , id) {

    const html_divcontainer = document.createElement("div"); 
    const contenido = `
            <div class="solution">
                <div class="card-nota">

                    <div class="dato-producto">
                        <p>${nota}</p>
                    </div>
                
                    <button class="btn-eliminar" type="button" id="${id}">Eliminar</button>
            
                </div>
            </div>
    `;

    html_divcontainer.innerHTML= contenido; /* añadimos el cun contenido dentro de la etiqueta nates creada */
    const btn = html_divcontainer.querySelector("button")
    
    btn.addEventListener("click", () => {
        const idd = btn.id;
        eliminarNota(idd); 
        listanotas.innerHTML = ''; 
        
        //agragmos nuevamente todos los datos al listanotas o a .nota del html
        Notasa.map((x)=>{
            const mostrar = componeteNota(x.nota , x.id);
            listanotas.appendChild(mostrar); 
                                                 
        })
    });

    return( html_divcontainer); 

}


/* mostrar datos */
Notasa.map((x)=>{
    const mostrar = componeteNota(x.nota , x.id);
    listanotas.appendChild(mostrar); 
                                         
})



function manejarEnvioFormulario(event) {
    event.preventDefault();

    var valorNota = document.getElementById("xnota").value;

    agregarNota(valorNota)

    listanotas.innerHTML = '';

    Notasa.map((x)=>{
        const mostrar = componeteNota(x.nota , x.id);
        listanotas.appendChild(mostrar); 
                                             
    })

    document.getElementById("xnota").value = "";
   

}

const formulario = document.getElementById("notaForm");

formulario.addEventListener("submit", manejarEnvioFormulario);


