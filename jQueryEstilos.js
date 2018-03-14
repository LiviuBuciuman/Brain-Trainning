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
        $('#dialogReg').dialog('open');
        paises();

    });

});

var paises = function () {
    $.ajax({
        url: './php/dbSelect.php',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            var array = response;
            for (var i = 0; i < array.length; i++) {
                var code = "<option value='" + array[i].Code + "'>" + array[i].Name + "</option>";
                $('#paisReg').append(code);
            }
        },
        error: function (request, errorType, errorMessage) {
            alert('Error' + errorType + 'Mensaje: ' + errorMessage);
        }
    });
};
