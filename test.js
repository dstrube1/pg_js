'use strict';

//to run this from terminal, just:
//node test.js


/*
if none of these work: 
brew update
brew upgrade
brew upgrade npm
then try these:
echo 'export PATH="/usr/local/opt/icu4c@77/bin:$PATH"' >> ~/.zshrc
echo 'export PATH="/usr/local/opt/icu4c@77/sbin:$PATH"' >> ~/.zshrc

export LDFLAGS="-L/usr/local/opt/icu4c@77/lib"
export CPPFLAGS="-I/usr/local/opt/icu4c@77/include"

export PKG_CONFIG_PATH="/usr/local/opt/icu4c@77/lib/pkgconfig"

let b1 = false;
const b2 = true;
//if use strict, then dev console will throw an error when trying to set an undeclared variable
// if not use strict, then dev console will not throw an error when trying to set an undeclared variable
//if (b2) b = true;
if (b2) b1 = true;
if (b1) console.log('b1 is true');
else console.log('b1 is false');

//const interface = 'interface';
//strict mode will throw an error when trying to use a reserved word as a variable name
// const if = 'if';
//this is a syntax error with or without strict mode
*/



/*
function myFunc() {
    console.log('myFunc');
}

let mf = myFunc();
console.log(mf);
//this has the effect of writing the the console (because mf is called) then printing the value of mf ("undefined")
//mf will be assigned the value "undefined" because myFunc does not return anything

//if we call myFunc with a parameter, then parameter is ignored without error or warning, even in strcit mode
myFunc("param");
*/



/*
//function expression, ie not a named function
const mf2 = function () {
    console.log('mf2');
}

//note, whereas you can call a function declaration before it is defined, you cannot call a function expression before it is defined
//this is a good way to enforce a certain order of the code: first define functions, then call them

//arrow function
const mf3 = mf3a => mf3a - 1;
console.log(mf3(3));
//personally, not a fan of how arrow function does an implicit return, or having a implied parameter being the same thing that's returned
//I'm old.

//if the arrow function has more than one line, then you need to use curly braces and return
const mf4 = mf4a => {
    console.log('mf4');
    return mf4a - 1;
}
console.log(mf4(3));
*/



/*
//arrow function with 3 parameters
const mf5 = (mf5a, mf5b, mf5c) => mf5a + mf5b + mf5c;
//write to console with the value embedded in the string (ie no concatenation)
console.log(`Calling an arrow function with 3 params: ${mf5(1, 2, 3)}`);
*/


/*
//Arrays
const a1 = ['1','2',3];
//can mix data types^
const a2 = new Array(1,2,3,a1);
console.log(a1);
console.log(a2);
console.log(`length of a1: ${a1.length}`);
console.log(`last of a2: ${a2[a2.length-1]}`);
//only primitve values are immutable
//arrays are not primitive values, ergo, can be changed even when const
a1[0] = 0;
//but as a const, array cannot be assigned a new value like a1 = [2,3,4];

//add to end and get new legnth:
const newlength = a1.push(4);
//add to beginning and get new length:
const newlength0 = a1.unshift(0);
//remove last:
const n = a1.pop();
//remove first:
const o = a1.shift();
//find:
console.log(a1);
const p = a1.indexOf(3)
console.log(p); // shuld be 2
*/

/*
//Objects
const object = {
	key0: 'value',
	key1: 1,
	aFunc: function(input){console.log(`even a function can be a property of an object, ${input}`); return ' it worked! '},
	aFunc0: function(){return this.key1;}
};
//order of proerties does not matter
//getting values from object
const key0 = object.key0;
console.log(`key0: ${key0}`);
const key1 = object['key1'];
console.log(`key1: ${key1}`);
//prompt function isn't available when running in node
//let input = prompt('Enter some data');
//console.log(`input: ${input}`);
object.newProp1 = 2;
object['newProp2'] = 3;
console.log(`object.newProp1: ${object.newProp1}`);
//interesting: putting an object property function call in a call to console.log first calls the function (with the parameter, then writes to console.log whatever that function returns
console.log(`object['aFunc']('123'): ${object['aFunc']('123')}`);
console.log(`with dot notation and using another object property: object.aFunc0(): ${object.aFunc0()}`);
*/

/*
Challenge #3:
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){this.bmi = this.mass / (this.height * this.height); return this.bmi;}
};
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){this.bmi = this.mass / (this.height * this.height); return this.bmi;}
};

//These functions are attributes of these objects; the functions must be called before the bmi attribute will be populated
john.calcBMI();
mark.calcBMI();

console.log(john.bmi >= mark.bmi ? `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})` : `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
*/

// Loops
/*
const a1 = [1,2,3,4,5,6,7,8,9,10];
for(let i = 0; i < a1.length; i++){
	if(i == 1) continue;
	if (i == 8) break;
	if (i == 3) console.log(`a1[i] = ${a1[i]}, ${typeof a1[i]}`);
	else console.log(`i is ${i}`);
	////random number between 0-5
	let rando = Math.trunc(Math.random() * 6); 
	console.log(`random number between 0-5: ${rando}`);
}
*/

// Debugging
/*
//const input = prompt("Does prompt work here?"); //works in browser, not in node
//console.log("input: " + input);

//this doesn't break node, but it also doesn't seem to have an effect in Chrome
debugger;

const a = "a";
//these all look the same in node, but look better in a browser:
console.log("a: " + a);
console.warn("a: " + a);
console.error("a: " + a);
//this doesn't work in Chrome or Firefox as well as it looked in udemy, around 7 minuntes here: https://gbg.udemy.com/course/the-complete-javascript-course/learn/lecture/22648363#notes
const b = {c: "c", d: 1, e: true};
console.table("b: " + b);
console.log("b: " + b);
*/

//Coding challenge #1
/*
function printForecast(arr){
	let output = "... ";
	for(let i = 0; i < arr.length; i++){
		output += arr[i] + " degrees C in " + (i+1) + " days ... ");
	}
	console.log(output);
}
const testData0 = [17,21,23];
const testData1 = [12,5,-5,0,4];
printForecast(testData0);
printForecast(testData1);
*/

/**
//n=3.14; 
function runMe(n) { 
	let result = 0.0; 
	for (let i = 1; i <= n; i++) { 
		console.log("i = " + i + "; result = " + result);
		result += Math.sin(i * i); 
	} 
	return result; 
}

console.log(runMe(3.14));

//i = 1, result = 0;
//i = 2, result = 0.8414709848078965;
//i = 3, result = 0.0846684894999683
//return result = 0.4967869747417249 ???
**/

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
var doSearch = function binarySearch(arr){
	//let cannot be redeclared, scoped to within {}
	//var can be redeclared, scoped to within the whole function 
	//	(or from outside if declared outside)

	let min = 0;
	let max = arr.length - 1;
	//console.log("max = " + max);
	while (max >= min){
		let guess = Math.floor((min + max) / 2); //round down
		//console.log("guess = " + guess + " = " + arr[guess]);
		if (arr[guess] == target) return guess;
		if (arr[guess] < target){
			min = guess + 1;
		}else{
			max = guess - 1;
		}
	}
	return -1; //not found
};

var target = 67;
console.log("Found " + target + " at " + doSearch(primes));
target = 10;
console.log("Found " + target + " at " + doSearch(primes));


































