
function loadJsonDB(floor) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            populate(JSON.parse(xhttp.responseText));
        }
    };
    xhttp.open("GET", floor + ".json", true);
    xhttp.send();
}
function populate(artworks){
    let out = "";
    //We may want to populate the image boxes and images here too.
    
    for (let i = 0; i < artworks.length; i++){
        out +="<br>";
        out += "<em>" + artworks[i].name + "</em><br>" + artworks[i].subName + " by " + artworks[i].artist.firstName + " " + artworks[i].artist.middleName + " " + artworks[i].artist.lastName + "<br>";
    }
    document.getElementById("demo").innerHTML = out;
}
$(document).click(function(e) {
    if (!$(e.target).is('a.dropdown-toggle')) {
        $('.collapse').collapse('hide');        
    }
});
