/*
 Theresa Parks
 WPF 1406 section 01
 Wacky calculator
 */

//alert ("Testing 1,2,3");

//create a js file that will tell people how they can save and how long it would take
// to save the amount they wish to save.

//create a variable to hold persons name
var name = prompt( " Please type in your name:");

//console.log out that name
console.log(name);

//Alert user and tell them Welcome
alert(" Welcome" +name+"! Do you want to know how much you can save with little effort?");

alert(" Welcome" +name+"! I call this my money machine.");

//Create variable and prompt user for how much money they can put away to save per day.
var moneySaved = prompt(" How much money can you put away per day?"+" Enter in dollar amounts.");
console.log(moneySaved);

//Create a variable for current date
var numberOfDays = prompt(" Tell me how many days");
console.log(numberOfDays);

//create var for calculations for money machine total savings
var totalMoneySaved = moneySaved*numberOfDays;
console.log(totalMoneySaved);

console.log(name+" money saved  "+totalMoneySaved+" Congradulations this is how much money you can save.");
alert(name+" money saved  "+totalMoneySaved+" Congradulations this is how much money you can  save.");