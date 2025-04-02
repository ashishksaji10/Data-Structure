function findSecondSmallest(arr,index = 0, smallest = Infinity, secondSmallest = Infinity ){
    if(index > arr.length){
        return secondSmallest
    }

    if(arr[index] < smallest){
        secondSmallest = smallest
        smallest = arr[index]
    }

    if(arr[index] < smallest && arr[index] > secondSmallest){
        secondSmallest = arr[index]
    }
    return findSecondSmallest(arr, index +1,smallest,secondSmallest)
}

let arr = [22,11,111,2,55,1]
console.log(findSecondSmallest(arr));
