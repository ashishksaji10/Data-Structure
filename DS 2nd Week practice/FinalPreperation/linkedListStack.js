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

    isEmpty(){
        return this.size === 0
    }

    push(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.top = node
        }else{
            node.next = this.top
            this.top = node
        }
        this.size++
    }

    pop(){
        if(this.isEmpty()){
            return null
        }

        const value = this.top.value
        this.top = this.top.next
        this.size--
        return value
    }

    topp(){
        if(this.isEmpty()){
            return null
        }
        return this.top.value
    }

    print(){
        let curr = this.top
        let val = ''
        while(curr){
            val += curr.value + ' '
            curr = curr.next
        }
        console.log(val)
    }
}

const lStack = new Stack()
console.log(lStack.isEmpty())
lStack.push(10)
lStack.push(20)
lStack.push(30)
lStack.print()
lStack.pop()
console.log(lStack.topp())
lStack.print()