"use strict";
const magicians_names = [`Dynamo`, `Paul Daniels`, `Derren Brown`, `Ryan`];
function show_magicians(names) {
    for (let x of names) {
        console.log(x);
    }
}
function great_magicians(names) {
    for (let x of names) {
        console.log(`GREAT ${x}`);
    }
}
great_magicians(magicians_names);
show_magicians(magicians_names);
