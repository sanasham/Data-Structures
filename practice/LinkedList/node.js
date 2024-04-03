class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

export default Node;

//functional way to create object
//----------------------------------------------------------------

// const createNode = (data, next = null) => {
//   return { data, next };
// };
// console.log("function test", createNode(500, 800));
