class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2){
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
        if(!this.addVertex[vertex]){
            return null 
        }

        for(let v of this.adjacencyList){
            this.adjacencyList[v].delete(vertex)
        }

        delete this.adjacencyList[vertex]
    }

    BFS(start){
        let queue = [start]
        let visited = new Set([start])
        let result = []

        while(queue.length){
            let currentVertex = queue.shift()
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach(neigbour => {
                if(!visited.has(neigbour)){
                    visited.has(neigbour)
                    queue.push(neigbour)
                }
            })
        }

        return result

    }
}