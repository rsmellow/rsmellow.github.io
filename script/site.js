$(() =>{
    $('#message-box').on('show.bs.modal', (e) => {
        $('#messagebody').empty();

        const h4 = $('<h4>');
        h4.text(`Hi ${$('#name').val()}!`);
        const h5 = $('<h5>');
        h5.text(`The following message has been processed:`);
        const p = $('<p>');
        p.text($('#message').val());
        $('#messagebody').append(h4).append(h5).append(p);
    });
});

$('#send-message').on('click',(e) => {
    e.preventDefault();
    $('#message-box').modal();
    $('form').find('input, textarea').val('');
});