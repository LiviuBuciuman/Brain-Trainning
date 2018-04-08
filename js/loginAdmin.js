$(function () {
    getPreguntasAdmin();

    var temaAdmin = $('#temaAdmin');
    var preguntaAdmin = $('#preguntaAdmin');
    var edit = $('#edit');
    var eliminar = $('#eliminar');
    var nuevaPregunta = $('#nuevaPregunta');
    var dialog;
    var idEdit;

    dialog = $('#dialogAdmin').dialog({
        autoOpen: false,
        modal: true,
        width: 1000,
        height: 650,
        buttons: {
            Guardar: function () {

            },
            Cancelar: function () {
                dialog.dialog('close');
            }
        }
    })
    ;

    $(document).on('click', '.table tbody tr td #edit', function () {
        dialog.dialog('open');
        getPreguntaEditar($(this).val());
    });

    $(document).on('click', '.table tbody tr td #eliminar', function () {
        alert($(this).val());
    });

    nuevaPregunta.click(function () {
        alert("Nueva pregunta");
    });

});

