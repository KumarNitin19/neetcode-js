/**
 * 211. Design Add and Search Words Data Structure
 * https://leetcode.com/problems/design-add-and-search-words-data-structure/
 *
 * Supports adding words and searching with '.' wildcard
 * where '.' can represent any letter.
 */

/**
 * ------------------------------------
 * Optimal Solution (Trie + DFS)
 * ------------------------------------
 * Time Complexity:
 *  - addWord: O(n)
 *  - search: O(n) average, O(26^n) worst-case with many wildcards
 * Space Complexity: O(total characters)
 */

class TrieNode {
    constructor() {
        this.children = new Map();
        this.endOfWord = false;
    }
}

var WordDictionary = function () {
    this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let curr = this.root;

    for (const c of word) {
        if (!curr.children.has(c)) {
            curr.children.set(c, new TrieNode());
        }
        curr = curr.children.get(c);
    }

    curr.endOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    function dfs(i, node) {
        if (i === word.length) return node.endOfWord;

        const c = word[i];

        if (c === '.') {
            for (const child of node.children.values()) {
                if (dfs(i + 1, child)) return true;
            }
            return false;
        }

        if (!node.children.has(c)) return false;
        return dfs(i + 1, node.children.get(c));
    }

    return dfs(0, this.root);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
