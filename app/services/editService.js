app.factory("EditFactory", ["RestFactory", function(RestFactory){

	function getArtists() {
        var factParams = {};
        factParams.listName = "Artist";
        factParams.filter = "";
        factParams.subSite = "";
        return RestFactory._getItems(factParams);
    }

	function getListItemById(itemId){
		var factParams = {};
        factParams.listName = "Songs";
        factParams.filter = "?$select=Id,Title,Artist/Title,Artist/Id&$expand=Artist&$filter=Id eq " + itemId;
        factParams.subSite = "";
        return RestFactory._getItems(factParams);
	}
		
	function editSong(payloadObj){
		var factParams = {};
        factParams.listName = "Songs";
        factParams.subSite = "";
        factParams.songId = payloadObj.songId;
        factParams.payload = {
            __metadata: {
                "type": "SP.Data.SongsListItem"
            },
            Title: payloadObj.song,
            ArtistId: payloadObj.artist
        }
        return RestFactory._updateItem(factParams);
	}
	
		
	return{
		getArtists : getArtists,
		getListItemById : getListItemById,
		editSong : editSong
	};
	
}]);