var socket = io();

jQuery('document').ready(function () {
    let selectDiv = jQuery('#form-field__rooms');
    let select = jQuery('#form-field__select');
    socket.emit('getRooms', function (rooms) {
        if (rooms.length === 0) {
            selectDiv.hide();
        } else {
            rooms.forEach(function (room) {
                select.append(jQuery('<option></option>').val(room).html(room.charAt(0).toUpperCase() + room.slice(1)));
            });
        }
    });
    select.on('change', function () {
        jQuery('input[name=room]').val(this.value);
    });
});