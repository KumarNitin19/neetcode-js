/**
 * 206. Reverse Linked List
 * https://leetcode.com/problems/reverse-linked-list/
 *
 * Problem:
 * Given the head of a singly linked list, reverse the list,
 * and return the reversed list.
 */

/**
 * ------------------------------------
 * Optimal Solution (Iterative)
 * ------------------------------------
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */

var reverseList = function (head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        const nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    return prev;
};
