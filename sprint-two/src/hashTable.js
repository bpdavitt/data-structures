

var HashTable = function(limit) {
  
  this._limit = limit || 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  this._count++;
  if (this._count/this._limit >= 0.75){
    this.resize('expand');
  }
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
  this._count--;
  if (this._count/this._limit < 0.25){
    this.resize('contract');
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
      return undefined;
    }
  }
};


HashTable.prototype.resize = function(action) {
  
  let oldLimit = this._limit;
  if (action === 'expand') {
    var newHash = new HashTable(this._limit * 2);
    this._limit *= 2;
  }
  if (action === 'contract'){
    var newHash = new HashTable(this._limit / 2);
    this._limit /= 2;
  }
  for (let i = 0; i < oldLimit; i++){
    let bucket = this._storage.get(i);
    if (bucket === undefined) {
      bucket = [];
    }
    for(let j = bucket.length - 1; j >= 0; j--){
      //need to remove each key/value and rehash into new hashmap
      let item = bucket[j];
      bucket.splice(j,1);
      newHash.insert(item[0], item[1]);
    }
  }
  this._storage = newHash._storage;
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


