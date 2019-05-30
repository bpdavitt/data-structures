
var Stack = function() {
  var newInstance = Object.create(stackMethods);
  newInstance['storage'] = {};
  return newInstance
};

var stackMethods = {
  'size' : function() {
    return Object.keys(this.storage).length;
  },
  'push' : function(value) {
    this.storage[this.size()] = value;
  },
  'pop' : function() {
    var popped = this.storage[this.size()-1];
    delete this.storage[this.size()-1];
    return popped;
  }
};