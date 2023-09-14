import { SLList } from "./class/singleLinkedList"

const list = new SLList(1, 2, 3, 4, 5)

list.setElement(0, 10)
list.setNext(1, 2)

console.log(list.getSequenceList())
