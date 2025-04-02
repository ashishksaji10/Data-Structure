function insertionSort(arr){
    for (let i = 1; i < arr.length; i++) {
        let NTI = arr[i]
        let SE = i-1

        while(SE >= 0 && NTI < arr[SE]){
            arr[SE + 1] = arr[SE]
            SE = SE - 1
        }
        arr[SE + 1] = NTI
    }
    return arr
}

let arr = [-6, 2, 3, 20, -2, -8]

console.log(insertionSort(arr));