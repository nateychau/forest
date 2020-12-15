/*
Stack implementation in TS - substitute push/pop methods with pointer to top of stack

--------Time constraints------------
Insert: O(1) - amortized (array doubles in size whenever filled)
Remove: O(1)
*Constant times achieved by using pointers to keep track of where to remove/insert
Search: O(n) - must brute force since deque is unsorted

--------Use cases-------------
-reverse a word
-used in compilers to handle order of operations
-browser history
*/

export class Stack{
  private top: number = -1;
  private stack: number[];

  constructor(capacity: number){
    this.stack = new Array(capacity);
  }

  //double length of array whenever max size is reached - enables amortized time of O(1) for push
  private ensureCapacity(): void{
    if(this.top === this.stack.length - 1){
      let expansion: number[] = new Array(this.stack.length);
      this.stack = this.stack.concat(expansion); 
    }
  }

  private isEmpty(): boolean{
    return this.top === -1;
  }

  public size(): number{
    return this.top + 1;
  }

  //O(1) 
  public push(value: number): number{
    this.ensureCapacity();
    this.top++; //move top pointer up the stack
    this.stack[this.top] = value; //set the value where top now points to
    return value;
  }

  public pop(): number{
    if(this.isEmpty()) return -1;

    let value: number = this.stack[this.top]; //return value at top of stack, then move top down
    this.top--;
    return value;
  }

  public peek(): number{
    if(this.isEmpty()) return -1;

    return this.stack[this.top];
  }

  public print(): string{
    if(this.isEmpty()) return "Stack is empty";

    let result: string = "";
    for(let i = 0; i <= this.top; i++){
      result += this.stack[i];
      if(i !== this.top) result += ", ";
    }
    return result;
  }

}