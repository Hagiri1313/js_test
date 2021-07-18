let day= 80
if (day>=1 && day<=10) {
    console.log("pervaya decada");
}else if (day>=11 && day<=21) {
    console.log("vtoraya decada");
}else if (day>=22 && day<=31) {
    console.log("tretyya decada");
}else{
    console.log("intrersnyi kalendar'");
}

let month=11
if (month<=2 || month===12) {
    console.log("winter");
}else if (month>=3 && month<=5){
    console.log("spring");
}else if (month>=6 && month<=8) {
    console.log("summer");
}else if (month>=9 && month<=11) {
    console.log("autumn");
}

let min=30.45
if (min>=0 && min <=15.59) {
    console.log ("first chvert'");
}else if (min>=16 && min<=30.59){
    console.log("second chvert'");
}else if (min>=31 && min<=45.59) {
    console.log ("third chvert'");
}else if (min>=46 && min<=59.59){
    console.log("fourth chvert'")
}else {
    console.log ("false");
}

let age=10
if (age>=0 && age <=17){
    console.log("nesovershennoletnyi");
}else {
    console.log("sovershennoletnyi");
}



