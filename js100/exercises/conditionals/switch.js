// switch statement is used to select one of many code blocks to be executed.
// The switch expression is evaluated once. The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.

let name = 'Aman';

switch(name) {
        case 'Hasib':
                console.log('Good morning, Hasib');
                break;
        case 'Aman':
                // This clause will be executed, since name is equal to Aman
                console.log('Good morning, Aman');
                // The break statement will stop the execution inside the clause.
                break;
        case 'Sahil':
                console.log('Good morning, Sahil');
        default:
                // If there is no match, the default code block is executed.
                console.log('Good morning');
}


// If we omit the break statement, the next case will be executed even if the evaluation does not match the case:

switch(name) {
        case 'Hasib':
                console.log('Good morning, Hasib');
        case 'Aman':
                console.log('Good morning, Aman');
        case 'Sahil':
                console.log('Good morning, Sahil');
        default:
                console.log('Good morning');
}
// returns:
// Good morning, Aman
// Good morning, Sahil
// Good morning

