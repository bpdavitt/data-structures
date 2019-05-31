

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
    let bucket = this._storage.get(index);
    for (let ele of bucket) {
      if (ele[0] === k) {
        ele[1] = v;
        return undefined;
      }
    }
    bucket.push([k,v]);    
  } else {
    this._storage.set(index, [[k,v]]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  for (let ele of bucket) {
    if (ele[0] === k) {
      return ele[1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
      return undefined;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


