var explore = document.getElementById("exploremore");
var modals = document.getElementById("modals");

//LIST SEMUA BUKU
for(var i=0; i<data.length; i++) {
    var imgId = 'img' + i;
    var judulId = 'judul' + i;
    img = document.createElement("img");
    img.src = data[i].cover;
    explore.innerHTML += 
        '<div class="three wide column">'
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