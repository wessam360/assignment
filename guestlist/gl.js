"use strict";
let guest_list = [`aftab`, `shadarbar`, `mansoor`, `faisal`];
for (let i = 0; i < guest_list.length; i++) {
    console.log(`On the occasion of Eid, ${guest_list[i]}(including family) is invited to 
    dinner.`);
}
// program 16 : chaging guest list
console.log(`\n${guest_list[1]} can not come to dinner\n`);
// inviting new person inplace of it
guest_list[1] = `azmat kayani`;
for (let i = 0; i < guest_list.length; i++) {
    console.log(`On the occasion of Eid, ${guest_list[i]}(including family) is invited to 
    dinner.`);
}
// program 16 : more guests
console.log(` \ni have found bigger table\n`);
guest_list.unshift(`arsalan`);
guest_list.push(`naeem`);
guest_list.splice(3, 0, `wessam`);
for (let i = 0; i < guest_list.length; i++) {
    console.log(`On the occasion of Eid, ${guest_list[i]}(including family) is invited to 
    dinner.`);
}
// program 17: shrinking guest list
console.log(`\n i have only space for two
person because my new dinner table will not arrive. \n`);
let i = 1, leaving_guest, len = guest_list.length;
while (i <= (len - 2)) {
    leaving_guest = guest_list.pop();
    console.log(` we are sorry, ${leaving_guest} is
    not invited to dinner\n`);
    i++;
}
for (let i = 0; i < guest_list.length; i++) {
    console.log(`${guest_list[i]}(including family) is  still invited to 
    dinner.`);
}
guest_list.pop();
guest_list.pop();
console.log(`list must be empty : `, guest_list);
