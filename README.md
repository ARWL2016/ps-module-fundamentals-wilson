###Javascript Module Fundamentals 

https://github.com/ARWL2016/ps-module-fundamentals-wilson  

https://app.pluralsight.com/player?course=javascript-module-fundamentals&author=brice-wilson&name=javascript-module-fundamentals-m2&clip=2&mode=live 

http://requirejs.org/docs/api.html#data-main 
https://github.com/systemjs/systemjs 

- Pluralsight  
- Brice Wilson   
 
---
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

####Notes  
- According to Cory House, IIFE and AMD should no longer be considered for new development
- CommonJS was popularised by Node  
- ES6 should be first choice today for front end development  

---
####http-server 
- a lightweight zero-configuration server  
- install locally, add 'http-server' to the start script and run `npm start` 
- can also be installed globally 