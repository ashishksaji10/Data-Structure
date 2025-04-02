// Example 1

/* // Sum of 2 number is 10, which are the 2 numbers in the array
// By using Selection Sort Method

// Time Complexity = O(n^2)T, Sapce Complexity = O(1)S

function findPairWithSum (arr, TargetSum) {
    // let pairs = []
    for (let i = 0; i < arr.length - 1 ; i++){
        for (let j = i+1; j < arr.length ; j++){
            if(arr[i] + arr[j] == TargetSum){                                         // Time Complexity = O(n^2)
                // pairs.push ([arr[i],arr[j]])                                 // Sapce Complexity = O(1)
                return ([arr[i],arr[j]])
            }
        }
    }
    // return pairs
    return null;
}


const arr = [6, 5, 4, 3, 9, 8, 0, 2];
const TargetSum = 10;
const result = findPairWithSum(arr, TargetSum);

console.log(result)

// two conditions are here,
// 1).I write pairs to get multiple pairs outcome for the sum. ( that is the one i commented ) */


// -------------------------------------------------------------------------------------------------------------------------------------------------------


// Example 1.1

//In here we are using hast Set Method
// Time and Space Complexity = 'O(n)TS'
// time reduced to 'O(n)' because of One 'for Loop' and space increased to 'O(n)' because we need to add each no into 'new Set' so it is O(n) 

/*function findPairWithSum(arr, targetSum){
    const alreadyExist = new Set();
    const pairs = [];

    for(let num of arr){
        const valueNeeded = targetSum - num;
        
            if(alreadyExist.has(valueNeeded)){
                pairs.push([valueNeeded,num])
            }

        alreadyExist.add(num)
    }
    return pairs;
}


const arr = [6, 5, 4, 3, 9, 8, 0, 2];
const targetSum = 10;
const result = findPairWithSum(arr, targetSum);

console.log(result)
 */


// -------------------------------------------------------------------------------------------------------------------------------------------------------


// Example 2
// Time Complexity = O(n^2)T, 
// Sapce Complexity = O(1)S

// Move the Target element to the end of an array ( In here, i just replace the last one to the target elemmnt Index)

/* function targetMoveToLast( arr, target ){
    
    for(let i = 0; i < arr.length ; i++){
        for(let j = arr.length - 1 ; j > 0 ; j--){
            if(arr[j] == target){
                j--
            }

            if(arr[i] == target && i < j){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
                
            }
        }
    }
    return arr;
}

const arr = [ 6,1,6,8,10,4,15,6,3,9,6,6,6 ]
const target = 6
const result = targetMoveToLast( arr, target );
console.log(result); */


// -------------------------------------------------------------------------------------------------------------------------------------------------------


// Example 2.1
// Same question with Two-Pointer Technique

// Time Complexity = 'O(n)T' 
// Space Complexity = 'O(1)S'

/* function targetMoveToLast(arr, target) {
    let i = 0
    let j = arr.length - 1

    while (i < j){
        
        if(arr[i] == target && arr[j] != target){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

            i++
            j--
        }else{
            if(arr[i] !== target) i++
            if(arr[j] == target) j--
        }
    }
    return arr
}

const arr = [ 6,1,6,8,10,4,15,6,3,9,6,6,6 ]
const target = 6
const result = targetMoveToLast( arr, target );
console.log(result); */