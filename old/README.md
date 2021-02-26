## 1. 手写curry
用闭包把参数保存起来，当参数的数量足够执行函数了，就开始执行函数

社区写法

```
var curry = fn =>
    judge = (...args) =>
        args.length === fn.length
            ? fn(...args)
            : (arg) => judge(...args, arg)
```

lodash写法
```

```

## 2. 手写memoizeFunction
```
function memoizeFunction(func) {
    var cache = {};
    return function() {
        var key = arguments[0];
        if (cache[key]) {
            return cache[key];
        } else {
            var val = func.apply(this, arguments);
            cache[key] = val;
            return val;
        }
    };
}
```

## 3. 手写promise.all 、promise.race
```
Promise.all = promises => new Promise((resolve, reject) => {
    if(!Array.isArray(promises)){
        return;
    }
    let total = 0;
    const {length} = promises;
    if(!length) {
      resolve(result)
      return;
    }

    for(let i = 0 ; i < length ; i++>){
        Promise.resolve(promises[i]).then(res => {
            result[index] = res;
            ++total === length && resolve(result);
            return;
        },reject))
    }
  })
}

```
```
Promise.all = promises => new Promise((resolve, reject) => {
    if(!Array.isArray(promises)){
        return;
    }
    let total = 0;
    const {length} = promises;
    if(!length) {
      resolve()
      return;
    }

    for(let i = 0 ; i < length ; i++>){
        Promise.resolve(promises[i]).then(res => {
            esolve(res);
            return;
        },reject))
    }
  })
}
```
## 4. httpcode

<details>
<summary>1**</summary>
收到，您继续
</details>

<details>
<summary>2**</summary>
操作成功
</details>

<details>
<summary>3**</summary>
重定向
</details>

<details>
<summary>4**</summary>
客户端错误
</details>

<details>
<summary>5**</summary>
服务端错误
</details>

1**

<details>
<summary>100</summary>
继续
</details>

<details>
<summary>101</summary>
切换协议
</details>


2**

<details>
<summary>200</summary>
成功
</details>

<details>
<summary>201</summary>
已创建
</details>

<details>
<summary>202</summary>
处理未完成
</details>

<details>
<summary>204</summary>
无内容
</details>

<details>
<summary>205</summary>
客户端重置
</details>

<details>
<summary>206</summary>
部分get请求已处理
</details>

3**
<details>
<summary>300</summary>
有很多你要哪个？都给你
</details>

<details>
<summary>301</summary>
永久重定向
</details>

<details>
<summary>302</summary>
临时重定向
</details>

<details>
<summary>304</summary>
未修改
</details>

4**
<details>
<summary>400</summary>
客户端语法错误
</details>

<details>
<summary>401</summary>
身份验证
</details>

<details>
<summary>403</summary>
拒绝执行
</details>

<details>
<summary>404</summary>
找不到
</details>

<details>
<summary>408</summary>
超时
</details>


## 5. [dp](https://leetcode-cn.com/tag/dynamic-programming/)

## 6.[说一遍浏览器缓存](https://www.zoo.team/article/http-cache)

## 7.[fiber](https://www.mdeditor.tw/pl/glqy)

## 8.[hooks原理](https://juejin.cn/post/6844903704437456909)

## 9. this四种模式及其指向：function维度，箭头函数维度
[address](https://www.bilibili.com/video/BV1564y1f7Z6?from=search&seid=4189917643480132900)
function【调用时决定】
方法：函数调用者
函数：window(也是函数调用者，同上)
apply、bind：首参
构造器：新创建的对象，（也是被new改变了this指向，同上）

箭头函数this指向所在外层作用域，大部分都是window，在构造函数中是new创建的空对象。【定义时决定】

箭头函数的缺点
四个没有：
1.自己的this
2.arguments
3.prototype
4.[constructor]
所以
1.不能做构造器
2.不能被apply、bind、call改变this指向
3.不能用在原型链上
4.没有arguments
## 10. 手写allImageLoaded
```

const allImageLoaded = async root => {
    const imgs = root instanceof HTMLImageElement ? [root] : root.querySelectorAll('img');

    const promises = [];

    imgs.forEach(img => {
        if(!img.complete){
            promises.push(new Promise(resolve => {
                img.addEventListener('load', () => resolve(img))
            }))
        }
    })

    return await Promise.all(promises);
}

```

## 11. [浏览器工作原理：从输入url到页面渲染发生了什么](https://developer.mozilla.org/zh-CN/docs/Web/Performance/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%B8%B2%E6%9F%93%E9%A1%B5%E9%9D%A2%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86)[2](https://juejin.cn/post/6928677404332425223)

## 12. [webpack常见优化方法](https://zhuanlan.zhihu.com/p/62535578)

## 13. [贪心算法](https://labuladong.gitbook.io/algo/dong-tai-gui-hua-xi-lie/tan-xin-lei-xing-wen-ti/tan-xin-suan-fa-zhi-qu-jian-tiao-du-wen-ti#er-tan-xin-jie-fa)

## 14. [react17新特性](https://zh-hans.reactjs.org/blog/2020/10/20/react-v17.html)
1. jsx可以不用bable了
2. document -> root

## 15. [redux原理](https://www.bilibili.com/video/BV1uJ41137NZ?from=search&seid=16616863572867905301)

## 16. [umi、dva原理](https://zhuanlan.zhihu.com/p/98870028)

## 17. [手写虚拟滚动](https://www.bilibili.com/video/BV1KV411t7RA?from=search&seid=7308622530589525679)

## 18. [canvas高清](https://www.html.cn/archives/9297)

## 19. 手写节流
```
const throllte = (fn,flag) => (...args) => {
    if(flag){
        flag = false;
        fn.apply(null,args);
        setTimeout(() => {
            flag = true;
        }, 500);
    }
}

```

## 20. 手写防抖
```
const debounce = (fn, _timer) => (...args) => {
    clearTimeout(_timer);
    _timer = setTimeout(fn.apply(null,args), 500);
}

```

## 21. [手写promise](https://github.com/LaamGinghong/Promise-A-Plus)

## 22. [React 15.x和16.x 的区别](https://blog.csdn.net/u010821983/article/details/108036918)

## 23. fiber 为啥要废弃 compwillxxx

## 24. es6新特性

## 25. [DDD](https://zhuanlan.zhihu.com/p/75129004)

## 26. 多图压缩下载
```
import JSZip from 'jszip';
import FileSaver from 'file-saver';

export const getFileNameByUrl = (url:string):string=> url.substring(url.lastIndexOf('/')+1);


const getNameAndSuffix = (str:string = '') => {
    const nameArr = ['name','suffix'];
    return str.split('.').reduce((total,cur,index)=>({
        [nameArr[index]] : cur,
        ...total
    }),{});
}

export const dealWithName = (_name,url)=>{
    const {name:oldName} = getNameAndSuffix(_name);
    const {name:newName,suffix} = getNameAndSuffix(getFileNameByUrl(url));
    // 获取旧名字，
    // 获取url上的名字
    // 获取url的文件后缀
    return `${oldName || newName}.${suffix}`;
    // return getFileNameByUrl(url);
}

const getBlob = (url:string) => new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = () => {
    if (xhr.status === 200) {
        resolve(xhr.response);
    }
};
    xhr.send();
});

export const downloadTotal = (urlArr:{url:string,name?:string}[], filename = '打包下载') => {
    if (!(urlArr.length > 0)) return;
    const zip = new JSZip();
    const cache = {};
    const promises = [];
    urlArr.forEach(({url,name}) => {
        // 下载文件, 并存成ArrayBuffer对象
        const promise = getBlob(url).then((data:Blob) => {
            // 逐个添加文件
            const _filename = dealWithName(name,url);
            zip.file(_filename, data, { binary: true });
            cache[_filename] = data;
        });
        promises.push(promise);
    });

    Promise.all(promises).then(() => {
        // 生成二进制流
        zip.generateAsync({ type: 'blob' }).then((content) => {
            // 利用file-saver保存文件
            FileSaver.saveAs(content, `${filename}.zip`);
        });
    });
}
```

## 27. 批量模糊搜索
```
/**
 * 模糊搜索
 * @param list 被搜索的数据
 * @param properNames 列名
 * @param input 输入的数据
 */
export const filter = (list,properNames,input) => {
    /* */
    if(new Set([null,undefined,'',false,NaN]).has(input)){
        return list;
    }

    // 空格、中文逗号，英文逗号
    // filter(Boolean)是去掉假值：最后一位是空字符串，如'王xx,'
    // [10000,'王']
    const inputlist = (lodash.trim(input || '')?.split(/[\s,，]+/) || []).filter(Boolean);

    return list.filter(item=>{
        // console.log('item===',item);

        // 转为字符串
        // {name:'杨xx'，mobile:'10000'} => '杨xx10000'
        const allstr = properNames.reduce((total,cur)=>total+item[cur],'');

        // 存在一个 '杨xx10000'包含'10000'
        return inputlist.some((str='')=>allstr.includes(str));
    });

    // return list.filter(item=>properNames.reduce((total,cur)=>total+item[cur],'')).map(item=>inputlist.includes(item));

};
```

## 28. [useAnchor](https://wiki.baijia.com/pages/viewpage.action?pageId=53782913)


## 29. [二次请求](https://wiki.baijia.com/pages/viewpage.action?pageId=25815160)

## 30. [react-router](https://zhuanlan.zhihu.com/p/270651966)

## 31. 圣杯布局
<details>
<summary>几种方案</summary>
flex
<br>
grid
<br>
脱离文档流+margin
<br>
table布局
<br>
calc
<br>
</details>

```

<div class='container'>
    <div class='left'></div>
    <div class='center'></div>
    <div class='right'></div>
</div>

<style>
*{
    padding:0;
    margin:0;
    font-size:0;
}
.container div{
    height:100%;
    outline:1px solid red;
}
//==== 1. flex start
.container{
    display:flex;
}
.left{
    flex-basis:200px;
}
.right{
    flex-basis:200px;
}
.center{
    flex-grow:1;
}
//==== flex end
//==== 2. grid start
.container{
    display:grid;
    grid-template-columns:200px 1fr 200px;
}
//==== grid end
//==== 3. table start
.container{
    display:table;
}
.container div{
    display:table-cell;
}
.left,.right{
    width:200px;
}
.center{
    width:auto;
}
//==== table end
//==== 4. float start
<div class='container'>
    <div class='left'></div>
    <div class='right'></div>
    <div class='center'></div>
</div>
.left{
    width:200px;
    float:left;
}
.right{
    width:200px;
    float:right;
}
.center{
    margin:0 200px;
}
//==== float end
//==== 5. absolute start
<div class='container'>
    <div class='left'></div>
    <div class='right'></div>
    <div class='center'></div>
</div>
.container{
    position:relative;
}
.container div{
    position:absolute;
}
.left{
    width:200px;
    left:0;
}
.right{
    width:200px;
    right:0;
}
.center{
    margin:0 200px;
}
//==== absolute end
//==== 6. calc start
.container div{
    display:inline-block;
}
.center{
    width:calc(100vw - 400px);
}
.left{
    width:200px;
}
.right{
    width:200px;
}
//==== calc end
```
## 32. [vue3 proxy比Object.definedProperty好在哪](https://zhuanlan.zhihu.com/p/195542026)

## 33. [cloneDeep](https://github.com/pppcode/Deep-clone/blob/master/src/index.js#L5)

## 34. [flex-shrink flex-grow](https://www.jianshu.com/p/ea53c2daff9c)

## 35. 双指针快排
```
// 快速排序 - 双指针
var quickSort = (arr)=> {
　　if (arr.length <= 1) return arr;
    const pivotIndex = Math.floor(arr.length / 2);
    const [pivot] = arr.splice(pivotIndex, 1);
    let left = [], right = [];
    for( let i=0, len=arr.length; i<len; i++){
        if(arr[i] < pivot ){
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([pivot], quickSort(right))
}
```

## 36. 手写promise
```
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
            const { length } = arr;
            const res = [];
            let total = 0;

            arr.forEach((p,index)=>{
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

            arr.forEach((p,index)=>{
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
            this.onFulfilledCallback.forEach(fn=>fn());
        }
    }

    reject(reason) {
        if (this.state === CONSTANTS.PENGDING) {
            this.state = CONSTANTS.REJECTED;
            this.value = reason;
            this.onRejectedCallback.forEach(fn=>fn());
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
            callback(this.value);
        })
    }
}
```

## 37.简述实现promise
在then中分类讨论，如果非pending，执行回调；如果是pending收集回调，在resolve中执行成功回调，在reject中执行失败回调

## 38.实现useState
```
let isMount = true;
// 当前正在执行的hooks
let workInProgrssHooks = null;

const fiber = {
    stateNode: App,
    // 负责保存hooks数据，保存了一条链表的第一个hook
    memorizedState: null
}

function schedule() {
    // 初始化
    workInProgrssHooks = fiber.memorizedState;
    const app = fiber.stateNode();
    isMount = false;
    return app;
}

function useState(initialState) {
    // 如果有多个useState我是哪个hook
    let hook;

    // 首次渲染
    if (isMount) {
        hook = {
            memorizedState: initialState,
            next: null,
            // 假设一个onClick里写了多个setState，就会产生多个效应
            //
            queue: {
                pending: null
            }
        }
        // 如果首次渲染，并且不是第一个useState
        if (fiber.memorizedState) {
            // 把当前的useState跟上一个useState连接起来
            workInProgrssHooks.next = hook;
            // 如果首次渲染，并且是第一个useState
        } else {
            fiber.memorizedState = hook;
        }
        workInProgrssHooks = hook;
        // 更新
    } else {
        // 找到当前正在运行的hook
        hook = workInProgrssHooks;
        // 下次进入这个useState就能找到自己了
        workInProgrssHooks = workInProgrssHooks.next;
    }

    // 上次的状态，或者初始状态
    let baseState = hook.memorizedState;
    // 根据上次状态，和action生产新的状态
    if (hook.queue.pending) {
        let firstUpdate = hook.queue.pending.next;
        do {
            const action = firstUpdate.action;
            baseState = action(baseState);
            firstUpdate = firstUpdate.next;
        } while (firstUpdate !== hook.queue.pending.next);

        hook.queue.pending = null;
    }
    hook.memorizedState = baseState;
    return [baseState,dispatchAction.bind(null,hook.queue)]
}

function dispatchAction(queue, action) {
    // 环状链表
    // 为什么是环装的？因为更新是有优先级的
    const update = {
        action,
        next:null
    }

    // 当前hook还没有要触发的更新，在一个onClick里的第一个setState
    if (queue.pending === null) {
        update.next = update;
        // 在一个onClick里的第2个及以后的setState
    } else {
        update.next = queue.pending.next;
        queue.pending.next = update;
    }

    queue.pending = update;

    // 触发更新
    schedule();
}

function App() {
    const [num, setNum] = useState(0);

    console.log(`isMount:${isMount}`);
    console.log(`num:${num}`);

    return ({
        onClick() {
            setNum(num => num + 1)
            setNum(num => num + 2)
        }
    })
}

window.app = schedule();

// app.onClick();
```

## 39.简述实现useState
以const [a,setA] = useState(0)为例
实现useState要解决两个问题：储存状态，更新状态

存储
一个组件对应一个fiber
fiber:{
    memorizeState:hook链头结点
}
多个hook以next连接
hook:{
    memorizeState:要保存的值
}

更新
setA=>把多个action收集到hook.queue.pending上
=> 触发更新
=> 重新进入useState
=> 根据上一次的值hook.memorizeState和储存起来的action：hook.queue.pending,计算出新的state
=> 保存到hook.memorizeState, a的值就会改变

为了让多个hook能区分开，需要引入workInProgressHook

## 40.为什么说虚拟dom比真实dom快
1. 减少dom操作（利用 **批量操作** 和 **domdiff** 减少操作次数）
2. 跨平台

## 41. localStorage、sessionStorage、cookie区别
||生命周期|大小|共享|作用域|
|----|----|----|----|----|
|localStorage|一直存在|5m|不主动发送给服务器|同原标签共享|
|sessionStorage|当前标签关闭|5m|不主动发送给服务器|当前标签页|
|cookie|过期时间|4k|在bs中来回传递受到domain、path限制|同源标签共享|

## 41.cookie的字段
Cookie 的过期时间、域、路径、有效期、适用站点

服务器端Set-Cookie，客户端存储cookie

会话cookie，浏览器关闭后删除
持久cookie：取决于expires，max-age

限制
1. http-only：document.cookie拿不到
2. secure:只有https

domain，缺省就是origin，指定会包含子域名
path，哪些路径可以接受cookie

samesite:
    none:在同站、跨域，都发送cookie
    strict：同站
    lax：

## 42.https握手
1. 浏览器请求服务器
2. 服务器发送公钥过来
3. 浏览器通过globalSign验证公钥和证书
4. 把浏览器的自己的秘钥通过服务器公钥加密后发送给服务器
5. 服务器用自己的私钥解密，拿到浏览器的秘钥
6. 服务器和浏览器关系确定完毕，切拿到了浏览器秘钥，以后的请求都会用浏览器秘钥加密传输

## 43.class继承和es5继承有什么区别
1. 必须new调用class
2. 会暂时性死区
3. 所有方法不可枚举unEnumable
4. 所有方法没有prototype，[conctructor]，不能用new调用
5. 内部默认开启严格模式
6. 内部无法重写类名


## 44.new
```
const _new = (fn,...rest) => {
    const obj = Object.create(fn.prototype);

    const res = fn.apply(obj,rest);

    return typeof res === 'object' ? res : obj;
}
```

## 45.串行/字符串循环
```
let times = 0;
const repeat = (str,count) => {
    times++;
    if(count<0){
        return '';
    }
    if(count===0){
        return '';
    }
    if(count === 1){
        return str;
    }
    if(count===2){
        return str+str;
    }
    let res = repeat(repeat(str,~~(count/2)),2)
    if(count % 2 === 0){
        return res;
    }else{
        return res + str;
    }
}

repeat('abc',64);

console.log(times);

// ====================
const createPromise = (time, id) => () =>new Promise(
    resolve =>setTimeout(resolve.bind(null,id), time)
)

const runPromiseByQueue = arr => new Promise(resolve=>{
    const values = [];
    const reasons = [];
    arr.reduce(
        (total, cur) => total.then(cur).then(v=>values.push(v),v=>reasons.push(v)),
        Promise.resolve()
    ).then(()=>resolve([values,reasons]))
})

runPromiseByQueue([
    createPromise(3000, 1),
    createPromise(2000, 2),
    createPromise(1000, 3),
]).then(console.log)

```