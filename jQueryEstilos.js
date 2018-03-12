$(function () {
    $('#dialogLogin').dialog({
        autoOpen: false,
        show: {
            effect: 'blind',
            duration: 1000
        },
        hide: {
            effect: 'drop',
            duration: 1000
        },
        modal: true
    });

    $('#dialogReg').dialog({
        autoOpen: false,
        show: {
            effect: 'blind',
            duration: 1000
        },
        hide: {
            effect: 'drop',
            duration: 1000
        },
        modal: true
    });

    $('#openLogin').on('click', function () {
        $('#dialogLogin').dialog('open');
    });

    $('#openReg').on('click', function () {

        $.ajax({
            url: 'dbSelect.php',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            success: function (response) {
                //rellenar los country




                $('#dialogReg').dialog('open');
            },
            error: function (request, errorType, errorMessage) {
                alert('Error' + errorType + 'Mensaje: ' + errorMessage);
            }
        });









    });

});