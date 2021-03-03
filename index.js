

const calc = n => 2**~~Math.log2(n)

const calc2 = n => {
    if(n<2){
        return 0;
    }
    let temp = 1;
    while(n>temp){
        temp*=2;
    }
    return temp/(n===temp?1:2);
}

console.log(calc(9),calc2(9))

const main = (n) => {
    if(n<2){
        return [0,1][n]
    }
    return 1 + main(n-calc(n))
}


[...Array(15).keys()].forEach(element => {
    console.log(`main:${main(element)};fn(${element}) = ${element.toString(2)} = ${element.toString(2).split('').filter(item=>item==='1').length}`,)
});