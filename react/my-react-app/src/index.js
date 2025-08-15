import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

//Classes and Inheritance
class Test{
	constructor(text){
		this.content = text;
	}
	
	printTest(){
		return 'Test class content: ' + this.content;
	}
}

class Child extends Test{
	constructor(text, stuff){
		super(text);
		this.thing = stuff;
	}
	
	doSomething(){
		return 'Parent: ' + this.printTest() + '; kid stuff: ' + this.thing;
	}
}

const child = new Child("1", "2");
console.log(child.doSomething());

//Arrow functions:
f1 = function(){
	return "f1";
}

f2 = () => {
	return "f2";
}

f3 = () => "f3"; //this only works if the function has only 1 statement

f4 = (val) => "f4 with value passed in: " + val;

//this only works if there is only 1 parameter:
f5 = val => "f5 with value passed in without parentheses: " + val; 

console.log(f1);