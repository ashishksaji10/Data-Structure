class MaxHeap{
    constructor(){
        this.heap = []
    }

    bubbleUp(index){
        let parentIndex = Math.floor((index-1)/2)

        if(parentIndex >= 0 && this.heap[parentIndex] < this.heap[index]){
            let temp = this.heap[index]
            this.heap[index] = this.heap[parentIndex]
            this.heap[parentIndex] = temp

            this.bubbleUp(parentIndex)
        }
    }

    bubbleDown(index){
        let left = 2*index + 1
        let right = 2 * index + 2
        let largest = index

        if(left < this.heap.length && this.heap[left] > this.heap[largest]){
            largest = left
        }
        if(right < this.heap.length && this.heap[right] > this.heap[largest]){
            largest = right
        }

        if(largest !== index){
            let temp = this.heap[largest]
            this.heap[largest] = this.heap[index]
            this.heap[index] = temp

            this.bubbleDown(largest)
        }
    }

    insert(value){
        this.heap.push(value)
        this.bubbleUp(this.heap.length-1)
    }

    remove(value){
        if(this.heap.length === 0){
            return null
        }
        if(this.heap.length === 1){
            return this.heap.pop()
        }

        const root = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown(0)
        return root
    }

    build(array){
        this.heap = array
        for (let i = Math.floor(this.heap.length/2) - 1; i >= 0; i--) {
            this.bubbleDown(i)
        }
    }

    getMax(){
        return this.heap[0]
    }
}

const maxHeap = new MaxHeap();

// Inserting elements into the heap
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(5);
maxHeap.insert(30);
maxHeap.insert(40);

console.log(maxHeap.heap); // Output: [40, 30, 5, 10, 20]
const maxElement = maxHeap.remove()
console.log(maxElement);   // Output: 40
console.log(maxHeap.heap); // Output: [30, 20, 5, 10]
console.log(maxHeap.getMax(),'ll');


const array = [10, 20, 15, 30, 40];
maxHeap.build(array);

console.log(maxHeap.heap); // Output: [40, 30, 15, 10, 20]


const maxValue = maxHeap.getMax();
console.log(maxValue); // Output: 40
