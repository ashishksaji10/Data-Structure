// Approach 1

/* function recursiveEvenSum(arr){
    if(arr.length === 0){
        return 0
    }

    let f = arr[0]
    let sum = (arr[0]%2 === 0)? f : 0
    return sum + recursiveEvenSum(arr.slice(1))
}

console.log(recursiveEvenSum([1,2,3,4,5,6,8,2,2])) */

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// Approach 2

/* function recursiveEvenSum(arr, index){
    if(index === arr.length){
        return 0
    }
    let sum = 0
    sum = (arr[index]%2 === 0) ? sum + arr[index] : sum
    return sum + recursiveEvenSum(arr, index+1)
}

console.log(recursiveEvenSum([1,2,3,4,5,6],0)) */