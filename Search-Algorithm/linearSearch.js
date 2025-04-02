// Basic Linear Seach Problems
// Example 1
// Complexity = O(n)T, O(1)S

function linearSearch(arr, target){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === target){
            return i
        }
    }
    return -1
}

console.log(linearSearch([1,4,2,99,22],22));