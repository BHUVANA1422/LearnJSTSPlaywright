let age = 7;
while(true){
    if( age > 10){
        break;
    }else{
        console.log(age);
    }
    age++;
}

// Explanation:
//while(true) means the loop will keep executing as long as the condition is true.
// It means keep executing the loop continuously because the condition is always true.

// It is called an infinite loop because it will not stop automatically.

// So, how does it stop?

// That's where break comes in!

// break means stop the loop immediately and come out of it.

// In your code, when age becomes greater than 10, the loop stops.

//---------------------------------------------------------------------------

// let num = 2;

// while(true){
//     if(num > 5){
//         break;
//     }
//     console.log(num);
//     num++;
// }

// output:
// 2
// 3
// 4
// 5

// Explanation: Why is 5 printed?

// Because 5 > 5 is false. The loop prints 5 before increasing the value to 6.

// Remember:
// - > means greater than.
// - >= means greater than or equal to.
// You're getting the logic! Keep practising