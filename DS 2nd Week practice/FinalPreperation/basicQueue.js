class Queue{
    constructor(){
        this.item = []
    }

    isEmpty(){
        return this.item.kength === 0
    }

    enqueue(value){
        return this.item.push(value)
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }
        const value = this.item[0]
        this.item.shift()
        return value
    }

    first(){
        return this.item[0]
    }

    print(){
        console.log(this.item)
    }

}

let queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.print()
queue.dequeue()
console.log(queue.first());
queue.print()