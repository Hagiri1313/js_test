



// HOMEWORK MASSIV
//
// HOMEWORK MASSIV

// ZADANIE 1;
let arr123 = [1, 2, 3, 4, 5, 6, 7, 8]

function showSepar(start, end) {
    if (start < end) {
        let result = arr123.slice(start, end);
        console.log(result);
    } else if (start > end) {
        let arr321 = arr123.reverse();
        let result2 = arr321.splice(end, start)
        console.log(result2);
    }
}
showSepar(2, 6);


// ZADACHA 2
const num = "123456789123456789";

const text = '554254254245';

function spliceNum(tmp, index, symbol) {

  let result = ""
  for (let i = index; i < tmp.length; i++) {
    if (tmp[i] % 2 !== 0 && i < tmp.length-1){
      result += tmp[i] + symbol;
    } else {
      result += tmp[i];
    }
  }
  console.log (result)
}

spliceNum('111111111',3,"O");

// ZADANIE 3;
const array1 = [1,2,3,4,5,6,7,8,9,10]
const array2 = ["Roma", "Sasha", "Vlad", "Oleg"];
const wrongLengthArr= [1,2,3]
function changeHalfs (arra) {
    let array3=[]
        if (arra.length % 2 === 0 && arra.length / 2) {
            array3 = arra.splice(arra.length / 2)
            console.log(array3);
            a4= array3.concat(arra);
            console.log(a4)
        } else if (arra.length % 2 !== 0){
            console.log ("Нечетная длинна масива")
        }
}
changeHalfs(array1)
changeHalfs(array2)
changeHalfs(wrongLengthArr)

// Zadacha so zvezdochkoi

const arr3 = ['a', 'b'];
const arr4 = ['b', 'c'];
const arr5 = ['b', 'e', 'c'];
const arr6 = ['b', 'b', 'e'];
const arr7 = ['b', 'c', 'e'];
const arr8 = ['b', 'e', 'c'];

const disting = (value, index, self) => {
  return self.indexOf(value) === index;
}

const intersection = (...arrays) => {
  if (arrays.length > 1) {
    let gapa = arrays[0]
    for (let i = 1; i < arrays.length; i++) {
      gapa = gapa.concat(arrays[i]);
    }
    console.log('result =>>> ', gapa);
    const gapa2 = [];

    gapa.forEach(element => {
      let numberOfRepition = 0;
      for(let j = 0; j < gapa.length; ++j ) {
        if(element === gapa[j]) {
          ++numberOfRepition;
        }
      }

      if (numberOfRepition > 1) {
        gapa2.push(element);
      }
    });

    const resultArray = gapa2.filter(disting);
    console.log('resultArray ===>>> ', resultArray);
  }
}

intersection(arr3, arr4, arr5);





// function one () {
//     return 1;
// }
// console.log(one())
//
//
// function showUserName (name, familia){
//     console.log("Privet , tu snova vihodish na svaz'"+name, "" +familia);
//
// }
// showUserName("Kolya","Nosachenko");
//
// //function loco () {
// //    return 1;
// //}
// //console.log(loco())
//
//
//
// let nameOfUser = "Nik";
// let surname = " Nos"
// function showPrivet () {
//     const mas= "Privetyli "
//     console.log( mas+ nameOfUser +  surname);
// }
// showPrivet(nameOfUser,  surname)
//
//
// function showAllArguments () {
// console.log (arguments)
// }showAllArguments(1, 2, 3, 4, 5, 100)
//
//
// function showAllArguments (... hgfh) {
//     console.log (hgfh)
// }showAllArguments(1, 2, 3, 4, 5, 100);
//
//
//
// //osnovnoe dz
// function sayage (age) {
//     if (age > 18) {
//         return "ti uge vzrosliy" ;
//     }else {
//         return "net takogo zakona" ;
//     }
// }
// console.log(sayage(0))
//
// /*
//
// function showDacade (day) {
//     const i = day
//     if (i <= 10) {
//         return "PD";
//     } else if (i >= 11 && i <= 21) {
//         return "SD";
//     } else if (i >= 22 && i <= 31) {
//         return "TD";
//     }
// }
// console.log(showDacade(28))
// */
//
//
//
//
//
// // bonus
//
// /*
//
// function showUmnog (start, end) {
//     let resoult = 2
//     for (let i = start; i <= end; i++) {
//         if (i % 2 === 0) {
//             resoult *= i
//         }
//     }
//     return resoult
// }
// console.log(showUmnog(6,10))*/
//
//
// // let arr = ["bibop", 1, 3, 6, 7, 1]
// // let deleterd = arr.pop ()
// // console.log(deleterd)
// // let deleterd2 = arr.shift()
// // console.log(deleterd2)
//
//
// // let alfa = "1 2 3 4 5"
// // let beta = alfa.split( " " );
// // console.log(beta);
//
//
// // let arr1= [1, 2, 3, 4, 5, 6, 7]
// // // for (i = 0; i <= arr1.length; i++){
// // //     console.log(arr1 [i] )
// // // }
// // //
// // // console.log (arr1.reverse())
// //
// // let arr2 = arr1.join(" ");
// // console.log (arr2)
// //
// // console.log (arr1.indexOf(9))
// //
// // console.log (arr1.slice (4, 6) );




// let arr4 = [
//     {
//         name: "AAA1",
//         location: "SSS1",
//     },
//     {
//         name:"AAA13",
//         location: "SSS13",
//     },
//     {
//         name:"AAA12",
//         location: "SSS12",
//     },
// ];
// let finItem = arr4.find((item) => item.name === "AAA1");
// console.log (finItem);


/*const arr1 = [1, 2];
const arr2 = [2, 3];
const arr3 = [4, 5];
const arr4 = [5, 6];

// const arr3 = ['a', 'b'];
// const arr4 = ['b', 'c'];
// const arr5 = ['b', 'e', 'c'];
// const arr6 = ['b', 'b', 'e'];
// const arr7 = ['b', 'c', 'e'];
// const arr8 = ['b', 'e', 'c'];

const intersection = (...arrays) => {
    console.log("arrays ===>>>>  ", arrays);
    if (arrays.length > 1){
        // const hahha1 = arrays[0];
        // const hahha2 = arrays[1]
        // const ahah = hahha1.concat( hahha2)
        // console.log(ahah)
        let gapa = []
        for (let i = 0; i < arrays.length; i++) {
            gapa = arrays[i].concat(arrays[i+1]);
        }
        console.log(gapa);
    }
}
intersection(arr1, arr2,);*/

// function sayHello (...name123){
//     console.log("Hello "+ name123[0] +  name123[1]);
// }
// const sdsdsss="Kolya";
// sayHello(sdsdsss, " ghghg", "dsfsdfsd", "dfdsfsdf");




