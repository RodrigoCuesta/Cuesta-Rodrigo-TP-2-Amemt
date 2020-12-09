   
//creamos el header de la tabla:
let crearHeader=(arregloclave)=>{
    let listaDatos= document.createElement("tr");
    for (let i=0; i<arregloclave.length; i++) {
                let listheader=document.createElement("th");
                listheader.innerHTML=arregloclave[i];
                listaDatos.appendChild(listheader);
            };
            tableEl.appendChild(listaDatos);
            // Creamos la celda editar
            let columnaEditar=document.createElement("th");
            columnaEditar.innerHTML="Editar";
                listaDatos.appendChild(columnaEditar);
                tableEl.appendChild(listaDatos);
             // Creamos la celda eliminar
             let columnaEliminar=document.createElement("th");
             columnaEliminar.innerHTML="Borrar";
                 listaDatos.appendChild(columnaEliminar);
                 tableEl.appendChild(listaDatos);
}
// inicializamos la tabla en blanco
function limpiarTabla(){
    body.innerHTML="";
}

//creamos el contenido de la  tabla:
let crearTabla=(baterias)=>{
    let listaDatos= document.createElement("tr");
for (const lista in baterias) {
    let listItem=document.createElement("td");
    listItem.innerHTML= baterias[lista];
    listaDatos.appendChild(listItem);
    body.appendChild(listaDatos)
}
tableEl.appendChild(body);

// celda con boton de editar
let botonEditar=document.createElement("td");
botonEditar.innerHTML= "<img src='../Assets/Img/Icono editar-eliminar/pencil-square.svg' alt='editar' width='32' height='32'/>";
botonEditar.classList.add("botonesTabla");
    listaDatos.appendChild(botonEditar);
    botonEditar.addEventListener("click",(event)=>{event.preventDefault();showModalEditar(event.path[2])});

//celda con boton de eliminar
let botonEliminar=document.createElement("td");
botonEliminar.innerHTML= "<img src='../Assets/Img/Icono editar-eliminar/trash-fill.svg' alt='eliminar' width='32' height='34'/>";
botonEliminar.classList.add("botonesTabla");
    listaDatos.appendChild(botonEliminar);
    botonEliminar.addEventListener("click",(event)=>{event.preventDefault();showModalEliminar(event.path[2])});
    botonEliminar.removeEventListener("click",(event)=>{event.preventDefault();showModalEliminar(event.path[2])},true);

}

//se crea dinamicamente el boton de "agregar"
function agregarBoton (){
    let div=document.getElementById("divBoton");
    let boton= document.createElement("button");
    div.appendChild(boton);
    boton.addEventListener("click",(event)=>{event.preventDefault();showModalAgregar()});
    boton.classList.add("btn-dark");
    boton.classList.add("btn");
    boton.innerHTML="Agregar";
}

// Se muestra el modal cuando se quiere eliminar fila */
function showModalEliminar(fila) {
    titulo.innerHTML= "Eliminar";
    mensaje.innerHTML= "Desea eliminar la fila?";
    aceptar.innerHTML= "Aceptar";
    cancelar.innerHTML= "Cancelar";
    aceptar.onclick=function(){eliminarDato(fila)};
    cancelar.addEventListener("click",cancelarModal, { once: true });
    overlayEl.classList.remove('display-none');
}

// funcion que elimina con demora de dos segundos
function eliminarDato (fila) {
    cancelar.removeEventListener("click",cancelarModal, { once: true });
    progressBar.classList.add('final');
  setTimeout(()=>{
    overlayEl.classList.add('display-none');
    progressBar.classList.remove('final');
    body.removeChild(fila);
    },1000);
}

// funcion cancelar
function cancelarModal() {
    overlayEl.classList.add('display-none')
    aceptar.removeEventListener("click",()=>{eliminarDato(fila)},{ once: true });
}

// Se muestra el modal cuando se quiere EDITAR fila */
function showModalEditar(fila) {
    titulo.innerHTML= "Editar";
    mensaje.innerHTML= "Modifique los datos:";
    let formulario=document.createElement("form");
    formulario.classList.add('container', 'padding', 'margen');
    mensaje.appendChild(formulario);
    // se crean los input dinamicamente
         let marca=document.createElement("INPUT");
         marca.setAttribute("type", "text");
         marca.setAttribute("required", "true"); //ver el tema del required!
         marca.value=fila.cells[0].innerHTML;
         marca.classList.add('margen');
         formulario.appendChild(marca);
         let modelo=document.createElement("INPUT");
         modelo.setAttribute("type", "text");
         modelo.value=fila.cells[1].innerHTML;
         modelo.classList.add('margen');
         formulario.appendChild(modelo);
         let voltaje=document.createElement("INPUT");
         voltaje.setAttribute("type", "number");
         voltaje.value=fila.cells[2].innerHTML;
         voltaje.classList.add('margen');
         formulario.appendChild(voltaje);
         let amperaje=document.createElement("INPUT");
         amperaje.setAttribute("type", "text");
         amperaje.value=fila.cells[3].innerHTML;
         amperaje.classList.add('margen');
         formulario.appendChild(amperaje);
    aceptar.innerHTML= "Aceptar";
    cancelar.innerHTML= "Cancelar";
    overlayEl.classList.remove('display-none');
    //aceptar.addEventListener("click",()=>{modificarDato (fila,marca,modelo,voltaje,amperaje)}, { once: true });
    aceptar.onclick=function(){modificarDato (fila,marca,modelo,voltaje,amperaje)};
    cancelar.addEventListener("click",()=>overlayEl.classList.add('display-none'), { once: true });
}
// funcion que modifica el dato en la tabla
function modificarDato (fila,marca,modelo,voltaje,amperaje) {
    progressBar.classList.add('final');

  setTimeout(()=>{
    overlayEl.classList.add('display-none');
    progressBar.classList.remove('final');
    fila.cells[0].innerHTML=marca.value;
    fila.cells[1].innerHTML=modelo.value;
    fila.cells[2].innerHTML=voltaje.value;
    fila.cells[3].innerHTML=amperaje.value;
  },2000);   
}


// Se muestra el modal cuando se quiere AGREGAR fila */
function showModalAgregar() {
    titulo.innerHTML= "Agregar";
    mensaje.innerHTML= "Inserte datos:";
    let formulario=document.createElement("form");
    formulario.classList.add('container', 'padding', 'margen');
    mensaje.appendChild(formulario);
    // se crean los input dinamicamente
         let marca=document.createElement("INPUT");
         marca.setAttribute("type", "text");
         marca.placeholder='Marca';
         marca.classList.add('margen');
         formulario.appendChild(marca);
         let modelo=document.createElement("INPUT");
         modelo.setAttribute("type", "text");
         modelo.placeholder='Modelo';
         modelo.classList.add('margen');
         formulario.appendChild(modelo);
         let voltaje=document.createElement("INPUT");
         voltaje.setAttribute("type", "number");
         voltaje.placeholder='Voltaje';
         voltaje.classList.add('margen');
         formulario.appendChild(voltaje);
         let amperaje=document.createElement("INPUT");
         amperaje.setAttribute("type", "text");
         amperaje.placeholder='Amperaje';
         amperaje.classList.add('margen');
         formulario.appendChild(amperaje);
    aceptar.innerHTML= "Aceptar";
    cancelar.innerHTML= "Cancelar";
    overlayEl.classList.remove('display-none');
    //aceptar.addEventListener("click",()=>{insertarDato (marca,modelo,voltaje,amperaje)}, { once: true });
    aceptar.onclick=function(){insertarDato (marca,modelo,voltaje,amperaje)};
    cancelar.addEventListener("click",()=>overlayEl.classList.add('display-none'), { once: true }); 
}

// funcion que inserta el dato nuevo en la tabla
function insertarDato (marca,modelo,voltaje,amperaje) {
    progressBar.classList.add('final');
    setTimeout(()=>{
      overlayEl.classList.add('display-none');
      progressBar.classList.remove('final');
    nuevaBateria.Marca=marca.value;
    nuevaBateria.Modelo=modelo.value;
    nuevaBateria.Voltaje=voltaje.value;
    nuevaBateria.Amperaje=amperaje.value;
    crearTabla(nuevaBateria);
  },2000);   
}

// funcion que carga los dropdowns del filtro
function cargarOpcionesFiltro(){
let opciones= new Set(processedData.baterias.map(elem=>{return elem.Marca}));
console.log(processedData.baterias);

filtroEl.innerHTML='';
let opcionEl=document.createElement('option');
opcionEl.value='';
opcionEl.innerHTML='Filtrar por marca';
//<option value="" disabled selected>Choose your option</option>
opcionEl.setAttribute('disabled','true');
opcionEl.setAttribute('selected','true');
filtroEl.appendChild(opcionEl);
//<option value="Elija una opción" selected>Filtrar por tipo</option>
opciones.forEach(elem=>{
  let opcionEl=document.createElement('option');
  opcionEl.value=elem;
  opcionEl.innerText=elem;
  filtroEl.appendChild(opcionEl);
})
console.log(opciones);
}


filtroEl.addEventListener('change', ()=>{
    limpiarTabla();
let datosFiltrados=processedData.baterias.filter(elem=>{return elem.Marca==filtroEl.value});
for (let i=0; i< datosFiltrados.length; i++)
{
    crearTabla(datosFiltrados[i]);   
}})