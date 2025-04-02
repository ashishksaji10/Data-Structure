class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }
    
    isEmpty(){
        return this.root === null
    }
    insert(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else{
        this.insertNode(this.root, node)
        }
    }

    insertNode(root, node){
        if(node.value < root.value){
            if(root.left === null){
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if(root.right === null){
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }

    contains(value){
        return this.findNode(this.root, value)
    }

    findNode(root, value){
        if(root === null){
            return null
        }

        if(value < root.value){
            return this.findNode(root.left, value)
        }else if(value > root.value){
            return this.findNode(root.right, value)
        } else {
            return root
        }
    }

    inOrderTraversal(root){
        if(root){
            this.inOrderTraversal(root.left)
            console.log(root.value)
            this.inOrderTraversal(root.right)
        }
    }

    getHeight(root){
        if(root === null){
            return -1
        } else {
            let left = this.getHeight(root.left)
            let right = this.getHeight(root.right)
            return Math.max(left,right) + 1 
        }
    }
}

const binaryTree = new BinaryTree()

binaryTree.insert(10)
binaryTree.insert(5)
binaryTree.insert(15)
binaryTree.inOrderTraversal(binaryTree.root)