var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.size()] = value;
  };

  someInstance.dequeue = function() {
    var dequeued = storage['0'];
    for (var keys in storage) {
      storage[keys] = storage[Number(keys) + 1]
    }
    delete storage[someInstance.size() - 1];
    return dequeued;
    
  };

  someInstance.size = function() {
    var storageKeys = Object.keys(storage);
    return storageKeys.length;
  };

  return someInstance;
};
