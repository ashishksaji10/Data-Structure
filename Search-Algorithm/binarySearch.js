// Binary Search Basic
// Example 1

function binarySearch(arr, target ){
    let left = 0
    let right = arr.length - 1

    while ( left <= right){
        let mid = Math.floor(( left + right )/2)

        if(arr[mid] === target){
            return mid
        }else if(target < mid){
            right = mid - 1
        }else {
            left = mid + 1
        }
    }
    return -1

}
console.log(binarySearch([1,2,3,4,5,9,7],9));

// Time Complexity = O(logn)T
// Space Complexity = O(1)S


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

















// ----------------------------------------------------------------------------------------------------------------------------------------------------------------