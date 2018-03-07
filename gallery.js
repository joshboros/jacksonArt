/*
function loadJsonDB() {
    strw = new String("");
    for(let i = 0; i < artworks.length; i++){
         strw = strw.concat(artworks[i].title + '\n');
    }
    alert(strw);
}
*/
function populate(artworks){
    $("#myCarousel").hide();
    $("#previewsHere").empty();
    //We may want to populate the image boxes and images here too.
    
    for (let i = 0; i < artworks.length; i++){
        var thumbnailTag = 
        "<em>" + artworks[i].name + "</em><br>" + artworks[i].subName + " by " + artworks[i].artist.firstName + " " + artworks[i].artist.middleName + " " + artworks[i].artist.lastName + "<br>";
        
        $("#previewsHere").append($('<div class="col-sm-4"><div class="thumbnail"><a href="https://placeholder.com"><picture><img src="http://via.placeholder.com/1920x1080" style="width:100%; padding:.25rem;"></a></picture><div class="thumbnail"><p>' + thumbnailTag + '</p></div></a></div></div>').hide().fadeIn("3000"));
    }
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

$( document ).ready(function() {
    console.log( "ready!" );
});

