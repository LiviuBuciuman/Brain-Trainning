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
        modal: true,
        buttons: {
            Login: function () {
                login();
            },
            Salir: function () {
                $(this).dialog('close');
            }
        }

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
        modal: true,
        buttons: {
            "Guardar datos": function () {

            },
            Salir: function () {
                $(this).dialog('close');
            }
        }
    });

    $('#openLogin').click(function () {
        $('#dialogLogin').dialog('open');
    });

    $('#openReg').click(function () {
        $('#dialogReg').dialog('open');
        paises();
    });

    $('#paisReg').change(function () {
        var codePais = $('#paisReg').val();
        ciudades(codePais);
    });
});

var insertUsuario = function () {
    var nombre = $('#nombreReg').val();
    var pass = $('#passwordReg').val();
    var email = $('#emailReg').val();
    var nacimiento = $('#nacimientoReg').val();
    var pais = $('#paisReg').val();
    var ciudad = $('#poblacionReg').val();

    $.ajax({

    })
};

var login = function () {

    var nombreLog = $('#nombreLog').val();
    var passwordLog = $('#passwordLog').val();

    if ($.trim(nombreLog).length > 0 && $.trim(passwordLog).length > 0) {
        $.ajax({
            url: './php/dbSelectUsuarios.php',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: {nombreLog: nombreLog, passwordLog: passwordLog},
            success: function (data) {
                if (data.length > 0) {
                    $(location).attr('href', 'home.html');
                } else {
                    $('#dialogLogin').effect('shake', 500);
                }
            },
            error: function (request, errorType, errorMessage) {
                alert('Error' + errorType + 'Mensaje: ' + errorMessage);
            }
        });
    } else {
        $('#dialogLogin').effect('shake', 500);
    }
};

var paises = function () {
    $.ajax({
        url: './php/dbSelectPaises.php',
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
    })
};

var ciudades = function (codePais) {
    $('#poblacionReg').text("");
    $.ajax({
        url: './php/dbSelectCiudades.php',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        data: {codigoPais: codePais},
        success: function (response) {
            var array = response;
            for (var i = 0; i < array.length; i++) {
                var idCiudad = "<option value='" + array[i].ID + "'>" + array[i].Name + "</option>";
                $('#poblacionReg').append(idCiudad);
            }
        },
        error: function (request, errorType, errorMessage) {
            alert('Error' + errorType + 'Mensaje: ' + errorMessage);
        }
    })
};
