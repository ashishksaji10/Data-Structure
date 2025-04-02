class Node{
    constructor(key,value){
        this.key = key
        this.value = value
        this.next = null
    }
}

class linkedListStack{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)  
        }
        return total % this.size
    }

    set(key, value){
        const index = this.hash(key)
        const node = new Node(key, value)

        if(!this.table[index]){
            this.table[index] = node
        }else {
            let curr = this.table[index]
            while(curr.next){
                if(curr.key === key){
                    curr.value = value
                    return
                }
                curr = curr.next
            }
            if(curr.key === key){
                curr.value = value
            }else{
                curr.next = node
            }
        }
    }

    get(key){
        const index = this.hash(key)
        let curr = this.table[index]

        while(curr){
            if(curr.key === key){
                return curr.value
            }
            curr = curr.next
        }
        return undefined
    }

    delete(key){
        const index = this.hash(key)
        let curr = this.table[index]
        let prev = null

        while(curr){
            if(curr.key === key){
                if(prev){
                    prev.next = curr.next
                }else{
                    this.table[index] = curr.next
                }
                return true
            }
            prev = curr
            curr = curr.next
        }
        return false
    }
}

const hashTable = new linkedListStack(50);

hashTable.set("name", "Alice");
hashTable.set("age", 25);
hashTable.set("occupation", "Engineer");

console.log(hashTable.get("name")); 
console.log(hashTable.get("age")); 
console.log(hashTable.get("occupation")); 

// Handling collisions
hashTable.set("name", "Bob");
console.log(hashTable.get("name")); 

// Deleting a key
hashTable.delete("age");
console.log(hashTable.get("age")); 