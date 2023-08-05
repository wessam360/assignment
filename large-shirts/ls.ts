function make_shirt(size:string=`large`,msg:string=`i love typescript`){
console.log(`I HAVE SIZE ${size}. ${msg}`)
}
function mediumshirt(size:string=`medium`,msg:string=`OOPS, IT IS OBJECT ORIENTED`){
    console.log(`I HAVE SIZE ${size}. ${msg}`)
}
function ANYSHIRT(size:string,msg:string){
    console.log(`I HAVE SIZE ${size}. ${msg}`)
}
// make_shirt( undefined,`ops`); for chaging second default value
make_shirt();
mediumshirt();
ANYSHIRT(`XL`,`bug is error`);

