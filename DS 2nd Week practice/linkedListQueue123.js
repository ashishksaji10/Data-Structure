class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedListQueue{
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
        let list = ''

        while(curr){
            list += curr.value + " "
            curr = curr.next
        }
        console.log(list)
    }
}

const queue = new LinkedListQueue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
// queue.enqueue(4)
queue.print()
queue.dequeue()
queue.print()
console.log(queue.peek());
