// minimalistic example of linked lists
{
    let n1 = {data:23}; // head
    let n2 = {data:34};
    let n3 = {data:45};
    n1.next = n2;
    n2.next = n3;
    n3.next = null;
    // console.log(n1);
}


// creating an node
class Node{
    constructor(data, next=null) {
        this.data = data
        this.next = next
    }
}
/*
const n1 = new Node(2);
console.log(n1);
*/

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size++
    }
    // Insert last node
    insertLast(data){
        let node = new Node(data);
        let current;

        if (!this.size) {
            this.head=node
        } else{
            current = this.head;
            // Finding the tail
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++;
    }
    // Insert at index
    insertAt(data, index){
        // if the index is greater than our size insert it at last
        if (index > 0 && index > this.size) {
            this.insertLast(data);
            return ;
        } else if (index === 1) {
            this.insertFirst(data)
        } else{
            const node = new Node(data);
            let current,previous;
            current = this.head;
            let i = 1;
            while (i<index) {
                previous = current;
                i++;
                current = current.next;
            }
            node.next = current;
            previous.next = node;
            this.size++;
        }
    }

    // Get at index
    getAt(index){
        if (index==0) {
            console.log('My Linked List starts at 1');
            return;
        }
        let current = this.head;
        let i = 1;
        while(i<=index){
            if (i==index) {
                console.log(`At index ${index} we got ${current.data}`);
            }
            i++;
            current = current.next
        }
    }
    // Remove at index
    removeAt(index){
        if (index<=0  | index >this.size) {
            console.log('Out of range');
            return;
        }
        if (index===1) {
            this.head = this.head.next;
            this.size--;
            return;
        }
        
        let current,previous;
        let i =1;
        current = this.head;
        while (i<index) {
            previous = current;
            i++;
            current = current.next;
        }
        previous.next = current.next;
        this.size--;
    }

    // Clear list
    clearAll(){
        this.head = null;
        this.size = 0;
    }

    // Print list data
    printListData(){
        if (!this.head) {
            console.log("Everything is empty in here");
            return;
        }
        let current = this.head;
        let i=1;
        while (current){
            console.log(`at index ${i} == ${current.data}`);
            current = current.next;
            i++;
        }
        console.log(`Total nodes: ${this.size}`);
    }

    reversePrint(){
        
    }
}

const ll = new LinkedList;
ll.insertFirst(2); // 2
ll.insertFirst(3); // 3 2
ll.insertLast(1); // 3 2 1
ll.insertFirst(4); // 4 3 2 1
ll.insertLast(0); // 4 3 2 1 0
ll.insertAt(45, 3) // data, position // 
ll.printListData() // 4 3 45 2 1 0
// ll.getAt(4)
// ll.clearAll()
ll.removeAt(1)
ll.removeAt(2)
ll.printListData() // 3 2 1 0