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
        for (let char of word) {
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.endWord = true
    }

    search(word){
        let node = this.root
        for (let char of word) {
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
        return this.getAllWords(node,word)
    }

    getAllWords(node, currentWord){
        let wordList = []

        if(node.endWord){
            wordList.push(currentWord)
        }

        for(let char in node.children){
            wordList = wordList.concat(this.getAllWords(node.children[char], currentWord+char))
        }
        return wordList
    }
}


const triee = new Trie()
triee.insert("App")
triee.insert("Apple")
triee.insert("Ape")

console.log(triee.search("Apple"))
console.log(triee.search("A"))
console.log(triee.startWith("B"))
console.log(triee.startWith("B"))

console.log(triee.autoComplete("A"))