/*
Direct Address table
-assumptions:
  - keys are small integers (directly correspond to an index
    in the address table)
  - # of keys is not too large
  - no 2 data have the same key (no collisions)
-each slot in direct address table contains a pointer to 
the element (struct/set) that corresponds to the data
-index of array is used as the key of the set ie [key, element]
-limitations
    -value of key must be small (a reasonable index)
    -# of keys is limited to size of array

Hash Table
-keys are hashed to create a new index
-h(x) is a hashing function, and k is a key. Then:
    - h(k) = index of element
-limitations:
    -if hash function produces say index for 2 diff keys,
    there will be a collision
-collision resolution
    -Chaining
      -if the hash function returns the same index for more than
      one key, those elements are stored in a linked list, and the
      value at that index points to the head of the linked list
-Hash functions
    -should not generate keys that are too large (wasted space)
    -keys should not be too close nor too far from each other (wasted buckets)
    -should minimize collisions
    -types
      -division method
        -if m is size of hash table:
          h(k) = k%m
      -multiplication method
        -h(k) = Math.floor(m(kA%1))
        -where A is a constant between 0 and 1
-Open addressing
  -each slot is filled with single element or left null
  -no more than one element can be stored in each spot (no chaining)
  -Linear probing
    -h(k, i) = (h'(k) + i)%m
      -i is an index starting from 0
      -h'(k) is a new hash function
    -for every new element added:
      -try h(k, 0) first. If that results in a collision,
      try h(k,1), etc until you find an open slot
    -when there are many elements clustered together,
    this can result in a longer insert time, as that entire
    cluster must be traversed to find an open index
  -Quadratic Probing
    -h(k, i) = (h'(k) + c1*i + c2 * i^2)%m
    -c1 and c2 are positive auxiliary constants
  -Double hashing
    -if a collision occurs from h(k), then calculate another
    hash function for finding next slot
-Applications
    -constant time lookup and insertion
    -cryptography
 */