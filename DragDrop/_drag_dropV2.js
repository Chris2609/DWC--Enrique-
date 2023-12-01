$(document).ready(function () {
  // Hacer que la imagen sea arrastrable
  // $("#Alfil").attr('draggable', false);
  $("#Caballo, #Alfil").on("dragstart", function (event) {
    event.originalEvent.dataTransfer.setData("text/plain", event.target.id);
  });
  // $("#Alfil").on('dragstart', function(event) {
  //     event.originalEvent.dataTransfer.setData("text/plain", event.target.id);
  // });

  // Permitir que el destino reciba elementos arrastrados
  $("#destino, #inicio, *").on("dragover", function (event) {
    event.preventDefault();
  });

  $("#destino").on("dragover", function (event) {
    event.preventDefault()
    console.log(event.originalEvent.dataTransfer.getData("text/plain"));

    // if(data == "Caballo"){
    //     document.body.style.backgroundColor = "red";
    // }
  });

  cont = 0;
  // Manejar la acción de soltar el elemento
  $("#destino, #inicio, *").on("drop", function (event) {
    event.preventDefault();
    var data = event.originalEvent.dataTransfer.getData("text/plain");
    // Asegurarse de que el destino no sea un descendiente del elemento arrastrado
    var draggedElement = document.getElementById(data);
    if (event.target !== draggedElement) {
      event.target.appendChild(draggedElement);
    }
  });
});
