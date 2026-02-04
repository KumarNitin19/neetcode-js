/**
 * 102. Binary Tree Level Order Traversal
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 *
 * Traverse the binary tree level by level (left to right).
 */

/**
 * ------------------------------------
 * Optimal Solution (BFS / Queue)
 * ------------------------------------
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const q = [root];
    const ans = [];

    while (q.length) {
        const size = q.length;
        const level = [];

        for (let i = 0; i < size; i++) {
            const node = q.shift();
            if (node) {
                level.push(node.val);
                q.push(node.left);
                q.push(node.right);
            }
        }

        if (level.length) ans.push(level);
    }

    return ans;
};
