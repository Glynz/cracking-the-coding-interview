// Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than of equal to x. (IMPORTANT: The partition element x can appear anyway in the "right partition"; it does not need to appear betweem the left and right partitions)

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const partition = (head, partition) => {
  // Two ptrs for keeping track of the heads of "left" and "right" partitions; both start off as null
  // Two ptrs for keeping track of the last element in the left and right partitions
  // Var for keeping track of the current node that starts at head
  let leftHead = null;
  let leftTail = null;
  let rightHead = null;
  let rightTail = null;
  let currentNode = head;
  // While currentNode
  while (currentNode) {
    // If the value of the currentNode is less than the partition ad it to the left list
    // else add it to the right list
    if (currentNode.value < partition) {
      if (!leftHead) {
        leftHead = currentNode;
        leftTail = currentNode;
      } else {
        leftTail.next = currentNode;
        leftTail = leftTail.next;
      }
      currentNode = currentNode.next;
      leftTail.next = null;
    } else {
      if (!rightHead) {
        rightHead = currentNode;
        rightTail = currentNode;
      } else {
        rightTail.next = currentNode;
        rightTail = rightTail.next;
      }
      currentNode = currentNode.next;
      rightTail.next = null;
    }
    // console.log('current', currentNode);
    // console.log('left', leftHead);
    // console.log('right', rightHead);
    // break;
  }
  // If left or right list is just return the respective head node
  if (!leftHead) return rightHead;
  if (!rightHead) return leftHead;
  // Combine the left list and the right list; last node of left list points to head of right list; last node of right list points to null
  leftTail.next = rightHead;
  // return left list head
  return leftHead;
};

const node = new LinkedList(3);
node.next = new LinkedList(5);
node.next.next = new LinkedList(8);
node.next.next.next = new LinkedList(5);
node.next.next.next.next = new LinkedList(10);
node.next.next.next.next.next = new LinkedList(2);
node.next.next.next.next.next.next = new LinkedList(1);

// console.log(node)

partition(node, 5);

console.log(node);
