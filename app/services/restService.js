app.factory("RestFactory", ["$http", function($http) {

    function _rest(request) {

        return $http({
			
            type: request.type,
            method: request.type,
            url: request.url,
            headers: request.headers,
            data: JSON.stringify(request.body)
        });
    }

    function _getItems(factParams) {
        var request = {
            type : "GET",
            url: _spPageContextInfo.webAbsoluteUrl + "/" + factParams.subSite + "_api/web/lists/getByTitle('" + factParams.listName + "')/items" + factParams.filter,
            body: "",
            headers : {
            	'Accept': "application/json;odata=verbose"
            }
        };
        return _rest(request);
    }

    function _getMetadata(factParams) {
        var request = {
            type : "GET",
            url: _spPageContextInfo.webAbsoluteUrl + "/" + factParams.subSite + "_api/web/lists/getByTitle('" + factParams.listName + "')/ListItemEntityTypeFullName" + factParams.filter,
            body: ""
        };
        return _rest(request);
    }

    function _postItem(factParams) {
        var request = {
            type : "POST",
            url: _spPageContextInfo.webAbsoluteUrl + "/" + factParams.subSite + "_api/web/lists/getByTitle('" + factParams.listName + "')/items" + factParams.filter,
            body: factParams.payload,
            headers: {
                "Content-Type": "application/json;odata=verbose",
                'Accept': "application/json;odata=verbose",
                "X-RequestDigest": $("#__REQUESTDIGEST").val()
            }
        };
        return _rest(request);
    }
    
    function _updateItem(factParams){
    	var request = {
            type : "PATCH",
            url: _spPageContextInfo.webAbsoluteUrl + "/" + factParams.subSite + "_api/web/lists/getByTitle('" + factParams.listName + "')/items('" + factParams.songId + "')",
            body: factParams.payload,
            headers: {
                "Content-Type": "application/json;odata=verbose",
                'Accept': "application/json;odata=verbose",
                "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                "X-Http-Method": "PATCH",
                "If-Match": "*"
            }
        };
        return _rest(request);
    }
    
    function _deleteItem(factParams){
    	var request = {
            type : "DELETE",
            url: _spPageContextInfo.webAbsoluteUrl + "/" + factParams.subSite + "_api/web/lists/getByTitle('" + factParams.listName + "')/items('" + factParams.songId + "')",
            headers: {
                'Accept': "application/json;odata=verbose",
                "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                "X-Http-Method": "DELETE",
                "If-Match": "*"
            }
        };
        return _rest(request);

    }

    return {
        _getItems : _getItems,
        _postItem : _postItem,
        _updateItem : _updateItem,
        _deleteItem : _deleteItem
    };

}]);
