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
        .otherwise({
            redirectTo: "/Items"
        });
}]);
