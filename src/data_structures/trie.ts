class TrieNode {
  public map: {[key: string]: TrieNode} = {}; 
  public endOfWord: boolean = false;
}

export class Trie {
  public root: TrieNode;
  
  constructor(){
    this.root = new TrieNode();
  }

  //O(n) where n is length of word
  public insert(word: string): TrieNode {
    if(!word.length) return null;
    let node: TrieNode = this.root; 
    for(let i = 0; i < word.length; i++){
      let char: string = word[i];
      
      if(node.map[char]) { //if the current letter combination already exists, follow that path
        node = node.map[char];
      } else { //otherwise, we create a new trienode and follow that path
        node = node.map[char] = new TrieNode();
      }

    }
    node.endOfWord = true;
    return node; 
  }

  private traverseWord(word: string): TrieNode {
    if(!word.length) return null;

    let node: TrieNode = this.root;
    for(let i = 0; i < word.length && node; i++){
      let char: string = word[i];

      if(!node.map[char]) return null; //a path to this combination of letters does not exist in our trie
      node = node.map[char];
    }
    return node
  }

  //O(n) where n is length of word
  public checkWord(word: string): boolean {
    if(!word.length) return null;

    let node: TrieNode = this.root;
    for(let i = 0; i < word.length && node; i++){
      let char: string = word[i];

      if(!node.map[char]) return false; //a path to this combination of letters does not exist in our trie
      node = node.map[char];
    }
    //after our loop has finished running, we should be on a node representing the end of the word
    return node.endOfWord; 

  }

  /*similar to checkWord, but we are not concerned with whether
  this word is a full word or not. We only want to know if a path
  along this combination of letters exists in our trie*/
  //O(n) where n is length of word
  public checkPrefix(word: string): boolean {
    if(!word.length) return null;

    let node: TrieNode = this.root;
    for(let i = 0; i < word.length && node; i++){
      let char: string = word[i];

      if(!node.map[char]) return false; //a path to this combination of letters does not exist in our trie
      node = node.map[char];
    }

    return node !== null; //if we made it all the way through the loop, then a path does exist
  }

  public delete(word: string): void{
    this.deleteFromNode(this.root, word, 0);
  }

  /*
  traverse down to the node with the last letter of the word
  (exiting early without modifying the trie if a path does not exist). 
  Once we arrive at the last node, we flip the endOfWord to false, and then 
  check to see if the node has stored other paths. If it has, we can't delete it. 
  If there are no other characters saved on the node, then we can pass a flag back up 
  to the previuos stack frame to delete it, and then continue checking if we can delete
  */
  private deleteFromNode(node: TrieNode, word: string, index: number): boolean {
    if (index === word.length){
      if(!node.endOfWord){
        return false;
      }
      node.endOfWord = false; 
      return Object.keys(node.map).length === 0; //pass true back up if there are no other keys at this node (we can delete)
    }

    let char: string = word[index];
    let nextNode: TrieNode = node.map[char];
    if(!nextNode){
      return false; //a path to the end of this word does not exist, so our tree doesn't contain the word (can't delete);
    }

    let shouldDeleteCurrentNode: boolean = this.deleteFromNode(nextNode, word, index+1);
    
    if(shouldDeleteCurrentNode){
      delete node.map[char];
      return Object.keys(node.map).length === 0; //we can continue deleting upwards if no other letters are stored on this node
    }
    return false;
  }
}