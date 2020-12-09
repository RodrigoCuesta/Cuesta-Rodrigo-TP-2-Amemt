// Accedemos al DOM para almacenar en constantes los elementos html que necesitemos */
const tituloTabla=document.getElementById('titulo');
const titulo=document.getElementById('tituloModal');
const mensaje=document.getElementById('mensajeModal');
const aceptar=document.getElementById('btn-si');
const cancelar=document.getElementById('btn-no');
const tableEl=document.getElementById("table");
const progressBar=document.getElementById("progressBar");
const switchDropdown =document.getElementById('switch');
const filtroEl=document.getElementById('filtroTipo');
let body=document.createElement("tbody");


const overlayEl=document.getElementById('overlay');

//defino la variable que tiene los datos parseados
let processedData= new Array;

// defino el objeto que va a contener los nuevos datos al agregar
let nuevaBateria= {
    Marca:"",
    Modelo: "",
    Voltaje:"",
    Amperaje:""
}

/* document.getElementByClassName me devuelve un arreglo con todos los elementos
que tengan esa clase, por eso yo accedo al primer elemento dentro de ese array [0] */
const btnNewCustomer = document.getElementById('btn-new');