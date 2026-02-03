/**
 * 543. Diameter of Binary Tree
 * https://leetcode.com/problems/diameter-of-binary-tree/
 *
 * The diameter of a binary tree is the length of the longest path
 * between any two nodes in a tree. This path may or may not pass through the root.
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

var diameterOfBinaryTree = function(root) {
    let res = 0;

    function dfs(node) {
        if (!node) return 0;

        const left = dfs(node.left);
        const right = dfs(node.right);

        res = Math.max(res, left + right);
        return 1 + Math.max(left, right);
    }

    dfs(root);
    return res;
};
