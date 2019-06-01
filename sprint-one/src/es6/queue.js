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
    this.storage[this.count] = value;
    this.count++;
  }
  dequeue() {
    this.count--;
    if (this.count < 0) {
      this.count = 0;
    }
    let dequeued = this.storage['0'];
    for(let keys in this.storage) {
      this.storage[keys] = this.storage[Number(keys) + 1];
    }
    delete this.storage[this.count];
    return dequeued;
  }

}
