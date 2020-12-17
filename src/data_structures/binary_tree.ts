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
  -binary search tree
    -all nodes of left subree are less than root node
    -all nodes of right subtree are greater than root node
    -can be searched in O(logn)
*/

class Node {
  public value: number;
  public left: Node = null;
  public right: Node = null;

  constructor(value?: number) {
    this.value = value ? value : null;
  }
}

export class BinaryTree {
  public head: Node;

  constructor(value?: number | Node) {
    if (typeof value === "number") {
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
  public inorderTraversal(node?: Node): string {
    if (!node) return;

    let result: string = "";
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
  public preorderTraversal(node?: Node): string {
    if (!node) return;

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
  public postorderTraversal(node?: Node): string {
    if (!node) return;

    let result: string = "";
    result += this.postorderTraversal(node.left);
    result += this.postorderTraversal(node.right);
    result += node.value + " ";

    return result;
  }

  public isFullTree(node?: Node): boolean {
    if (!node) return true; //an empty tree is a full tree
    if (!node.left && !node.right) return true; //the node is a leaf node - itll return true down the stack
    if (node.left && node.right) {
      return this.isFullTree(node.left) && this.isFullTree(node.right); //if both children are full subtrees, then this is a full tree
    }

    return false; //if one of the conditions above were not met, then this is not a full tree
  }

  //check if our tree is a balanced tree (defined here as a tree with no nodes more than 1 level apart from others)
  public isBalanced(): boolean {
    if (this.head === null) return true;
    return this.dfs(this.head) != -1;
  }
  //recursively measure depth of left and right subtrees, 
  //using -1 as a flag to catch when we encounter an unbalanced subtree
  private dfs(node: Node): number {
    if (node == null) return 0;
    let left: number = this.dfs(node.left);
    let right: number = this.dfs(node.right);
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
      return -1;
    }
    return 1 + Math.max(left, right);
  }
}

//build a complete binary tree out of a number array
const makeComplete = (arr: number[], root: number): Node => {
  if (!arr.length || root >= arr.length) return null;
  let tree: BinaryTree = new BinaryTree(arr[root]);

  tree.head.left = makeComplete(arr, 2 * root + 1);
  tree.head.right = makeComplete(arr, 2 * root + 2);

  return tree.head;
};

//These operations only apply to binary search trees, defined above
export class BinarySearchTree extends BinaryTree {

  //O(logn) - runs like a typical binary search on an array 
  //ie check if weve found our target. if not: 
  //  if our target is greater than current, than it must be in the right tree, so we bsearch the right tree
  //  if our target is less than current, than we bsearch left tree
  public binarySearch(root: Node, target: number): Node{
    if (!root) return null; 
    if(root.value === target) return root;
    if(root.value > target) return this.binarySearch(root.left, target);
    if(root.value < target) return this.binarySearch(root.right, target);
  } 

  //O(logn) - we visit each level at most one time (either descending left or right)
  //if our value is a leaf node
  public insert(value: number, node: Node = this.head): Node{
    if(!node) return new Node(value); //base case - if we find an empty spot in the tree, we can create 
                                      //and insert the node there

    //if the value is greater than the current node, we recursively insert it to 
    //the right (it will be bubbled down to its correct position in the right subtree)
    //vice versa for less than
    if(value > node.value) node.right = this.insert(value, node.right);
    if(value < node.value) node.left = this.insert(value, node.left);

    //below handles the case where the value to be inserted is already in our tree, 
    //in which case we just return the existing node with the same value (our tree
    //does not allow for duplicates)
    return node; 
  }

  private inorderSuccessor(node: Node): number{
    let minValue: number = node.value;
    while(node.left){
      node = node.left;
      minValue = node.value;
    }
    return minValue;
  }

  /*
  Deleting a value from our tree must handle 3 cases:
  1. the node to be deleted is a leaf node, in which case we 
  simply reassign its parent's right/left pointer to null (line 204, where node.right = null)
  2. if the node has one child - change the node's value to its child's,
  and then delete the node (lines 204/205)
  3. if the node has 2 chidren - search its right subtree for its inorder sucessor, 
  save the value of its inorder sucessor to the current node, then recursively delete the inorder successor
  Average O(logn) - visit each level once
  Worst case: O(n) - visit each node once (skewed tree)
  */
  public deleteValue(value: number, node: Node = this.head): Node{
    if(!node) return null; //return null if tree is empty, or we've traversed the entire tree and have not encountered the target value
    if(value > node.value) node.right = this.deleteValue(value, node.right); //search right subtree for value, delete, and reassign new subtree as right child
    else if(value < node.value) node.left = this.deleteValue(value, node.left); //same as above for left
    
    else { //if the above conditions were not met, than the current node is our target
      
      //if only one child, return that child up to take the place of the current node
      if(!node.left) return node.right; //in the case where current node is a leaf node, this will return null back up the stack, so that the parents left/right pointer will be set to null
      else if (!node.right) return node.left;
      else { //else the current node has 2 children
        node.value = this.inorderSuccessor(node.right); //replace current node's value with inorder sucessor
        node.right = this.deleteValue(node.value, node.right); //search the right subtree to delete the inorder sucessor node (which is now saved to our current node)
      }
    }
    return node; //return root nodes back up to be reassigned as subtrees
  }
}