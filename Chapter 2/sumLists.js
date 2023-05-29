// Sum Lists: You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers are returns the sum as a linked list (You are not allowed to "cheat" and just convert the linked list to an integer)

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const sumList = (list1, list2) => {
  // Var to hold the head of the result linked list; set to 0
  let resultHead = null;
  // Var to keep track of the tail position set to head
  let resultTail = resultHead;
  // Var to keep track of the list1 & list2 position set to the head values
  let l1Node = list1;
  let l2Node = list2;
  // Var to hold the remainder from the previous operation
  let remainder = 0;
  // While the l1ptr & l2ptr are not null
  while (l1Node || l2Node) {
    // create a new node the sum of l1 + l2 + remainder
    // if result is larger than a single digit set remainder = 1
    // otherwise set it to 0
    let l1Value = 0;
    let l2Value = 0;
    if (l1Node) l1Value = l1Node.value;
    if (l2Node) l2Value = l2Node.value;
    let sum = l1Value + l2Value + remainder;
    sum >= 10 ? (remainder = 1) : (remainder = 0);
    if(!resultHead) {
      resultHead = new LinkedList(sum % 10);
      resultTail = resultHead;
    } else {
      resultTail.next = new LinkedList(sum % 10);
      resultTail = resultTail.next;
    }
    if (l1Node) l1Node = l1Node.next;
    if (l2Node) l2Node = l2Node.next;
  }

  if (remainder) resultTail.next = new LinkedList(1);

  return resultHead;
  // return the head of the result linked list
};

const node = new LinkedList(7);
node.next = new LinkedList(1);
node.next.next = new LinkedList(6);

const node2 = new LinkedList(5);
node2.next = new LinkedList(9);
node2.next.next = new LinkedList(2);
node2.next.next.next = new LinkedList(1);

console.log(sumList(node, node2));
