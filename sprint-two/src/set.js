var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  return this._storage.includes(item);
};

setPrototype.remove = function(item) {
  let index = this._storage.indexOf(item);
  if (index >= 0) {
    this._storage.splice(index,1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
