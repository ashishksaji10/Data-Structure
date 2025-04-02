function largest(arr, index = 0){
    if(index === arr.length - 1){
        return arr[index]
    }

    const nextLargest = largest(arr, index + 1)
    return arr[index] > nextLargest ? arr[index] : nextLargest
}

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(largest(numbers))