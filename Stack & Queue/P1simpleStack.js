class Stack{
    constructor(){
        this.stack = []
    }

    push(element){
        return this.stack.push(element)
    }

    pop(){
        return this.stack.pop()
    }

    isEmpty(){
        return this.stack.length === 0
    }

    getSize(){
        return this.stack.length
    }

    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.stack[this.stack.length - 1]
    }

    print(){
        console.log(this.stack);
        
    }
}

const stack = new Stack()

console.log(stack.isEmpty())
stack.push(10)
stack.push(20)
stack.push(40)
stack.push(30)
stack.print()
stack.pop()
stack.print()
console.log(stack.peek())
console.log(stack.getSize())