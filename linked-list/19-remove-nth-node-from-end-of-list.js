/**
 * 19. Remove Nth Node From End of List
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 *
 * One-pass solution using two pointers.
 * We maintain a gap of `n` nodes between `right` and `left`.
 * When `right` reaches the end, `left` is just before the node to remove.
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
 * function ListNode(val, next) {
 *     this.val = val;
 *     this.next = next || null;
 * }
 */

var removeNthFromEnd = function (head, n) {
    // Dummy node handles edge case like removing the head
    let dummy = new ListNode(0, head);
    let left = dummy;
    let right = head;

    // Move right pointer n steps ahead
    while (n > 0 && right) {
        right = right.next;
        n--;
    }

    // Move both pointers until right reaches the end
    while (right) {
        left = left.next;
        right = right.next;
    }

    // Remove the nth node from end
    left.next = left.next.next;

    return dummy.next;
};
