app.factory("ListFactory", ["RestFactory", function(RestFactory) {

    function getSongs() {
        var factParams = {};
        factParams.listName = "Songs";
        factParams.filter = "?$select=Id,Title,Artist/Title,Artist/Id&$expand=Artist";
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

	function deleteItem(itemId){
		var factParams = {};
        factParams.listName = "Songs";
        factParams.songId = itemId;
        factParams.subSite = "";
        
		return RestFactory._deleteItem(factParams);
    }
	
    return {
        getSongs : getSongs,
        getListItemById : getListItemById,
        deleteItem : deleteItem
    };
}]);

