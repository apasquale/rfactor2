module app.userList {
	interface ISessionListModel {
		title: string;
		sessions: app.domain.ISession[];
	}
	
	class SessionListCtrl implements ISessionListModel {
		title: string;
		sessions: any[];
		
		static $inject = ["dataAccessService"];
		constructor( private dataAccessService: app.common.DataAccessService) {
			this.title = "Session List"
			this.sessions = [];
			
			var sessionResource = dataAccessService.getSessionListResource();
			sessionResource.query((data: app.domain.ISession[]) => {
				this.sessions = data;
			});
		}	
	}
	
	angular
		.module("lapTimeManagement")
		.controller("SessionListCtrl", SessionListCtrl);
}