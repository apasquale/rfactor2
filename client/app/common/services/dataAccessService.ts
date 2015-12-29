namespace app.common {
	interface IDataAccessService {
		getLapTimeResource(): ng.resource.IResourceClass<ILapTimeResource>;
	}
	
	interface ILapTimeResource 
		extends ng.resource.IResource<app.domain.ILapTime> {
		
	}
	
	export interface ISessionResource 
		extends ng.resource.IResource<app.domain.ISession> {
		
	}
	
	export class DataAccessService 
		implements IDataAccessService {
			
		/*@ngInject*/
		constructor(private $resource: ng.resource.IResourceService) {			
		}
		
		getLapTimeResource(): ng.resource.IResourceClass<ILapTimeResource> {
			return this.$resource("https://t1nj5fds0c.execute-api.ap-northeast-1.amazonaws.com/develop/laptimes/:sessionId");
		}
		
		getSessionListResource(): ng.resource.IResourceClass<ISessionResource> {
			return this.$resource("https://t1nj5fds0c.execute-api.ap-northeast-1.amazonaws.com/develop/session/:sessionId");
		}
        
        getUserSessionListResource(): ng.resource.IResourceClass<ISessionResource> {
			return this.$resource("https://t1nj5fds0c.execute-api.ap-northeast-1.amazonaws.com/develop/session/:sessionId/user/:userId");
		}        
	}
	
	angular
		.module("common.services")
		.service("dataAccessService", 
			DataAccessService);
}