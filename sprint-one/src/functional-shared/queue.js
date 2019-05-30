var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    'storage': {}
  }
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  'size': function(){
    return Object.keys(this.storage).length;
  },
  'enqueue': function(value){
    this.storage[this.size()] = value;
  },
  'dequeue': function(){
    var dequeued = this.storage['0'];
    for(var keys in this.storage){
      this.storage[keys] = this.storage[Number(keys) + 1]
    }
    delete this.storage[this.size() - 1];
    return dequeued;
  }
};


