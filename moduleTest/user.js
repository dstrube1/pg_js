// user.js
export default class User{
	constructor(name, age){
		this.name = name
		this.age = age
	}
}

export function printName(user){
	console.log("User's name is ${user.name}.")
	alert("User's name is ${user.name}.")
}

export function printAge(user){
	console.log("User's age is ${user.age}.")
	alert("User's age is ${user.age}.")
}

/*
    console.log("======================================================================");
    console.log("Test1 from Strube");
    const tesseract = require("node-tesseract-ocr")
    const config = {
      lang: "eng",
      oem: 1,
      psm: 3,
    }

    tesseract.recognize("test.pdf", config)
      .then(text => {
        console.log("Result:", text)
      })
      .catch(error => {
        console.log(error.message)
      })
    console.log("Test2 from Strube");
    console.log("======================================================================");

*/