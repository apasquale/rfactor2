var app;
(function (app) {
    var userList;
    (function (userList) {
        var LapTimeListCtrl = (function () {
            /*@ngInject*/
            function LapTimeListCtrl($routeParams, dataAccessService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.title = "Lap Time List";
                this.lapTimes = [];
                var sessionId = $routeParams.sessionId;
                var lapTimeResource = dataAccessService.getLapTimeResource();
                lapTimeResource.query({ sessionId: sessionId }, function (data) {
                    _this.lapTimes = data;
                });
            }
            return LapTimeListCtrl;
        })();
        angular
            .module("lapTimeManagement")
            .controller("LapTimeListCtrl", LapTimeListCtrl);
    })(userList = app.userList || (app.userList = {}));
})(app || (app = {}));
