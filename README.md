###Javascript Module Fundamentals 

https://app.pluralsight.com/player?course=javascript-module-fundamentals&author=brice-wilson&name=javascript-module-fundamentals-m2&clip=2&mode=live 

http://requirejs.org/docs/api.html#data-main 
https://github.com/systemjs/systemjs 

- Pluralsight  
- Brice Wilson   
 
---
####Javascript Modules
1. IIFE (js/app.js)  
2. Revealing Module Pattern - singleton  

`var module = function() {`  
`return {}`   
`}();`  

3. Revealing Module Pattern - constructor 

`var Module = function () {`  
`return {}`  
`};`  
`var newModule = new Module()`  

4. AMD (with Require.js loader)  
5. CommonJS (with System.js loader)  
6. ES6 modules  

####Notes  
- According to Cory House, IIFE and AMD should no longer be considered for new development
- CommonJS was popularised by Node  
- ES6 should be first choice today for front end development  

---
####http-server 
- a lightweight zero-configuration server  
- install locally, add 'http-server' to the start script and run `npm start` 
- can also be installed globally 