window.onhashchange = hashEvent;
function hashEvent() {
    $('.floor').hide();
    hashsplit = location.hash.split('-');
    switch (hashsplit[0]){
        case "#floor":
            populate(hashsplit[1]);
            break;
        case "viewer":

            break
        default:
    }
}


function viewer(artid){
    $('#viewImage').modal();
    $('#viewImage').on('shown.bs.modal', function(){
        $('#viewImage .modal-body').html(html);
        //new code
        $('a.controls').trigger('click');
    })
    $('#myModal').on('hidden.bs.modal', function(){
        $('#myModal .modal-body').html('');
    });

}

function populate(floor){
    $("#myCarousel").hide();
    $("#previewsHere").empty();

    //We may want to populate the image boxes and images here too.
    //Populate by floor.
        var newDiv = document.createElement("div");
        newDiv.id = "floor-" + floor;
        newDiv.className = "floor";
    var artworksonfloor = artworks.filter(artwork => artwork.floor == floor);
    for (let art of artworksonfloor){
        var thumbnailTag =
        "<em>" + art.title + "</em><br>" + art.subTitle + " by " + art.artist.firstName + " " + art.artist.middleName + " " + art.artist.lastName + "<br>";
        let imgpath = 'images/' + art.filename;
        let about = art.title + art.subTitle;
        $("#previewsHere").append($('<div class="col-sm-4"><div class="thumbnail"><a class="image-popup-link" href="' + imgpath + '" title="' + about + '"-><picture><img src="' + imgpath + '" style="width:100%; padding:.25rem;"></a></picture><div class="thumbnail"><p>' + thumbnailTag + '</p></div></a></div></div>').hide().fadeIn("3000"));
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

$(document).ready(function() {
    $('.image-popup-link').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            // other options
            opener: function(openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
});

