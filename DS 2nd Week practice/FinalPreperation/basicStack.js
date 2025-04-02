class Stack{
    constructor(){
    this.item = []
    }

    isEmpty(){
        return this.item.length === 0 
    }
    push(value){
        return this.item.push(value)
    }
    pop(){
        if(this.isEmpty()){
            return null
        }
        const value = this.item[this.item.length - 1]
        this.item.pop()
        return value
    }

    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.item[this.item.length -1]
    }

    print(){
        console.log(this.item)
    }
}

let stack = new Stack()
console.log(stack.isEmpty())
stack.push(10)
stack.push(20)
stack.push(30)
stack.print()
console.log(stack.pop())
stack.print()
console.log(stack.peek());
