/**
 * 572. Subtree of Another Tree
 * https://leetcode.com/problems/subtree-of-another-tree/
 *
 * Given the roots of two binary trees root and subRoot,
 * return true if there is a subtree of root with the same structure
 * and node values as subRoot.
 */

/**
 * ------------------------------------
 * Optimal Solution (DFS)
 * ------------------------------------
 * Time Complexity: O(n * m)
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var sameTree = function(p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;

    return (
        sameTree(p.left, q.left) &&
        sameTree(p.right, q.right)
    );
};

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (!subRoot) return true;
    if (!root) return false;

    if (sameTree(root, subRoot)) return true;

    return (
        isSubtree(root.left, subRoot) ||
        isSubtree(root.right, subRoot)
    );
};
