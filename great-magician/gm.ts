const magicians_names:string[]=[`Dynamo`,`Paul Daniels`,`Derren Brown`,`Ryan`];
function show_magicians(names:string[]){
    for(let x of names){
        console.log(x);
    }
}
function great_magicians(names:string[]){
    for(let x of names){
        console.log(`GREAT ${x}`);
    }
}
great_magicians(magicians_names)
show_magicians(magicians_names)