module.exports = function(config) {
        config.set({
            // list of files / patterns to load in the browser

            // **/*.js: All files with a "js" extension in all subdirectories
            // **/!(jquery).js: Same as previous, but excludes "jquery.js"
            // **/(foo|bar).js: In all subdirectories, all "foo.js" or "bar.js" files

            files: [
                'bower_components/angular/angular.js',
                'bower_components/angular-mocks/angular-mocks.js',
                'bower_components/angular-route/angular-route.js',
                'bower_components/lodash/lodash.js',
                'bower_components/angular-resource/angular-resource.js',
                'build/scripts/app/**/*.js',
                'build/scripts/test/**/*.js'
            ],

            browsers: [
                'PhantomJS'
            ],

            // level of logging: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
            logLevel: config.LOG_WARN,

            // base path, that will be used to resolve files and exclude
            basePath: '../../',

            // web server port
            port: 7676,

            // testing framework to use (jasmine/mocha/qunit/...)
            frameworks: ['jasmine'],

            // Additional reporters, such as growl, junit, teamcity or coverage
            reporters: ['progress'],

            // Enable or disable colors in the output (reporters and logs).
            colors: true
        });
    };