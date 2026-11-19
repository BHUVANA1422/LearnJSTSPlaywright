// Nested the For Loop
// 1 Array - W

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(i, j);
    }
}



// output:
// 0 0
// 0 1
// 0 2
// 1 0
// 1 1
// 1 2
// 2 0
// 2 1
// 2 2


//What is a nested for loop?
// A nested for loop means one for loop inside another for loop.

// In your code:
// - Outer loop uses i.
// - Inner loop uses j.


// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(i, j);
//     }
// }


// Think like this:
// - Outer loop (i) starts first.
// - Inner loop (j) executes completely.
// - Once the inner loop finishes, the outer loop increases by 1.
// - Then the inner loop starts again from 0.
// 2. Understand each line

// Outer loop:


// for (let i = 0; i < 3; i++)


// Part                        Meaning
// let i = 0                   Start i from 0
// i<3                         continue as long as i<3
// i++                         increase i by 1

// So, the outer loop values are 0, 1, 2.

// Inner loop:

// for (let j = 0; j < 3; j++) 

// Similarly:
// - Start j from 0.
// - Continue while j is less than 3.
// - Increase j by 1.
// So, the inner loop values are also 0, 1, 2.
// 3. Let's execute step by step
// This is the most important part. Pay attention to how j behaves.

// First round: i=0
// The inner loop runs completely.
// i               j       output
// 0               0        0 0
// 0               1        0 1
// 0               2        0 2


// Second round: i = 1

// Now outer loop increases i to 1.

// The inner loop starts again from j = 0.

// i               j       output
// 1               0        1 0
// 1               1        1 1
// 1               2        1 2


// Third round: i = 2

// Outer loop increases i to 2.

// Again, inner loop starts from j = 0.

// i               j       output
// 2               0        2 0
// 2               1        2 1
// 2               2        2 2


// 4. Final output


// output:
// 0 0
// 0 1
// 0 2
// 1 0
// 1 1
// 1 2
// 2 0
// 2 1
// 2 2






