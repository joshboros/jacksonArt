
function loadJsonDB(floor) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            jsonObj = JSON.parse(xhttp.responseText);
            populate(jsonObj);
        }
    };
    xhttp.open("GET", floor + ".json", true);
    xhttp.send();
}
function populate(artworks){
    var out = "";
    for (var i=0; i < artworks.length; i++){
        out += artworks[i].name + "\n";
    }
    document.getElementById("demo").innerHTML = out;
}
    
