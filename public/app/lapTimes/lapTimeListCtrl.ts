module app.userList {
	interface ILapTimeListModel {
		title: string;
		lapTimes: app.domain.ILapTime[];
	}
	
	interface ISessionParams extends ng.route.IRouteParamsService{
		sessionId: number;
	}
	
	class LapTimeListCtrl implements ILapTimeListModel {
		title: string;
		lapTimes: any[];
		static $inject = ["$routeParams","dataAccessService"];
		constructor(
				private $routeParams: ISessionParams, 
				private dataAccessService: app.common.DataAccessService) {
			
			this.title = "Lap Time List"
			this.lapTimes = [];
			
			var sessionId = $routeParams.sessionId;
			
			var lapTimeResource = dataAccessService.getLapTimeResource();
			lapTimeResource.query({sessionId: sessionId},
				(data: app.domain.ILapTime[]) => {
				this.lapTimes = data;
			});
		}	
	}
	
	angular
		.module("lapTimeManagement")
		.controller("LapTimeListCtrl", LapTimeListCtrl);
}