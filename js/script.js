// text change


function textChnge(){

	document.getElementById('h2_1').innerHTML="hello world";
}



// first p
function onlyText(){
	document.getElementById('text').innerHTML="my first paragraph";
}
// paragraph changed
function myFunction(){
  document.getElementById('change').innerHTML ="Paragraph changed";
}
function changeAddition(){
	document.getElementById('p').innerHTML=10+6;
}

// dolly
function myParagraph() {
  document.getElementById("demo1").innerHTML = "Hello Dolly!";
  document.getElementById("demo2").innerHTML = "How are you?";
}
// date and time
function dateAndTime(){
	document.getElementById('h4').innerHTML=Date();
}
// bulb on/off
function on(){
	document.getElementById('img').src="image/on.gif";
}
function off(){
	document.getElementById('img').src="image/off.gif";
}
// big font
function bigFont(){
	document.getElementById('h3').style.fontSize="40px";
}
// hide and show
function hide(){
	document.getElementById('h5').style.display="none";
}
function show(){
	document.getElementById('h5').style.display="block";
}
// data addition
let number1 = 5;
let number2 =10;
let result =number1 + number2;

function add(){
	document.getElementById('data').innerHTML=result;
}
// class name
function textChanges(){
	document.getElementsByClassName('pa')[1].innerHTML="hellow world";
}
// text count
function textCounts(){
	var info = document.getElementsByTagName('h_5');
	alert(info.length);
}
// show text
function showText(){
	document.getElementById('sim').innerHTML="John Doe";
}
let x;
x = 6;
function varShow(){
	document.getElementById('var').innerHTML=x;
}
// algebra
function algebra(){
	document.getElementById('opt').innerHTML= (5+6) * 10;
}

 // substraction

function substrac(){
	document.getElementById('subs').innerHTML=5*10;
}
// variable dec

var a = 3;
var b = (100 + 50) * a;
function showMulti(){
	document.getElementById('p1').innerHTML = b;
}
// operator
var c = 10;
c += 5;
function showOpe(){
	document.getElementById('p2').innerHTML = c;
}
// operator

let text1 = "A";
let text2 = "B";
let result1 = text1 < text2;
function string(){
	document.getElementById('p3').innerHTML = "Is A less than B? " + result1;
}
// operator
let text4 = "20";
let text5 = "5";
let result2 = text4 < text5;
function textCom(){
	document.getElementById('p4').innerHTML = "Is 20 less than 5?" + result2;
}

var h = "What a very ";
 h += "nice day";

function operate(){
	document.getElementById('p5').innerHTML= h;
}
var e = 5 + 5;
var f = 5 * 5;
var g = "Hello" + 5;
function bothOpe(){
	document.getElementById('p6').innerHTML = e + "<br>" + f + "<br>" + g;
}
// content change
function changeContent(){
	document.getElementById('p7').innerHTML="hellow javascript";
}
// value compare
var i = 5;
function dataAsing(){
	document.getElementById('p10').innerHTML = (i == 8);
}
// value compare
var j = 5;
function dataCom1(){
	document.getElementById('p11').innerHTML = (j == 5);
}
var k = 5;
function dataCom2(){
	document.getElementById('p12').innerHTML = (k === "5");
}
// Multiplication

var m = 5;
var n = m * 2;
function calOpe(){
	document.getElementById('p13').innerHTML = "Value of n is:" + n;
}
// division
var o = 5;
var p = o / 2;
function calculateDiv(){
	document.getElementById('p14').innerHTML = "Value of p is: " + p;
}
// Subtraction
var q = 50;
var r = q - 25;
function subCal(){
	document.getElementById('p15').innerHTML = "Value of r is: " + r;
}
var s = 5;
var t = s % 2;
function calRemain(){
	document.getElementById('p16').innerHTML = "Value of t is: " + t;
}
// Assignment opt
var u = 5;
var v = 2 ;
var w = u + v;
function calAssig(){
	document.getElementById('p17').innerHTML = "The sum of u + v is: " + w;
}
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
function calStrings(){
	document.getElementById('p18').innerHTML = answer1 + "<br>" + answer2 + "<br>" + answer3;
}




