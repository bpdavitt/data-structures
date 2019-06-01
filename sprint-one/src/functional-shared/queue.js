var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    'storage': {}
  }
  someInstance.start = 0;
  someInstance.end = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.end] = value;
  this.end++;
};

queueMethods.dequeue = function() {
  if(this.size() > 0){
    var dequeued = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return dequeued;
  }
};

queueMethods.size = function() {
  return this.end - this.start;
};



