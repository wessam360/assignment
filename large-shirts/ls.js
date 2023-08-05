"use strict";
function make_shirt(size = `large`, msg = `i love typescript`) {
    console.log(`I HAVE SIZE ${size}. ${msg}`);
}
function mediumshirt(size = `medium`, msg = `OOPS, IT IS OBJECT ORIENTED`) {
    console.log(`I HAVE SIZE ${size}. ${msg}`);
}
function ANYSHIRT(size, msg) {
    console.log(`I HAVE SIZE ${size}. ${msg}`);
}
// make_shirt( undefined,`ops`); for chaging second default value
make_shirt();
mediumshirt();
ANYSHIRT(`XL`, `bug is error`);
