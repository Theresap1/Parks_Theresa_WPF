/**
 * Created by theresaparks on 7/28/14.
 */

//alert("1,2,3");


//create alert and prompt for users price for house before discount

alert=prompt(" Type in house price before discount");

//create a function for first time buyer discount

function firstTimeBuyerDiscount(){

   //create a variable for price of house
    var housePrice = alert;
    //create variable for the discount rate 0.25  /  25%
    var discountRate = 0.25; // = 25%
    //create variable for discounted amount for price of house
    var discountAmount =housePrice * discountRate;
    //create variable for price of house after discount net price
    var netPrice = housePrice - discountAmount
    //create variables for the calculations
    var line1 = " house Price:" + housePrice;
    var line2 = "discount price:" + discountAmount;
    var line3 = "net price:" + netPrice;


    console.log (line1) + document. write (line1);
    console.log (line2) + document. write (line2);
    console.log (line3) + document. write (line3);
};


firstTimeBuyerDiscount();

