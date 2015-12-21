var app;
(function (app) {
    var userList;
    (function (userList) {
        var SessionDetailCtrl = (function () {
            function SessionDetailCtrl($routeParams, dataAccessService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.title = "Lap Time List";
                var sessionId = $routeParams.sessionId;
                var sessionResource = dataAccessService.getSessionListResource();
                sessionResource.get({ sessionId: sessionId }, function (data) {
                    _this.session = data;
                });
            }
            SessionDetailCtrl.$inject = ["$routeParams", "dataAccessService"];
            return SessionDetailCtrl;
        })();
        angular
            .module("lapTimeManagement")
            .controller("SessionDetailCtrl", SessionDetailCtrl);
    })(userList = app.userList || (app.userList = {}));
})(app || (app = {}));
