
// write a function that takes 1 number as input and then builds the sum of all the numbers leading upto that number
function sumOfAll(n) {
    let result = 0;
    for (let i=0; i<= n; i++) {
        result+=i;
    }
    return result;
}

function sumOfAll2(n){
    return (n/2)*(1+n)
}

// testing
const performance = require('perf_hooks').performance;
const testMe = (dat,func,mess)=>{
    dat.forEach((n, i)=>{
        let [start,end] = [0,0];
        start = performance.now()
        console.log(func(n));
        end = performance.now()
        i!=0 && console.log(`time taken to calculate ${n} = ${end-start}`);
    });
    console.log(mess);
};
const testdat = [0,0,1,10,100,1000,10000,100000,1000000,10000000,100000000];
const testdat2 = [0,0,1,10,100,1000,10000,100000,1000000,10000000,100000000, 1000000000, 10000000000];
testMe(testdat, sumOfAll, "This is example of linear time")
testMe(testdat2, sumOfAll2, "This is example of contant timing")
