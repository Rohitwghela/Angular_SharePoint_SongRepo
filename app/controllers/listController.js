app.controller("ListController", ["$scope", "$location", "ListFactory", function($scope, $location, ListFactory) {

    ListFactory.getSongs().then(getSongsSuccess, getSongsFailed);
    function getSongsSuccess(data) {
        if (data.data.d.results.length > 0) {
            $scope.listItems = data.data.d.results;
        } else {
            // empty response from server
        }
    }

    function getSongsFailed(error) {
        debugger;
    }
    
    $scope.redirectToEditRoute = function(item){
    	$location.path("/Edit/" + item.Id);
    }
    
    $scope.deleteSong = function(item){
    	ListFactory.deleteItem(item.Id).then(deleteItemSuccess, deleteItemFailed);
    }
    
    function deleteItemSuccess(data){ 
    	$location.path("/Items");
    	ListFactory.getSongs().then(getSongsSuccess, getSongsFailed);
    }
    
    function deleteItemFailed(error){ debugger; }

	$scope.playSong = function(obj){
		gapi.client.setApiKey(mygAPIKey);
	    gapi.client.load("youtube", "v3", function() {
	        // Youtube api is ready
	        var request = gapi.client.youtube.search.list({
	            part: "snippet",
	            type: "video",
	            q: encodeURIComponent(obj.item.Title + " - " + obj.item.Artist.Title).replace(/%20/g, "+"),
	            maxResults: 1,
	            order: "viewCount",
	        });
	
	        request.execute(function(response) {
		        $scope.videoId = response.result.items[0].id.videoId;
		        //$scope.videoUrl = "//www.youtube.com/embed/" + response.result.items[0].id.videoId + "&autoplay=1";
		        //$scope.videoUrl = "//www.youtube.com/embed/" + response.result.items[0].id.videoId;
	        });
	    });
	    //$scope.anotherGoodOne = 'https://www.youtube.com/watch?v=lHje9w7Ev4U&index=1&list=PLtWj5FIgVx2MRSLE6RVnV7rf3Lz-TuRYZ';
	}
    

}]);
