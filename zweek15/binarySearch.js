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

    insert(value){
        const node = new Node(value)
        if(this.root === null){
            this.root = node
        }else{
            this.insertNode(this.root, node)
        }
    }

    insertNode(root, newNode){
        if(newNode.value < root.value){
            if(!root.left){
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if(!root.right){
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value){
        if(!root){
            return false
        } else {
            if(root.value === value){
                return true
            } else if(value < root.value){
                return this.search(root.left, value)
            } else {
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

    levelOrder(root){
        let queue = []
        queue.push(this.root)

        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)

            if(curr.left){
                queue.push(curr.left)
            } else {
                queue.push(curr.right)
            }
        }
    }

    min(root){
        while(root.left){
            root = root.left
        }
        return root
    }
    max(root){
        while(root.right){
            root = root.right
        }
        return root
    }

    delete(value){
        return this.deleteNode(this.root, value)
    }

    deleteNode(root, value){
        if(!root){
            return false
        }

        if(value < root.value){
            return this.deleteNode(root.left, value)
        } else if(value > root.value){
            return this.deleteNode(root.right, value)
        } else {
            if(!root.right && !root.right){
                return null
            } 

            if(!root.left){
                return root.right
            }
            if(!root.right){
                return root.left
            }

            let minRight = this.min(root.right)
            this.root = minRight
            root.right = this.deleteNode(root.right, minRight.value)
        }
        return root
    }

    isValidBst(root, min = null, max = null){

        if(root === null){
            return true
        }

        if((min !== null && root.value <= min ) || max !== null && root.value >= max){
            return false
        }
    
        return(
            this.isValidBst(root.left,min,root.value) &&
            this.isValidBst(root.right, root.value, max)
        )
    }

    isPrime(num)    
}