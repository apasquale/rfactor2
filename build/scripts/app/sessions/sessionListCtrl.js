var app;
(function (app) {
    var sessions;
    (function (sessions) {
        var SessionListCtrl = (function () {
            /*@ngInject*/
            SessionListCtrl.$inject = ["dataAccessService"];
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
            return SessionListCtrl;
        })();
        angular
            .module("lapTimeManagement")
            .controller("SessionListCtrl", SessionListCtrl);
    })(sessions = app.sessions || (app.sessions = {}));
})(app || (app = {}));

//# sourceMappingURL=sessionListCtrl.js.map
