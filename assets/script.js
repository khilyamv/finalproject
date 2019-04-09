var discover = document.getElementById("discover");
var testimoni = document.getElementById("testimoni");
var image = discover.getElementsByClassName("image");

//DAFTAR BUKU
for(var i=0; i<5; i++) {
    var imgId = 'img' + i;
    var judulId = 'judul' + i;
    var modal = 'modal' + i;
    img = document.createElement("img");
    img.src = data[i].cover;
    discover.innerHTML += 
        '<div class="column">'
            + '<a class="ui card" onclick="buka(' + i + ')">'
                + '<div ' + 'id="' + imgId + '" class="image"></div>'
                + '<div class="content">'
                    + '<span id="' + judulId + '" class="header"></span>'
                    + '<i class="user icon"></i>' + data[i].author
                + '</div>'
                + '<div class="extra content">'
                    + '<i class="bookmark icon"></i>' + data[i].lenders + ' Lenders'
                + '</div>'
            + '</a>'
        + '</div>';
    document.getElementById(imgId).appendChild(img);
    judul = document.getElementById(judulId);
    judul.textContent = data[i].title;
}

//DAFTAR REVIEW
for (i=0; i<4; i++) {
    var avaId = 'ava' + i;
    userAva = document.createElement("img");
    userAva.src = review[i].ava;
    testimoni.innerHTML +=
        '<div class="column"><p class="testimoni-caption">'
        + review[i].review
        + '</p><div class="testimoni-arrow"></div><div class="testimoni-foto" '
        + 'id="' + avaId
        + '"></div><div class="testimoni-author>'
        + data[i].user
        + '</div>';
    document.getElementById(avaId).appendChild(userAva);
}

//SEARCH BOX
var cari = document.querySelector(".cari");
cari.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        localStorage.setItem("keyword", cari.value);
        window.open("page/result.html");

    }
});