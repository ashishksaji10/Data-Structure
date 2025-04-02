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

    prepend(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        } 
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        } else { 
            let prev = this.head 
            while(prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    insert( value, index ){
        if(index < 0 || index > this.size){
            return
        }

        if( index === 0 ){
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for(let i = 0 ; i < index-1 ; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeFrom(index){
        if(index < 0 || index >= this.size){
            return null
        }

        let removeNode
        if(index === 0){
            removeNode = this.head
            this.head = this.head.next

        } else {
            let prev = this.head
            for(let i = 0 ; i < index-1 ; i++){
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value     
    }

    removeValue(value){
        if(this.isEmpty()){
            return null
        }

        if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                let removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }
            return null
        }      
    }

    search(value){
        if(this.isEmpty()){
            return -1
        }

        let i = 0
        let curr = this.head
            while(curr){
                if(curr.value === value){
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }

    reverse(value){
        let prev = null
        let curr = this.head

        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
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

    removeFromFront(){
        let removeNode
        if(this.isEmpty()){
            return null
        }else{
           removeNode = this.head
           this.head = this.head.next
        }
        return removeNode
    }

    removeFromEnd(){
        let removeNode
        if(this.isEmpty()){
            return null
        }
        
        if(!this.head.next){
            removeNode = this.head
            this.head = null
        }
            let prev = this.head
            while(prev.next.next){
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = null
        return removeNode
    }

}

const list = new linkedList()
console.log('List is Empty',list.isEmpty());
console.log('List size',list.getSize());
// list.print()
// list.append(10)
// list.print()
// list.append(20)
// list.append(30)

list.insert(10, 0)
list.print()
list.insert(20, 0)
list.print()
list.insert(30, 1)
list.print()
list.insert(40, 2)
list.print()
console.log(list.getSize())

console.log('...............')

// console.log(list.removeValue(10))
// list.print()

console.log(list.search(20))

console.log('...............')

list.reverse()
list.print()

list.removeFromFront()
list.print()
list.removeFromEnd()
list.print()
