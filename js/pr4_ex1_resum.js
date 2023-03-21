var activitat = document.getElementById("activitat");
var usuari = document.getElementById("usuari");
var data = document.getElementById("data");
var duracio = document.getElementById("duracio");
var llargada = document.getElementById("distancia");


function recuperarDades(){
    let recuperarRutes = localStorage.getItem("llistaRutes");
    return JSON.parse(recuperarRutes);
}

function mostrarDades(){
    let dades = recuperarDades();
    activitat.textContent = dades[dades.length-1].activitat;
    usuari.textContent = dades[dades.length-1].nom;
    data.textContent = dades[dades.length-1].data;
    duracio.textContent = dades[dades.length-1].duracio;
    llargada.textContent = dades[dades.length-1].distancia;
}

mostrarDades();
