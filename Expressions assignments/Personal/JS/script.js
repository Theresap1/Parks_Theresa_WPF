/**
 * Created by theresaparks on 7/15/14.
 */
//alert ("testing 1,2,3");

//create variable for how many cigarettes smoked per day
var cigsSmoked =prompt("how many packs cigarettes you smoke a day");
console.log(cigsSmoked);

//create a variable for how many days they smoke
var numberOfDays = prompt("how many days do you smoke?");
console.log(numberOfDays);

//calculations of cigarettes smoked
var totalCigs =cigsSmoked*numberOfDays;
console.log(totalCigs);


alert(" you smoked "+totalCigs);
