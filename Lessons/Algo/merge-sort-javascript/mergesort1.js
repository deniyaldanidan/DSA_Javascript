// Lesson mergeSort by Hays-Stanford

function mergeSortTopDown(array){
    if (array.length<=1) {
        return array;
    }

    const middle = Math.floor(array.length/2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)
    
    return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right))
}

function mergeTopDown(left, right){
    const array = [];
    while (left.length && right.length){
        if (left[0]<right[0]) {
            array.push(left.shift())
        } else{
            array.push(right.shift())
        }
    }

    return array.concat(left.slice()).concat(right.slice())
}


(function test(){
    const testArray1 = [4,5,2,6,1,3,8,7];
    const testArray2 = [12,45,12,87,13,43];
    const testArray3 = [112,876, 124, 7543, 99,0]
    const testArray4 = ['zathura', 'parsley','alpha', 'apple', 'banana', 'boolean','omega', 'beta', 'gamma', 'zen']

    console.log(mergeSortTopDown(testArray1))
    console.log(mergeSortTopDown(testArray2));
    console.log(mergeSortTopDown(testArray3));
    console.log(mergeSortTopDown(testArray4));
})()