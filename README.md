# Rfactor2 Lap Time viewer

This app provides a front end for an api which displays lap time information for the game Rfactor 2

Hosted at https://rfactor2.herokuapp.com/

## Purpose

The aim of this application is to learn AngularJS with Typescript working with the Visual Studio Code editor as well as some of the more modern web development tools like gulp, wiredep and Heroku.
Very little attention was paid to the Web Design and optimisation side of it (other than figuring out how to use gulp for minification and concatenation of scripts and styles) as my main focus was learning Typescript.

## Technologies used:
- Typescript - a typed superset of JavaScript (www.typescriptlang.org/) 
- AngularJS - SPA framework (https://angularjs.org/)
- NodeJS - Server side javascript (https://nodejs.org/)
- ExpressJS - Web app framework for nodejs (http://expressjs.com/)
- lodash - LINQ for JS (https://lodash.com/)
- Boostrap - CSS framework (http://getbootstrap.com/)
- Gulp - build pipeline (http://gulpjs.com/)
- wiredep - dynamically linking bower packages to your html (https://github.com/taptapship/wiredep)
- Heroku - hosting (https://www.heroku.com/)
- vscode - code editing

## Lessons learned:
- Love Typescript - will use it more
- Best to separate tsconfigs from server to client to allow for better minification pipeline
    - Though lose the build all from VSCode
- Wiredep is really handy for linking all your bower packages and css into your html
- Heroku does not love gulp as much as I hoped
    - It build some stuff but fell apart at more complex tasks such as minification and wiredep
    
## Things I want to do if I ever get time:
- Use socket.io to get some websocket goodness into here (new laptime notifications maybe)
- UI tests
- Learn about image optimisation techniques
    
## Building and running the code
1. Clone the repo: `git clone https://git.heroku.com/rfactor2.git`
1. Cd into the directory: `cd rfactor2`
1. Install all the required npm packages: `npm install`
1. Install all the bower packages: `bower install`
1. (optional) Build and test the code: `gulp app:test` or `gulp app:test:prod`
1. Run the code: `gulp serve` or `gulp serve:prod`

> If pushing to heroku run a `gulp app:test:prod` before committing all `git push all master` (with the correct targets setup to target both github and heorku) to ensure the minified files are deployed 