// BubbleSort

/* function bubbleSort(arr){
    let swapped
    let temp = 0
    do{
        swapped = false
        for(let i = 0 ; i < arr.length - 1 ; i++){
            if(arr[i] > arr[i+1]){
                temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
        return arr
    }while(swapped)
}

let arr = [-3,3,4,8,2,5,-1,9,-10]
bubbleSort(arr)
console.log(arr); */


// --------------------------------------------------------------------------------------------------------------


// SelectionSort

/* function selectionSort(arr){

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i+1; j < arr.length; j++) {        
            if(arr[i]>arr[j]){
                let temp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = temp
            }
        }
    }
}

let arr = [-3,3,4,8,2,5,-1,9,-10]
selectionSort(arr)
console.log(arr) */


// --------------------------------------------------------------------------------------------------------------


// InsertionSort

/* function insertionSort(arr){

   for(let i = 1; i < arr.length; i++) {
        let NTI = arr[i]
        let SE = i - 1

        while(SE >= 0 && NTI < arr[SE]){
            arr[SE + 1] = arr[SE]
            SE--
        }
        arr[SE + 1] = NTI

   }
}

let arr = [-3,3,4,8,2,5,-1,9,-10]
insertionSort(arr)
console.log(arr) */


// --------------------------------------------------------------------------------------------------------------


// QuickSort

/* function quickSort(arr){
    if(arr.length < 2){
        return arr
    }

    let pivot = arr[arr.length - 1]
    let left = []
    let right = []

    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

let arr = [-3,3,4,8,2,5,-1,9,-10]
console.log(quickSort(arr)) */


// --------------------------------------------------------------------------------------------------------------


// MergeSort

/* function mergeSort(arr){

    if(arr.length < 2){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)

    return merge(mergeSort(left),mergeSort(right))
}

function merge(left, right){
    sortedArr = []

    while(left.length && right.length){
        if(left[0]<=right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }

    return [...sortedArr, ...left, ...right]
}

let arr = [-3,3,4,8,2,5,-1,9,-10]
console.log(mergeSort(arr))
 */