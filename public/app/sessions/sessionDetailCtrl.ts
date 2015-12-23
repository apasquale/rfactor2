module app.userList {
	interface ISessionDetailModel {
		title: string;
		session: app.domain.ISession;
	}
	
	interface ISessionParams extends ng.route.IRouteParamsService{
		sessionId: number;
	}
	
	class SessionDetailCtrl implements ISessionDetailModel {
		title: string;
		session: app.domain.ISession;
		static $inject = ["$routeParams","dataAccessService"];
		constructor(
				private $routeParams: ISessionParams, 
				private dataAccessService: app.common.DataAccessService) {
			
			this.title = "Lap Time List"
			
			var sessionId = $routeParams.sessionId;
			
			var sessionResource = dataAccessService.getSessionListResource();
			sessionResource.get({sessionId: sessionId},
				(data: app.domain.ISession) => {
                _.min(data.laptimes, 'lap_time').fastest = true;  
				this.session = data;
			});
		}	
	}
	
	angular
		.module("lapTimeManagement")
		.controller("SessionDetailCtrl", SessionDetailCtrl);
}