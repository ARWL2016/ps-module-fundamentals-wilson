###Javascript Module Fundamentals 

https://github.com/ARWL2016/ps-module-fundamentals-wilson  
https://app.pluralsight.com/player?course=javascript-module-fundamentals&author=brice-wilson&name=javascript-module-fundamentals-m2&clip=2&mode=live 
  
- Pluralsight  
- Brice Wilson   
 
####Technology  
- Http-server https://www.npmjs.com/package/http-server  
- CommonJS 
- ES6 modules  
- Babel  
- Require.js http://requirejs.org/docs/api.html#data-main    
- System.js https://github.com/systemjs/systemjs    
- Webpack  
- Browserify  


####Javascript Modules
- IIFE  
- Revealing Module Pattern - singleton  

`var module = function() {`  
`return {}`   
`}();`  

- Revealing Module Pattern - constructor 

`var Module = function () {`  
`return {}`  
`};`  
`var newModule = new Module()`  

- AMD (with Require.js loader)  
- CommonJS (with System.js loader)  
- ES6 modules  

####Using Babel with SystemJS   
- install `babel-cli` and `babel-presets-es2015` as dev-deps  
- run in BASH: `./node_modules/.bin/babel js --presets es2015 --out-dir build`  
- install systemjs as a loader  
- Configure systemjs in index.html: link to package, specify cjs and reference build folder    
- More:  https://app.pluralsight.com/library/courses/babel-get-started/table-of-contents   

####Using Browserify to Bundle CommonJS Modules  
- install `browserify` as a dev-dep  
- create a `build` folder in the root of the app  
- run in CLI: `./node_modules/.bin/browserify js/app.js --outfile build/bundle.js` to specify the root and the target. This runs the build. (Note this works in CMD - recheck babel above)  
- in `index.html`, simply link to the bundle: `<script src="./build/bundle.js" type="text/javascript"></script>`  

####Basic Webpack build  
- a basic build is almost the same as `browserify` but: don't need to create `build` folder; don't need `--outfile` command
- install `webpack` as a dev-dep  
- run `./node_modules/.bin/webpack js/app.js build/bundle.js`  
- adjust script src in `index.html`  


####Notes  
- According to Cory House, IIFE and AMD should no longer be considered for new development https://app.pluralsight.com/player?course=javascript-development-environment&author=cory-house&name=javascript-development-environment-m7&clip=0&mode=live 
- CommonJS was popularised by Node  
- ES6 should be first choice today for front end development  

####Webpack with Babel
- this requires modules to be transpiled before bundling  
- install `babel-loader` and `babel-core`  
- create a `webpack.config` file  
- ERROR: `Module build failed: Error: Couldn't find preset "es2015" relative to directory` - Windows issue?


####http-server 
- a lightweight zero-configuration server  
- install locally, add 'http-server' to the start script and run `npm start` 
- can also be installed globally 