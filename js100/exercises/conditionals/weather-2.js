// switch statement is used to select one of many code blocks to be executed.
// The switch expression is evaluated once. The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.

let weather = 'snowy';

switch(weather) {
        case 'sunny':
                console.log("It's a beautiful day!");
                break;
        case 'snowy':
                // This clause will be executed, since weather is equal to snowy
                console.log("Take your jacket, it's cold!");
                // The break statement will stop the execution inside the clause.
                break;
        case 'rainy':
                console.log('Grab your umbrella.');
        default:
                // If there is no match, the default code block is executed.
                console.log("Let's stay inside.");
}

