function recursivePalimdrome(str){

    if(str.length <= 1){
        return true
    }

    if(str[0] !== str[str.length - 1]){
        return false
    }

    return recursivePalimdrome(str.slice(1,-1))

}
   

let str ='ASHIHSA'
console.log(recursivePalimdrome(str));