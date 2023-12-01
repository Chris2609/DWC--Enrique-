$(document).ready(function() {
    // Hacer que la imagen sea arrastrable
    $("#Alfil").attr('draggable', false);
    $("#Caballo").on('dragstart', function(event) {
        event.originalEvent.dataTransfer.setData("text/plain", event.target.id);
    });

    // Permitir que el destino reciba elementos arrastrados
    $("#destino").on('dragover', function(event) {
        event.preventDefault();
    });

    // Manejar la acción de soltar el elemento
    $("#destino").on('drop', function(event) {
        event.preventDefault();
        var data = event.originalEvent.dataTransfer.getData("text/plain");
        // Asegurarse de que el destino no sea un descendiente del elemento arrastrado
        var draggedElement = document.getElementById(data);
        if (event.target !== draggedElement) {
            event.target.appendChild(draggedElement);
        }
    });
});
