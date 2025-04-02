class monotonicQueue{
    constructor(){
        this.queue = []
    }

    push(value){
        while(this.queue.length > 0 && this.queue[this.queue.length - 1] < value){
            this.queue.pop()
        }
        this.queue.push(value)
    }

    max(){
        return this.queue.length > 0 ? this.queue[0] : null
    }

    pop(value){
        if(this.length > 0 && this.queue[0] === value){
            this.queue.shift()
        }
    }

    printValues(){
        console.log(this.queue)
    }
}

const mq = new monotonicQueue();

mq.push(1)
mq.push(3)
mq.push(2)
mq.push(1)
mq.push(0)

console.log("Current maximum:", mq.max()); // Output: 3
mq.printValues(); // Output: [3, 2]

mq.pop();
console.log("Current maximum:", mq.max()); // Output: 2
mq.printValues(); // Output: [2]