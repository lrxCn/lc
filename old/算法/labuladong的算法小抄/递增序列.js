const rise = arr => {
    let res = true;
    for(let i = 1, {length} = arr;i<length;i++){
        res = res && arr[i]>arr[i-1]
        if(!res){
            return i;
        }
    }
    return res;
}

const riseOn = arr => {
    const i =rise(arr)
    if(i!==true){
        return rise(arr.slice(0,i))&& rise(arr.slice(i))
    }
    return false;
}



console.log(riseOn([1,2,3,3,4,5,6]))