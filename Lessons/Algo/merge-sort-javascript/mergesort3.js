const mergeSort = (arr)=>{
    if (arr.length<2) {
        return arr
    }
    console.log('splitting');
    console.log(arr);
    const middle = Math.floor(arr.length/2)
    const left = arr.splice(0,middle);
    const right = arr;
    console.log(left);
    console.log(right);
    console.log('');
    return mergeAras(mergeSort(left), mergeSort(right))
}

const mergeAras = (left, right)=>{
    console.log('sorting');
    console.log(left);
    console.log(right);
    let arr = [];
    while (left.length && right.length) {
        arr.push(left[0] < right[0] ? left.shift() : right.shift())
    }
    const result = arr.concat(left.slice()).concat(right.slice());
    console.log(result);
    return result
}

// console.log(mergeSort([2,5,3,6,1,5,2,7,3,2,1,7,9]));
console.log(mergeSort([2,5,3,6,1,5,2]));