class MinHeap{
    constructor(){
        this.heap = []
    }

    bubbleup(index){
        let parentindex = Math.floor((index - 1)/2)

        if(parentindex >= 0 && this.heap[parentindex] > this.heap[index]){
            let temp = this.heap[parentindex]
            this.heap[parentindex] = this.heap[index]
            this.heap[index] = temp

            this.bubbleup(parentindex)
        }
    }

    bubbleDown(index){
        let left = 2*index + 1
        let right = 2*index + 2
        let smallest = index

        if(left < this.heap.length && this.heap[left] < this.heap[smallest]){
            smallest = left
        }

        if(right < this.heap.length && this.heap[right] < this.heap[smallest]){
            smallest = right
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
        console.log(this.heap)
        this.bubbleup(this.heap.length - 1)
    }

    build(array){
        this.heap = array
        for(let i = Math.floor((array.length - 1)/2) ; i>=0 ; i--){
            this.bubbleDown(i) 
        }
        
    }

}

const minHeap = new MinHeap()

const array  = [10,20,5,6,1,8,12,15,3,97]
minHeap.build(array)

console.log(minHeap.heap);


