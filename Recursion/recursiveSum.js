// Approach 1

function recursiveSum(arr,index){

    if(index === arr.length){
        return 0
    }
    let sum=0;
    sum += arr[index] + recursiveSum(arr,index + 1)
    return sum
}

console.log(recursiveSum([1,2,3,4,5],0))

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

// Approach 2

// function recursiveSum(arr){
//     if(arr.length === 0){
//         return 0
//     }
//     return arr[0] + recursiveSum(arr.slice(1))
// }
// console.log(recursiveSum([1,2,3,4,5]))