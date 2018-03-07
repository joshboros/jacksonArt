window.addEventListener("hashchange", hashEvent, false);
function hashEvent() {
    as = document.getElementsByClassName("menudest");
    location.hash === as.item();
    for (i of as){
        i.hash;
    }
}

function populate(){
    $("#myCarousel").hide();
    $("#previewsHere").empty();
    //We may want to populate the image boxes and images here too.
    as = document.getElementsByClassName("menudest");
    //Populate by floor.
    for (i of as){
        console.log(i.href);
        var newDiv = document.createElement("div");
    }
    for (let i = 0; i < artworks.length; i++){
        var thumbnailTag = 
        "<em>" + artworks[i].name + "</em><br>" + artworks[i].subName + " by " + artworks[i].artist.firstName + " " + artworks[i].artist.middleName + " " + artworks[i].artist.lastName + "<br>";
        
        $("#previewsHere").append($('<div class="col-sm-4"><div class="thumbnail"><a href="https://placeholder.com"><picture><img src="http://via.placeholder.com/1920x1080" style="width:100%; padding:.25rem;"></a></picture><div class="thumbnail"><p>' + thumbnailTag + '</p></div></a></div></div>').hide().fadeIn("3000"));
    }
}

function generatePage(){
    var fragment = document.createDocumentFragment();
}
function toGallery(){
        $("#previewsHere").empty().fadeIn("3000");
        $("#myCarousel").show().fadeIn("3000");
        $('myCarousel').fadeIn()
    }
//This function collapses the navbar on click.
$(document).click(function(e) {
    if (!$(e.target).is('a.dropdown-toggle')) {
        $('.collapse').collapse('hide');
    }
});

$( function () {
    console.log( "ready!" );
});

