// Validar campo 'nombre'
var validarNombre = function () {
    var nombre = $('#nombreReg').val();
    var longitudNombre = nombre.length;
    var nombreError = $('#nombreError');

    // Verificar que el campo no este vacío
    if (nombre === "") {
        nombreError.html('Debes ingresar un nombre').slideDown(500)
            .css("color", "red");
        return false;
    }

    // Verificar que la longitud del nombre sea por lo menos de 6 carácteres
    if (longitudNombre < 6) {
        nombreError.html("Mínimo 6 letras").slideDown(500);
        nombreError.show();
    }
};

// Validar campo 'contraseña'
var validarPassword = function () {
    var password = $('#passwordReg').val();
    var longitudPassword = password.length;
    var passwordError = $('#passwordError');
    var pattern = /^(?=.*\d)(?=.*[a-z])([a-z\d]+)$/i;

    // Verificar que el campo no este vacío
    if (password === "") {
        passwordError.html('Debes ingresar una contraseña').slideDown(500)
            .css("color", "red");
        return false;
    }

    // Verificar que la longitud de la contraseña sea por lo menos de 6 carácteres
    if (longitudPassword < 6) {
        passwordError.html("Mínimo 6 letras").slideDown(500);
        passwordError.show();
        return false;
    }

    // Verificar que la contraseña contenga por lo menos 1 letra y 1 digito
    if (pattern.test(password) === false) {
        passwordError.html("La contraseña debe contener por lo menos 1 letra y 1 dígito");
        passwordError.show();
        return false;
    }
};

// Validar campo 'email'
var validarEmail = function () {
    var email = $('#emailReg').val();
    var emailError = $('#emailError');
    var patternEmail = /^[a-z]{2,}@{1}[a-z]{2,}\.[a-z]{2,}$/i;

    // Verificar que el campo no este vacío
    if (email === "") {
        emailError.html('Debes ingresar un email').slideDown(500)
            .css("color", "red");
        return false;
    }

    // Verificar que el email contenga por lo menos 2 letras, 1@, 2 letras, 1 punto y 2 letras
    if (patternEmail.test(email) === false) {
        emailError.html("El email debe contener: 2+ letras, 1 @, 2+ letras, 1 punto y 2+ letras");
        emailError.show();
        return false;
    }
};

// Validar campo 'fecha de nacimiento'
var validarNacimiento = function () {
    var nacimiento = $('#nacimientoReg').val();
    var nacimientoError = $('#nacimientoError');

    // Verificar que el campo no este vacío
    if (nacimiento === "") {
        nacimientoError.html('Debes introducir una fecha de nacimiento').slideDown(500)
            .css("color", "red");
        return false;
    }

    // Calcular la edad
    nacimiento = new Date(nacimiento);
    var edadDifMs = Date.now() - nacimiento.getTime();
    var edadDate = new Date(edadDifMs);
    var edad = Math.abs(edadDate.getFullYear() - 1970);

    // Verificar que tenga más de 16 años
    if (edad < 16) {
        nacimientoError.html('Debes tener más de 16 años para poder jugar').slideDown(500)
            .css("color", "red");
        return false;
    }

};

// Validar campo 'pais'
var validarPais = function () {
    var pais = $('#paisReg').val();
    var paisError = $('#paisError');
    var longitudPais = pais.length;

    // Verificar que el selector haya seleccionado algún país
    if (longitudPais !== 3) {
        paisError.html('Debes seleccionar un país').slideDown(500)
            .css("color", "red");
        return false;
    }
};
