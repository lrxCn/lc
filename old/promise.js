const CONSTANTS = {
    PENGDING: 'PENDING',
    REJECTED: 'REJECTED',
    FULFILLED: 'FULFILLED',
    UNDEFINED: void 0,
}

const isNotType = type => v => typeof v !== type;
const isNotFunction = isNotType('function');

const check = (p1, p2, resolve, reject) => {
    if(p1 === p2){
        return reject('fobidden cycle call')
    }
    if(p1 instanceof MyPromise){
        p2.then(resolve,reject)
    }else{
        resolve(p2);
    }

}

class MyPromise {

    static resolve(v) {
        if(v instanceof Promise){
            return v;
        }
        return new Promise((resolve,reject)=>{
            if(v?.then && !isNotFunction(v?.then)){
                v.then(resolve,reject)
            }else{
                resolve(v)
            }
        })
    }

    static reject() {
        if(v instanceof Promise){
            return v;
        }
        return new Promise((resolve,reject)=>{
            if(v?.then && !isNotFunction(v?.then)){
                v.then(resolve,reject)
            }else{
                reject(v)
            }
        })
    }

    static race(arr) {
        if(!Array.isArray(arr)){
            throw new Error('this first parametter is not Array')
        }

        return new Promise((resolve,reject)=>{
            arr.forEach(p=>{
                MyPromise.resolve(p).then(resolve,reject)
            })
        })
    }

    static all() {
        if(!Array.isArray(arr)){
            throw new Error('this first parametter is not Array')
        }

        return new Promise((resolve,reject)=>{
            const { length } = arr;
            const res = [];
            let total = 0;

            arr.forEach(p=>{
                MyPromise.resolve(p).then((cur)=>{
                    res.push(cur);
                    ++total === length && resolve(res);
                },reject)
            })
        })
    }

    state = CONSTANTS.PENGDING;
    value = CONSTANTS.UNDEFINED;
    reason = CONSTANTS.UNDEFINED;
    onFulfilledCallback = [];
    onRejectedCallback = [];

    constructor(execulator) {
        if (isNotFunction(execulator)) {
            throw new Error('this first parametter is not function')
        }

        execulator(this.resolve.bind(this), this.reject.bind(this))
    }

    resolve(value) {
        if (this.state === CONSTANTS.PENGDING) {
            this.state = CONSTANTS.FULFILLED;
            this.value = value;
            this.onFulfilledCallback.forEach(fn=>fn(this.value));
        }
    }

    reject(reason) {
        if (this.state === CONSTANTS.PENGDING) {
            this.state = CONSTANTS.REJECTED;
            this.reason = reason;
            this.onRejectedCallback.forEach(fn=>fn(this.reason));
        }
    }

    then(onFulfilled, onRejected) {
        if (isNotFunction(onFulfilled)) {
            onFulfilled = v => v;
        }

        if (isNotFunction(onRejected)) {
            onRejected = v => v;
        }

        const p1 = new MyPromise((resolve, reject) => {
            const onF = () => setTimeout(() => {
                try {
                    const res = onFulfilled(this.value);
                    check(p1, res, resolve, reject)
                } catch (error) {
                    reject(error);
                }
            });

            const onR = () => setTimeout(() => {
                try {
                    const res = onRejected(this.value)
                    check(p1, res, resolve, reject)
                } catch (error) {
                    reject(error);
                }
            });

            const macth = {
                [CONSTANTS.FULFILLED]:onF,
                [CONSTANTS.REJECTED]:onR,
                [CONSTANTS.PENGDING]:()=>{
                    this.onFulfilledCallback.push(onF);
                    this.onRejectedCallback.push(onR);
                }
            }
            macth[this.state]?.();
        })

        return p1;
    }

    finnally(callback) {
        return MyPromise.then(()=>{
            callback(this.value);
        },()=>{
            callback(this.reason);
        })
    }
}