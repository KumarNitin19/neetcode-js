/**
 * 104. Maximum Depth of Binary Tree
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 *
 * Find the maximum depth (height) of a binary tree.
 */

/**
 * ------------------------------------
 * Solution 1: Recursive DFS
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

var maxDepth = function(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

/**
 * ------------------------------------
 * Solution 2: BFS (Level Order Traversal)
 * ------------------------------------
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

var maxDepth = function(root) {
    if (!root) return 0;

    let level = 0;
    const q = [root];

    while (q.length) {
        let size = q.length;
        for (let i = 0; i < size; i++) {
            const node = q.shift();
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        level += 1;
    }

    return level;
};

/**
 * ------------------------------------
 * Solution 3: Iterative DFS (Stack)
 * ------------------------------------
 * Time Complexity: O(n)
 * Space Complexity: O(h)
 */

var maxDepth = function(root) {
    if (!root) return 0;

    let res = 0;
    const stack = [[root, 1]];

    while (stack.length) {
        const [node, depth] = stack.pop();
        if (node) {
            res = Math.max(res, depth);
            if (node.left) stack.push([node.left, depth + 1]);
            if (node.right) stack.push([node.right, depth + 1]);
        }
    }

    return res;
};
