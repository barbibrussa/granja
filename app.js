var villaPlatzi = document.getElementById("granjita");
var papel = villaPlatzi.getContext ("2d");
var vaca = {
    imagen: undefined,
    url: "img/vaca.png",
    cargaOK: false

};
var fondo = {
    imagen: undefined,
    url: "img/tile.png",
    cargaOK: false
}
var cerdo = {
    imagen: undefined,
    url: "img/cerdo.png",
    cargaOK: false
};
var pollo = {
    imagen: undefined,
    url: "img/pollo.png",
    cargaOK: false
}
var teclas = { //variable que tiene variables por dentro(?
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var cantidadVacas = generarAleatorio (5,20);
var cantidadCerdos = generarAleatorio (5,20);
var cantidadPollos = generarAleatorio(3, 10);

function generarCargaImagen(obj, url, funcionCarga) {
    obj.imagen = new Image();
    obj.imagen.src = url;
    obj.imagen.addEventListener("load", funcionCarga);
}

generarCargaImagen(fondo, fondo.url, cargarFondo)
generarCargaImagen(vaca, vaca.url, cargarVacas)
generarCargaImagen(cerdo, cerdo.url, cargarCerdos)
generarCargaImagen(pollo, pollo.url, cargarPollos)

document.addEventListener("keyup", dibujarTeclado); //keydown registra cuando apretas la tecla, keyup cuando la soltas
var x = 150;
var y = 150;

function generarAleatorio (min, max) {
    var resultado;
    resultado = Math.floor( Math.random () * (max - min)) + min;
    return resultado;
}

function dibujarTeclado(evento) {
    //console.log (evento.keyCode); atributo del evento que tiene el codigo de la tecla que se oprime
    var movimiento = 30;
    switch (evento.keyCode){
        case teclas.UP:
            dibujarCerdo(x, y, x, y - movimiento, papel);
            y = y - movimiento;
        break;
        case teclas.DOWN:
            dibujarCerdo(x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;
        case teclas.LEFT:
            dibujarCerdo(x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;
        case teclas.RIGHT:
            dibujarCerdo(x, y, x + movimiento, y, papel);
            x = x + movimiento;
        break;
        default:
            console.log ("error");
        break;
    }
}

function cargarFondo (){
    fondo.cargaOK = true;
    dibujar();
}
function cargarVacas (){
    vaca.cargaOK = true;
    dibujar();
}
function cargarCerdos (){
    cerdo.cargaOK = true;
    dibujar();
}
function cargarPollos (){
    pollo.cargaOK = true;
    dibujar();
}

function dibujar(){
    if (fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOK) {
        for (v=0; v<cantidadVacas; v++) {
            console.log (cantidadVacas);
            var x = generarAleatorio (0,7);
            var y = generarAleatorio (0, 7);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if (pollo.cargaOK) {
        for (v=0; v<cantidadPollos; v++) {
            console.log (cantidadPollos);
            var x = generarAleatorio (0,7);
            var y = generarAleatorio (0, 7);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(pollo.imagen, x, y);
        }
    }
}

function dibujarCerdo (x, y){
    papel.clearRect(0,0,500,500);
    dibujar();
    papel.drawImage(cerdo.imagen, x, y);
}