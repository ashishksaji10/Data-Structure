class Queue{
    constructor(){
        this.item = []
    }

    isEmpty(){
        return this.item.length === 0
    }

    getSize(){
        return this.item.length
    }

    enqueue(element){
        return this.item.push(element)
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }
        return this.item.shift()
    }

    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.item[0]
    }

    print(){
        console.log(this.item)
    }
}

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()
console.log(queue.isEmpty())
console.log(queue.getSize())
queue.dequeue()
queue.print()
console.log(queue.peek())