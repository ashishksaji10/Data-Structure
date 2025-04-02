class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    print() {
      console.log(this.items.toString());
    }

    powerof2(n){
      let stack = new Stack()
      for (let i = 1; i < n; i++) {
        stack.push(Math.pow(2,i))
      }    
      console.log('jdabfjad');
      stack.print()  
    }
  }

  function sortStack(inputStack){
    let altStack = new Stack()

    while(!inputStack.isEmpty()){
      let temp = inputStack.pop()
    

    while(!altStack.isEmpty() && altStack.peek() > temp){
      inputStack.push(altStack.pop())
    }

    altStack.push(temp)
    }

    while(!altStack.isEmpty()){
      inputStack.push(altStack.pop())
    }
    return inputStack
  }
  
  const stack = new Stack();
  stack.push(20);
  stack.push(10);
  stack.push(30);
  console.log(stack.pop()); 
  console.log(stack.peek()); 
  stack.print(); 
  stack.powerof2(10)
 console.log(sortStack(stack))
  