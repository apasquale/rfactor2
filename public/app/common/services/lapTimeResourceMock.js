var app;
(function (app) {
    var common;
    (function (common) {
        var mockResource = angular
            .module("lapTimeResourceMock", ["ngMockE2E"]);
        mockResource.run(mockRun);
        mockRun.$inject = ["$httpBackend"];
        function mockRun($httpBackend) {
            var lapTimes = [];
            var lapTime;
            // lapTime = new app.domain.LapTime("ap", "Anthony", "Pasquale");
            // lapTimes.push(lapTime);
            // lapTime = new app.domain.LapTime("test1", "Test", "User 1");
            // lapTimes.push(lapTime);
            // lapTime = new app.domain.LapTime("test2", "Test", "User 2");
            // lapTimes.push(lapTime);       
            var lapTimeUrl = "/api/users";
            $httpBackend.whenGET(lapTimeUrl).respond(lapTimes);
            var editingRegex = new RegExp(lapTimeUrl + "/\w*", '');
            $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
                var user = { "userName": "" };
                var parameters = url.split('/');
                var length = parameters.length;
                var userName = parameters[length - 1];
                return [200, user, {}];
            });
            // Catch all for testing purposes
            $httpBackend.whenGET(/api/).respond(function (method, url, data) {
                return [200, lapTimes, {}];
            });
            // Pass through any requests for application files
            $httpBackend.whenGET(/app/).passThrough();
        }
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
