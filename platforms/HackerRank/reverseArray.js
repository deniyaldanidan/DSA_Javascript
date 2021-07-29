function reverseArray(a) {
    let resarr = [];
    let loops = a.length;
    for (let i=0;i<loops;i++){
        resarr.push(a.pop())
    }
    return resarr
}

// [7,2,5,4] returns [4,5,2,7]