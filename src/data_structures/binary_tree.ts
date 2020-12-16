/*
Binary Tree:
  -each parent node has at most 2 children
Types of Binary Trees:
  -full binary tree:
    -every parent/internal node has either 2 or 0 children
    -for a full binary tree with n nodes
      - # of internal nodes = (n-1)/2
      -# of leaves is (n+1)/2
  -perfect binary tree:
    -every internal node has exactly 2 children, and all
    leaf nodes are at the same level
    -tree with height of h and n nodes
      -(2^h) - 1 nodes
      - log(n+1) - 1 height
  -complete binary tree
    -like a perfect tree, but leaf level does not need to be
    completely filled
    -all leaves must be as far left as possible
  -degenerate/pathological tree
    -each node only has one child (either left or right)
    -basically a linked list
  -skewed tree
    -a degenerate tree with all children skewed to one side ie. all children
    are left children, producing a left-skewed binary tree
  -balanced binary tree
    -difference in height between nodes at the same level is 0 or 1
    ie all leaf nodes can at most be 1 level apart from each other
    -all subtrees are balanced
*/

class Node {
  public value: number;
  public left: Node = null;
  public right: Node = null;

  constructor(value?: number){
    this.value = value ? value : null;
  }
}

export class BinaryTree {
  public head: Node;

  constructor(value?: number | Node){
    if(typeof value === "number"){
      this.head = new Node(value as number);
    } else {
      this.head = value as Node;
    }
  }

  /*
  visit nodes in the order of left child, parent, right child
  O(n) - visit each node in the tree once
  applications:
    -with a binary search tree, inorder will traverse nodes in 
    non-decreasing order
  */
  public inorderTraversal(node?: Node): string{
    if(!node) return;

    let result: string = ""
    result += this.inorderTraversal(node.left);
    result += node.value + " ";
    result += this.inorderTraversal(node.right);

    return result;
  }

  /*
  visit nodes in the order of parent, left child, right child
  O(n) - visit each node in the tree once
  applications: 
    -used to create a copy of the tree
  */
  public preorderTraversal(node?: Node): string{
    if(!node) return;
    
    let result: string = "";
    result += node.value + " ";
    result += this.preorderTraversal(node.left);
    result += this.preorderTraversal(node.right);

    return result;
  }

  /*
  visit nodes in the order of left child, right child, parent
  O(n) - visit each node in the tree once
  application: 
    -used to delete the tree
  */
  public postorderTraversal(node?: Node): string{
    if(!node) return;

    let result: string = "";
    result += this.postorderTraversal(node.left);
    result += this.postorderTraversal(node.right);
    result += node.value + " ";

    return result;
  }

  public isFullTree(node?: Node): boolean{
    if(!node) return true; //an empty tree is a full tree
    if(!node.left && !node.right) return true; //the node is a leaf node - itll return true down the stack
    if(node.left && node.right){
      return this.isFullTree(node.left) && this.isFullTree(node.right); //if both children are full subtrees, then this is a full tree
    }

    return false; //if one of the conditions above were not met, then this is not a full tree
  }
   
}

//build a complete binary tree out of a number array
const makeComplete = (arr: number[], root: number): Node => {
  if(!arr.length || root >= arr.length) return null;
  let tree: BinaryTree = new BinaryTree(arr[root]);
 
  tree.head.left = makeComplete(arr, 2*root + 1);
  tree.head.right = makeComplete(arr, 2*root + 2);  
  
  return tree.head;
}
