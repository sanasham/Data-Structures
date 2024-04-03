//import Node from "./node.js";
// const n1 = {
//   data: 200,
// };

// const n2 = {
//   data: 400,
// };

// n1.next = n2;
// console.log(n1);

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// const n1 = new Node(10, 20);
// console.log("test", n1);

// const n2 = new Node(1000);
// console.log("test", n2);

// const createNode = (data, next = null) => {
//   return { data, next };
// };
// console.log("function test", createNode(500, 800));

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // const linkedList = new LinkedList();
  // console.log("Linked list", linkedList);

  //insert first node

  insertFirstNode(data) {
    this.head = new Node(data, this.head);
  }

  // insert last node

  // insert at index

  //Get at index

  //Remove at index

  //clear the list

  //print list data
}
const linkedList = new LinkedList();
//
console.log("Linked list", linkedList.insertFirstNode(100));
console.log("Linked list", linkedList);
