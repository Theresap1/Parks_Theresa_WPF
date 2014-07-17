/**
 * Created by theresaparks on 7/15/14.
 */

//alert ("testing 1,2,3");

//create a variable to show how many soft crabs we process in a day
 // create variable for how many trays per case
var traysPerCase =("trays 3 per case");
console.log(traysPerCase);

// create variable for how many crabs per tray
var crabsPerTray =("crabs 30 per tray");
console.log(crabsPerTray);


//create variable to show how many cases per pallet

var casesPerPallet =("cases 24 per pallet");
console.log(casesPerPallet);

//create variable on how many pallets processed for that day

var palletsProcessed =prompt("How many pallets processed today");
console.log(palletsProcessed);

//calculations of total crabs processed for that day

var totalCrabs =traysPerCase*crabsPerTray*casesPerPallet;
console.log(totalCrabs);

alert("You Processed this many crabs today"+totalCrabs);


