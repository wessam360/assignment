let usernames=[`ali`,`ahmed`,`faisal`,`admin`,`wessam`];
let l=usernames.length
for(let i=0;i<l;i++){
   let a= usernames.pop();
   console.log(`soory , ${a} is removed`)
}
if(usernames.length==0){
    console.log(`we need some more users`);
}

