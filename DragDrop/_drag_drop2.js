$(document).ready(function() {
    // Hacer que la imagen sea arrastrable
    $("#Caballo").attr('draggable', true); // o en la definición de la image.

    $("#Caballo").on('dragstart', function(event) {
        console.log("Drag")
        event.originalEvent.dataTransfer.setData("text/plain", event.target.id);
    });

    $("#Caballo").on('drag', function(event) {
       console.log("Dragging")
    });

    // Permitir que el destino reciba elementos arrastrados
    $("#destino").on('dragover', function(event) {
        event.preventDefault();
    });
    $("#destino").on('dragenter', function(event) {
        console.log("dragenter")
    });

    $("#destino").on('dragover', function(event) {
        console.log("dragover")
    });
    $("#destino").on('dragleave', function(event) {
        console.log("dragleave")
    });

    // Manejar la acción de soltar el elemento
    $("#destino").on('drop', function(event) {
        event.preventDefault();
        var data = event.originalEvent.dataTransfer.getData("text/plain");
        // Asegurarse de que el destino no sea un descendiente del elemento arrastrado
        var draggedElement = document.getElementById(data);
        var clonedElement = draggedElement.cloneNode(true); // true significa un clon profundo, incluyendo subelementos

        if (event.target !== draggedElement) {
            //event.target.appendChild(draggedElement);
            event.target.appendChild(clonedElement);
        }
    });
});
