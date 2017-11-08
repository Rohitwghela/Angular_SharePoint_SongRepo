app.factory("AddArtistFactory", ["RestFactory", function(RestFactory) {

    function addItem(payloadObj) {

        var factParams = {};
        factParams.listName = "Artist";
        factParams.filter = "";
        factParams.subSite = "";
        factParams.payload = {
            __metadata: {
                "type": "SP.Data.ArtistListItem"
            },
            Title: payloadObj.artist,
        }
        return RestFactory._postItem(factParams);
    }

    return {
        addItem : addItem
    };
    
}]);
