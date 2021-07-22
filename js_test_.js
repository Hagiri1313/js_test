//найдите суму чисел от 1 до 100 исользуя фор вайл  ду вайл

let l= 0
let sumf = 0;
for ( ; l <= 100; l++){
    sumf += l;

}
console.log(sumf)

let sumw = 0;
let n = 0
while ( n < 100) {
    n++
    sumw += n
}
console.log(sumw)

let sumd = 0;
let c = 0;
do {
    c++
    sumd += c;
}while (c < 100);
console.log(sumd)

// Здесь мне подсказали как можно сделать иначе
let i, result = 0;

for ( i = 0; i <= 100; i++) {
    result += i;
}
console.log(result);
result=0, i = 0;


while (i <= 100) {
    result += i;
    ++i;
}
console.log(result);
result=0, i = 0;

do {
    result += i;
    ++i;
} while (i <= 100)

console.log(result)
