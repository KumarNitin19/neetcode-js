/**
 * 110. Balanced Binary Tree
 * https://leetcode.com/problems/balanced-binary-tree/
 *
 * A binary tree is balanced if the height difference between
 * left and right subtrees is at most 1 for every node.
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

var isBalanced = function(root) {
    function dfs(node) {
        if (!node) return [true, 0];

        const left = dfs(node.left);
        const right = dfs(node.right);

        const balanced =
            left[0] &&
            right[0] &&
            Math.abs(left[1] - right[1]) <= 1;

        return [balanced, 1 + Math.max(left[1], right[1])];
    }

    return dfs(root)[0];
};
