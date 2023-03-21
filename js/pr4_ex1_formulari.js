function validarNom(nom){
    if(validarNomMin(nom) && validarNomMax(nom) && validarNomEspais(nom)){
        return true;
    } else {
        return false;
    }
}

function validarNomMin(nom){
    if(nom.length < 3){
        alert("El nom te que tenir minin 3 caracters");
        return false;
    } else {
        return true;
    }
}

function validarNomMax(nom){
    if(nom.length > 10){
        alert("El nom te que tenir maxim 10 caracters");
        return false;
    } else {
        return true;
    }
}

function validarNomEspais(nom){
    if(nom.includes(" ")){
        alert("El nom no pot contenir espais en blanc");
        return false;
    } else {
        return true;
    }
}

function validarDescripcio(descripcio){
    if(descripcio.length == 0) {
        alert("Falta omplir el camp descripcio");
        return false;
    } else {
        return true;
    }
}

function comprobarFormulari(){
    let nom = document.getElementById("nom").value;
    let descripcio = document.getElementById("descripcio").value;
    if(validarNom(nom) && validarDescripcio(descripcio)){
        guardarDades();
        return;
    } else {
        event.preventDefault(); 
    }
}

function guardarDades(){
    let dades = {
        'id': rutes.length == 0 ? 1 : parseInt(rutes[rutes.length-1].id) + 1,
        'nom': document.getElementById("nom").value,
        'descripcio': document.getElementById("descripcio").value,
        'activitat': document.getElementById("activitat").value,
        'llistaCoordenades': [],
        'duracio': '',
        'data': '',
        'distancia': ''
    }
    rutes.push(dades);

    localStorage.setItem("llistaRutes", JSON.stringify(rutes))
}

function recuperarDades(){
    let recuperarRutes = localStorage.getItem("llistaRutes");
    let llistaDades = JSON.parse(recuperarRutes);
    console.log(llistaDades);
}


var rutes = JSON.parse(localStorage.getItem("llistaRutes"));

if(rutes == null) {
    rutes = [];
}



document.getElementById("iniciar").addEventListener("click", comprobarFormulari);


recuperarDades();
