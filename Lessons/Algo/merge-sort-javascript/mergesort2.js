const mergeSort = (arr)=>{
    if (arr.length<2) {
        return arr
    }
    const middle = Math.floor(arr.length/2)
    return mergeAras(mergeSort(arr.splice(0,middle)), mergeSort(arr))
}

const mergeAras = (left, right)=>{
    let arr = [];
    while (left.length && right.length) {
        arr.push(left[0] > right[0] ? left.shift() : right.shift())
    }
    return arr.concat(left.slice()).concat(right.slice())
}

console.log(mergeSort([2,5,3,6,1,54,90,12]));