class HashTable{
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

    set(key, value){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key, value]]
        }else{
            let sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                sameKeyItem[1] = value
            }else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(bucket){
            let sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }      
        }
        return undefined
    }

    
}