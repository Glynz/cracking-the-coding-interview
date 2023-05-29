// Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


// Assumption: No negative positions of k
const returnKthToLast = (head, k) => {
    // Utilize two pointers that are separated by k distance
    // Var for currentposition and kthposition
    let currentNode = head;
    let kthNode = head;
    // Move the knodeptr to the kposition
    for(let i = 0; i < k; i++) {
      // If we are unable to move that many position then return null
      if (!kthNode) return null;
      else kthNode = kthNode.next;
    }

    if(!kthNode) return null;
    // Iterate the currentposition and kthposition ptr until kthposition reaches the end
    while(kthNode.next) {
        currentNode = currentNode.next;
        kthNode = kthNode.next;
    }
    // return the current position
    return currentNode;
}

const node = new LinkedList(1);
node.next = new LinkedList(2);
node.next.next = new LinkedList(3);
node.next.next.next = new LinkedList(4);
node.next.next.next.next = new LinkedList(5);


console.log(returnKthToLast(node, 5));