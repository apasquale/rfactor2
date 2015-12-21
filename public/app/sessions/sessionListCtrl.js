var app;
(function (app) {
    var userList;
    (function (userList) {
        var SessionListCtrl = (function () {
            function SessionListCtrl(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.title = "Session List";
                this.sessions = [];
                var sessionResource = dataAccessService.getSessionListResource();
                sessionResource.query(function (data) {
                    _this.sessions = data;
                });
            }
            SessionListCtrl.$inject = ["dataAccessService"];
            return SessionListCtrl;
        })();
        angular
            .module("lapTimeManagement")
            .controller("SessionListCtrl", SessionListCtrl);
    })(userList = app.userList || (app.userList = {}));
})(app || (app = {}));
