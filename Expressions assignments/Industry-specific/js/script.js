/**
 * Created by theresaparks on 7/15/14.
 */

//alert ("testing 1,2,3");


// create variable for how many trays per case

var traysPerCase=3;
console.log(traysPerCase);


// create variable for how many crabs per tray
var crabsPerTray=30;
console.log(crabsPerTray);



//create variable to show how many cases per pallet
var casesPerPallet=20;
console.log(casesPerPallet);


//create variable on how many pallets processed for that day

var palletsProcessed =prompt("How many pallets processed today");
console.log(palletsProcessed);
//calculations of total crabs processed for that day

var totalCrabsProcessed =traysPerCase*crabsPerTray*casesPerPallet*palletsProcessed;
console.log(totalCrabsProcessed);



alert ("You Processed this many crabs today"+totalCrabsProcessed);


