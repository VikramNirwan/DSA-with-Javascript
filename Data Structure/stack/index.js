class Stack {
  constructor() {
    this.items = [];
  }

  push(el) {
    this.items.push(el);
  }

  pop(el) {
    return this.items.pop(el);
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    return console.log(this.items.toString());
  }
}

const stack = new Stack();
console.log(stack.isEmpty());

stack.push(33);
stack.push(2);
stack.push(57);
stack.push(18);

console.log(stack.items);
console.log(stack.size());
console.log(stack.peek());
console.log(stack.pop());
stack.print();
