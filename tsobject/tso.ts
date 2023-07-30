let student:{
    name:string,
    class:number;
    gender:boolean //true for male,false for female
    department:string
}={
name:`wessam`,
class:12,
gender:true,
department:`CS`
}
for(let x in student){
    console.log(x,student[x])
}
