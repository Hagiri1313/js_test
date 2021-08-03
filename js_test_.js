// Неопознанные летающие объедки
// Домашнее задание

                                // Задача 1
let obj1= {
    a:1,
    b:2,
};

let obj2= {
    a:1,
    b:2,
};
let obj3= {
    a:8,
    b:9,
};

let obj4= {
    a:1,
    b:2,
    c:3,
};
let obj5= {
    number:1,
    numberok:2,
};
const isObj = (firstObj, secondObj) => {
    let obj1Props = Object.getOwnPropertyNames(firstObj);
    let obj2Props = Object.getOwnPropertyNames(secondObj);
    // Что значат записи выше: по сути у объекта нету такого свойства как .length, однако это свойствао есть у массива.
    //Данная запись преобразует ключи объекта в массив. Например для первого моего объекта массив будет ["a","b"]. Далее сравниваем длинну массива.
    // способ рабочий действует на все мои объекты и выовдит всё как нужно
    if (obj1Props.length !== obj2Props.length){
        return false;
    }
    for (const key in firstObj) {
        if (firstObj[key] !== secondObj[key]) {
            return false;
        }
    }
    return true;
}
console.log(isObj(obj1 , obj2));

                                                    //Задача2

function Farm(leaveplace, ate) {
    this.leaveplace = leaveplace;
    this.ate = ate;
}
let pig = new Farm ("sarai", "morkva");
let horse = new Farm ("stoilo", "apple");
let rabbit = new Farm ("sarai", "morkva");
let unicorn = new Farm ("stiolo", "apple");








// let user = {
// name: "Koly",
//   surname: "jokl",
// }
// user.name = "ebashu"
// delete user.name
// console.log(user);

// let alpha ={
//   name: "gosha",
// }
// let beta ={}
// function isEmpty(obj){
//   for (let i in obj){
// return false
//   }
// return true
// }
//
// console.log(isEmpty(beta));

// let obj1 = {
//   name: "Kolya",
//   age: 24,
// }
//
// Object.keys(obj1).forEach((key) => console.log(obj1[key]));
// let fruit = "apple"
// let bag ={
//     [fruit]: 21
// }
// console.log(bag)




// function makeUser(name, age) {
//     return {
//         name: name,
//         age: age
//
//     };
// }
//
// let user = makeUser("John", 30);
// console.log(user); // John


// let perm1 = 12312
// let  perm2= perm1
// perm2= 123
// console.log(perm2 === perm1)
//
// let perm3= {name: "jaja"};
// let perm4 =perm3;
// perm4.name = "atlz"
// console.log(perm3.name);

// let user = {
//     name: "John"
// };
//
// let admin = user;
//  user= null
// console.log(user);
// console.log( admin);

// let user = {
//     name: "Pete",
//     age: 28,
//     sizes: {
//         height: 168,
//         width: 60
//     }
// }
//
// function cloneObject(obj) {
//     let clone = {};
//
//     for (let key in obj) {
//         if (typeof obj[key] == "object") {
//             clone[key] = cloneObject(obj[key]);
//         } else {
//             clone[key] = obj[key];
//         }
//     }
//
//     return clone;
// }
//
// console.log(user);
// console.log( cloneObject(user) );