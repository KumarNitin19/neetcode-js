/**
 * 1382. Balance a Binary Search Tree
 * https://leetcode.com/problems/balance-a-binary-search-tree/
 *
 * Convert BST to sorted array using inorder traversal,
 * then build a balanced BST from the sorted array.
 */

/**
 * ------------------------------------
 * Optimal Solution
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

function traverseBST(root, inorder) {
    if (!root) return;

    traverseBST(root.left, inorder);
    inorder.push(root.val);
    traverseBST(root.right, inorder);
}

function constructBST(arr, low, high) {
    if (low > high) return null;

    const mid = Math.floor(low + (high - low) / 2);
    const node = new TreeNode(arr[mid]);

    node.left = constructBST(arr, low, mid - 1);
    node.right = constructBST(arr, mid + 1, high);

    return node;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    if (!root) return null;

    const inorder = [];
    traverseBST(root, inorder);

    return constructBST(inorder, 0, inorder.length - 1);
};
