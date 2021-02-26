// 大数相加

const add = (str1,str2) =>{
    const arr1 = str1.split('');
    const arr2 = str2.split('');

    let sum = 0;
    let jin = 0;
    let res = [];

    while(arr1.length || arr2.length){
        sum = ~~arr1.pop() + ~~arr2.pop() + jin;
        jin = ~~(sum / 10);
        res.push(sum%10);
    }
    if(jin){
        res = res.concat(jin);
    }
    return res.reverse().join('');
}

// 测试用例
const num1 = '2000000000000000001';
const num2 = '9999999999999999999';
let res = add(num1,num2);
console.log(BigInt(num1)+BigInt(num2)+'' === res);