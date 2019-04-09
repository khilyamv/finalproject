//MODAL >> DETAIL BUKU
for (i=0; i<data.length; i++) {
    modalId = 'modal' + i;
    modals.innerHTML += 
        '<div class="ui small modal ' + modalId +'">'
            + '<div class="header">' + data[i].title + '</div>'
            + '<div class="content">'
                + '<img class="ui small left floated image" src="' + data[i].cover + '">'
                + '<div class="ui left pointing teal label">'
                    + '<i class="user icon"></i>' + data[i].author
                + '</div>'
                + '<br><br>'
                + '<p>' + data[i].summary + '</p>'
            + '</div>'
            + '<div class="actions">'
                + '<div class="ui cancel basic red button">Close</div>'
                + '<div class="ui left labeled button">'
                    + '<span class="ui basic teal right pointing label">' + data[i].lenders + '</span>'
                    + '<div class="ui teal button"><i class="bookmark icon"></i> Lend</div>'
                + '</div>'
            + '</div>'
        + '</div>'
    ;
}

//FUNGSI BUKA MODAL
function buka(i) {
    var elemen = '.ui.modal' + i;
    $(elemen)
        .modal({
            blurring: true
        })
            .modal('show')
        ;
}