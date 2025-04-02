class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root == null 
    }

    insert(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else {
            this.insertNode(this.root, node)
        }
    }

    insertNode(root, node){
        if(node.value < root.value){
            if(!root.left){
                root.left = node
            }else{
                this.insertNode(root.left, node)
            }
        }else{
            if(!root.right){
                root.right = node
            }else{
                this.insertNode(root.right, node)
            }
        }
    }

    contains(value){
        return this.containNode(this.root, value)
    }

    containNode(root, value){
        if(!root){
            return false
        }

        if(value < root.value){
            return this.containNode(root.left, value)
        }else if(value > root.value){
            return this.containNode(root.right, value)
        }else{
            return true
        }
    }

    remove(value){
        return this.removeNode(this.root, value)
    }

    removeNode(root, value){
        if(!root){
            return null
        }

        if(value < root.value){
            root.left = this.removeNode(root.left, value)
        } else if ( value > root.value){
            root.right = this.removeNode(root.right, value)
        }else {
            if(!root.right && !root.left){
                return null
            }

            if(!root.left){
                return root.right
            }
            if(!root.right){
                return root.left
            }

            let rightMin = this.findMin(root.right)
            this.root = rightMin
            root.right = this.removeNode(root.right, rightMin)
        }
        return root
    }

    findMin(root){
        while(root.left){
            root = root.left
        }
        return root
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
            console.log(root.value)
        }
    }

    levelOrder(){
        if(!this.root){
            return;
        }
        let queue = []
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

    findclosest(root, target){
        let closest = root.value

        while(root !== null){
            if(Math.abs(target - closest) > Math.abs(target - root.value)){
                closest = root.value
            }

            if(target<root.value){
                root = root.left
            }else if( target > root.value){
                root = root.right
            }else {
                break;
            }
        }
        return closest  
    }

    isValidBst(root, min=null, max=null){
        if(root === null){
            return true
        }

        if((min !== null && root.value <= min) || (max !== null && root.value>= max)){
            return false
        }

        return (
            this.isValidBst(root.left, min, root.value) && 
            this.isValidBst(root.right, root.value, max))
    }
} 

const BinarySearchTree =  new BST()
BinarySearchTree.insert(10)
BinarySearchTree.insert(5)
BinarySearchTree.remove(5)
BinarySearchTree.insert(20)
BinarySearchTree.insert(40)
console.log(BinarySearchTree.contains(5),"dsd")

// BinarySearchTree.inOrder(BinarySearchTree.root)
// BinarySearchTree.inOrder(BinarySearchTree.root)
// console.log(BinarySearchTree)

BinarySearchTree.levelOrder()
console.log(BinarySearchTree.findclosest(BinarySearchTree.root,8))
console.log(BinarySearchTree.isValidBst(BinarySearchTree.root))