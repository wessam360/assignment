var nc = "wessam Aftab";
let t1= nc.toUpperCase(),t2=nc.toLowerCase();
// console.log(`${nc} in lower case ${t2}. 
// ${nc} in upper case :${t1}.`);
let t3=t2.split(` `),t5;
let t4=[];
// title case:
for(let i=0;i<t3.length;i++){
    t5=t3[i].charAt(0)
t4[i]=t5.toLocaleUpperCase()+t3[i].slice(1);
}
console.log(t4.join(` `));

