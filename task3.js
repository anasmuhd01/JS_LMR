students = [
    { id: 1, name: "manu", batch: 'BSC CS', score: 97 },
    { id: 1, name: "vinu", batch: 'BCA', score: 82 },
    { id: 1, name: "anu", batch: 'BSC CS', score: 91 },
    { id: 1, name: "sandy", batch: 'BCA', score: 78 },
]


// students.filter(item => {
//     if (item.batch == 'BCA') {
//         console.log(item.name)
//     }
// })

// students.filter(item => item.batch == 'BCA').forEach(item => { console.log(item.name) })


// res = students.map(item => item.score).reduce((m1, m2) => m1 + m2)
// console.log(res)
//same out with differ method
// res = students.reduce((m1, m2) => m1 + m2.score, 0)
// console.log(res)

// res = students.find(item => item.name == 'anu')
// console.log(res)

// res = students.map(item => item.batch)
// console.log(res)


// unique = [new Set(res)]
// console.log(unique)

//show students in the ascending order of mark
res = students.map(item => item.score).sort
console.log(res)