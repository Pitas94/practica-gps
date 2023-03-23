var rutaAMostrar = recuperarDades();
rutaAMostrar = rutaAMostrar[rutaAMostrar.length-1].llistaCoordenades;

var latitud = rutaAMostrar[Math.trunc((rutaAMostrar.length-1)/2)][0];
var longitud = rutaAMostrar[Math.trunc((rutaAMostrar.length-1)/2)][1];


var map = L.map('map').setView([latitud, longitud], 14);

var capa = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

var linies = {
    color: 'red',
    opacity: '100%'
}

var ruta = L.polyline(rutaAMostrar, linies);

ruta.addTo(map);



var activitat = document.getElementById("activitat");
var descripcio = document.getElementById("descripcio");
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
    descripcio.textContent = dades[dades.length-1].descripcio;
    usuari.textContent = dades[dades.length-1].nom;
    data.textContent = dades[dades.length-1].data;
    duracio.textContent = dades[dades.length-1].duracio;
    llargada.textContent = dades[dades.length-1].distancia;
}

mostrarDades();
