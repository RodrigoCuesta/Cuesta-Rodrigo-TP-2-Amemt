// Datos de la tabla para cargar dinamicamente
let datos=`{
    "baterias":[
        {
            "Marca":"Varta",
            "Modelo": "Blue Dynamic",
            "Voltaje": 12,
            "Amperaje":"800A"
        },
        {
            "Marca":"Yuasa",
            "Modelo": "YTX9-BS",
            "Voltaje": 12,
            "Amperaje":"8A"
        },
        {
            "Marca":"Volta",
            "Modelo": "Prestige",
            "Voltaje": 12,
            "Amperaje":"620A"
        },
        {
            "Marca":"Yuasa",
            "Modelo": "Exide High-Tech",
            "Voltaje": 12,
            "Amperaje":"760A"
        },
        {
            "Marca":"Optima",
            "Modelo": "Yellow Top",
            "Voltaje": 12,
            "Amperaje":"975A"
        }
    ]
}` 

//al iniciar el script cargar los datos/botones dinamicamente
window.addEventListener("load",() => {
    processedData=JSON.parse(datos);
    let arregloclave=Object.keys(processedData.baterias[0]);
    crearHeader(arregloclave);
    for (let i=0; i< processedData.baterias.length; i++)
        {
            crearTabla(processedData.baterias[i]);   
        }
agregarBoton();
});

/* Aca tengo el manejador del switch para mostrar los filtros */

switchDropdown.addEventListener("click",()=> {cargarOpcionesFiltro(); filtroEl.classList.toggle('hidden');  if (filtroEl.classList.contains('hidden')) {limpiarTabla(); for (let i=0; i< processedData.baterias.length; i++)
    {crearTabla(processedData.baterias[i])}}});