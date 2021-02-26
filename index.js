// 1. 手写curry
// 2021年02月21日11:14:46
// const curry = judege = (...args) => fn => fn.length === args.length ? fn.apply(null,args) : arg => judege(arg,...args)
// 2021年02月21日11:16:41

// 2. memorizeFunction
// 2021年02月21日11:53:08
// const memorizeFunction = (fn,_cache={}) => (key,...rest) => {
//     if(_cache[key]!== void 0){
//         return _cache[key]
//     }else{
//         const val =  fn.call(null,key,...rest);
//         _cache[key] = val;
//         return val
//     }
// }
//

// 3. promise
// const check = (p1,p2,resolve,reject) => {
//     if(p1===p2){
//         return reject('fobidden cycle call')
//     }
//     if(p2 instanceof Promise){
//         p2.then(resolve,reject)
//     }else{
//         resolve(p2)
//     }
// }
// const curry = fn =>
//     judge = (...args) =>
//         args.length === fn.length
//             ? fn(...args)
//             : (arg) => judge(...args, arg);

// const isNotType = (type,v)=>typeof v !== type;
// const isNotFunction = curry(isNotType)('function');

// const PENDING = 'PENDING';
// const FULLFILLED = 'FULLFILLED';
// const REJECTED = 'REJECTED';
// const UNDEFINED = void 0;
// class Promise{
//     static race(arr){
//         if(!Array.isArray(arr)){
//             throw new Error('the first param is must be Array');
//         }
//         return new Promise((resolve,reject)=>{
//             arr.forEach(item=>{
//                 Promise.resolve(item).then(resolve,reject)
//             })
//         })
//     }

//     static all(arr){
//         if(!Array.isArray(arr)){
//             throw new Error('the first param is must be Array');
//         }
//         return new Promise((resolve,reject)=>{
//             const {length} = arr;
//             const res = [];
//             let total = 0;

//             arr.forEach(item=>{
//                 Promise.resolve(item).then(now=>{
//                     res.push(now);
//                     ++total === length && resolve(res);
//                 },reject)
//             })
//         })
//     }

//     static resolve(p){
//         if(p instanceof Promise){
//             return p;
//         }else{
//             return new Promise((resolve,reject)=>{
//                 if(!isNotFunction(p?.then)){
//                     p.then(resolve,reject)
//                 }else{
//                     resolve(p);
//                 }
//             })
//         }

//     }

//     static reject(){
//         if(p instanceof Promise){
//             return p;
//         }else{
//             return new Promise((resolve,reject)=>{
//                 if(!isNotFunction(p?.then)){
//                     p.then(resolve,reject)
//                 }else{
//                     reject(p);
//                 }
//             })
//         }
//     }

//     status = PENDING;
//     value = UNDEFINED;
//     reason = UNDEFINED;
//     onFullfilledCallback = [];
//     onRejectedCallback = [];

//     constructor(fn){
//         if(isNotFunction(fn)){
//             throw new Error('the first param is must be function');
//         }

//         fn(this.resolve.bind(this),this.reject.bind(this))
//     }

//     resolve(value){
//         if(this.status===PENDING){
//             this.status = FULLFILLED;
//             this.value = value;
//             this.onFullfilledCallback.forEach(fn=>fn(this.value));
//         }
//     }

//     reject(reason){
//         if(this.status===PENDING){
//             this.status = REJECTED;
//             this.reason = reason;
//             this.onRejectedCallback.forEach(fn=>fn(this.reason));
//         }
//     }

//     then(onFullfiled,onRejected){
//         if(isNotFunction(onFullfiled)){
//             onFullfiled = v =>v;
//         }
//         if(isNotFunction(onRejected)){
//             onRejected = v =>v;
//         }

//         const p = new Promise((resolve,reject)=>{

//             const onF = () => {
//                 try {
//                     const res = onFullfiled(this.value);
//                     check(p,res,resolve,reject)
//                 } catch (error) {
//                     reject(error)
//                 }
//             }

//             const onR = () => {
//                 try {
//                     const res = onRejected(this.value);
//                     check(p,res,resolve,reject)
//                 } catch (error) {
//                     reject(error)
//                 }
//             }

//             const match = {
//                 [FULLFILLED]:onF,
//                 [REJECTED]:onR,
//                 [PENDING]:()=>{
//                     this.onFullfilledCallback.push(onF);
//                     this.onRejectedCallback.push(onR);
//                 }
//             };

//             match[this.status]?.();
//         });

//         return p;
//     }

//     finally(callback){
//         return this.then(()=>{
//             Promise.resolve(callback());
//         },()=>{
//             Promise.reject(callback());
//         })
//     }

//     catch(){}

// }

/*
4. 浏览器缓存
强缓存

pragma : no-cache
cache-control no-store no-chche max-age:秒
expries: 日期

协商缓存
last-modified 2021年02月21日14:13:35
if-modified-since

e-tag：hash
is-none-match
*/

/*
5.this
函数 globalThis
method指向 函数调用者
constructor 被创建的对象
call bind apply
箭头函数箭头指向



*/
// 节流防抖
// 防抖
// const debounce = (fn, _timer) => (...args) => {
//     clearTimeout(_timer);
//     _timer = setTimeout(fn.apply(null,args), 500);
// }

// const throllte = (fn,flag) => (...args) => {
//     if(flag){
//         flag = false;
//         fn.apply(null,args);
//         setTimeout(() => {
//             flag = true;
//         }, 500);
//     }
// }

// cloneDeep
// const cloneDeep = _cloneDeep = (source) => {

//     const caches = new WeakMap();

//     if(typeof source !== 'object'){
//         return source;
//     }

//     if(caches.has(source)){
//         return caches.get(source)
//     }

//     let res;

//     if(Array.isArray(source)){
//         res = []
//     }else if(source instanceof RegExp){
//         res = new RegExp(source.source,source.flags);
//     }else if(source instanceof Date){
//         res = new Date(source);
//     }else if(source instanceof Function){
//         res = function(...args) {
//             return source.apply(this,args)
//         }
//     }else{
//         res = {};
//     }

//     caches.set(source,res);

//     for(let key in source){
//         if(source.hasOwnProperty(key)){
//             res[key] = _cloneDeep(source[key])
//         }
//     }

//     return res;
// }

// 暂时性死区
// 必须new
// 方法不可枚举
// 方法不可new 无prototype [counstructor]
// 内部开启严格模式
// 内部无法重写类名



// const debounce = (fn,timeout,_timer) => {
//     clearTimeout(_timer);
//     _timer = setTimeout(fn, timeout);
// }

const allSettled = arr => new Promise((resolve, reject) => {
    if(!Array.isArray(arr)){
        throw new Error('the first param is must be array');
    }
      const res = [];
      let count = 0;
      const {length} = arr;
      arr.forEach((item,index) => {
          Promise.resolve(item).then(value=>{
            res[index] = {status:'fullfilled',value};
            ++count === length && resolve(res);
          },reason=>{
            res[index] = {status:'rejected',reason}
          })
      });
    //   for (let i = 0; i < arr.length; i++) {
    //     const item = arr[i];
    //     Promise.resolve(item).then((result) => {
    //         final[i] = { status: 'fulfilled', value: result };
    //         if (++count === arr.length) {
    //             resolve(final);
    //         }
    //     }, (reason) => {
    //         ++count;
    //         final[i] = { status: 'rejected', reason };
    //     });
    // }
});


// dom diff
// jsx对象 + currentFiber = workInProgressFiber

// 核心思想：复用
// O(n^3)

// 1. 同级
// 2. 类型变了 直接新建不再复用
// 3. key暗示稳定

// 分类

// 单节点diff：
//     string
//     number
//     object：
//         上次有没有
//             没有：新建
//             有：
//                 能不能复用：
//                     能：复用副本
//                     不能：标记删除，新建
// 多节点diff：Array
    // 第一次遍历 处理更新操作
    // 第一次遍历的结果：old new 四种情况
    // old 无 new有 新增
    // old 有 new 无 删除
    // old无 new 无 结束
    // 都有 移动
// 删除

const isNotType = type => value=>  typeof v !== type
const isNotFunction = isNotType('function');

const UNDEFINED = void 0;
const PENDING = 'PENDING';
const FULLFILLED = 'FULLFILLED';
const REJECTED = 'REJECTED';

const check = (p1,p2,resolve,reject)=>{
    if(p1===p2){
        throw new Error('')
    }

    if(p2 instanceof Promise){
        p2.then(resolve,reject)
    }else{
        resolve(p2);
    }
}
class Promise{
    static resolve(){

    }
    static reject(){

    }
    static race(arr){
        if(!Array.isArray(arr)){
            throw new Error('')
        }
        return new Promise((resolve,reject)=>{
            arr.forEach(item=>{
                Promise.resolve(item).then(resolve)
            })
        })
    }
    static all(arr){
        if(!Array.isArray(arr)){
            throw new Error('')
        }
        return new Promise((resolve,reject)=>{
            const {length} = arr;
            let total= 0;
            const res = [];
            arr.forEach(item=>{
                Promise.resolve(item).then((now)=>{
                    res.push(now);
                    ++total === length && resolve(res);
                },reject)
            })
        })
    }
    static allSettled(arr){
        if(!Array.isArray(arr)){
            throw new Error('')
        }
        return new Promise((resolve,reject)=>{
            const {length} = arr;
            let total= 0;
            const res = [];
            arr.forEach((item,index)=>{
                Promise.resolve(item).then(
                    (value)=>{
                        res[index] = {status:REJECTED,value};
                        ++total === length && resolve(res);
                    },(reason)=>{
                        res[index] = {status:REJECTED,reason}
                        total++;
                    })
            })
        })
    }

    status = PENDING;
    value = UNDEFINED;
    reason = UNDEFINED;
    onFullfilledCallback = [];
    onRejectedCallback = [];

    constructor(fn){
        if(isNotFunction(fn)){
            throw new Error();
        }
        fn(this.resolve.bind(this),this.reject.bind(this))
    }

    resolve(value){
        if(this.status===PENDING){
            this.status = FULLFILLED;
            this.value = value;
            this.onFullfilledCallback.forEach(fn=>fn(this.value));
        }
    }

    reject(reason){
        if(this.status === PENDING){
            this.status = REJECTED;
            this.reason = reason;
            this.onRejectedCallback.forEach(fn=>fn(this.reason));
        }
    }

    then(onFullfilled,onRejected){
        if(isNotFunction(onFullfilled)){
            onFullfilled = v => v;
        }
        if(isNotFunction(onRejected)){
            onRejected = v =>v;
        }

        const p = new Promise((resolve,reject)=>{
            const onF = () => {
                try {
                    const res = onFullfilled(this.value);
                    check(p,res,resolve,reject);
                } catch (error) {
                    reject(error);
                }
            }

            const onR = () => {
                try {
                    const res = onRejected(this.reason);
                    check(p,res,resolve,reject);
                } catch (error) {
                    reject(error);
                }
            }

            const match = {
                [PENDING]:()=>{
                    this.onFullfilledCallback.push(onF);
                    this.onRejectedCallback.push(onR);
                },
                [FULLFILLED]:onF,
                [REJECTED]:onR
            }

            match[this.status]?.();
        })

        return p;
    }

    finally(callback){
        if(isNotFunction(callback)){
            throw new Error('');
        }
        return new Promise(()=>{
            Promise.resolve(callback())
        },()=>{
            Promise.reject(callback())
        })
    }
}

const curry = (fn) => judege = (...args)=>fn.length === args.length ? fn(...args):arg=>judege(...args,arg)

const debounce = (fn,timeout,_timer) => {
    clearTimeout(_timer);
    setTimeout(fn, timeout);
}

const throttle = (fn,timeout,flag) =>{
    if(flag){
        flag = false;
        fn();
        setTimeout(() => {
            flag = true;
        }, timeout);
    }
}