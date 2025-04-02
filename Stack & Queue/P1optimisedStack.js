class Stack{
    constructor(){
        this.items = {}
        this.top = 0
    }

    push(element){
        this.items[this.top] = element
        this.top++
    }

    pop(){
        if(this.isEmpty()){
            return null
        }
        this.top--
        const item = this.items[this.top]
        delete this.items[this.top]
        return item
        
    }

    isEmpty(){
        return this.top === 0
    }

    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.items[this.top - 1]
    }

    getSize(){
        return this.top
    }

    print(){
        console.log(this.items);
        
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

console.log(stack.getSize(),'l')
stack.print()