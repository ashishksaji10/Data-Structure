function reverseQueue(queue) {
    const stack = [];

    while (queue.length > 0) {
        stack.push(queue.shift());
    }

    while (stack.length > 0) {
        queue.push(stack.pop());
    }
}


const queue = [1, 2, 3, 4, 5];
reverseQueue(queue);
console.log(queue); 
