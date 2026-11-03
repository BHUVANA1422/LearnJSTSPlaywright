let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("Launching browser in:", browserMode, "mode");



//45_Nullish.js

// let amul = null;
// let val = amul ?? "NANDANI Milk";
// console.log(val);


// let api_response = null;
// let responsedata = api_response ?? "{}";
// console.log(responsedata);

let api_response1 = "Pramod";
let responsedata1 = api_response1 ?? "{}";
console.log(responsedata1);