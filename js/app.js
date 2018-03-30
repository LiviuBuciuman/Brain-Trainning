$(function () {

    $('.alert').hide();

    var nombreReg = $('#nombreReg');
    var passwordReg = $('#passwordReg');
    var emailReg = $('#emailReg');
    var nacimientoReg = $('#nacimientoReg');
    var paisReg = $('#paisReg');
    var ciudadReg = $('#poblacionReg');

    var nombreError = $('#nombreError');
    var passwordError = $('#passwordError');
    var emailError = $('#emailError');
    var nacimientoError = $('#nacimientoError');
    var paisError = $('#paisError');
    var ciudadError = $('#ciudadError');

    nombreReg.focusout(function () {
        validarNombre();
    });

    passwordReg.focusout(function () {
        validarPassword();
    });

    emailReg.focusout(function () {
        validarEmail();
    });

    nacimientoReg.focusout(function () {
        validarNacimiento();
    });

    paisReg.focusout(function () {
        validarPais();
    });


    nombreReg.focusin(function () {
        nombreError.html("");
        nombreError.hide();
    });

    passwordReg.focusin(function () {
        passwordError.html("");
        passwordError.hide();
    });

    emailReg.focusin(function () {
        emailError.html("");
        emailError.hide();
    });

    nacimientoReg.focusin(function () {
        nacimientoError.html("");
        nacimientoError.hide();
    });

    paisReg.focusin(function () {
        paisError.html("");
        paisError.hide();
    });


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
                validaciones();
                insertUsuario();
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

    paisReg.change(function () {
        var codePais = $('#paisReg').val();
        ciudades(codePais);
    });
});
