var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  var storage = {};
};

var stackMethods = {
  'size' : function() {
    return Object.keys(this).length;
  }
  'push' : function(value) {
    this[this.size()] = value;
  }
  'pop' : function() {
    var popped = this[this.size()-1];
    delete this[this.size()-1];
    return popped;
  }
};


ß