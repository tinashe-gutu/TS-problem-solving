/*
Task 1

Write a function which **creates and returns a linked list** having exactly these items 

10 → 20 →  30 → 40

Establish the nodes and their links one by one, manually - don’t worry about using a loop.
*/

interface LinkedList {
  value?: number;
  next?: null | LinkedList;
}
/**
 * A function which **creates and returns a linked list**
 * having exactly these items 10 → 20 →  30 → 40
 * @returns LinkedList
 */
function ManualLinkedList(): LinkedList {
  const myLinkedList: LinkedList = {
    value: 10,
    next: {
      value: 20,
      next: {
        value: 30,
        next: {
          value: 40,
          next: null,
        },
      },
    },
  };
  return myLinkedList;
}

/* 
Task 2
Write a function to log the contents of given linked list by traversing the list

*/

function logLinkedList(linkedList: LinkedList | null) {
  if (linkedList) {
    let pointer = linkedList;
    console.log(pointer.value);
    while (pointer.next) {
      pointer = pointer.next;
      console.log(pointer.value);
    }
  }
}

const myLinkedList: LinkedList = {
  value: 10,
  next: {
    value: 20,
    next: {
      value: 30,
      next: {
        value: 40,
        next: null,
      },
    },
  },
};
logLinkedList(myLinkedList);

/* 
Task 3
Write a function to **create and return a linked list 
from a given array** of numbers (in any order)
*/

function createLinkedList(arr: number[]): null | LinkedList {
  let linkedList: LinkedList = {};
  if (arr.length === 0) {
    return null;
  } else {
    linkedList.value = arr[0];
    linkedList.next = createLinkedList(arr.slice(1));
  }
  return linkedList;
}

const myLinkedList2: LinkedList | null = createLinkedList([1, 2, 3, 4, 5]);

logLinkedList(myLinkedList2);
