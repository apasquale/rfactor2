var app;
(function (app) {
    var domain;
    (function (domain) {
        var Session = (function () {
            function Session(Id, car, track, userId, laptimes) {
                this.Id = Id;
                this.car = car;
                this.track = track;
                this.userId = userId;
                this.laptimes = laptimes;
            }
            return Session;
        })();
        domain.Session = Session;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));

//# sourceMappingURL=sessions.js.map
