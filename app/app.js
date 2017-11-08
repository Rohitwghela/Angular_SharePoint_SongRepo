var app = angular.module("MainContainer", ["ngRoute", "youtube-embed"]);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/Items", {
            templateUrl: "../SiteAssets/AngularProject/views/viewList.html",
            controller: "ListController"
        })
        .when("/Add", {
            templateUrl: "../SiteAssets/AngularProject/views/viewAdd.html",
            controller: "AddController"
        })
        .when("/Edit/:index", {
        	templateUrl: "../SiteAssets/AngularProject/views/viewEdit.html",
        	controller: "EditController"
        })
        .when("/AddArtist", {
        	templateUrl: "../SiteAssets/AngularProject/views/viewAddArtist.html",
            controller: "AddArtistController"
        })
        .otherwise({
            redirectTo: "/Items"
        });
}]);



