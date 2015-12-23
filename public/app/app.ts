namespace app {
	var main = angular.module("lapTimeManagement",
		["ngRoute","common.services"]);
					 
	main.config(routeConfig);
    
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