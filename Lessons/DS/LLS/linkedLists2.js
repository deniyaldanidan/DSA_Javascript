// linked lists trials-2
class Node {
    constructor (data, next=null){
        this.data = data
        this.next = next
    }
}

// Basic Linked List
// console.log(new Node(4, new Node(2)));

// Building LL & Adding Functionalities
class LinkedList{
    constructor (){
        this.head=null
        this.size=0
    }

    // Inserting a node at the beginning of the List
    unShift(x){
        this.head = new Node(x, this.head);
        this.size++;
    }

    

    printAll(){
        let Llist = this.head
        let i=0;
        while(i<this.size){
            console.log(`${Llist.data} is at position ${i}`);
            i++;
            Llist = Llist.next;
        }
    }
}

var LL1 = new LinkedList();
LL1.unShift(2)
LL1.unShift(5)
LL1.printAll()