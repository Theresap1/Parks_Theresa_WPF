/*
Theresa Parks
WPF 1406 section 01
personal
*/

//alert ("Testing 1,2,3");

//create a js file that will tell us how many sodas they drink in a month


//create a variable to hold the persons name
var name = prompt(" Please type in your name:");

//console.log out that name
console.log(name);

//Alert the user and tell him/her Hello
alert(" Welcome " +name+"! We have a few more questions for you.");

//Create variable and prompt user for how many sodas they drank today.
var cansDrank = prompt(" How many cans of soda did you drink in one day?");
console.log(cansDrank);


//Create a variable for current date
var numberOfDays = prompt(" How many days do you want drink soda?");
console.log(numberOfDays);


//Calcucalations
var totalCans = cansDrank*numberOfDays;
console.log(totalCans);

//Console.log and alert with final info
console.log(name+" you have drank "+totalCans+" cans of soda.");
alert(name+" you have drank "+totalCans+" cans of soda.");

/*
//Arrary
var dansArray = ["red", "blue", "green"];
console.log(dansArray[0]+" "+ dansArray[1]+" "+dansArray[2]);
    */