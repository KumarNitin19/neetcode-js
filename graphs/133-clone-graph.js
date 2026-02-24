/**
 * 133. Clone Graph
 * https://leetcode.com/problems/clone-graph/
 *
 * Time Complexity: O(V + E)
 * Space Complexity: O(V)
 */

/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
    if (!node) return null;

    const oldToNew = new Map();

    function dfs(node) {
        if (oldToNew.has(node)) {
            return oldToNew.get(node);
        }

        const copy = new _Node(node.val);
        oldToNew.set(node, copy);

        for (const nei of node.neighbors) {
            copy.neighbors.push(dfs(nei));
        }

        return copy;
    }

    return dfs(node);
};