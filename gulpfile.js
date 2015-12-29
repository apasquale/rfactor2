var gulp = require("gulp");
var tsc = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var browserSync = require("browser-sync");
var runseq = require("run-sequence");
var concat = require("gulp-concat");
var wiredep = require("wiredep").stream;
var ngAnnotate = require("gulp-ng-annotate");
var usemin = require("gulp-usemin");
var uglify = require("gulp-uglify");
var minifyCss = require("gulp-minify-css");
var del = require("del");
var exec = require('child_process').exec


var paths = {
	tscripts: {
		dest: "app/build"
	},
	html: "client/**/*.html",
	mainHtml: "client/index.html",
	fonts: {
		src: ["bower_components/bootstrap/fonts/*.{eot,svg,ttf,woff,woff2}"],
		dest: "./build/fonts"
	},
	imgs: {
		src: ["client/images/**/*.{png,jpeg,jpg}"],
		dest: "./build/images"
	},
	dist: "./build"
};

gulp.task("default", function () {

});


// ** Running ** //


//gulp.task("buildrun", function (cb) {
//	runseq("build", "run", cb);
//});

// ** Watching ** //


gulp.task("watch", ["serve"], function () {
	gulp.watch(paths.tscripts.src, ["compile:typescript", browserSync.reload]).on("change", reportChange);
	gulp.watch(paths.html, ["html", browserSync.reload]).on("change", reportChange);
	gulp.watch(paths.mainHtml, ["bower", browserSync.reload]).on("change", reportChange);
	gulp.watch(paths.sass.src, ["compile:sass", browserSync.reload]).on("change", reportChange);
});

// ** Compilation ** //
gulp.task("build:prod", ["build"], function (cb) {
	runseq("minify", cb);
});
gulp.task("build", ["compile:server", "compile:client", "bower", "html", "copy:fonts", "copy:imgs"]);
gulp.task("compile:client", function () {
    var tsProject = tsc.createProject('client/tsconfig.json');
    
	var tsResult = tsProject.src()
    	.pipe(tsc(tsProject));
		
	return tsResult.js
        .pipe(sourcemaps.init())
		.pipe(ngAnnotate())
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("./build/scripts"));

});

gulp.task("compile:server", function () {
    var tsProject = tsc.createProject('server/tsconfig.json');
    
	var tsResult = tsProject.src()
    	.pipe(tsc(tsProject));
        
    return tsResult.js
        .pipe(gulp.dest("./server"));
});

gulp.task("html", function () {
	gulp.src([paths.html])
		.pipe(gulp.dest(paths.dist));
});

gulp.task("minify", function () {
	return gulp.src("build/index.html")
		.pipe(usemin({
            assetsDir: "build",
            vendorCss: [minifyCss(), "concat"],
            vendorJs: [uglify(), "concat"],
            app: [uglify(), "concat"]
        }))
		.pipe(gulp.dest("build"));
});

gulp.task("bower", function () {
	gulp.src(paths.mainHtml)
		.pipe(wiredep())
		.pipe(gulp.dest(paths.dist));
});

gulp.task("copy:fonts", function () {
	gulp.src(paths.fonts.src)
		.pipe(gulp.dest(paths.fonts.dest));
});

gulp.task("copy:imgs", function () {
	gulp.src(paths.imgs.src)
		.pipe(gulp.dest(paths.imgs.dest));
});

// ** Clean ** //
gulp.task("clean", function (cb) {
	del([paths.dist], cb);
});


// ** Utils ** //
gulp.task("serve", ["build"], function (cb) {
    exec('node server/server.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

// ** Utils ** //
gulp.task("serve:prod", ["build:prod"], function (cb) {
    exec('node server/server.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

function reportChange(event) {
	console.log("File " + event.path + " was " + event.type + ", running tasks...");
}