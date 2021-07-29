function minMax(arr) {
	let sorted = arr.sort((a,b)=>b-a);
    return [sorted[sorted.length-1], sorted[0]]
}

const assertSimilar = (val, check)=>console.log(val.every(x=>check.includes(x)));


assertSimilar(minMax([14, 35, 6, 1, 34, 54]), [1, 54])
assertSimilar(minMax([1.346, 1.6532, 1.8734, 1.8723]), [1.346, 1.8734])
assertSimilar(minMax([0.432, 0.874, 0.523, 0.984, 0.327, 0.2345]), [0.2345, 0.984])
assertSimilar(minMax([13, 72, 98, 43, 24, 65, 31]), [13, 98])
assertSimilar(minMax([-54, -23, -54, -21]), [-54, -21])
assertSimilar(minMax([-0.473, -0.6834, -0.1287, 0.5632]), [-0.6834, 0.5632])
assertSimilar(minMax([0, 0, 0, 0]), [0, 0])