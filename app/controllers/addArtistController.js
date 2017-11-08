app.controller("AddArtistController", ["$scope", "$http", "$location", "AddArtistFactory", function($scope, $http, $location, AddArtistFactory) {
		
    $scope.eSubmit = function(){
    	var flag = 0;
    	if($scope.artist == null && $scope.artist == undefined){
			toastr.error("Please select Artist..");
			flag = 1;
		}
		
		if(flag == 1){
			return false;
		}else{
			
		}
		
		var payloadObj = {};
		payloadObj.artist= $scope.artist;
		
		AddArtistFactory.addItem(payloadObj).then(function(data) {
			toastr.success("Artist Added..");
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
