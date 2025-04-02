class hashTable{
    constructor(size){
        this.table = new Array()
        this.size =size
    }

    hash(key){
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key, value){
        let index = this.hash(key)
        let i = 1
        while(this.table[index]){
            index = (index + i*i) % this.size
            i++
        }
        this.table[index] = [key,value]
    }

    get(key){
        let index = this.hash(key)
        let i = 1
        while(this.table[index]){
            if(this.table[index][0] === key){
                return this.table[index][1]
            }
            index = (index + i*i) % this.size
            i++
        }
        return undefined
    }


    remove(key){
        let index = this.hash(key)
        let i = 1
        while(this.table[index]){
            if(this.table[index][0] === key){
                this.table[index] = undefined
                return
            }
            index = (index + i*i) % this.size
            i++
        } 
    }

    display(){
        for (let i = 0; i < this.table.length; i++) {
            if(this.table[i]){
                console.log(i,this.table[i]);
                
            }
            
        }
    }

    checkDuplicate(){
        for (let i = 0; i < this.table.length - 1; i++) {
            if(!this.table[i]) continue
            for (let j = i+1; j < this.table.length; j++) {
                if(!this.table[j]) continue
                if(this.table[i][1] === this.table[j][1]){
                    console.log(this.table[i], this.table[j],'ll')
                    return true
                }
            } 
        }
        return false
    }
}

const quadraticTable = new hashTable(50);
quadraticTable.set("name", "Bruce");
quadraticTable.set("name", "Sasi");
quadraticTable.set("age", "Sasi");
quadraticTable.set("age", 20);
quadraticTable.display();
console.log(quadraticTable.checkDuplicate())