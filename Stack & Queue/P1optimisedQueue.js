class Queue{
    constructor(){
        this.item = {}
        this.front = 0
        this.rear = 0
    }

    enqueue(element){
        this.item[this.rear] = element
        this.rear++
    }

    dequeue(){
        const Ditem = this.item[this.front]
        delete this.item[this.front]
        this.front++
        return Ditem
    }

    isEmpty(){
        return this.rear - this.front === 0
    }

    peek(){
        return this.item[this.front]
    }

    size(){
        return this.rear - this.front
    }

    print(){
        console.log(this.item)
    }

    reverse(){
        if(this.isEmpty()){
            return null
        }
        let front = this.dequeue()

        this.reverse()

        this.enqueue(front)
    }
}

const queue = new Queue()
console.log(queue.isEmpty());

queue.enqueue(10)
queue.enqueue(30)
queue.enqueue(20)
queue.print()
queue.reverse()
queue.print()

queue.dequeue()
queue.print()

console.log(queue.peek());
console.log(queue.size())



