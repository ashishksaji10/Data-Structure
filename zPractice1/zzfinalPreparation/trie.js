class TrieNode{ 
    constructor(){
        this.children = {}
        this.EndWord = false
    }
}

class Trie {
    constructor() {
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
    }
}
