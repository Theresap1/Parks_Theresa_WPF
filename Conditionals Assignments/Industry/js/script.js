/**
 * Created by theresaparks on 7/20/14.
 */


//alert ("testing 1,2,3");

//prompt user to how many hours worked by friday

var name =prompt("Please type in your name");
console.log(name);

alert (" Hello "  +name);

prompt("Do you want Saturday off");


var hoursWorked = prompt("Hours worked by friday");
console.log(hoursWorked);


saturday = (hoursWorked < 40) ? " working on saturday" : "off saturday ";
console.log(saturday);

alert ("you are " + saturday);