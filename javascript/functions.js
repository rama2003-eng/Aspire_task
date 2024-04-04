// Title : Functions in Javascript
//Author :Ramapraba J
//Create date:21-03-2024
console.log("-------------Callback Function-------------");
function func(callback) {
    console.log("Execute Function");
      callback();
   
  }

  function callbackFunction() {
    console.log("Callback function executed!");
  }
  
  
  func(callbackFunction);

  console.log("-------------Anonymous Function-------------");
  var greet = function() {
    console.log("Hello, world!");
  };
  
  greet();
  console.log("-------------Arrow Function-------------");
  const arrow = () => {
    console.log("Arrow function");
  };
  
  arrow();
  console.log("-------------IIFE Function-------------");
  
  (function() {
    console.log("This is an IIFE");
  })();
  console.log("-------------Generator Function-------------");
  

  function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const iterator = generateSequence();
 
  console.log(iterator.next()); 
  console.log(iterator.next()); 
  console.log(iterator.next()); 
  console.log(iterator.next()); 

