var app;
(function (app) {
    var domain;
    (function (domain) {
        var LapTime = (function () {
            function LapTime(session_id, lap_time, date_time, split1, user_id, split2) {
                this.session_id = session_id;
                this.lap_time = lap_time;
                this.date_time = date_time;
                this.split1 = split1;
                this.user_id = user_id;
                this.split2 = split2;
            }
            return LapTime;
        })();
        domain.LapTime = LapTime;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
