class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.addVertex(vertex);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for (let edge of vertex.adjacent){
      this.removeEdge(vertex, edge);
    }
    this.nodes.delete(vertex)
  }


  // this function returns an array of Node values using DFS
  // This function should return an array of nodes visited using DFS. You can do this iteratively (using a stack) or recursively, but note the order of the results will be different.
  depthFirstSearch(start) {
    let toVisitStack = [start];
    let seen = new Set();
    let fullPath = [];
    let curr = start;

    seen.add(start)

    while (toVisitStack.length) {
      curr = toVisitStack.pop();
      fullPath.push(curr);
      for (let each of curr.adjacent) {
        if (!seen.has(each)) {
          seen.add(each)
          toVisitStack.push(each);
        }
      }
    }
    return fullPath;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let toVisitQueue = [start];
    let seen = new Set();
    let fullPath = [];
    let curr = start;

    seen.add(start)

    while (toVisitQueue.length) {
      curr = toVisitQueue.shift()
      fullPath.push(curr);
      for (let each of curr.adjacent) {
        if (!seen.has(each)) {
          toVisitQueue.push(each);
          seen.add(each);
        }
      }
    }
    return fullPath;
  }

  // return shortest path from start to target vertices
  shortestPath(graph, start, target) {

  }



}





// module.exports = {Graph, Node}