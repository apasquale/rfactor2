namespace app {
	var main = angular.module("lapTimeManagement",
		["ngRoute","common.services","lodash"]);
					 
	main.config(routeConfig);
    
    // // allow DI for use in controllers, unit tests
    // main.constant('_', window._)
    // // use in views, ng-repeat="x in _.range(3)"
    // main.run(function ($rootScope) {
    //     $rootScope._ = window._;
    // });
	
	routeConfig.$inject = ["$routeProvider"];
	function routeConfig($routeProvider: ng.route.IRouteProvider): void {
		
		 $routeProvider
		 	.when("/lapTimeList/:sessionId",
			 {
				 templateUrl: "/app/lapTimes/lapTimeListView.html",
				 controller: "LapTimeListCtrl as vm"
			 })
             .when("/sessions/:sessionId",
			 {
				 templateUrl: "/app/sessions/sessionDetailView.html",
				 controller: "SessionDetailCtrl as vm"
			 })
             .when("/sessions/:sessionId/user/:userId",
			 {
				 templateUrl: "/app/sessions/sessionUserView.html",
				 controller: "SessionUserCtrl as vm"
			 })
			 .when("/sessions",
			 {
				 templateUrl: "/app/sessions/sessionListView.html",
				 controller: "SessionListCtrl as vm"
			 })
			 .otherwise("/sessions");
	}					 
}