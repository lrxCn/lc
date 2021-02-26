async function t1() {
    console.log(1)
    console.log(2)
    new Promise(function (resolve) {
        console.log(3)
        resolve();
    }).then(function () {
        console.log(4)
    })
    await new Promise(function (resolve) {
        console.log(5)
        resolve();
    }).then(function () {
        console.log(6)
    })

    console.log(7)
    console.log(8)
    new Promise(function (resolve) {
        console.log(9)
        resolve();
    }).then(function () {
        console.log(10)
    })
}



setTimeout(function () {
    console.log(11)
}, 0)

async function t2() {
    console.log(12)
    console.log(13)
    await Promise.resolve().then(() => console.log(14))
    console.log(15)
    console.log(16)
}

t1()
new Promise(function (resolve) {
    console.log(17)
    resolve();
}).then(function () {
    console.log(18)
})
t2()

console.log(19);




// 宏任务：11
// 微任务：4 6 18 14
// ww: 789 15 16
// www:10
// 同步任务 1 2 3 5 17 12 13 19
// 1 2 3 5 17 12 13 19 4 6 18 14 789 15 16 10 11
// 1
// 2
// 3
// 5
// 17
// 12
// 13
// 19
// 4
// 6
// 18
// 14
// 7
// 8
// 9
// 15
// 16
// 10
// 11

// 同步 1 2 3 5 17 12 13 19

// 微任务 4 6 【7 8 9】 【【10】】 18 14 【15】【16】

// 宏任务 11

// 1 2 3 5 17 12 13 19 4 6  18 14 7 8 9 15 16 10 11