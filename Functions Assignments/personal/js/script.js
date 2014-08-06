/**
 * Created by theresaparks on 7/31/14.
 */

//alert("a,b,c");

var minNum= 0;
var maxNum= 69;

//create name for function for picking lottery numbers


//Parameter- Goes in the function definition - import numbers or variables into the function

function lotteryNumber (min, max){

   // create a variable to hold lottery numbers

   // We use parameter instead of outside variables!!!


    var lotteryNumber = Math.round(Math.random() * (max - min) + Number(min));
    //console.log(lotteryNumber);

    //Return the loterryNumber so we can use it outside of the function
    return lotteryNumber;

    //console.log(lotteryNumber);
}

    //function(lotteryNumPick)
    //creating a for loop to pick 6 random numbers for lottery
for(var a=0; a<6; a++){

    //Arguements go in the function call
    //Crate a variable that CATCHES the RETURNED value from the function
   var results = lotteryNumber(minNum,maxNum);

    //We use the returned value
    console.log(" Your lucky number is "+results);

}