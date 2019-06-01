

var HashTable = function(limit) {
  
  this._limit = limit || 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  //grab bucket
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  //if undefined create bucket []
  if(!bucket){
    bucket = [];
    this._storage.set(index, bucket);
  }
  let found = false;
  // iterate over bucket
  for(let i = 0; i < bucket.length; i++) {
    //if found replace value
    let key = bucket[i][0];
    if(key === k){
      bucket[i][1] = v;
      found = true;
      break;
    }
  }
  if (!found) {
    bucket.push([k,v]);
    // console.log(bucket);
    this._count++;
    if (this._count >= this._limit * 0.75){
      this.resize('expand');
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  console.log(bucket);
  if (!bucket) {
    return undefined;
  }
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


