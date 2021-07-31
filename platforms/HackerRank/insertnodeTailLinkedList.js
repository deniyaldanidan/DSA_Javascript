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
function insertNodeAtTail(head, data) {
    const node = new SinglyLinkedListNode(data);
    if (!head){
        return node;
    }
    let current = head;
    while (current.next){
        current= current.next
    }    
    current.next = node;
    // console.log(head);
    return head;
}

function main() {
    let llist = new SinglyLinkedList();

    for (let i = 0; i < 10; i++) {
        var llistItem = i;
        const llist_head = insertNodeAtTail(llist.head, llistItem);
        llist.head = llist_head;
    }

    printSinglyLinkedList(llist.head);
}

main()