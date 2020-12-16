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

--------Types of linked lists-------
- Singly linked list: (implemented below)
  -one pointer for head node
  -each node has a next pointer to next node (tail's next points to null)
- Doubly linked list:
  -one pointer for head node
  -each node has a next pointer to next node (tail's next points to null)
  -each node has a prev pointer to previous node (head's prev points to null)
- Circular Linked list:
  -circular singly linked
    -each node has a next pointer
    -tail's next pointer points to head
  -circular doubly linked
    -each node has a next and prev
    -tail's next pointer points to head
    -head's prev pointer points to tail

*/

export class LinkedList{
  public head: Node;

  //O(1) reassigning the head pointer to a new node is a constant time operation
  public insertFront(value: number): Node{
    let node: Node = new Node(value);
    node.next = this.head;
    this.head = node;
    return node;
  }

  //O(i) where i is the index to insert at (need to traverse list to correct index)
  public insertAtIndex(index: number, value: number): Node{
    let newNode: Node = new Node(value);
    let currentNode: Node = this.head;
    for(let i = 0; i < index - 1 && currentNode; i++){
      currentNode = currentNode.next; //traverse to node at index right before where we want to insert
    }

    if(!currentNode || !currentNode.next){
      return null;
    } else {
      newNode.next = currentNode.next; 
      currentNode.next = newNode; 
    }

    return newNode;
  }

  //O(n) where n is the length of the LL (need to traverse to end of list to insert)
  public insertRear(value: number): Node{
    let node: Node = new Node(value);
    if(!this.head){
      this.head = node;
      return node;
    }
    let currentNode: Node = this.head;
    while(currentNode && currentNode.next){
      currentNode = currentNode.next; 
    }
    currentNode.next = node;

    return node;
  }

  //O(i) where i is the index to delete at (need to traverse the list to find node at index)
  public deleteAtIndex(index: number): Node{
    if(!this.head){
      return null;
    }

    let currentNode = this.head; 
    if(index === 0){
      this.head = this.head.next; 
      return currentNode;
    }

    for(let i = 0; i < index-1 && currentNode; i++){
      currentNode = currentNode.next;
    }
    if(!currentNode || currentNode.next){
      return null;
    }

    currentNode.next = currentNode.next.next;
    return currentNode.next;
  }

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