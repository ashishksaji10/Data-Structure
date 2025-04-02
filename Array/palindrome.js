// To find if the Array is Palindrome or not

// APPROACH 1

/* function palindrome(arr){
    let rev = [...arr]
    rev.palindrome()
        for(let i = 0 ; i<rev.length ; i++){
            if(arr[i] !== rev[i]){
                return -1    
            }
        }
            return 1
    }

console.log(palindrome(['A','S','H','I','S','H'])); */


// ----------------------------------------------------------------------------------------------------------------------------------------------------

// APPROACH 2

// Two-Pointer Method

/* function palindrome(arr){
    let left = 0
    let right = arr.length - 1

    while(left < right){
        if(arr[left] !== arr[right]){
            return -1
        }
        left++
        right --
    }
    return 1
}

console.log(palindrome(['A','S','H','I','H','S','A'])); */


// Time and Space Complexity will be O(n)T and O(1)S resplectivly for both examples