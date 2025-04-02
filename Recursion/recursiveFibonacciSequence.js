function recursiveFibonacci(n){
    if(n<1){
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

console.log(recursiveFibonacci(0));

// Time Complexity = O(2^n)
// Space Complexity = O(n) due to the call stack used in recursion 