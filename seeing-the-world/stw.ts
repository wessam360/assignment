let places=[`BURJ KHALIFA`,`NEELUM VALLEY`,`FAIREY MEADOWS`,`HUNZA`,`EIFFEL TOWER PARIS`];
console.log(`\n places in original order : \n`)
    console.log(places);
let newy=places.slice(0).sort(); //ceating a shallow copy.

console.log(newy)
console.log(`original array : `,places)

let rev=newy.slice(0).reverse(); // ONLY CHANGES ORDER.NOT REVERSE ALPHABETICALLY.
console.log(`places in reverse order :`,rev);
console.log(`\noriginal array : `,places);

places.reverse();
console.log(`order of list is reversed :`,places);

places.reverse();
console.log(`order of list again in orignal order :`,places);


places.sort();
console.log(`sorted list : `,places);

places.reverse;
console.log(`list in reverse aplhabetical order :`,places);
