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


//swtch statement 56_iq.JS
let testScore = 85;
switch (true) {
    case (testScore >= 95):
        console.log("Outstanding — Top performer");
        break;
    case (testScore >= 85):
        console.log("Excellent — Above expectations");
        break;
    case (testScore >= 70):
        console.log("Good — Meets expectations");
        break;
    case (testScore >= 50):
        console.log("Needs Improvement");
        break;
    default:
        console.log("Unsatisfactory — Requires training");
}

//switch statement 57_IQ.js
let x = 10;
switch (x) {
    case 10:
        let b1 = 1;
        console.log(b1);
        break;
    case 10:
        let b2 = 2;
        console.log(b2);
        break;
    default:
        console.log("d");

}