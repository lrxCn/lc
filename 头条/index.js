const debounce = (fn,timeout = 500) => {
    let timer = null;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(fn.bind(this,...args), timeout);
    }
}

const throlle = (fn,timeout = 500) => {
    let flag = true;
    return function(...args){
        if(!flag){
            return;
        }
        flag = false;
        setTimeout(()=>{
            flag = true;
            fn.apply(this,args);
        },timeout)
    }
}
const now = Date.now();

const onClick = name => console.log(`${name}:${Date.now() - now}`);

const debounceClick = debounce(onClick);
const throlleClick = throlle(onClick);

// setInterval(() => {
//     debounceClick('debounce');
// }, 100);


setInterval(() => {
    debounceClick('throttle');
}, 100);
