export class MaxHeap{
  private heap: number[]; 

  constructor(array: number[]){
    this.heap = array; 
    this.heapifyEntireTree();
  }

  private swap(index1: number, index2: number): void{
    if(index1 === index2 || index1 >= this.heap.length || index2 >= this.heap.length) return;
    let temp = this.heap[index2];
    this.heap[index2] = this.heap[index1];
    this.heap[index1] = temp;
  }

  /*
  This method can be broken down into heapifyDown and heapifyUp if
  the tree starts in a valid heap state (ie all subtrees fulfill max/min heap rule)
  -heapifyUp would be used when adding a new element to the end to bubble that element up to its 
  correct position
  -heapifyDown would be used when popping off the root node - the last leaf node would
  move to the roots position, and then be bubbled down to its appropriate position
  -heapifyUp/Down are O(logn) operations, since they only follow the path of one node being
  bubbled up/down
  */

  //O(nlogn) where n is the height of the heap
  //we visit n-1 nodes in the while loop (since we start at the first non-leaf level, and go to the root)
  //each iteration of the while loop is O(logn) (see explanation below)
  private heapifyEntireTree(): void{
    let nodeIndex = Math.floor(this.heap.length/2 - 1); //index of right-most non-leaf node
    while(nodeIndex >= 0){
      this.heapifySubTree(nodeIndex);
      nodeIndex--;
    }
  }

  //O(logn) where n is the distance between index and a leaf node
  //In the worst case, the node at index must be swapped with a child at every level,
  //until its all the way at the leaf level
  private heapifySubTree(index: number): void{
    let largestIdx: number = index;
    //skip i pairs of children from nodes adjacent to parent node to reach left child
    let leftChildIdx: number = 2*index + 1;
    let leftChild: number = this.heap[leftChildIdx];
    let rightChildIdx: number = 2*index + 2;
    let rightChild: number = this.heap[rightChildIdx];
    
    if(leftChild > this.heap[largestIdx]) largestIdx = leftChildIdx;
    if(rightChild > this.heap[largestIdx]) largestIdx = rightChildIdx; 
    
    if(largestIdx !== index){ //this basically translates to if the parent has a child greater than itself
      this.swap(largestIdx, index);
      this.heapifySubTree(largestIdx); //recursively heapify subtree (in case our swap messed up previous ordering)
    }
  }

  public insert(value: number): number{
    this.heap.push(value);
    this.heapifyEntireTree();
    return value;
  }

  public delete(index: number): number{
    let deletedNode = this.heap[index]; // save node to return later
    
    let lastLeaf: number = this.heap[this.heap.length - 1]; //value of last leaf
    this.heap[index] = lastLeaf; //replace value at node to be deleted with value of last leaf
    this.heap.pop(); //remove the last leaf node before heapifying the tree (value is already stored in deletedNode)
    
    this.heapifyEntireTree(); 

    return deletedNode;
  }

  public peek(): number{
    return this.heap[0];
  }

  public pop(): number{
    return this.delete(0); //popping is the same as deleting the root of the tree, since our delete method returns the node's value
  }

  public print(): string{
    let result = "";
    for(let i = 0; i < this.heap.length - 1; i++){
      result += this.heap[i] + ", ";
    }
    result += this.heap[this.heap.length - 1]; 
    return result; 
  }
}