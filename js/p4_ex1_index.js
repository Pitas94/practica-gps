var llistaRutes = document.getElementById("rutes");


function recuperarDades(){  
    let recuperarRutes = localStorage.getItem("llistaRutes");
    return JSON.parse(recuperarRutes);
}

function guardarDades(dades){
    localStorage.setItem("llistaRutes", JSON.stringify(dades));
}

function mostrarTotesLesDades(){
    let llistaKeys = ["nom", "activitat", "data", "distancia"];
    let rutes = recuperarDades();
    rutes.forEach(e => {
        let contenedor = document.createElement("div");
        contenedor.classList.add("contenedor");
        for(let i=0;i<llistaKeys.length;i++){
            let key = document.createElement("h4");
            let keyValor = document.createTextNode(llistaKeys[i].charAt(0).toUpperCase() + llistaKeys[i].slice(1));
            let text = document.createElement("span");
            let textValor = document.createTextNode(e[llistaKeys[i]]);
            let div = document.createElement("div");
            key.appendChild(keyValor);
            text.appendChild(textValor);
            div.appendChild(key);
            div.appendChild(text);
            contenedor.appendChild(div);
        }
        let boton = document.createElement("button");
        boton.classList.add("boton");
        boton.id = e.id;
        let eliminar = document.createElement("img");
        eliminar.classList.add("src");
        eliminar.setAttribute("src", "/practica-gps/img/delete.png");
        boton.appendChild(eliminar)
        contenedor.appendChild(boton);
        llistaRutes.appendChild(contenedor);
    });
}

function eventEliminar(){
    let eventBoto = document.getElementsByClassName("boton");
    for(let i=0; i<eventBoto.length;i++) {
        eventBoto[i].addEventListener("click", () => {
            eliminarRegistre(eventBoto[i].id);
        })
    }
}

function eliminarRegistre(id){
    let rutes = recuperarDades();
    for(let i=0;i<rutes.length;i++){
        if(rutes[i].id == id){
            rutes.splice(i, 1);
            break;
        }
    }
    guardarDades(rutes);
    let contenedor = document.getElementById("rutes");
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
    mostrarTotesLesDades();
    eventEliminar();
}



mostrarTotesLesDades();
eventEliminar();
