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
    });

});