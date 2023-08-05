"use strict";
let current_users = [`wesam`, `faisal`, `naeem`, `arsalan`, `mansoor`, `azmat`];
let new_users = [`aqeel`, `wesam`, `ARSALAN`, `umair`, `ali munir`, `jawad`, `junaid`];
let a, b, l, nam;
for (let i = 0; i < new_users.length; i++) {
    for (let j = 0; j < current_users.length; j++) {
        a = new_users[i].toLowerCase();
        b = current_users[j].toLowerCase();
        l = !(a == b);
        if (a == b) {
            console.log(`enter a new name.${new_users[i]} is in use`);
            break;
        }
    }
    if (l == true) {
        console.log(`${a} is available for use`);
    }
}
