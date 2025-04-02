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
        const node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }

    insertNode(root, node){
        if(node.value < root.value){
            if(root.left === null){
                root.left = node
            } else {
                this.insert(root.left, node)
            }
        } else {
            if(root.right === null){
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }

    search(root, value){
        if(!root){
            return false
        } else {
            if(root.value === value){
                return true
            }else if(value < root.value){
                return this.search(root.left, value)
            }else {
                return this.search(root.right, value)
            }
        }
    }

    contain(value){
        return containNode(this.root,value)
    }

    containNode(root,value){
        if(!root){
            return false
        }

        if(value < root.value){
            return this.containNode(root.left, value)
        }

        if(value > root.value) {
            return this.containNode(right.root, value)
        }
        return true
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
        } else if (value > root.value) {
            return this.deleteNode(root.right, value)
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

           let minRight = this.findMin(root.right)
           this.root = minRight
           root.right = this.deleteNode(root.right, minRight.value)
        }
        return root
    }

    findMin(root){
        while(root.left)[
            root = root.left
        ]
        return root
    }

    findMax(root){
        while(root.right){
            root = root.right
        }
        return root
    }

    // preOrder(root){
    //     if(root){
    //         console.log(root.value)
    //         this.preOrder(root.left)
    //         this.preOrder(root.right)
    //     }
    // }
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

    // BFS algorithm
    levelOrder(){
        const queue = []
        queue.push(this.root)

        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value);
            
            if(curr.left){
                queue.push(curr.left)
            }

            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    isValidBst(root, min = null, max = null){
        if(root === null){
            return true
        }

        if((min !== null && root.value <= min) || (max !== null && root.value > max)){
            return false
        }

        return (
            this.isValidBst(root.left, min, root.value) && 
            this.isValidBst(root.right, root.value, max) )
    }

    findClosest(root, target){
        let closest = root.value

        while(root !== null){
            if(Math.abs(target - closest) > Math.abs(target - root.value)){
                closest = root.value
            }
w
            if(target < root.value){
                root = root.left
            }else if (target > root.value ){
                root = root.right
            } else {
                break;
            }
        }
        return closest
    }


    preOrder(root){
        let sum = 0
        if(root){
               if(root.value%2==0){
                sum = root.value
               }
            console.log(root.value)
            sum += this.preOrder(root.left)
            sum += this.preOrder(root.right)
        }
        return sum
    }

}


const bst = new BinarySearchTree()

bst.insert(9)
bst.insert(5)
bst.insert(20)
bst.insert(40)
// console.log(bst)
console.log("preOrder")
console.log(bst.preOrder(bst.root),'p')
// console.log("inOrder")
// bst.inOrder(bst.root)
// console.log("postOrder")
// bst.postOrder(bst.root)
// console.log("levelOrder")
// bst.levelOrder()

// console.log(bst.isValidBst(bst.root))
// console.log(bst.findClosest(bst.root,31));
