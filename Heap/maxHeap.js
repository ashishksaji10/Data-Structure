class MaxHeap{
    constructor(){
        this.heap = []
    }

    bubbleup(index){
        let parentIndex = Math.floor((index - 1)/2)

        if(parentIndex >= 0 && this.heap[index] > this.heap[parentIndex]){
            let temp = this.heap[index]
            this.heap[index] = this.heap[parentIndex]
            this.heap[parentIndex] = temp

            this.bubbleup(parentIndex)
        }
    }

    bubbleDown(index){
        
        let leftChild = 2*index + 1
        let rightChild = 2*index + 2
        let largest = index

        if(leftChild < this.heap.length && this.heap[leftChild] > this.heap[largest]){
            largest = leftChild
        }

        if(rightChild < this.heap.length && this.heap[rightChild] > this.heap[largest]){
            largest = rightChild
        }

        if(largest !== index){
            let temp = this.heap[largest]
            this.heap[largest] = this.heap[index]
            this.heap[index] = temp
        }
    }

    insert(value){
        this.heap.push(value)
        this.bubbleup(this.heap.length-1)
    }

    remove(){
        if(this.heap.length === 0){
            return null
        }

        if(this.heap.length === 1){
            return this.heap.pop()
        }

        const heap = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown(0)
        return heap
    }

    build(array){
         this.heap = array
         for (let i = Math.floor(array.length/2); i >= 0; i--) {
            this.bubbleDown(i)
         }
    }

    getMax(){
        return this.heap[0]
    }
}

const maxHeap = new MaxHeap()

maxHeap.insert(10)
maxHeap.insert(20)
maxHeap.insert(5)
maxHeap.insert(30)
maxHeap.insert(40)

console.log(maxHeap.heap);
// console.log(maxHeap.remove());
// console.log(maxHeap.heap);

