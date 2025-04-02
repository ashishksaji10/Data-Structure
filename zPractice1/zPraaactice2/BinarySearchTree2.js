class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(this.root, node)
        }
    }

    insertNode(root, node){
        if(node.value < root.value){
            if(!root.left){
                root.left = node
            }else {
                this.insertNode(root.left, node)
            }
        }else {
            if(!root.right){
                root.right = node
            }else {
                this.insertNode(root.right, node)
            }
        }
    }

    contain(value){
        return containNode(this.root, value)
    }

    containNode(root, value){
        if(!root){
            return false
        }

        if(value < root.value){
            return this.containNode(root.left, value)
        }
        if(value > root.value){
            return this.containNode(root.right, value)
        }
        return true
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
        } else if (value > root.value){
            root.right = this.removeNode(root.right, value)
        } else {
            if(!root.left && !root.right){
                return null
            }

            if(!root.left){
                return root.right
            }

            if(!root.right){
                return root.left
            }

            let rightMin = this.findMin(root.right)
            root.value = rightMin.value
            root.right = this.deleteNode(root.right, rightMin,value)
        }
    }

    findMin(root){
        while(root.left){
            root = root.left
        }
        return root
    }
    findMax(root){
        while(root.right){
            root = root.right
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

    levelOrder(root){
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

   isValidBst(root, min = null, max = null){

    if(!root){
        return true
    }

    if(root.value <= min || root.value >= max){
        return false
    }

    return this.isValidBst(root.left, min, root.value) && this.isValidBst(root.right, root.value, max)
   }

   closest(root, target){

        let closest = root.value
        
        while(root !== null){
            if(Math.abs(target-closest) > Math.abs(target-root.value)){
                closest = root.value
            }

            if(target < root.value){
                root = root.left
            }else if (target > root.value){
                root = root.right
            }else {
                break;
            }
        }
        return closest
    }
}

const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(20)
bst.insert(40)
console.log(bst)
console.log("preOrder")
bst.preOrder(bst.root)
console.log("inOrder")
bst.inOrder(bst.root)
console.log("postOrder")
bst.postOrder(bst.root)
console.log("levelOrder")
bst.levelOrder()

console.log(bst.isValidBst(bst.root))
console.log(bst.closest(bst.root,31));