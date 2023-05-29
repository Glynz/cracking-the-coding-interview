// Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e. any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


const deleteMiddleNode = (node) => {
    // Adjust the value of the input node to match the node's next node
    // adjust the next of the input node to the next next
    node.value = node.next.value;
    node.next = node.next.next;
}



const node = new LinkedList(1);
node.next = new LinkedList(2);
node.next.next = new LinkedList(3);
node.next.next.next = new LinkedList(4);
node.next.next.next.next = new LinkedList(5);


deleteMiddleNode(node.next);
console.log(node)