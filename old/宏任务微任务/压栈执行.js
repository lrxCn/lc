function taskOne() {
    console.log(1)
    setTimeout(() => {
        Promise.resolve().then(() => {
            console.log(2)
        })
        setTimeout(() => {
            console.log(3)
        }, 0)
    }, 0)
    taskTwo()
}


function taskTwo() {
    console.log(4)
    Promise.resolve().then(() => {
        setTimeout(() => {
            console.log(5)
        }, 0)
    })

    setTimeout(() => {
        console.log(6)
    }, 0)
}

setTimeout(() => {
    console.log(7)
}, 0)

taskOne()

Promise.resolve().then(() => {
    console.log(8)
})

// setTimeout(()=>{
//     Promise.resolve().then(() => {
//         console.log(1)
//     })
// },0);

// setTimeout(() => {
//     console.log(2)
// }, 0);

