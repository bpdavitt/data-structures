var Stack = function() {
  this.storage = {};
};


Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
}
Stack.prototype.push = function(value) {
  this.storage[this.size()] = value;    
}
Stack.prototype.pop = function() {
  var popped = this.storage[this.size()-1];
  delete this.storage[this.size()-1];
  return popped;
} 

