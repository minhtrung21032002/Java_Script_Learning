# Java_Script_Learning

#DOM event VS Event Listener
1) Dom Event help us solve the problem of event which has multi tasks easier in comparision to Event Listener

2) Solve the problem of Event listen and Remove the Event Listen
Ex:
  var btn = document.getElementById('btn')
  function viec1(){
     consolo.log('Viec1')
  btn.addEventListener('click',viec1)

  setTimeOut(function(){
    btn.removeEventListener('click',viec1)
  },3000);
  
3) # OOP in Java_Script
    Using Constructor Object vs Object Literal Notation
    In constructor Object can used in both ways anonymous function and named function
   #This keyword refers to the object that often lies after the dot ( . ) 

4) # Asycn
   Promise
   Ex: var promise = new Promise(function(resolve,reject){)
       resolve('resolve')
       reject('reject')
   })
   promise.
       then(function(data){
          console.log(data) => resolve
       }
       catch(function(data){
          console.log(data) => reject
       }
   Promise.all => if each promise is not depend on each other, using this to get the result of all promises


5) # VAR,LET,CONST
   SCOPE GLOBAL: VAR
   LOCAL: LET,CONST
   CONST not affected on object attribute

6) # Arrow Function
   Ex: var logger = (log) =>{
     console.log(log)
   }
   logger('hi')
   Ex: const sum = (a,b) => a+b
   console.log(sum(2,2))

7) # Export
   Default keyword as default object to export when importing that file
   export { default } is the keyword of re-default export
   Note: export{default} is used widely to serve as a default file in the folder
   Ex:
      // moduleA.js
    const someFunction = () => {
      // ...
    };
    
    export default someFunction;

   // moduleB.js
    export { default } from './moduleA.js';

    // In another JavaScript file
    import someFunction from './moduleB.js';

    // Now, someFunction contains the default export from moduleA.js
8) Notes

  Call back( function as parameter ), pass function as parameter without ()

Object constructor 

type of functions

Promise 

Array method 

Remember that everything in javascript is object, if a var = function => it is a function => adding () to call it


9) Jquerry and DOM
    Remember to add the DOMContentLoaded in order to use jQuerry properly



         
   
