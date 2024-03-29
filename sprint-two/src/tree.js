var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (let i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};

treeMethods.depth = function(target) {
  
  if (!this.contains(target)) {
    return -1;
  }
  if (this.value === target) {
    return 0;
  }
  for (let i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return 1 + this.children[i].depth(target);
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
