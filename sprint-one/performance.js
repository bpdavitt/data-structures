var makingStacks = function (){for (let i = 0; i < 10000; i++) {
    let stack = new Stack();
    let queue = new Queue();
  }
}();

var stack = new Stack();
var queue = new Queue();



for (let i = 0; i < 10000; i++) {
  stack.push(i);
  queue.enqueue(i);
}

for (let i = 0; i < 10000; i++) {
  queue.dequeue();
}