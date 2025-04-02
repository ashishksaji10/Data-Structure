class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(){
        this.front = null
        this.rear = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    enqueue(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.front = this.rear = node
        }else{
            this.rear.next = node
            this.rear = node
        }
        this.size++
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }
        const value = this.front.value
        this.front = this.front.next
        this.size--

        if(this.isEmpty()){
            this.rear = null
        }
        return value
    }

    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.front.value
    }

    print(){
        let curr = this.front
        let val = ''
        while(curr){
            val += curr.value + ' '
            curr = curr.next
        }
        console.log(val)
    }
}

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()
queue.dequeue()
console.log(queue.peek())
queue.print()