Promise.all = function (promises) {
    console.log('lrx====abc');
    return new Promise((resolve, reject) => {
        let result = [],
            index = 0,
            len = promises.length
        if (len === 0) {
            resolve(result)
            return;
        }

        for (let i = 0; i < len; i++) {
            // 为什么不直接 promise[i].then, 考虑 promise[i] 可能不是一个 promise 对象
            Promise.resolve(promise[i]).then(data => {
                result[i] = data
                index++
                if (index === len) resolve(result)
            }).catch(err => {
                reject(err)
            })
        }
    })
}


