/**
 * 2. Add Two Numbers
 * https://leetcode.com/problems/add-two-numbers/
 *
 * Iterate through both linked lists digit by digit,
 * keep track of carry, and build the result list.
 */

/**
 * ------------------------------------
 * Optimal Solution
 * ------------------------------------
 * Time Complexity: O(max(m, n))
 * Space Complexity: O(max(m, n))
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = val === undefined ? 0 : val;
 *     this.next = next === undefined ? null : next;
 * }
 */

var addTwoNumbers = function (l1, l2) {
    const dummy = new ListNode(0);
    let curr = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {
        const v1 = l1 ? l1.val : 0;
        const v2 = l2 ? l2.val : 0;

        const sum = v1 + v2 + carry;
        carry = Math.floor(sum / 10);

        curr.next = new ListNode(sum % 10);
        curr = curr.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next;
};
