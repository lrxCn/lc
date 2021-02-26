// 在从左向右和从上往下皆为升序的二维数组中，查找一个数是否存在，存在的话输出它的位置。
var arr = [
    [1, 2, 3, 15],
    [4, 5, 10, 16],
    [7, 8, 11, 17]
];

//16  1,3

const search = (arr, val) => {
    if(!arr.length){
        return -1;
    }
    const maxI = arr.length -1;
    const maxJ = arr[0].length -1 ;
    let i = 0;
    let j = maxJ;
    const over = (i, j) => i < 0 || j < 0 || i > maxI || j > maxJ;
    while (arr[i][j] !== val || over(i, j)) {
        if(arr[i][j]>val){
            j--;
        }
        if(arr[i][j]<val){
            i++;
        }
    }
    if(over(i,j)){
        return -1;
    }
    return [i,j];
}

console.log(arr.flat().map(item => search(arr, item)));