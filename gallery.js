
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
    $("#myCarousel").hide();
    $("#previewsHere").empty();
    //We may want to populate the image boxes and images here too.
    
    for (let i = 0; i < artworks.length; i++){
        let thumbnailTag = "<em>" + artworks[i].name + "</em><br>" + artworks[i].subName + " by " + artworks[i].artist.firstName + " " + artworks[i].artist.middleName + " " + artworks[i].artist.lastName + "<br>";
        
        
        $("#previewsHere").append($('<div class="col-sm-4 border border-dark"><div class="thumbnail"><a href="https://placeholder.com"><img src="http://via.placeholder.com/1920x1080" style="width:100%; padding:.25rem;border:1px solid; border-radius:.25rem;"></a><div class="thumbnail"><p>' + thumbnailTag + '</p></div></a></div></div>').hide().fadeIn("3000"));
    }
}
function toGallery(){
        $("#previewsHere").empty();
        $("#myCarousel").show();
    }
//This function collapses the navbar on click.
$(document).click(function(e) {
    if (!$(e.target).is('a.dropdown-toggle')) {
        $('.collapse').collapse('hide');
    }
});

