/**
 * 143. Reorder List
 * https://leetcode.com/problems/reorder-list/
 *
 * Reorders the list in-place:
 * L0 → L1 → … → Ln-1 → Ln
 * becomes
 * L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …
 */

/**
 * ------------------------------------
 * Optimal Solution
 * ------------------------------------
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var reorderList = function (head) {
    if (!head || !head.next) return head;

    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let second = slow.next;
    slow.next = null;

    let prev = null;
    while (second) {
        const next = second.next;
        second.next = prev;
        prev = second;
        second = next;
    }

    let first = head;
    second = prev;

    while (second) {
        const temp1 = first.next;
        const temp2 = second.next;

        first.next = second;
        second.next = temp1;

        first = temp1;
        second = temp2;
    }

    return head;
};
