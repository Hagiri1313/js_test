
function one () {
    return 1;
}
console.log(one())


function showUserName (name, familia){
    console.log("Privet , tu snova vihodish na svaz'"+name, "" +familia);

}
showUserName("Kolya","Nosachenko");

//function loco () {
//    return 1;
//}
//console.log(loco())



let nameOfUser = "Nik";
let surname = " Nos"
function showPrivet () {
    const mas= "Privetyli "
    console.log( mas+ nameOfUser +  surname);
}
showPrivet(nameOfUser,  surname)


function showAllArguments () {
console.log (arguments)
}showAllArguments(1, 2, 3, 4, 5, 100)


function showAllArguments (... hgfh) {
    console.log (hgfh)
}showAllArguments(1, 2, 3, 4, 5, 100);



//osnovnoe dz
function sayage (age) {
    if (age > 18) {
        return "ti uge vzrosliy" ;
    }else {
        return "net takogo zakona" ;
    }
}
console.log(sayage(0))



// bonus


