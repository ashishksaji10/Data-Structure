// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BinaryTree{
//     constructor(){
//         this.root = null
//     }

//     insert(value){
//         let node = new Node(value)
//         if(this.root === null){
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)

//         }
//     }

//     insertNode(root, node){
//         if(node.value < root.value){
//             if(!root.left){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left, node)
//             }
//         } else {
//             if(!root.right){
//                 root.right = node
//             } else {
//                 this.insertNode(root.right, node)
//             }
//         }
//     }

//     remove(value){
//         return this.removeNode(this.root, value)
//     }

//     removeNode(root, value){
//         if(value < root.value){
//             return this.removeNode(root.left,value)
//         }else if (value > root.value){
//             return this.removeNode(root.right, value)
//         } else {
//             if(!root.left && !root.right){
//                 return null
//             }
//             if(!root.left){
//                 return root.right
//             }
//             if(!root.right){
//                 return root.left
//             }
//         }

//         let rightMin = this.findMin(root.right)
//         this.root = rightMin
//         root.right = this.removeNode(root.right,rightMin)
//     }

//     findMin(root){
//         if(root){
//             while(root.left){
//                 root = root.left
//             }
//             return root
//         }
//     }

//     primeNumber(root){
//         if(root === null){
//             return null
//         }
//         if(root.value % 1 === 1)
//         this.primeNumber(root.left)
//         this.primeNumber(root.right)
//     }
// }


// let str = '82526687'
// let arr = str.split('')

// function heapify(arr,index=0)){
//     let left = 2*index+1
//     let right = 2*index+2
//     let smallest = index

//     if(left < arr.length && arr[left])
// }

// function heapSort(arr){
    

//     for(let i = Math.floor(arr.length/2)-1; i>=0 ; i--){
        
//     }
// }


class graph{
    constructor(){
        this.adj = {}
    }

    BFS(start){
        let queue = [start]
        let visited = new Set([start])
        let result = []

        while(queue.length){
            let cv = this.queue.shift()

            this.adj[cv].array.forEach(closee => {
                    if(!visited[closee]){
                        visited.add(closee)
                        queue.push(closee)
                    }
            });
            return queue
         }
    }
}
