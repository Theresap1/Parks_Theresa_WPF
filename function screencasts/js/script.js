/**
 * Created by theresaparks on 7/27/14.
 */

//alert("1,2,3");

//function functionName() {
    //code the function runs
//}


// curly braces are for blocks of code
// parenthesis are for parameters
//functions have names so we can refer to them later.


//function outptMsg(){
    //console.log("Good Morning World");
//}



var width = 5;

function calcArea(){
    var width = 28;
    var height =30;
    var area = width * height;
    console.log(area);
}


calcArea();
calcArea();
calcArea();

// variable scope
// inside and outside of functions

console.log(width);

//if it is called outside the function it will use the var that is outside
//if it is called on the inside of the function then it will use the var in the function
