import data from './data.json'



  

let user = JSON.parse(JSON.stringify(data));




let newArr = user.users.map(function (item){
    return `${item.firstName}, born at ${item.dateOfBirth} - ${item.knowsAs}`
})

console.log(newArr);

let obj = user.users.find(item => item.firstName==='Bill');

console.log(obj.lastName);


user.users.forEach(element => {
    console.log(element.firstName+" "+element.lastName+'born at'+element.dateOfBirth+" "+element.knowsAs);
});  





let newArr2 = user.users.map((item)=>{
    return `${item.firstName} : ${item.lastName}`
})

let newArr3 = user.users.map((item)=>{
    return `${item.dateOfBirth}`
})

newArr2 = newArr2.concat(newArr3);
console.log(newArr2);




