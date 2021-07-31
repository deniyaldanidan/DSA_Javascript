// Below Function is the question and the answer is...
function insertNodeAtPosition(llist, data, position) {
    const node = new SinglyLinkedListNode(data);
    if(position==0){
        node.next = llist;
        return node;
    }
    let count = 0;
    let current, previous;
    current = llist;
    while(count<position && current){
        previous = current;
        count++
        current = current.next
    }
    previous.next=node;
    node.next=current;
    return llist;

}