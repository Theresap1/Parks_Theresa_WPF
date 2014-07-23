/**
 * Created by theresaparks on 7/20/14.
 */

//alert (" testing 1,2,3 ");

var name =prompt("What is your name");
    console.log(name);

var amountSaved=Number(prompt("How much money have you saved 500 or 1000 or 3000"));
    console.log(amountSaved);


if (amountSaved===3000){
    console.log("goToAtlanticCity");
} else if(amountSaved===1000 ){
    console.log("go to vegas");


}else if(amountSaved === 500){
  console.log("go to disney");
}else{
    console.log("You need to type in 500, 1000, 3000. ")
}