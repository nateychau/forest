import { Queue } from "./queue";

export class CircularQueue extends Queue {
  constructor(size: number) {
    super(size);
  }

  public enqueue(value: number): number {
    //second case handles cases where rear has wrapped back around to front
    if (
      (this.rear === this.queue.length - 1 && this.front === 0) ||
      this.front === this.rear + 1
    ) {
      throw "Queue is full"; //does not support resizing
    }
    if (this.front < 0) this.front++; //if queue is empty, move front pointer to front;
    this.rear = (this.rear + 1) % this.queue.length; //if rear would move past end of array, wrap it around back to head
    this.queue[this.rear] = value;

    return value;
  }

  public dequeue(): number {
    if (this.isEmpty()) return -1;
    let result: number = this.queue[this.front];
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.queue.length;
    }
    return result;
  }

  public print(): string {
    if(this.isEmpty()) return "Queue is empty";
    let result: string = "";
    for(let i = this.front; i != this.rear; i = (i+1)%this.queue.length){
      result += this.queue[i] + ", ";
    }
    result += this.queue[this.rear];
    return result; 
  }
}
