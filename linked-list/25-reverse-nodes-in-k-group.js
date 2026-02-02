/**
 * 25. Reverse Nodes in k-Group
 * https://leetcode.com/problems/reverse-nodes-in-k-group/
 *
 * Reverse nodes of a linked list k at a time.
 * Remaining nodes (< k) are left as-is.
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
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function getKth(curr, k) {
    while (curr && k) {
        curr = curr.next;
        k--;
    }
    return curr;
}

var reverseKGroup = function(head, k) {
    const dummy = new ListNode(0, head);
    let groupPrev = dummy;

    while (true) {
        let kth = getKth(groupPrev, k);
        if (!kth) break;

        let groupNext = kth.next;
        let prev = groupNext, curr = groupPrev.next;

        while (curr !== groupNext) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        let temp = groupPrev.next;
        groupPrev.next = kth;
        groupPrev = temp;
    }

    return dummy.next;
};
