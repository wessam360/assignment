let car=`Honda`,clas=`12`,rollno=420,height=12,color=`blue`;
let body=`flat`,diseases=false,size=`11`,bones=206,ribs=24; 
// 5 false conditons
console.log(car==car.toLowerCase(),clas===`13`,rollno!=420,height!=12,color==`green`)
// 5 true conditons
console.log(body!=`ok`,diseases==false,size==`11`,bones==206,ribs===24);
// clas and size only work for javascript not typescript.

// more condtion test program #24:
let str=`ali`,str1=`bli`;
console.log(str==`ali`,str!=`ali`,str==`Ali`,str>str1,str<str1,str<=str1);//comparision on basis of ascci-code.method:charCodeAt()
console.log(str[0]>=`a` && str[0]<=``,str==`ali` || str1==`dog` );
let cars=[`honda`,`suzuki`,`ford`,`tesla`,`ferari`];
console.log(cars.indexOf(`ford`)==2?`ford is present`:`ford is not present`);
if(cars.indexOf(`ali`)==-1){
    console.log(`ali is not in array`)

}
else{
    console.log(`ali is present in the array`);
}


