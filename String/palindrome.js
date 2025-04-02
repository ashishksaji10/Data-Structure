// Approach 1 

function palindrome(str){

let left = 0
let right = str.length - 1

    while(left < right){
        if(str[left] !== str[right]){
            return false
        }
        left++
        right--
    }
    return true
}

str = 'alala'
console.log(palindrome(str))