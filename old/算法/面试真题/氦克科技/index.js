


/*
Your previous Plain Text content is preserved below:

Boolean search is powerful in sourcing and recruiting.
We will use machine learning prediction to provide relations among skills. Now we need a function to transfer those relations to a string with correct boolean format.

Example1:
input: [["java", "python"], ["machine learning", "deep learning"]]
output: ("java" OR "python") AND ("machine learning" OR "deep learning")

Example2:
input: [[["java", "maven", "spring"], "python"], ["machine learning", "deep learning"]]
output: (("java" OR "maven" OR "spring") AND "python") AND ("machine learning" OR "deep learning")

Follow up:
There are some boolean are unnecessary. For example: (Java OR Java 8) AND (Python OR Python 3) are equivalent to Java AND Python since the search is checking with substring.
Can you simplify the boolean string to make search speed faster?
Plus, what if search mechanism is by token instead of substring.
 */
const joinOR = (arr) => `(${arr.join(' OR ')})`;
const joinAND = (arr) => `(${arr.join(' AND ')})`;
const allStr = arr => Array.isArray(arr) && arr.every(item=>typeof item==='string');

const deal = arr => {
    let res = arr.reduce((total,item)=>total.concat(typeof item==='string'?item:(
            allStr(item)?joinOR(item):deal(item)
        )),[]);
    return joinAND(res);
}

const deal2 = arr => {

    if (Array.isArray(arr) && arr.every(item => (typeof (item) === 'string'))) {
        return joinOR(arr)
    }

    let res = [];

    for (let i = 0, { length } = arr; i < length; i++) {

        if (Array.isArray(arr[i])) {
            res.push(`${deal(arr[i])}`);
        } else {
            res.push(arr[i])
        }
    }
    return joinAND(res);
}

const res = deal([[["java", "maven", "spring"], "python", "C++"], ["c", "c##"], ["machine learning", "deep learning"]]);
const res2 = deal2([[["java", "maven", "spring"], "python", "C++"], ["c", "c##"], ["machine learning", "deep learning"]]);

console.log(res);
console.log(res2);

