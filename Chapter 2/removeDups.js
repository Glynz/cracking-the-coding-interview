// Remove Dups: Write code to remove duplicates from an unsorted linked list

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const removeDups = (head) => {
    // Utilize a object to keep track of which values have been seen
    const cache = new Set();
    // Var keep track of the current node which starts as the passed in head
    // the current node is the head.next
    let currentNode = head;
    // add the head value to the object
    cache.add(head.value);
    // while current node is not null
    while(currentNode && currentNode.next) {
      // check if the current next node's value is in the object
      // If not add it
      // Otherwise change the next link to the next next link
      if (!cache.has(currentNode.next.value))
        cache[currentNode.next.value] = 0;
      else {
        currentNode.next = currentNode.next.next;
      }
      currentNode = currentNode.next;
    }

    return head;
}

const node = new LinkedList(2);
node.next = new LinkedList(2);
node.next.next = new LinkedList(3);
node.next.next.next = new LinkedList(4);
node.next.next.next.next = new LinkedList(2);

console.log(node);

console.log(removeDups(node))


// How would you solve this problem if a temporary buffer is not allowed?
// Utilize a second pointer that checks all subsequent nodes if the value matches