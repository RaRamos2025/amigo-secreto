// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar nombre de amigos.
let listadoAmigos = [];
// Función agregar, validar vacío, agregar a listado, limpiar campo y llama actualizar listado.
function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;
  if (nombreAmigo == '') {
    alert("Debe ingresar un nombre por favor");
  } else {
    listadoAmigos.push(nombreAmigo);
// Consola que va mostrando la inclusión de nuevo nombre al listado de amigos.
    console.log(listadoAmigos);
    actualizarListaDeAmigos();
    limpiarCampo();
  }
}
