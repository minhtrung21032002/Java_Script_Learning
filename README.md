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
  
3) OOP in Java_Script
   # Using Constructor Object vs Object Literal Notation
   # In constructor Object can used in both ways anonymous function and named function
   # This keyword
