class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    print() {
        if(this.isEmpty()) {
            console.log('This List is Empty');
        } else {
            let curr = this.head
            let listValue = ''

            while(curr) {
                listValue += `${curr.value} `
                curr = curr.next
            }
            console.log(listValue)
        }
    }

    prepend(){
        
    }
    append(){

    }
    removeFromFront(){

    }
    removeFromEnd(){

    }
}

const list = new linkedList()