/**
 * 138. Copy List with Random Pointer
 * https://leetcode.com/problems/copy-list-with-random-pointer/
 *
 * Two-pass solution using a HashMap.
 * First pass: create a copy of each node and map original → copy.
 * Second pass: assign next and random pointers using the map.
 */

/**
 * ------------------------------------
 * Optimal Solution 
 * ------------------------------------
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */


/**
 * Definition for a Node.
 * function _Node(val, next, random) {
 *     this.val = val;
 *     this.next = next || null;
 *     this.random = random || null;
 * }
 */

var copyRandomList = function (head) {
    const oldToCopy = new Map();
    oldToCopy.set(null, null);

    let curr = head;

    // First pass: create all nodes
    while (curr) {
        oldToCopy.set(curr, new _Node(curr.val));
        curr = curr.next;
    }

    curr = head;

    // Second pass: assign next & random pointers
    while (curr) {
        const copy = oldToCopy.get(curr);
        copy.next = oldToCopy.get(curr.next);
        copy.random = oldToCopy.get(curr.random);
        curr = curr.next;
    }

    return oldToCopy.get(head);
};
