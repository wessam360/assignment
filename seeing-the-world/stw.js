"use strict";
let places = [`BURJ KHALIFA`, `NEELUM VALLEY`, `FAIREY MEADOWS`, `HUNZA`, `EIFFEL TOWER PARIS`];
console.log(`\n places not in alphabetic order : \n`);
for (let i = 0; i < places.length; i++) {
    console.log(places[i]);
}
let newy = places;
newy.sort();
console.log(`\n places in alphabetic order without manipulating original : \n`);
for (let i = 0; i < places.length; i++) {
    console.log(newy[i]);
}
console.log(places);
