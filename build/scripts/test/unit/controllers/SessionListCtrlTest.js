describe("SessionListCtrlTest", function () {
    var $httpBackend;
    var $controller;
    var dataService;
    beforeEach(angular.mock.module('lapTimeManagement'));
    beforeEach(function () {
        angular.mock.inject(function (_$controller_, _$httpBackend_, dataAccessService) {
            $httpBackend = _$httpBackend_;
            $controller = _$controller_;
            dataService = dataAccessService;
        });
    });
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
    it("should initialize correctly", function () {
        expect(dataService).toBeDefined();
    });
    describe("Controller sessions", function () {
        var scope, controller;
        var sessions = [];
        var session;
        session = new app.domain.Session(1, "Big Red Car", "Long Track", 1, []);
        sessions.push(session);
        session = new app.domain.Session(1, "Big Red Car", "Long Track", 2, []);
        sessions.push(session);
        session = new app.domain.Session(2, "Batmobile", "Short Track", 1, []);
        sessions.push(session);
        beforeEach(function () {
            scope = {};
            controller = $controller("SessionListCtrl", { $scope: scope, dataAccessService: dataService });
            $httpBackend.expectGET("https://t1nj5fds0c.execute-api.ap-northeast-1.amazonaws.com/develop/session").respond(sessions);
        });
        it('sessions has been initialized', function () {
            $httpBackend.flush();
            expect(controller.sessions).toBeDefined();
        });
        it('should contain the correct number of sessions', function () {
            $httpBackend.flush();
            expect(controller.sessions.length).toBe(3);
        });
        it('should contain the correct sessions', function () {
            $httpBackend.flush();
            var actualString = JSON.stringify(controller.sessions);
            var expectedString = JSON.stringify(sessions);
            expect(actualString).toBe(expectedString);
        });
    });
});

//# sourceMappingURL=SessionListCtrlTest.js.map
