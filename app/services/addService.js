app.factory("AddFactory", ["RestFactory", function(RestFactory) {

    function getArtists() {
        var factParams = {};
        factParams.listName = "Artist";
        factParams.filter = "";
        factParams.subSite = "";
        return RestFactory._getItems(factParams);
    }

    function addItem(payloadObj) {

        var factParams = {};
        factParams.listName = "Songs";
        factParams.filter = "";
        factParams.subSite = "";
        factParams.payload = {
            __metadata: {
                "type": "SP.Data.SongsListItem"
            },
            Title: payloadObj.song,
            ArtistId: payloadObj.artist
        }
        return RestFactory._postItem(factParams);
    }

    return {
        getArtists : getArtists,
        addItem : addItem
    };
}]);
