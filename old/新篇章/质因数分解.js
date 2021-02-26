const calc = (n) => {
    const res = [];
    for(let i = 2; i <= n;i++){
        if(!n%i){
            res.push(i);
            n /= i--;
        }
    }
    return res;
}

console.log(calc(2))
// [2]
console.log(calc(8))
// [2, 2, 2]
console.log(calc(24))
// [2, 2, 2, 3]
console.log(calc(30))
// [2, 3, 5]
