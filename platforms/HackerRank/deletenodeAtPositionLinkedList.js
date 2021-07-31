// below is the question and the answer is..
function deleteNode(llist, position) {
    if (position==0){
        return llist.next
    }
    let current,previous;
    current = llist;
    let count=0;
    while(count<position && current){
        previous = current;
        count++;
        current=current.next;
    }
    if(current){
        previous.next=current.next;
    }
    return llist;
}