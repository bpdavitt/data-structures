// input: function invocation on a value
// output: return an object containing methods to use on the stack push, pop, size
// constraints: must use object and functional instantiation
// strategy: 
// transformation steps:
// psuedo:
var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.size()] = value;
  };

  someInstance.pop = function() {
    var popped = storage[someInstance.size()-1];
    delete storage[someInstance.size()-1];
    return popped;
  };

  someInstance.size = function() {
    var storageKeys = Object.keys(storage);
    return storageKeys.length;
  };

  return someInstance;
};
