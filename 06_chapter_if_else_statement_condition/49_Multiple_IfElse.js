let score = 92;
if (score >=100 || score < 0) {
    console.log("Invalid score");
}
else {
    //valid score
    if (score >= 90){
        console.log("A grade - Excellent");
    }
    else if (score >=80 && score <90){
        console.log("B grade - Very Good");
    }
    else if (score >= 70 && score <80){
        console.log("C grade - Good");
    }
    else if (score >= 60 && score <70){
        console.log("D grade - Average");
    }
    else if (score >= 50 && score <60){
        console.log("E grade - Poor");
    }
    else{
        console.log("F grade - Fail");
    }
    
}