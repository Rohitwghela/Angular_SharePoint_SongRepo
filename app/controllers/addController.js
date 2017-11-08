app.controller("AddController", ["$scope", "$http", "$location", "AddFactory", function($scope, $http, $location, AddFactory) {
		
    AddFactory.getArtists().then(getArtistsSuccess, getArtistsFailed);

    function getArtistsSuccess(data) {
        if (data.data.d.results.length > 0) {
            $scope.artists = data.data.d.results;
        }
    }

    function getArtistsFailed(error) {
        console.log("empty artists from server -- addController");
    }

	$scope.eSubmit = function(){
		var flag = 0;
		if($scope.song == "" || $scope.song == null || $scope.song == undefined){
			toastr.error("Please select Song..");
			flag = 1;
		}
		if($scope.artist == null && $scope.artist == undefined){
			toastr.error("Please select Artist..");
			flag = 1;
		}
		
		if(flag == 1){
			return false;
		}else{
			
		}
		
		var payloadObj = {};
		payloadObj.song = $scope.song;
		payloadObj.artist= $scope.artist.Id;
		
		AddFactory.addItem(payloadObj).then(function(data) {
			toastr.success("Song Added..");
        	$scope.song = "";
        	$scope.artist = "";
        	$location.path("/Items");
	    },function(error) {
	        console.log(error);
	    });
	}
	
	$scope.eCancel = function(){
		$location.path("/Items");
	}

}]);
