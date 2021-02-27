Function.prototype._call = function(ctx = window,...rest){
    ctx.fn = this;
    const res = ctx.fn(...rest);
    delete ctx.fn;
    return res;
}

const res = [];
const res2 = [];
res.push._call(res2,'1')

console.log(res2);