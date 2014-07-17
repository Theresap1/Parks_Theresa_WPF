/**
 * Created by theresaparks on 7/15/14.
 */


//alert ("testing 1,2,3");

//how much money you spend in gas per yr.

// create variable for size of gas tank
var tankSize =prompt("what is the size of your gas tank");
console.log(tankSize);

//create variable for price of gas

var priceGas =prompt("what is price of gas");
console.log(priceGas);


//create variable how often you fill up car by weeks

var weeksFilled =prompt("how many weeks you fill up vehicle");
console.log(weeksFilled);

//calculations of tankSize * priceGas * weeksFilled

var totalSpent =tankSize*priceGas*weeksFilled;
console.log(totalSpent);

alert(" You Spend this much in gas "+totalSpent);


