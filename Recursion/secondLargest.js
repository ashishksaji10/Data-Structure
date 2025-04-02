function findsecondLargest(arr,index = 0,largest = -Infinity,secondLargest = -Infinity){
    if(index === arr.length){
        return secondLargest
    }

    if(arr[index] > largest){
        secondLargest = largest
        largest = arr[index]
    }else if( arr[index] > secondLargest && arr[index] !== largest ){
        secondLargest = arr[index]
    }

    return findsecondLargest(arr,index+1,largest,secondLargest)
}
let arr = [10, 111, 2, 5, 222]
console.log(findsecondLargest(arr));