"use strict";
const promptsync = require(`prompt-sync`);
let input = promptsync();
let r;
do {
    let age = input(`enter your age? `);
    age = parseInt(age);
    if (age < 2)
        console.log(`you are baby`);
    else if (age >= 2 && age < 4)
        console.log(`you are toddler`);
    else if (age >= 4 && age < 13)
        console.log(`you are kid`);
    else if (age >= 13 && age < 20)
        console.log(`you are teenager`);
    else if (age >= 20 && age < 65)
        console.log(`you are adult`);
    else if (age >= 65)
        console.log(`you are elder`);
    else
        console.log(`enter valid age`);
    r = input(`enter n for exit `);
} while (r !== `n` || r !== `N`);
