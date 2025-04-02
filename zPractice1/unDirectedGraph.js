class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }


    remove(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }

        for(let v in this.adjacencyList){
            this.adjacencyList[v].delete(vertex)
            
        }

        delete this.adjacencyList[vertex]
    }

    display(){
        for( let vertex in this.adjacencyList){
            console.log((vertex + " -> " + [...this.adjacencyList[vertex]] ));
        }
    }

    hasEdge(vertex1, vertex2){
        return this.adjacencyList[vertex1] && this.adjacencyList[vertex1].has(vertex2)
    }

    BFS(start){
        let queue = [start]
        let visited = new Set([start])
        let result = []

        while(queue.length){
            let currentVertex = queue.shift()
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbour => {
                if(!visited.has(neighbour)){
                    visited.add(neighbour)
                    queue.push(neighbour)
                }
            });
        }
        return result

    }


    DFS(start){

        let stack = [start]
        let visited = new Set()
        let result = []

        while(stack.length){
            let currentVertex = stack.pop()
            if(!visited.has(currentVertex)){
                visited.add(currentVertex)
                result.push(currentVertex)

                this.adjacencyList[currentVertex].forEach(nenighbour => {
                    if(!visited.has(nenighbour)){
                        stack.push(nenighbour)
                    }
                })
            }
        }
        return result
    }
}

const grp = new Graph();
grp.addEdge("A", "B");
grp.addEdge("B", "C");
grp.addEdge("C", "D");
grp.addEdge("A", "D");
grp.display();

console.log(grp.hasEdge("A", "C"));
console.log("BFS");
console.log(grp.BFS("A"));
console.log("DFS");
console.log(grp.DFS("A"));
console.log("Let's remove");
grp.remove("B");
grp.display();