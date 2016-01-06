describe("SessionUserCtrlTest", function () {
    var $httpBackend;
    var $controller;
    var dataService;
    var $routeParams;
    beforeEach(angular.mock.module('lapTimeManagement'));
    beforeEach(function () {
        angular.mock.inject(function (_$controller_, _$httpBackend_, _$routeParams_, dataAccessService) {
            $httpBackend = _$httpBackend_;
            $controller = _$controller_;
            $routeParams = _$routeParams_;
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
    describe("Controller session", function () {
        var scope, controller;
        var session;
        var lapTimes = [];
        var lapTime;
        lapTime = new app.domain.LapTime(1, 333, new Date(2015, 12, 22), 111, 'bob', 222, false);
        lapTimes.push(lapTime);
        lapTime = new app.domain.LapTime(1, 444, new Date(2015, 12, 22), 222, 'bob', 111, false);
        lapTimes.push(lapTime);
        lapTime = new app.domain.LapTime(1, 666, new Date(2015, 12, 22), 222, 'bob', 222, false);
        lapTimes.push(lapTime);
        session = new app.domain.Session(1, "Big Red Car", "Long Track", 2, lapTimes);
        beforeEach(function () {
            scope = {};
            $routeParams.sessionId = 1;
            $routeParams.userId = 2;
            controller = $controller("SessionUserCtrl", { $scope: scope, dataAccessService: dataService, $routeParams: $routeParams });
            $httpBackend.expectGET("https://t1nj5fds0c.execute-api.ap-northeast-1.amazonaws.com/develop/session/1/user/2").respond(session);
        });
        it('session has been initialized', function () {
            $httpBackend.flush();
            expect(controller.session).toBeDefined();
        });
        it('should contain the correct number of session', function () {
            $httpBackend.flush();
            expect(3).toBe(controller.session.laptimes.length);
        });
        it('should contain one laptime maked as fastest', function () {
            $httpBackend.flush();
            var fastest = _.where(controller.session.laptimes, { 'fastest': true });
            expect(1).toBe(fastest.length);
        });
        it('should have the fastest laptime of 222', function () {
            $httpBackend.flush();
            var fastest = _.first(_.where(controller.session.laptimes, { 'fastest': true }));
            expect(333).toBe(fastest.lap_time);
        });
    });
});

//# sourceMappingURL=SessionUserCtrlTest.js.map
