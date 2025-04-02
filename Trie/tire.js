class trieNode{
    constructor(){
        this.children = {}
        this.endWord = false
    }
}

class trie{
    constructor(){
        this.root  = new trieNode()
    }

    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new trieNode()
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

        for(let char of word){
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
            wordList = wordList.concat(this.getAllWords(node.children[char], currentWord + char))
        }
        return wordList
    }
}

const triee = new trie()
triee.insert("App")
triee.insert("Apple")
triee.insert("Ape")
triee.insert("Apply")
triee.insert("applet")

console.log(triee.search('Appl'));
console.log(triee.startWith('A'));

console.log(triee.autoComplete('App'));
