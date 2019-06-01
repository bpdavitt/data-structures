var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(queueMethods);
  newInstance['storage'] = {};
  newInstance.start = 0;
  newInstance.end = 0;

  return newInstance;
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