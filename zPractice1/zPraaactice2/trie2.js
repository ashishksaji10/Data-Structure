class TrieNode{
    constructor(){
        this.children = {}
        this.endWord = false
    }
}

class Trie {
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.endWord = true
    }

    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }

       return node.endWord
    }

    startWith(word){
        let node = this.root
        for (let char of word) {
            if(!node.children[char]){
                return false
            }

            node = node.children[char]
        }
        return true
    }

    autoComplete(word){
        let node = this.root
        for (let char of word) {
            if(!node.children[char]){
                return []
            }
            node = node.children[char]
        }
        return this.getAllWords(node, word)
    }
    
    getAllWords(node, currentWord){
        let wordList = []

        if(node.endWord){
            wordList.push(currentWord)
        }

        for(let char in node.children){
            wordList = wordList.concat(this.getAllWords(node.children[char] , currentWord+char))   
        }  
        return wordList
    }
}

const tri = new Trie()
tri.insert("apple")
tri.insert("ape")
tri.insert("app")
// console.log(tri.search("App"))
console.log(tri.startWith("Ape"))
// tri.delete("Ape")
console.log(tri.search("Ape"))

console.log(tri.autoComplete("ap"))