class directedGraph{
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
        this.add(vertex2)
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
        for(let vertex in this.adjacencyList){
            console.log(vertex+"->"+[...this.adjacencyList[vertex]])
        }
    }

    hasEdge(vertex1,vertex2){
        return this.adjacencyList[vertex1].has(vertex2)
    }

    BFS(start){
        let queue = [start]
        let visited = new Set([start])
        let result = []

        while(queue.length){
            let curr = queue.shift()
            result.push(curr)

            this.adjacencyList[curr].forEach(neigbor => {
                if(!visited.has(neigbor)){
                    visited.add(neigbor)
                    queue.push(neigbor)
                }
            })
        }
        return result
    }

    DFS(start){
        let queue = [start]
        let visited = new Set([start])
        let result = []

        while(queue.length){
            let curr = 
        }
    }
}

const graph = new directedGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');


graph.display();

console.log(graph.hasEdge('A', 'B')); // true
console.log(graph.hasEdge('B', 'A')); // false
console.log(graph.hasEdge('C', 'D')); // true
console.log(graph.hasEdge('D', 'A')); // false

graph.remove('C');
graph.display();

const bfsResult = graph.BFS('A');
console.log(bfsResult);


const dfsResult = graph.DFS('A');
console.log(dfsResult);

