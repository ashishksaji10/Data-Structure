class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null

    }
}

class binaryTree{
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
            const queue = [this.root]
            while(queue.length){
                let curr = queue.shift()
                if(!curr.left){
                    curr.left =  newNode
                    break
                }else{
                    queue.push(curr.left)
                }
                if(!curr.right){
                    curr.right =  newNode
                    break;
                }else{
                    queue.push(curr.right)
                }
            }
        }
    }

    preOrderTraversal(root){
        if(root){
            console.log(root.value)
            this.preOrderTraversal(root.left)
            this.preOrderTraversal(root.right)
        }
    }

    inOrderTraversal(root){
        if(root){
            this.inOrderTraversal(root.left)
            console.log(root.value)
            this.inOrderTraversal(root.right)
        }
    }

    postOrderTraversal(root){
        if(root){
            this.postOrderTraversal(root.left)
            this.postOrderTraversal(root.right)
            console.log(root.value)
        }
    }

    levelOrderTraversal(root){
        let queue = [root]
        let result= []
        while(queue.length){
            let curr =  queue.shift()
            result.push(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
        return result
    }

    sumOfElements(root){
        if(!root){
            return 0
        }

        let leftSum = this.sumOfElements(root.left)
        let rightSum = this.sumOfElements(root.right)

        return root.value + leftSum + rightSum
    }

    maximumValue(root){
        if(!root){
            return -Infinity
        }
        let leftMax = this.maximumValue(root.left)
        let rightMax = this.maximumValue(root.right)

        return Math.max(root.value,leftMax,rightMax)
    }

    treeHeight(root){
        if(!root){
            return 0
        }

        let leftHeight = this.treeHeight(root.left)
        let rightHeight = this.treeHeight(root.right)

        return Math.max(leftHeight,rightHeight) + 1
    }

    existTree(root,value){
        if(!root){
            return false
        }
        let inLeft = this.existTree(root.left,value)
        let inRight = this.existTree(root.right,value)
        return root.value === value || inLeft || inRight
    }

    reverseBinary(root){
        if (!root) {
            return;
        }
    
        this.reverseBinary(root.left);
        this.reverseBinary(root.right);
        
        // Correctly swap without returning
        [root.left, root.right] = [root.right, root.left];
    }

    leafNode(root){
        if(!root){
            return
        }
        if(!root.left && !root.right){
            console.log(root.value)
        }

        this.leafNode(root.left)
        this.leafNode(root.right)
    }

    isPrime(num){
        if(num <= 1) return false
        for(let i=2; i<=Math.sqrt(num); i++){
            if(num%i === 0) return false
        }
        return true
    }

    findPrime(root, primes = []){
        if(!root) return primes

        if(this.isPrime(root.value)) primes.push(root.value)
        this.findPrime(root.left, primes)
        this.findPrime(root.right, primes)

        return primes
    }

    findEven(root){
        if(!root) return 0

        let sum = 0
        
        sum+= root.value
        sum+= this.findEven(root.left)
        sum+= this.findEven(root.right)

        return sum
    }
}



const tree = new binaryTree()
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);

console.log("inOrder")
tree.inOrderTraversal(tree.root);
console.log("preOrder")
tree.preOrderTraversal(tree.root);
console.log("postOrder")
tree.postOrderTraversal(tree.root);
console.log("Level-order Traversal:", tree.levelOrderTraversal(tree.root));

console.log(tree.sumOfElements(tree.root),'sum')
console.log(tree.maximumValue(tree.root))
console.log(tree.treeHeight(tree.root))
console.log(tree.existTree(tree.root,5))
console.log("hi",tree.reverseBinary(tree.root))

console.log("Level-order Traversal after reversing:", tree.levelOrderTraversal(tree.root)); // [1, 3, 2, 5, 4]


tree.leafNode(tree.root)

console.log(tree.findPrime(tree.root),'l')
console.log(tree.findEven(tree.root),'sum')
