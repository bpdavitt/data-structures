var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  list.addToHead = function(value) {
    list.length++;
    var nodeObj = Node(value);
    if (list.head === null) {
      list.tail = nodeObj;
      list.head = nodeObj;
      return undefined;
    }
    list.head.previous = nodeObj;
    nodeObj.next = list.head;
    list.head = nodeObj;
  };

  list.addToTail = function(value) {
    list.length++;
    var nodeObj = Node(value);
    if (list.head === null) {
      list.tail = nodeObj;
      list.head = nodeObj;
      return undefined;
    }
    nodeObj.previous = list.tail;
    list.tail.next = nodeObj;
    list.tail = nodeObj;
  };

  list.removeHead = function() {
    let oldHead = list.head.value;
    list.head = list.head.next;
    list.length--;
    if (list.length === 0){
      list.head = null;
      list.tail = null;
    } else {
      list.head.previous = null;
    }
    return oldHead;
  };

  list.removeTail = function(){
    let oldTail = list.tail.value;
    list.tail = list.tail.previous;
    list.length--;
    if (list.length === 0){
      list.head = null;
      list.tail = null;
    } else {
      list.tail.next = null;
    }
    return oldTail;
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
  node.previous = null;

  return node;
};