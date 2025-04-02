class Stack{
    constructor(){
        this.item = []
    }

    isEmpty(){
        return this.item.length === 0
    }
    getSize(){
        return this.item.length
    }

    push(element){
        return this.item.push(element)
    }
    pop(){
        if(this.isEmpty()){
            return null
        }
        return this.item.pop()
    }
    top(){
        if(this.isEmpty){
            return null
        }
        return this.item[this.item.length - 1]
    }

    print(){
        console.log(this.item)
    }
}

let stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.print()
stack.pop()
stack.push(10)
stack.push(20)
stack.push(30)
stack.print()
stack.top()
stack.push(30)
stack.print()
