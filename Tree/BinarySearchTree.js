class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    
    isEmpty(){
        return this.root === null
    }

    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left, newNode)
            }
            
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value){
        if(!root){
            return false
        }else{
            if(root.value === value ){
                return true
            }else if(value < root.value){
                return this.search(root.left, value)
            }else{
                return this.search(root.right, value)
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
            
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
            
        }
    }

    levelOrder(){
        const queue = []
        queue.push(this.root)

        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }

            if(curr.right){
                queue.push(curr.right)
            }   
        }
    }

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value){
        if(root === null){
            return root
        }

        if(value < root.value){
            root.left = this.deleteNode(root.left, value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right, value)
        } else {
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }

            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }

    sameTree(root1, root2){
        
        if(!root1 || !root2){
            return false
        }

        if(root1.value === root2.value){
            this.sameTree(root1.left && root2.left)
            this.sameTree(root1.right && root2.right)
        }else{
            return false
        }
        return true
    }
}







let bts = new BinarySearchTree()
// console.log(bts.isEmpty())
bts.insert(10)
bts.insert(5)
bts.insert(15)
bts.insert(3)
bts.insert(7)


let bst2 = new BinarySearchTree()
bts.insert(10)
bts.insert(5)
bts.insert(15)
bts.insert(3)
bts.insert(5)

// console.log(bts.search(bts.root, 10))
// console.log(bts.search(bts.root, 5))
// console.log(bts.search(bts.root, 15))
// console.log(bts.search(bts.root, 12))

// bts.levelOrder(bts.root)

// console.log(bts.min(bts.root))
// console.log(bts.max(bts.root))

bts.levelOrder()
bts.delete(55)
bts.levelOrder()

console.log(bts.sameTree(bts.root,bst2.root))


