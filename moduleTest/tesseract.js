//tesseract.js

//npm install node-tesseract-ocr

export default class Tesseract{
	constructor(path){
		this.path = path
		this.result = ''
    this.tesseract = require("node-tesseract-ocr")
    this.config = {
      lang: "eng",
      oem: 1,
      psm: 3,
    }
    this.textReady = true
	}
}

export function test0(my){
  console.log(`Path is ${my.path}`)
}

export function test1(my){
  my.tesseract.recognize(my.path, my.config)
    .then(text => {
      console.log("Logging from test1:", text)
    })
    .catch(error => {
      console.log(error.message)
    })
}

export function getTextFromImage(my){//, tessCallback, catchHandler){
  my.textReady = false;
  my.tesseract.recognize(my.path, my.config)
    .then(text => { /*tessCallback(text);*/ })
    .catch(error => {
      console.log(error.message);
      //catchHandler(error.message);
    })
}

export function isTextReady(my) {
  return my.textReady;
}

export function getText(my){
  return my.result;
}
