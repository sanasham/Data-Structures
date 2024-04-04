// functional approch

// function Node1(data, next = null) {
//   this.head = data;
//   this.next = next;
// }

// const n1 = new Node1(10);
// console.log(n1);

// class approch

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  insertNewNode(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  InsertAtEnd_push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode; // or this.head
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // high rage appartment(----skyscrapers----) or constructing floors

  HighRaiseAppartment(value) {
    let newFloor = new Node(value);
    if (!this.firstFloor) {
      this.firstFloor = newFloor;
      this.lastFloor = newFloor;
    } else {
      this.lastFloor.next = newFloor;
      this.lastFloor = newFloor;
    }
    this.length++;
    return this;
  }
  InsertAtIndexZero_unShift(value) {
    if (this.length == 0) return undefined;
    let newNode = new Node(value);
    const oldHead = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  InsertAtIndex(index, value) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.InsertAtIndexZero_unShift(value);
  }

  RemovingLastElement_Pop(val) {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    }

    let currrentNode = this.head;
    let previousNode = null;
  }
}

let list = new SingleLinkedList();
console.log("List: ", list);
// console.log("List: ", list.insertNewNode(7));
// console.log("List: ", list.insertNewNode(8));
// console.log("List: ", list.insertNewNode(9));

// console.log("appartment: ", list.HighRaiseAppartment(7));
// console.log("appartment: ", list.HighRaiseAppartment(8));
// console.log("appartment: ", list.HighRaiseAppartment(9));

// console.log("List: ", list.insertNewNode(7));
console.log("List: ", list.InsertAtIndexZero_unShift(8));

console.log("List: ", list.insertNewNode(7));
console.log("Insert at end: ", list.InsertAtEnd_push(8));
