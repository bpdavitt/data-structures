

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
  
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return (this.nodes.includes(node));
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var connections = this.edges[node];
  for (let ele of connections) {
    this.removeEdge(node, ele);
  }
  //check this.edges @ node for list of other connected nodes
  // for each remove this.edges[i].splice(node,1)
  //find index of node in this.nodes
  //splice from that index point
  this.nodes.splice(this.nodes.indexOf(node),1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return (this.edges[fromNode].indexOf(toNode) > -1 && this.edges[toNode].indexOf(fromNode) > -1)
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode].push(toNode);
  this.edges[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromIndex = this.edges[fromNode].indexOf(toNode)
  var toIndex = this.edges[toNode].indexOf(fromNode)
  if (fromIndex >= 0) {
    this.edges[fromNode].splice(fromIndex, 1);
  }
  if (toIndex >= 0) {
    this.edges[toNode].splice(toIndex, 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  let allNodes = this.nodes;
  for (let i = 0; i < allNodes.length; i++) {
    cb(allNodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


