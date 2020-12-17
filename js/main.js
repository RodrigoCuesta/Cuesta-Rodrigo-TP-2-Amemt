
// al iniciar el script carga los datos desde MockApi
function getJSON() {
    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(res=> res.json())
      .then((datos) => {
              processedData = datos;
              let arregloclave = Object.keys(datos[0]);
              crearHeader(arregloclave);
              for (let i = 0; i < datos.length; i++) {
                  crearTabla(datos[i]);
              }
              agregarBoton();
          },)}

//al iniciar el script cargar los datos/botones dinamicamente
window.addEventListener("load",getJSON);


// Aca tengo el manejador del switch para mostrar los filtros

switchDropdown.addEventListener("click",()=> {cargarOpcionesFiltro(); filtroEl.classList.toggle('hidden');  if (filtroEl.classList.contains('hidden')) {limpiarTabla(); for (let i=0; i< processedData.length; i++)
    {crearTabla(processedData[i])}}});