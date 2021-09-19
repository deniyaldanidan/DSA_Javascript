// linked lists trials-2
class Node {
    constructor (data, next=null){
        this.data = data
        this.next = next
    }
}

// Basic Linked List
// console.log(new Node(2, new Node(4, new Node(6))));

// Building LL & Adding Functionalities
export class LinkedList{
    constructor (name){
        this.head=null
        this.size=0;
        this.name = name;
    }

    isEmpty(){
        return !this.head && true
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
    
    #structure(){
        let structure = "";
        for (let i = 0; i < this.size; i++) {
            structure += `${this.getAt(i)} -> `;
        }
        structure += 'null';
        return structure;
    }

    printAll(){
        if (this.isEmpty()) {
            console.info("List is empty");
            return ;
        }
        console.log(`\n${this.name} has ${this.size} elements:`);
        console.log(`${this.#structure()}\n`)
    }

    // Inserting a node at the beginning of the List
    unShift(x){
        this.head = new Node(x, this.head);
        this.size++;
        return this.head;
    }

    // shift removes node at the beginning
    shift(){
        if (this.isEmpty()) {
            console.log("The list is empty");
        }
        this.head = this.head.next;
        this.size--
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
        return x;
    }
    
    // Remove at the end
    pop(){
        let popped;
        if(this.isEmpty()){
            return ;
        }
        if (this.size==1) {
            popped = this.getAt(0);
            this.reset();
            this.size--
            return popped;
        }
        let lList = this.head;
        let i=1
        while(i<this.size-1){
            lList = lList.next;
            i++;
        }
        popped = lList.next.data
        lList.next = null;
        this.size -= 1;
        return popped;
    }

    reset(){
        this.head=null;
    }

    insert(x,pos){
        if(this.isEmpty() || pos===0){
            this.unShift(x);
            return;
        }
        if (this.size<=pos || pos<0) {
            console.log(`${pos} is Out of length`);
            return;
        }

        let mylist = this.head;
        let i=0;
        while (i<pos-1){
            mylist = mylist.next;
            i++;
        }

        mylist.next = new Node(x, mylist.next);
        this.size++;
    }

    set(x, pos){
        if (this.isEmpty() || pos>=this.size || pos<0) {
            console.log(`${pos} is Out of Boundary`);
            return pos;
        }

        if (pos===0){
            this.shift();
            this.unShift(x)
            return x;
        }

        if (pos===this.size-1) {
            this.pop();
            this.push(x)
        }

        let llist = this.head;
        let i = 0
        let previous;
        while(i<pos){
            previous = llist;
            llist = llist.next;
            i++
        }
        previous.next = new Node(x, llist.next);
        return x;
    }

    reverse(){
        if (this.isEmpty() || this.size==1) {
            return;
        }

        let i=1;
        let n = this.size;
        let myList = new Node(this.pop())
        let newList = myList
        while(i<n){
            newList.next = new Node(this.pop());
            newList = newList.next
            i++;
        }
        this.head = myList;
        this.size = n;
    }
    
    remove(){

    }
    
    // sort using merge sort
    sort(){

    }

    removeDuplicate(){
        // First Sort 
        // next===current && remove
    }

}
