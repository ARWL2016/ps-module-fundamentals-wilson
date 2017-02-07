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


####Notes  
- According to Cory House, IIFE and AMD should no longer be considered for new development https://app.pluralsight.com/player?course=javascript-development-environment&author=cory-house&name=javascript-development-environment-m7&clip=0&mode=live 
- CommonJS was popularised by Node  
- ES6 should be first choice today for front end development  


####http-server 
- a lightweight zero-configuration server  
- install locally, add 'http-server' to the start script and run `npm start` 
- can also be installed globally 