function sorting(asc, dsc){
    let newArr = []
    dsc.reverse()

    while(asc.length > 0 && dsc.length > 0){
        if(asc[asc.length - 1] > dsc[dsc.length - 1]){
            newArr.push(asc.pop())
        }else{
            newArr.push(dsc.pop())
        }
    }
    asc.reverse()
    return [...newArr, ...asc, ...dsc]
}

let arr1=[1,3,5,7,11]
let arr2=[10,9,8,6,4]

console.log(sorting(arr1,arr2))