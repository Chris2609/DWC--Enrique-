$(document).ready(function () {
  // Hacer que la imagen sea arrastrable
  $("#Caballo,#Alfil").on("dragstart", function (event) {
    object = event.target.id;
  });

  // Permitir que el destino reciba elementos arrastrados
  $("#destino").on("dragover", function (event) {
    event.preventDefault();
    if (object == "Caballo") {
      this.style.backgroundColor = "Green";
      this.style.borderColor = "Green";
    } else {
      this.style.backgroundColor = "Red";
      this.style.borderColor = "Red";
    }
  });

  $("#inicio").on("dragover", function (event) {
    event.preventDefault();
    if (object == "Alfil") {
      this.style.backgroundColor = "Green";
      this.style.borderColor = "Green";
    } else {
      this.style.backgroundColor = "Red";
      this.style.borderColor = "Red";
    }
  });

  // Manejar la acción de soltar el elemento
  $("#destino").on("drop", function (event) {
    if (object == "Caballo") {
      event.preventDefault();
      // Asegurarse de que el destino no sea un descendiente del elemento arrastrado
      var draggedElement = document.getElementById(object);
      if (event.target !== draggedElement) {
        event.target.appendChild(draggedElement);
      }
    }
  });

  $("#inicio").on("drop", function (event) {
    if (object == "Alfil") {
      event.preventDefault();
      // Asegurarse de que el destino no sea un descendiente del elemento arrastrado
      var draggedElement = document.getElementById(object);
      if (event.target !== draggedElement) {
        event.target.appendChild(draggedElement);
      }
    }
  });
});