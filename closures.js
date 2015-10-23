//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  //Code Here

var inner = outer();

//Once you do that, invoke inner.

  //Code Here

inner();

//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here

var callJake = callFriend();
callJake('435-215-9248');

//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  //Code Here
  function makeCounter(){
     var x = 1;
     return function(){
       return x++;
     };
    }

  var count = makeCounter();
  count() // 1
  count() // 2
  count() // 3
  count() // 4




//Next Problem



/*
  Write a function that does something simple (console, alert, etc). Write a second function that accepts the first function as it's first parameter. The second function should return a new third function which, when invoked, invokes the first, original function that was passed in, but will only ever do so once.
*/

  //Code Here

  function dev(){ console.log('Mountain');}

  function second(fn){
    return function(){
      fn();
    }();
  }

second(dev);


//Next Problem



/*
  Now, similar to the last problem, write a function called 'fnCounter' that accepts two parameters.
  The first parameter will be an anonymous function and the second parameter, 'N', will be a number.
  Now, in 'fnCounter', allow the anonymous funciton to be invoked 'N' number of times. After it's been
  invoked 'N' number of times, return 'STOP'.
*/

function fnCounter(fn, N){
  for(var i = 0; i < N; i++){
    fn();
  }
  return 'STOP';
}


//Next Problem



/*
  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };

  Above you have a function named counter. Examine the function (without running the code) then below write what you expect to happen when the funciton is invoked. *Hint: setTimeout calls a function or evaluates an expression after a specified number of milliseconds.

    //Answer Here


We are delaying the console.logs based on the value of the i incrementer. The first log will be delayed 1000 ms, the next 2000 ms, etcetera.
However, the i variable will be fully incremented by the time the timeouts finished. So every log would eventually complete, but the i will be 5 (the value at the time of calling);

  Now, run the function in your console and note what happpens.

  Was your answer right or wrong?

    //Answer Here
 The general idea was right, however I didn't account for the final increment above 5 to 6 (the console.log return 6)

  Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc)

    //Code Here*/

//ES6
function counter(){
  'use strict'; //So it works in chrome console, can alternately run in ES6/Babel mode of JSBin
      for (var i=1; i<=5; i++) {
        //we make a loop, which iterated 5 times
        let x = i; //ES6 specific syntax sets the x to equal i for this block-scoped iteration
        setTimeout( ( () => console.log( x)), i*1000 );//ES6 arrow function for anonymous function callback
      }
}

//ES5
function counter() {
    function _loop () { //declare the _loop function, which will be called later inside a 'for' loop
    var x = i; //Set var x equal to i (i will not exist until this function is called). This puts a separate x variable in each _loop calls scope.
    setTimeout(function () {
      console.log(x); //standard functionality
    }, i * 1000);
  };

  for (var i = 1; i <= 5; i++) {
    _loop(); //loop is invoked at each value of i, and the console logs x after the timeout.
  }
};

//Next Problem



/*
  Make the following code work

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.
*/

function arrayCount(n){
  funcArray = [];
  for(var i = 0; i < n; i++){
    funcArray.push(
      function(j){
        return function(){
          return j;
        }
      }(i)
    )
  }
  return funcArray;
}
