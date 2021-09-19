import {LinkedList} from './linkedLists2.js'

var LL1 = new LinkedList("list1");
LL1.unShift(2) // 2
LL1.unShift(5) // 5 2
LL1.push(6) // 5 2 6
LL1.pop() // 5 2
LL1.shift() // 2
LL1.printAll()

var LL2 = new LinkedList("list2");
// LL2.printAll()
LL2.insert(1,0) // 1
LL2.insert(2,0) // 2 1
LL2.insert(3,1) // 2 3 1
LL2.insert(5,2) // 2 3 5 1
LL2.insert(6,2) // 2 3 6 5 1
LL2.insert(7,2) // 2 3 7 6 5 1
LL2.insert(8,5) // 2 3 7 6 5 8 1
LL2.printAll()
LL2.set(6,0) // 6 3 7 6 5 8 1
LL2.set(0,6) // 6 3 7 6 5 8 0
LL2.set(5,1) // 6 5 7 6 5 8 0
LL2.set(4,2) // 6 5 4 6 5 8 0
LL2.set(3,3) // 6 5 4 3 5 8 0
LL2.set(2,4) // 6 5 4 3 2 8 0
LL2.set(1,5) // 6 5 4 3 2 1 0
LL2.printAll()
LL2.reverse() // 0 1 2 3 4 5 6
LL2.printAll()