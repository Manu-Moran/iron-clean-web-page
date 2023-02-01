
function mostrarEmpresas(){
    document.getElementById('empresas').style.display = "inline";
    document.getElementById('mantenimiento').style.display = "none";
    document.getElementById('hogar').style.display = "none";

    document.getElementById('1-1').style.backgroundImage = "url(images/rombo.png)"
    document.getElementById('2-1').style.backgroundImage = "none";
    document.getElementById('3-1').style.backgroundImage = "none";
}

function mostrarMantenimiento(){
    document.getElementById('mantenimiento').style.display = "inline";
    document.getElementById('empresas').style.display = "none";
    document.getElementById('hogar').style.display = "none";

    document.getElementById('1-1').style.backgroundImage = "none";
    document.getElementById('2-1').style.backgroundImage = "url(images/rombo.png)";
    document.getElementById('3-1').style.backgroundImage = "none";
}

function mostrarHogar(){
    document.getElementById('hogar').style.display = "inline";
    document.getElementById('empresas').style.display = "none";
    document.getElementById('mantenimiento').style.display = "none";

    document.getElementById('1-1').style.backgroundImage = "none";
    document.getElementById('2-1').style.backgroundImage = "none";
    document.getElementById('3-1').style.backgroundImage = "url(images/rombo.png)";
    
}

function mostrar1(){
//Selecciono todos los elementos con la class 'clase'
var Elementos = document.getElementsByClassName('img-empresa');
  
//Recorro el array obtenido
[].forEach.call(Elementos, function (item) {
  //Cambio el color del div por fines demostrativos.
  item.style.display = "none";
}); 

//Selecciono todos los elementos con la class 'clase'
var Elementos1 = document.getElementsByClassName('empresa1');
  
//Recorro el array obtenido
[].forEach.call(Elementos1, function (item) {
  //Cambio el color del div por fines demostrativos.
  item.style.display = "flex";
}); 
}