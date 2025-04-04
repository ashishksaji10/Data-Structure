class hashTable{
    constructor(size){
        this.size = size
        this.table = new Array(size)
    }

    hash(key){
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        let index = this.hash(key)
        return this.table[index] = value
    } 
    get(key){
        let index = this.hash(key)
        return this.table[index]
    } 
    remove(key){
        let index = this.hash(key)
        this.table[index] = undefined
    }

    print(){
        for (let i = 0; i < this.table.length; i++) {
           if(this.table[i]){
            console.log(i,this.table[i])
           }
            
        }
    }
}


const hashTablee = new hashTable(50)
hashTablee.set('name','Ben')
hashTablee.set('age',25)
hashTablee.print()
console.log(hashTablee.get('name'))
hashTablee.remove('age')
hashTablee.print()