/**
 * 1448. Count Good Nodes in Binary Tree
 * https://leetcode.com/problems/count-good-nodes-in-binary-tree/
 *
 * A node X in the tree is named good if in the path from root to X
 * there are no nodes with a value greater than X.
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
var goodNodes = function(root) {
    function dfs(node, maxVal) {
        if (!node) return 0;

        let res = node.val >= maxVal ? 1 : 0;
        maxVal = Math.max(maxVal, node.val);

        res += dfs(node.left, maxVal);
        res += dfs(node.right, maxVal);

        return res;
    }

    return dfs(root, root.val);
};
