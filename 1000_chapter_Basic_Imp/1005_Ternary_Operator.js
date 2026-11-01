let age = 17;
let can_I_go = age > 18 ? "Yes" : "No";
console.log(can_I_go);

console.log("================================");

let environment = "staging";
let baseUrl = environment === "prod"
    ? "https://api.example.com"
    : "https://staging-api.example.com";
console.log(baseUrl);