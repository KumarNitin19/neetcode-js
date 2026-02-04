/**
 * 199. Binary Tree Right Side View
 * https://leetcode.com/problems/binary-tree-right-side-view/
 *
 * Return the values of the nodes you can see when looking at the tree
 * from the right side.
 */

/**
 * ------------------------------------
 * Optimal Solution (BFS / Level Order)
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    const ans = [];
    const q = [root];

    while (q.length) {
        const size = q.length;
        let rightSide = null;

        for (let i = 0; i < size; i++) {
            const node = q.shift();
            if (node) {
                rightSide = node;
                q.push(node.left);
                q.push(node.right);
            }
        }

        if (rightSide) ans.push(rightSide.val);
    }

    return ans;
};
