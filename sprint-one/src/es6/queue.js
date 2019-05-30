class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }
  size() {
    return Object.keys(this.storage).length;
  }
  enqueue(value) {
    this.storage[this.size()] = value;
  }
  dequeue() {
    let dequeued = this.storage['0'];
    for(let keys in this.storage) {
      this.storage[keys] = this.storage[Number(keys) + 1];
    }
    delete this.storage[this.size() - 1];
    return dequeued;
  }

}
