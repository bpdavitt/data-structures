var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};


BinarySearchTree.prototype.insert = function(v) {
  if (v < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(v);
    } else {
      this.left.insert(v);
    }
  }
  if (v > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(v);
    } else {
      this.right.insert(v);
    }
  }
};

BinarySearchTree.prototype.contains = function(v) {
  if (this.value === v) {
    return true;
  }
  if (v < this.value && this.left !== null) {
    return this.left.contains(v);
  }
  if (v > this.value && this.right !== null) {
    return this.right.contains(v);
  }
  return false;
};


BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};

BinarySearchTree.prototype.size = function() {
  var size = 0;
  this.depthFirstLog(function() {
    size++;
  });
  return size;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
