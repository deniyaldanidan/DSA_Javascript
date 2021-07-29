// Create a function that takes a number (step) as an argument and 
// returns the number of matchsticks in that step

function matchHouses(step) {
	if (step==0) {
        return 0;
    } else if (step===1){
        return 6;
    }
    return 6 + ((step-1)*5);
}

const testSet = [1,4,87]
const ansSet = [6,21,436]

testSet.forEach((n,i)=>console.log(matchHouses(n)===ansSet[i]))