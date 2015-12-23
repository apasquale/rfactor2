var app;
(function (app) {
    var userList;
    (function (userList) {
        var SessionUserCtrl = (function () {
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
            SessionUserCtrl.$inject = ["$routeParams", "dataAccessService"];
            return SessionUserCtrl;
        })();
        angular
            .module("lapTimeManagement")
            .controller("SessionUserCtrl", SessionUserCtrl);
    })(userList = app.userList || (app.userList = {}));
})(app || (app = {}));
