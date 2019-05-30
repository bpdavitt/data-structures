var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var nodeObj = Node(value);
    if (list.head === null) {
      list.tail = nodeObj;
      list.head = nodeObj;
      return undefined;
    }
    list.tail.next = nodeObj;
    list.tail = nodeObj;
  };

  list.removeHead = function() {
    let oldHead = list.head.value;
    list.head = list.head.next;
    return oldHead;
  };

  list.contains = function(target, node) {
    
    let currentNode = node || list.head;
    if(currentNode.value === target) {
      return true;
    } else {
      if(currentNode.next === null){
        return false;
      }
      return list.contains(target, currentNode.next);
    }
  };
  
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
