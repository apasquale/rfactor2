var app;
(function (app) {
    var sessions;
    (function (sessions) {
        var SessionUserCtrl = (function () {
            /*@ngInject*/
            SessionUserCtrl.$inject = ["$routeParams", "dataAccessService"];
            function SessionUserCtrl($routeParams, dataAccessService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.title = "Lap Time List";
                var sessionId = $routeParams.sessionId;
                var userId = $routeParams.userId;
                var userSessionResource = dataAccessService.getUserSessionListResource();
                userSessionResource.get({ sessionId: sessionId, userId: userId }, function (data) {
                    _.min(data.laptimes, 'lap_time').fastest = true;
                    _this.session = data;
                    if (!_this.session.Id) {
                        _this.session.Id = sessionId;
                    }
                });
            }
            return SessionUserCtrl;
        })();
        angular
            .module("lapTimeManagement")
            .controller("SessionUserCtrl", SessionUserCtrl);
    })(sessions = app.sessions || (app.sessions = {}));
})(app || (app = {}));

//# sourceMappingURL=sessionUserCtrl.js.map
