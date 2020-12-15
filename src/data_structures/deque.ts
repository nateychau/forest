/* 
Implement deque with a circular queue 
--------Time constraints------------
Insert (at either end): O(1)
Remove (at either end): O(1)
*Constant times achieved by using pointers to keep track of where to remove/insert
Search: O(n) - must brute force since deque is unsorted
*/
export class Deque{
  private front: number = -1;
  private rear: number = 0;
  private deque: number[];
  
  constructor(capacity: number){
    this.deque = new Array(capacity);
  }

  private isEmpty(): boolean{
    return this.front === -1;
  }

  public size(): number{
    if(this.isEmpty()) return 0;
    if(this.rear >= this.front){ //normal front-to-back case
      return this.rear - this.front + 1;
    } else{ //wrapped-around case
      return this.deque.length - this.front + this.rear + 1;
    }
  }

  private isFull(): boolean{
    return  (this.rear === this.deque.length - 1 && this.front === 0) ||
    this.front === this.rear + 1
  }

  public insertFront(value: number): number{
    if (this.isFull()) {
      throw "Deque is full"; //does not support resizing
    }
    
    if(this.front === -1){ //if deque is empty
      this.front = 0;
      this.rear = 0;
    } else if (this.front === 0){ //if deque will overflow the front end, wrap around to end
      this.front = this.deque.length - 1;
    } else {
      this.front--;
    }
    
    this.deque[this.front] = value;
    return value;
  }

  public insertRear(value: number): number{
    if (this.isFull()) {
      throw "Deque is full"; //does not support resizing
    }

    if(this.front === -1){ //deque is empty
      this.front = 0;
      this.rear = 0;
    } else if (this.rear === this.deque.length - 1){ //if rear will overflow rear end, wrap around to front
      this.rear = 0;
    } else {
      this.rear++;
    }

    this.deque[this.rear] = value;
    return value;
  }

  public removeFront(): number{
    if(this.isEmpty()) return -1;

    let value: number = this.deque[this.front];
    if(this.front === this.rear){
      this.front = -1;
      this.rear = -1;
    } else if (this.front === this.deque.length - 1){
      this.front = 0;
    } else {
      this.front++;
    }

    return value;
  }

  public removeRear(): number{
    if(this.isEmpty()) return -1;

    let value: number = this.deque[this.rear];
    if(this.front === this.rear){
      this.front = -1;
      this.rear = -1;
    } else if (this.rear === 0){
      this.rear = this.deque.length - 1;
    } else {
      this.rear--;
    }

    return value;
  }

  public getFront(): number{
    if(this.isEmpty()) return -1;
    return this.deque[this.front];
  }

  public getRear(): number{
    if(this.isEmpty()) return -1;
    return this.deque[this.rear];
  }

  public print(): string {
    if(this.isEmpty()) return "Deque is empty";
    let result: string = "";
    for(let i = this.front; i != this.rear; i = (i+1)%this.deque.length){
      result += this.deque[i] + ", ";
    }
    result += this.deque[this.rear];
    return result; 
  }

}