class MinHeap{
    constructor(){
        this.heap = []
    }
    

    bubbleUp(index){
        let parentIndex = Math.floor((index - 1)/2)
        if(parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]){
            let temp = this.heap[parentIndex]
            this.heap[parentIndex] = this.heap[index]
            this.heap[index] = temp
            this.bubbleUp(parentIndex)
        }
    }

    bubbleDown(index){
        let leftChild = index*2 + 1
        let rightChild = index*2 + 2
        let smallest = index

        if(leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]){
            smallest = leftChild
        }
        if(rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]){
            smallest = rightChild
        }

        if(smallest !== index){
            let temp = this.heap[smallest]
            this.heap[smallest] = this.heap[index]
            this.heap[index] = temp
            this.bubbleDown(smallest)
        }
    }

    insert(value){
        this.heap.push(value)
        this.bubbleUp(this.heap.length - 1)
    }

    remove(){
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
        for (let i = Math.floor(this.heap.length/2); i >=0 ; i--) {
            this.bubbleDown(i)   
        }
    }

    getMin(){
        return this.heap[0]
    }
}

const minHeap = new MinHeap();

// Inserting elements into the heap
minHeap.insert(30);
minHeap.insert(10);
minHeap.insert(20);
minHeap.insert(5);
minHeap.insert(40);

// console.log(minHeap.heap); // Output: [5, 10, 20, 30, 40]


// const minElement = minHeap.remove();
// console.log(minElement);   // Output: 5
// console.log(minHeap.heap); // Output: [10, 30, 20, 40]



const array = [30, 20, 15, 5, 40];
minHeap.build(array,);

console.log(minHeap.heap,'j'); // Output: [5, 20, 15, 30, 40]


const minValue = minHeap.getMin();
console.log(minValue);  