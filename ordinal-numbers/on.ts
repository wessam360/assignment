let ordinal_numbers=[1,2,3,4,5,6,7,8,9];
ordinal_numbers.forEach((value)=>{
if(value==1 || value==2)
    console.log(`${value}st`)
else if(value==3)
console.log(`${value}rd`)
else
console.log(`${value}th`)
})
