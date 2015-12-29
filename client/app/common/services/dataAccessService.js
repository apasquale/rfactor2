var app;
(function (app) {
    var common;
    (function (common) {
        var DataAccessService = (function () {
            /*@ngInject*/
            function DataAccessService($resource) {
                this.$resource = $resource;
            }
            DataAccessService.prototype.getLapTimeResource = function () {
                return this.$resource("https://t1nj5fds0c.execute-api.ap-northeast-1.amazonaws.com/develop/laptimes/:sessionId");
            };
            DataAccessService.prototype.getSessionListResource = function () {
                return this.$resource("https://t1nj5fds0c.execute-api.ap-northeast-1.amazonaws.com/develop/session/:sessionId");
            };
            DataAccessService.prototype.getUserSessionListResource = function () {
                return this.$resource("https://t1nj5fds0c.execute-api.ap-northeast-1.amazonaws.com/develop/session/:sessionId/user/:userId");
            };
            return DataAccessService;
        })();
        common.DataAccessService = DataAccessService;
        angular
            .module("common.services")
            .service("dataAccessService", DataAccessService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
