// Select pregunta Editar
var getPreguntaEditar = function (id) {
    $('#preguntaEditar').text("");
    $.ajax({
        url: './php/dbSelectPreguntaEditar.php',
        data: {idPregunta: id},
        success: function (data) {
            console.log(data);
            $.each(data, function (index, value) {
                var preguntaEditar = "<div>" +
                    "Tema:<input class='form-control' type='text' value='" + value.nombre+ "'>" +
                    "Enunciado:<input class='form-control' type='text' value='" + value.enunciado + "'>" +
                    "Respuesta1:<input class='form-control' type='text' value='" + value.respuesta1 + "'>" +
                    "Respuesta2:<input class='form-control' type='text' value='" + value.respuesta2 + "'>" +
                    "Respuesta3:<input class='form-control' type='text' value='" + value.respuesta3 + "'>" +
                    "Respuesta4:<input class='form-control' type='text' value='" + value.respuesta4 + "'>" +
                    "Respuesta correcta<input class='form-control' type='text' value='" + value.respCorrecta + "'>"
                    + "</div>";
                $('#preguntaEditar').append(preguntaEditar);
            })
        },
        error: function (request, errorType, errorMessage) {
            alert('Error' + errorType + 'Mensaje: ' + errorMessage);
        }
    })
};

// Select preguntas Admin
var getPreguntasAdmin = function () {
    $('#preguntaAdmin').text("");

    $.ajax({
        url: './php/dbSelectPreguntaAdmin.php',
        success: function (data) {
            $.each(data, function (index, value) {
                var preguntaAdmin =
                    "<tr>" +
                    "<td class='text-capitalize align-middle'>" + value.nombre + "</td>" +
                    "<td class='text-capitalize align-middle'>" + value.enunciado + "</td>" +
                    "<td class='text-center align-middle'><button id='edit' class='btn btn-warning' value='" + value.id + "'><i class=\"fas fa-pencil-alt\"></i></button></td>" +
                    "<td id='eliminar' class='text-center align-middle'><button id='eliminar' class='btn btn-danger' value='" + value.id + "'><i class=\"fas fa-trash-alt\"></i></button></td>" +
                    "</tr>";
                $('#preguntaAdmin').append(preguntaAdmin);
            })
        },
        error: function (request, errorType, errorMessage) {
            alert('Error' + errorType + 'Mensaje: ' + errorMessage);
        }
    })
};

// Select preguntas
var getPreguntas = function () {
    $('#pregunta').text("");
    var idTema = $('#tema').val();

    var random = 0;
    if (idTema === "1") {
        random = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    } else if (idTema === "2") {
        random = Math.floor(Math.random() * (20 - 11 + 1) + 11);
    }
    $.ajax({
        url: './php/dbSelectPregunta.php',
        data: {idTema: idTema, idPregunta: random},
        success: function (data) {
            var pregunta = "<div>" +
                "<h3 id='alertEnunciado'>" + data[0].enunciado + "</h3>" +
                "<p id='alertA'><input id='respA' type='radio' name='resp' value='A'>" + data[0].respuesta1 + "</p>" +
                "<p id='alertB'><input id='respB' type='radio' name='resp' value='B'>" + data[0].respuesta2 + "</p>" +
                "<p id='alertC'><input id='respC' type='radio' name='resp' value='C'>" + data[0].respuesta3 + "</p>" +
                "<p id='alertD'><input id='respD' type='radio' name='resp' value='D'>" + data[0].respuesta4 + "</p>" +
                "<input id='respCorrecta' type='hidden' value='" + data[0].respCorrecta + "'/>" +
                "</div>";
            $('#pregunta').append(pregunta);
        },
        error: function (request, errorType, errorMessage) {
            alert('Error' + errorType + 'Mensaje: ' + errorMessage);
        }
    });
};

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
                console.log(data);
                if (data.length > 0) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].rol === 'Administrador') {
                            $(location).attr('href', 'homeAdmin.php');
                        } else {
                            $(location).attr('href', 'homeUser.php');
                        }
                    }
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

