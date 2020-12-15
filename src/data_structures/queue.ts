/* 
--------Time constraints------------
Insert: O(1)
Remove: O(1)
*Constant times achieved by using pointers to keep track of where to remove/insert
Search: O(n) - must brute force since deque is unsorted

-------Use cases----------------

*/

export class Queue{
  protected front: number = -1;
  protected rear: number = -1;
  protected queue: number[];

  constructor(size: number){
    this.queue = new Array(size);
  }

  protected isEmpty(): boolean{
    return this.front === -1;
  }

  protected ensureCapacity(): void{
    if(this.rear === this.queue.length - 1){
      let expansion: number[] = new Array(this.queue.length);
      this.queue = this.queue
        .slice(this.front, this.rear + 1) //slice section of array that is still in use
        .concat(expansion); //concat to new empty array 
      this.rear -= this.front; //shift pointers back up to appropriate positions
      this.front = 0;
    }
  }

  public size(): number{
    if(this.isEmpty()) return 0;
    return this.rear - this.front + 1;
  }

  public enqueue(value: number): number{
    this.ensureCapacity();
    if(this.front < 0) this.front++; //if queue is empty, move front pointer to front;
    this.rear++; //move rear pointer forward, then assign value to rear pointer;
    this.queue[this.rear] = value;

    return value;
  }

  public dequeue(): number{
    if(this.isEmpty()) return -1;

    let value: number = this.queue[this.front];
    this.front++;
    if(this.front > this.rear){ //if front has overlapped rear, then queue is empty
      this.front = -1; //reset pointers
      this.rear = -1;
    }
    return value;
  }

  public peek(): number{
    if(this.isEmpty()) return -1;

    return this.queue[this.rear];
  }

  public print(): string{
    if(this.isEmpty()) return "Queue is empty";

    let result: string = "";
    for(let i = this.front; i <= this.rear; i++){
      result += this.queue[i];
      if(i !== this.rear) result += ", ";
    }

    return result;
  }
}