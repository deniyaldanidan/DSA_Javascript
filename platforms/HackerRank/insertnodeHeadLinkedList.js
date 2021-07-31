const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
    }
    
};

function printSinglyLinkedList(node) {
    while (node != null) {
        console.log(node.data);
        node = node.next;
    }
}

// Below function is the Question
function insertNodeAtHead(head, data) {
    if (!head){
        return new SinglyLinkedListNode(data);
    }
    const newHead = new SinglyLinkedListNode(data);
    newHead.next = head
    return newHead
}

function main() {
    let llist = new SinglyLinkedList();
    
    for (let i = 0; i < 10; i++) {
        var llistItem = i;
        const llist_head = insertNodeAtHead(llist.head, llistItem);
        llist.head = llist_head;
    }
    
    printSinglyLinkedList(llist.head);
}

main()