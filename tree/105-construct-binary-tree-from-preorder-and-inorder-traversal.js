/**
 * 105. Construct Binary Tree from Preorder and Inorder Traversal
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 *
 * Build a binary tree given preorder and inorder traversal arrays.
 */

/**
 * ------------------------------------
 * Optimal Solution (Recursive)
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;

    const rootVal = preorder[0];
    const root = new TreeNode(rootVal);

    const mid = inorder.indexOf(rootVal);

    root.left = buildTree(
        preorder.slice(1, mid + 1),
        inorder.slice(0, mid)
    );

    root.right = buildTree(
        preorder.slice(mid + 1),
        inorder.slice(mid + 1)
    );

    return root;
};
