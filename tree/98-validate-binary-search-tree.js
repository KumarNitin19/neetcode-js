/**
 * 98. Validate Binary Search Tree
 * https://leetcode.com/problems/validate-binary-search-tree/
 *
 * A binary search tree (BST) is valid if:
 * - The left subtree of a node contains only nodes with keys less than the node's key.
 * - The right subtree contains only nodes with keys greater than the node's key.
 * - Both subtrees are also BSTs.
 */

/**
 * ------------------------------------
 * Optimal Solution (DFS with Bounds)
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    function valid(node, left, right) {
        if (!node) return true;

        if (!(node.val > left && node.val < right)) return false;

        return valid(node.left, left, node.val) &&
               valid(node.right, node.val, right);
    }

    return valid(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};
