    function Artists(...artist) {
        //
        var artists = new Map();
        for (let person of arguments) {
            artists.set(person.id, person);
        }
        return artists;
    }

    function Artworks(...artwork) {
        let art = new Map();
        for (let works of arguments) {
            art.set(works.id, works);
        }
        return art;
    }

    function Artist(id, firstName, middleName, lastName, authoredArtworks_id, prefix, suffix) {
        //
        this.id = id;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.prefix = prefix;
        this.suffix = suffix;
        this.ownArtworks = new Map();

        this.addArtwork = function (artworkId) {
            if (artworkId != null) {
                if (Array.isArray(artworkId)) {
                    for (art of artworkId) {
                        this.ownArtworks.set(art, artworks.get(art));
                    }
                } else {
                    this.ownArtworks.set(artworkId, artworks.get(artworkId));
                }
            }
        }
        return this;
    }


    function Artwork(id, title, subtitle, floor, artist_id, glass, description, dimensions, frame, filename, donor, year, appraiser, date, value) {
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.glass = glass;
        this.floor = floor;
        this.artist = artists.get(artist_id);
        this.description = description;
        this.donor = donor;
        this.year = year;
        this.appraiser = appraiser;
        this.date = date;
        this.value = value;
        return this;

    }

    function Dimension(w, h) {
        this.width = w;
        this.height = h;
    }

    function Frame(dimensions, description) {
        this.dimensions = dimensions;
        this.description = description;
    }


    var artists = new Artists(
        new Artist(1, "Barbara", "", "Davis"),
        new Artist(2, "Bess", "", "Coats"),
        new Artist(3, "Laura", "W.", "Vahlberg"),
        new Artist(4, "P.", "", "Mckee"),
        new Artist(5, "Sharon", "", "Yavis"),
        new Artist(6, "Warren", "", "Christopher"),
        new Artist(7, "William", "", "Jenkins")
    );


    var artworks = new Artworks(new Artwork(
        1, "Shady Ladies", "", 2, 1, "no", "Oil on Canvas",
        new Dimension(null, null),
        new Frame(new Dimension(29.5, 13.5), "Gilded with Burnt Sienna Undertones"),
        "Barbara_Davis_Shady_Ladies.jpg"
        ),
        new Artwork(
            2, "Truth Be Told", "", 2, 2, "no", "",
            new Dimension(null, null),
            new Frame(new Dimension(null, null), ""),
            "Bess_Coats_Truth_Be_Told.jpg",
            "A gift of the Coats Family"
        ),
        new Artwork(
            3, "Prayer", "", 2, 3, "yes", "Acryloc on Paper, Mounted in Glass Frame",
            new Dimension(6, 8),
            new Frame(new Dimension(13, 15), "Silver Frame"),
            "Laura_Vahlberg_Prayer.jpg"
        ),
        new Artwork(
            4, "Untitled", "", 2, 4, "no", "Oil on Canvas",
            new Dimension(48, 24),
            new Frame(new Dimension(52, 28.5), "Silver"),
            "P_McKee.jpg"
        ),
        new Artwork(
            5, "Celestial Chicken", "", 2, 5, "no", "Acrylic on Canvas",
            new Dimension(36, 24),
            new Frame(new Dimension(46, 34), "Gilded Frame"),
            "Sharon_Yavis_Celestial_Chicken.jpg"
        ),
        new Artwork(
            6, "Bloom", "", 2, 6, "no", "Acrylic on Canvas",
            new Dimension(16, 20),
            new Frame(new Dimension(20, 24), "Wood Frame, Black Paint Over Red With Gold Accents"),
            "Warren_Christopher_Bloom.jpg"
        ),
        new Artwork(
            7, "Lady Bug", "", 2, 7, "no", "Acrylic",
            new Dimension(22, 28),
            new Frame(new Dimension(23.25, 29.25), "Metallic Gold"),
            "William_Jenkins_LadyBug.jpg"
        ),
        new Artwork(
            8, "Prancing Ladies", "", 2, 7, "no", "Acrylic on Canvas",
            new Dimension(30, 24),
            new Frame(new Dimension(32, 26), "Metallic Gold"),
            "William_Jenkins_Prancing_Ladies.jpg"
        )
    );
