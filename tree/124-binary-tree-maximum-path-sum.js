/**
 * 124. Binary Tree Maximum Path Sum
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/
 *
 * Find the maximum path sum in a binary tree.
 * A path may start and end at any node.
 */

/**
 * ------------------------------------
 * Optimal Solution (DFS)
 * ------------------------------------
 * Time Complexity: O(n)
 * Space Complexity: O(h)
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
 * @return {number}
 */
var maxPathSum = function(root) {
    let res = root.val;

    function dfs(node) {
        if (!node) return 0;

        let leftMax = Math.max(dfs(node.left), 0);
        let rightMax = Math.max(dfs(node.right), 0);

        res = Math.max(res, node.val + leftMax + rightMax);

        return node.val + Math.max(leftMax, rightMax);
    }

    dfs(root);
    return res;
};
