export class Node{
  public value: number;
  public next: Node = null;

  constructor(value: number){
    this.value = value;
  }
}

/* 
Implement linked list with struct-like objects
--------Time constraints------------
Insert: O(1)
Remove: O(1)
*inserting and removing is handled by rearranging the nodes to which relevant nodes' next
pointers point to 
Search: O(n) - must brute force since queue is unsorted
*/

export class LinkedList{
  public head: Node;
}

export const demoLinkedList = (array: number[]): void => {
  let list: LinkedList = new LinkedList();

  let lastCreated: Node; 
  for(let i = 0; i < array.length; i++){
    let node: Node = new Node(array[i]);

    if(i === 0){
      list.head = node;
    } else {
      lastCreated.next = node;
    }

    lastCreated = node;
  }

  let currentNode: Node = list.head;
  while(currentNode.next){
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
}