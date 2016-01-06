module app.common {

    var mockResource = angular
        .module("sessionResourceMock",
            ["ngMock"]);

    mockResource.run(mockRun);
    
    mockRun.$inject = ["$httpBackend"];
    function mockRun($httpBackend: ng.IHttpBackendService) : void {
        var sessions: app.domain.ISession[] = [];
        var session: app.domain.ISession;

        
        session = new app.domain.Session(1, "Big Red Car", "Long Track", 1, []);
        sessions.push(session);

        session = new app.domain.Session(1, "Big Red Car", "Long Track", 2, []);
        sessions.push(session);
        
        session = new app.domain.Session(2, "Batmobile", "Short Track", 1, []);
        sessions.push(session);       
        

        var sessionUrl = "https://t1nj5fds0c.execute-api.ap-northeast-1.amazonaws.com/develop/session";

        $httpBackend.whenGET(sessionUrl).respond(sessions);

        var editingRegex = new RegExp(sessionUrl + "/\w*", '');
        $httpBackend.whenGET(editingRegex).respond(function(method, url, data) {
            var user = { "session": "" };
            var parameters = url.split('/');
            var length = parameters.length;
            var sessionId = parameters[length - 1];
            return [200, session, {}];
        });

        // Catch all for testing purposes
        $httpBackend.whenGET(/api/).respond(function(method, url, data) {
            return [200, session, {}];
        });
                
        // Pass through any requests for application files
        $httpBackend.whenGET(/app/).passThrough();
    }
    
    angular
        .module("sessionResourceMock",
            ["ngMock"]);
}