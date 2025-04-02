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

    enqueue(value){
        const node = new Node(value)
        if(this.rear){
            this.rear.next = node
        }
        this.rear = node
        if(!this.front){
            this.front = node
        }
        this.size++
    }

    dequeue(){
        if(!this.front){
            return null
        }      
        const value = this.front.value
        this.front = this.front.next

        if(!this.front){
            this.rear = null
        }
        this.size--
        return value
    }

    peek(){
        if(!this.front){
            return null
        }
        return this.front.value
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    print(){
        let current = this.front
        let arr = []
        while(current){
            arr.push(current.value)
            current = current.next
        }
        console.log("Queue:",arr.join(' '))       
    }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek()); 
console.log(queue.isEmpty()); 
console.log(queue.getSize()); 
queue.print()
queue.dequeue();
queue.dequeue();

console.log(queue.isEmpty());
queue.print()
