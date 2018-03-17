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

    $('#loginLog').click(function () {

        var nombreLog = $('#nombreLog').val();
        var passwordLog = $('#passwordLog').val();

        if ($.trim(nombreLog).length > 0 && $.trim(passwordLog).length > 0) {
            $.ajax({
                url: './php/dbSelectUsuarios.php',
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                data: {nombreLog: nombreLog, passwordLog: passwordLog},
                cache: 'false',
                beforeSend: function () {
                    $('#loginLog').val('Conectando...')
                },
                success: function (data) {
                    $('#loginLog').val('Login');
                    if (data.length > 0) {
                        $(location).attr('href', 'home.html');
                    } else {
                        alert("Ups");
                    }
                },
                error: function (request, errorType, errorMessage) {
                    alert('Error' + errorType + 'Mensaje: ' + errorMessage);
                }
            });
        }
    });

});

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
        data: {"codigoPais": codePais},
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
