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
        console.log(`${this.getAt(0)} is unshifted`);
    }
    
    isEmpty(){
        return !this.head && true
    }

    // Inserting at the end
    push(x){
        if (this.isEmpty()) {
            this.unShift(x)
            return x;
        }

        let lList = this.head;
        while (lList.next){
            lList = lList.next;
        }
        lList.next = new Node(x);
        this.size++;
        console.log(`${this.getAt(this.size-1)} is pushed`);
    }

    getAt(x){
        if (this.isEmpty()) {
            console.info("List is empty");
            return false;
        };
        if (this.size<=x){
            console.error(`Invalid position\nLength of this list is ${this.size}`);
            return false;
        }
        let lList = this.head;
        let i=0
        while(this.size>i){
            if (i===x) {
                break
            }
            lList = lList.next;
            i++;
        }
        return lList.data
    }

    printAll(){
        if (this.isEmpty()) {
            console.info("List is empty");
            return ;
        }

        console.log(`\nCurrent LinkedList has ${this.size} elements:`);

        for (let i = 0; i < this.size; i++) {
            process.stdout.write(`${this.getAt(i)} -> `);
        }
        process.stdout.write("null\n");
    }
}

var LL1 = new LinkedList();
LL1.unShift(2) // 2
LL1.unShift(5) // 5 2
LL1.push(6) // 5 2 6
LL1.printAll()

// var LL2 = new LinkedList();
// LL2.printAll()