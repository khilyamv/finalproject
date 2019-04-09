var info = document.getElementById("info");
var hasil = document.getElementById("hasil");
keyword = localStorage.getItem("keyword");

info.innerHTML = keyword
$('#error').hide();
cariJudul(); cariAuthor();

function cariJudul() {
    getData = data.filter(key => key.title.includes(keyword));
    tampil();
}

function cariAuthor() {
    getData = data.filter(key => key.author.includes(keyword));
    tampil();
}

function tampil(){
    if (getData.length>0) {
        for (var i=0; i<getData.length; i++) {
            hasil.innerHTML +=
                '<div class="four wide column">'
                    + '<a class="ui card" onclick="buka(' + i + ')">'
                        + '<div class="image">'
                            + '<img src="' + getData[i].cover + '">'
                        + '</div>'
                        + '<div class="content">'
                            + '<span class="header">' + getData[i].title + '</span>'
                            + '<i class="user icon"></i>' + getData[i].author
                        + '</div>'
                        + '<div class="extra content">'
                            + '<i class="bookmark icon"></i>' + getData[i].lenders + ' Lenders'
                        + '</div>'
                    + '</a>'
                + '</div>';
        }
    } else {
        $('#error').show();
    }
}

//SEARCH BOX
var cari = document.querySelector(".cari");
cari.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        localStorage.setItem("keyword", cari.value);
        window.open("result.html");

    }
});