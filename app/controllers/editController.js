app.controller("EditController", 
	[
		"$scope", 
		"$location", 
		"$routeParams", 
		"ListFactory", 
		"EditFactory", 
		
		function($scope, $location, $routeParams, ListFactory, EditFactory) {
		
			var songIndex = $routeParams.index;
			
			EditFactory.getArtists().then(getArtistsSuccess, getArtistsFailed);
		    function getArtistsSuccess(data) {
		        if (data.data.d.results.length > 0) {
		            $scope.artists = data.data.d.results;
		        }
		        ListFactory.getSongs().then(getSongsSuccess, getSongsFailed);
		    }
		    function getArtistsFailed(error) {
		        console.log("empty artists from server -- addController");
		    }	
			
			function getSongsSuccess(data){
			 	
				var currentSongObj = data.data.d.results.filter(function( obj ) {
					return obj.ID == songIndex;
				});
				
				$scope.listItems = data.data.d.results;
				
				$scope.song = currentSongObj[0].Title;
				$scope.songId = currentSongObj[0].Id;
				
				$scope.selectedArtist = {
				    Id:currentSongObj[0].Artist.Id
				};
				
			}
			
			function getSongsFailed(error){
				debugger;
			}
			
			$scope.eCancel = function(){
				$location.path("/Items");
			}
			
			$scope.eSubmit = function(){
				var flag = 0;
				if($scope.song == "" || $scope.song == null || $scope.song == undefined){
					toastr.error("Please select Song..");
					flag = 1;
				}
				if($scope.selectedArtist == null && $scope.selectedArtist == undefined){
					toastr.error("Please select Artist..");
					flag = 1;
				}
				
				if(flag == 1){ return false; } else{ }
				
				var payloadObj = {};
				payloadObj.song = $scope.song;
				payloadObj.artist = $scope.selectedArtist.Id;
				payloadObj.songId = $scope.songId;
				
				EditFactory.editSong(payloadObj).then(function(data) {
					toastr.success("Song Updated..");
		        	$location.path("/Items");
			    },function(error) {
			        console.log(error);
			    });

			}

			
		}
	]
);
