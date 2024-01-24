// Write The Function Here
function printInConsole(...values: string[] | number[] | boolean[]): string {
    for (let i = 0; i < values.length; i++) {
        console.log(`The Value ${values[i]} And Type of ${typeof values[i]}`);
        }
        values.forEach((val)=> {
        //     return `The Value ${values[i]} And Type of ${typeof values[i]}`;
    })
    return 'done'
}

// Using The Function => Do Not Edit
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));

// // Output
// The Value Is 1 And Type Is number
// The Value Is 2 And Type Is number
// The Value Is 3 And Type Is number
// The Value Is 4 And Type Is number
// The Value Is 5 And Type Is number
// Done
// The Value Is A And Type Is string
// The Value Is B And Type Is string
// The Value Is C And Type Is string
// Done
// The Value Is true And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is true And Type Is boolean
// The Value Is true And Type Is boolean
// Done