const calc = num => `${num}`.split('').reduce(({j,o},item)=>(
        item%2===0?{o:o+1,j}:{o,j:j+1}
    ),{
        j:0,
        o:0
    })


console.log(calc(1000))