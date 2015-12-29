var app;
(function (app) {
    var sessions;
    (function (sessions) {
        var SessionDetailCtrl = (function () {
            /*@ngInject*/
            function SessionDetailCtrl($routeParams, dataAccessService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.title = "Lap Time List";
                var sessionId = $routeParams.sessionId;
                var sessionResource = dataAccessService.getSessionListResource();
                sessionResource.get({ sessionId: sessionId }, function (data) {
                    _.min(data.laptimes, 'lap_time').fastest = true;
                    _this.session = data;
                });
            }
            return SessionDetailCtrl;
        })();
        angular
            .module("lapTimeManagement")
            .controller("SessionDetailCtrl", SessionDetailCtrl);
    })(sessions = app.sessions || (app.sessions = {}));
})(app || (app = {}));
