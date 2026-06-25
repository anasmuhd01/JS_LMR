//print even numbers upto 20
// find sum of numbers from 1 to 100
// find factorial of a given number
num = 5


// for (i = 2; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }


// number = 100
// sum = number * (number + 1) / 2
// console.log(sum)

// function fact(a) {
//     if (a == 1) {
//         return 1
//     }
//     return a * fact(a - 1)
// }

// res = fact(5)
// console.log(res)
limit = 4
for (i = 1; i <= limit; i++) {

    star = ""
    for (k = limit; k >= i; k--) {
        star += " "
    }
    for (j = 1; j <= i; j++) {
        star += "* "
    }
    console.log(star)
}