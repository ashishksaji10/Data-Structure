class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
       this.top = null
        this.size = 0
    }

    push(value){
        const node = new Node(value)
        if(this.top){
            this.top.next = node
        }
        this.top = node

        this.size++
    }

    pop(){
        if(!this.top){
            return null
        }

        const value = this.top.value
        this.top = this.top.next
        this.size--
        return value
    }

    peek(){
        if(!this.top){
            return null
        }
        return this.top.value
    }

    print(){
        let curr = this.top
        let lval = []

        while(curr){
            lval.push(curr.value)
            curr = curr.next
        }

        console.log('Stack:',lval.join(' -> '));
        
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.print()

stack.print();  // Output: Stack: 30 -> 20 -> 10

console.log(stack.peek());  // Output: 30

console.log(stack.pop());  // Output: 30

stack.print();  // Output: Stack: 20 -> 10


console.log(stack.isEmpty()); // Output: false

stack.pop();
stack.pop();
stack.print()

console.log(stack.isEmpty())