class Queue{
    constructor(){
        this.item = []
    }

    enqueue(element){
        return this.item.push(element)
    }

    dequeue(){
        return this.item.shift()
    }

    isEmpty(){
        if(this.item.length === 0){
            return null
        }
    }

    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.item[0]
    }

    getSize(){
        return this.item.length
    }

    print(){
        console.log(this.item)
    }
}

const queue = new Queue()

console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(40)
queue.enqueue(30)
queue.print()
queue.dequeue()
queue.print()
console.log(queue.peek())
console.log(queue.getSize())
