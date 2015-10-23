//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
function isTyler(name){
	if(name === 'Tyler'){
		return true;
	} else {
		return false;
	}
}

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here

function getName(){
	var name = prompt(name);
		return name;
	}


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here

function welcome(){
	return "Welcome " + getName();
}


//Next problem




//What is the difference between arguments and parameters?

  //Answer Here
/*	Parameters are set when the function is defined, they represent how the arguments will be handled when the function is actually invoked. Arguments take the place of
parameters when the code is invoked, and are the actual values, objects, and variables that the function is acting upon.

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here

Falsy values evaluate to false in an if() expression. Checking if a value is falsy can be accomplished by checking the value within
an if() expression that evaluates the truthiness of the value. If the value is not truthy, it is falsy.
Falsy values are:
false
0
''
null
undefined
Nan

//Next Problem



//Create a function called myName that returns your name

  //Code Here*/

function myName(){
	return 'Patrick';
}

//Now save the function definition of myName into a new variable called newMyName

  //Code Here

var newMyName = myName;

//Now alert the result of invoking newMyName

alert(newMyName());

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

function outerFn(name){
	return function(){
		return myName();
	}
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

  //Code Here

//Now invoke innerFn.

innerFn();
