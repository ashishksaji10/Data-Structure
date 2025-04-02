// Approach 1
// Using String Methods

/* function reverse(str){
    return str.split('').reverse().join('')
}

str = 'Ashish'
console.log(reverse(str)) */

// -----------------------------------------------------------------------------------------------------------------------------

// Approach 2
// Using loop

/* function reverse(str){
    let reversed = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}

str = 'Ashish'
console.log(reverse(str)) */

// -----------------------------------------------------------------------------------------------------------------------------

// Approach 3
// By Reduced Method

/* function reverse(str){
    return [...str].reduce((reversed,char)=> char + reversed, '')
}

str = 'Ashish'
console.log(reverse(str)) */

// -----------------------------------------------------------------------------------------------------------------------------

// By Using Recurssion

function reverse(str){
    if(str === ''){
        return ''
    }else{
        return reverse(str.substr(1)) + str.charAt(0)
    }
}

str = 'Ashish'
console.log(reverse(str))

// -----------------------------------------------------------------------------------------------------------------------------

