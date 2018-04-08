$(function () {
    var btnSiguente = $('#btnSiguente');
    var numPregunta = $('#numPregunta');
    var pregunta = $('#pregunta');
    var resultadoFinal = $('#resultadoFinal');
    var btnSalir = $('#btnSalir');
    var tema = $('#tema');
    var miForm = $('#miForm');
    var contadorPreguntas = 1;
    var contadorRespCorrecta = 0;
    var respUsuario = "";
    var respCorrecta = "";

    pregunta.hide();
    btnSiguente.hide();
    numPregunta.hide();
    resultadoFinal.hide();
    btnSalir.hide();

    tema.change(function () {
        pregunta.show();
        btnSiguente.show();
        numPregunta.show();
        resultadoFinal.hide();
        btnSalir.hide();
        contadorPreguntas = 1;
        numPregunta.html("<h1>Pregunta " + contadorPreguntas + "/10</h1>");
        getPreguntas();
    });

    miForm.on('click', 'input', function () {
        respUsuario = $('input[name=resp]:checked', '#miForm').val();
        respCorrecta = $('#respCorrecta').val();

        if (respUsuario === respCorrecta) {
            contadorRespCorrecta++;
            $('#alert' + respUsuario).css('color', 'green');
        } else {
            $('#alert' + respUsuario).css('color', 'red');
        }
    });

    btnSiguente.click(function () {
        contadorPreguntas++;
        if (contadorPreguntas <= 10) {
            numPregunta.html("<h1>Pregunta " + contadorPreguntas + "/10</h1>");
            getPreguntas();
        } else {
            resultadoFinal.show();
            btnSalir.show();
            resultadoFinal.html("<h1>Tu edad mental es " + formula(contadorRespCorrecta) + "</h1>");
            pregunta.hide();
            btnSiguente.hide();
        }
    });
});

var formula = function (contadorRespCorrecta) {
    var random = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    return (100 - (contadorRespCorrecta * 10)) + (random);
};