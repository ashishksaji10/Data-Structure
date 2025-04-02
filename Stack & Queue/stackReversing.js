function reverseStack(stack) {
    const tempStack = [];
    
    while (stack.length > 0) {
        tempStack.push(stack.pop());
    }

    while (tempStack.length > 0) {
        stack.push(tempStack.shift());
    }
}


const stack = [1, 2, 3, 4, 5];
reverseStack(stack);
console.log(stack); 
