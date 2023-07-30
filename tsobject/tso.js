"use strict";
let student = {
    name: `wessam`,
    class: 12,
    gender: true,
    department: `CS`
};
for (let x in student) {
    console.log(x, student[x]);
}
