const mergeSort = (array)=>{
    if (array.length<2) {
        return array;
    }

    let middle = Math.floor(array.length/2);
    return mergeArrays(mergeSort(array.splice(0,middle)), mergeSort(array))
}

const mergeArrays = (left,right)=>{
    let arr=[];
    while (left.length && right.length) {
        arr.push(left[0] < right[0]?left.shift():right.shift())
    }
    return arr.concat(left.slice()).concat(right.slice())
}

console.log(mergeSort([23,54,12,67,13,87,0,1,2]));
console.log(mergeSort([24,15,11,65,21,65,78]));