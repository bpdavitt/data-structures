class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }
  size() {
    return this.count;
  }
  enqueue(value) {
    this.count++;
    this.storage[this.count] = value;
  }
  dequeue() {
    this.count--;
    let dequeued = this.storage['0'];
    for(let keys in this.storage) {
      this.storage[keys] = this.storage[Number(keys) + 1];
    }
    delete this.storage[this.count - 1];
    return dequeued;
  }

}
