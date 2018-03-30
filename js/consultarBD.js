
// Insertar usuario en la base de datos
var insertUsuario = function () {
    var nombre = $('#nombreReg').val();
    var pass = $('#passwordReg').val();
    var email = $('#emailReg').val();
    var nacimiento = $('#nacimientoReg').val();
    var ciudad = $('#poblacionReg').val();

    $.ajax({
        url: './php/dbInsertUsuario.php',
        data: {nombre: nombre, pass: pass, email: email, nacimiento: nacimiento, ciudad: ciudad},
        success: function (data) {
        },
        error: function (request, errorType, errorMessage) {
            alert('Error' + errorType + 'Mensaje: ' + errorMessage);
        }
    });
};

// Comprobar que existe el usuario en la base de datos
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

// Devuelve la lista de los paises
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

// Devuelve la lista de las ciudades en función del pais seleccionado
var ciudades = function (codePais) {
    $('#poblacionReg').text("");
    $.ajax({
        url: './php/dbSelectCiudades.php',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        data: {codigoPais: codePais},
        success: function (response) {
            var arrayCiudades = response;
            for (var i = 0; i < arrayCiudades.length; i++) {
                var idCiudad = "<option value='" + arrayCiudades[i].ID + "'>" + arrayCiudades[i].Name + "</option>";
                $('#poblacionReg').append(idCiudad);
            }
        },
        error: function (request, errorType, errorMessage) {
            alert('Error' + errorType + 'Mensaje: ' + errorMessage);
        }
    })
};

