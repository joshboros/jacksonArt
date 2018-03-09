window.addEventListener("hashchange", hashEvent, false);
function hashEvent(event) {
    console.log('hashchange');
    $('.pages').hide();

    hashsplit = location.hash.split('-');
    switch (hashsplit[0]){
        case "#home":
            home = document.getElementById('home-0');
            $('home').show();
            $("#myCarousel").show().fadeIn("3000");
            $('#myCarousel').fadeIn();

            break;
        case "#floor":
            if (!document.getElementById('floor-' + hashsplit[1])){
                main = document.getElementsByTagName('main');
                var floorel = document.createElement('div');
                floorel.id = 'floor-' + hashsplit[1];
                floorel.className = 'pages';
                main[0].appendChild(floorel);
                $('floor' + hashsplit[1]).show();
                populate(hashsplit[1]);
            } else {
                $('floor' + hashsplit[1]).show();
            }
            break;
        case "#viewer":

            break;
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
    var floordiv = document.getElementById('floor-' + floor);

    var galleryContainer = document.createElement('div');
    galleryContainer.className = 'galleryContainer';
    galleryContainer.style = "font-family: 'EB Garamond', serif;";


    var previewsHere = document.createElement('div');
    previewsHere.id = 'previewsHere' + floor;
    previewsHere.className = 'previewsHere row img-fluid';

    floordiv.appendChild(galleryContainer);
    galleryContainer.appendChild(previewsHere);

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

        $("#previewsHere" + floor).append($('<div class="col-sm-4"><div class="thumbnail"><a class="image-popup-link" href="' + imgpath + '" title="' + about + '"-><picture><img src="' + imgpath + '" style="width:100%; padding:.25rem;"></a></picture><div class="thumbnail"><p>' + thumbnailTag + '</p></div></a></div></div>').hide().fadeIn("3000"));
    }
}

function generatePage(){
    var fragment = document.createDocumentFragment();
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
        closeOnContentClick: true,
        image: {
            verticalFit: false
        }
    });


});