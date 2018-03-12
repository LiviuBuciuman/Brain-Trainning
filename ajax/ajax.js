$(function () {
    $.ajax({
        url: '',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',

        success: function (response) {

        },

        data: {
            username: "",
            pass: "",
            rol: "",
            email: "",
            fechaNacimiento: "",
            pais: "",
            ciudad: ""
        },

        error: function (request, errorType, errorMessage) {
            alert('Error' + errorType + 'Mensaje: ' + errorMessage);
        }
    });
});

