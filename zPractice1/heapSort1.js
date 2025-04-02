function heapify(arr, n, index){
    let left = 2* index + 1
    let right = 2* index + 2
    let largest = index 

    if(left < n && arr[left] > arr[largest]){
        largest = left
    }

    if(right < n && arr[right] > arr[largest]){
        largest = right
    }

    if(largest !== index){
        let temp = arr[largest]
        arr[largest] = arr[index]
        arr[index] = temp

        heapify(arr,n,largest)
    }
}

function heapSort(arr){
    let n = arr.length

    for(let i = Math.floor(n/2) - 1 ; i>=0 ; i--){
        heapify(arr,n,i)
    }

    for (let i = n-1 ; i >= 0 ; i--) {
        [arr[0],arr[i]] = [arr[i],arr[0]]
        heapify(arr,i,0)
    }
    return arr
}


let arr = [12, 11, 13, 5, 6, 7];
console.log("Sorted array is:", heapSort(arr));