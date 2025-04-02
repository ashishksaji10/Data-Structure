class hashTable{
    constructor(size){
        this.table = new Array()
        this.size = size
    }

    hash(key){
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    hash2(key){
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return 7 - (total % 7)
    }

    set(key, value){
        let index = this.hash(key)
        let stepSize = this.hash2(key)
        while(this.table[index]){
            index = (index + stepSize) % this.size
        }
        this.table[index] = [key, value]
    }

    get(key){
        let index = this.hash(key)
        let stepSize = this.hash2(key)
        while(this.table[index]){
            if(this.table[index][0] === key){
                return this.table[index][1]
            }
            index = (index + stepSize) % this.size
        }
        return undefined
    }

    remove(key){
        let index = this.hash(key)
        let stepSize = this.hash2(key)
        while(this.table[index]){
            if(this.table[index][0] === key){
                this.table[index] = undefined
                return
            }
            index = (index + stepSize) % this.size
        }
    }

    display() {
        for (let i = 0; i < this.size; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

const doubleHashingTable = new hashTable(50);
doubleHashingTable.set("name", "Bruce");
doubleHashingTable.set("age", 20);
doubleHashingTable.display();
console.log(doubleHashingTable.get("name"));
doubleHashingTable.set("mane", "Clark");
doubleHashingTable.set("ega", "hoi");
doubleHashingTable.display();
doubleHashingTable.set("name", "Ben");
doubleHashingTable.remove("mane");
doubleHashingTable.remove("age");
doubleHashingTable.display();