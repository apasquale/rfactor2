module app.userList {
	interface ISessionDetailModel {
		title: string;
		session: app.domain.ISession;
	}
	
	interface IUserSessionParams extends ng.route.IRouteParamsService{
		sessionId: number;
        userId: number;
	}
	
	class SessionUserCtrl implements ISessionDetailModel {
		title: string;
		session: app.domain.ISession;
		static $inject = ["$routeParams","dataAccessService","_"];
		constructor(
				private $routeParams: IUserSessionParams, 
				private dataAccessService: app.common.DataAccessService,
                private _) {
			
			this.title = "Lap Time List"
			
			var sessionId = $routeParams.sessionId;
            
            var userId = $routeParams.userId;
			
			var userSessionResource = dataAccessService.getUserSessionListResource();
			userSessionResource.get({sessionId: sessionId, userId: userId},
				(data: app.domain.ISession) => {
                _.max(data.laptimes, 'lap_time').fastest = true;  
				this.session = data;
                if(!this.session.Id) {
                    this.session.Id = sessionId;
                }
			});
		}	
	}
	
	angular
		.module("lapTimeManagement")
		.controller("SessionUserCtrl", SessionUserCtrl);
}