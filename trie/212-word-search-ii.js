/**
 * 212. Word Search II
 * https://leetcode.com/problems/word-search-ii/
 *
 * Find all words from the dictionary that can be formed in the board.
 * Each word must be constructed from sequentially adjacent cells.
 */

/**
 * ------------------------------------
 * Optimal Solution (Trie + DFS Backtracking)
 * ------------------------------------
 * Time Complexity: O(m * n * 4^L)
 * Space Complexity: O(total characters in Trie)
 */

class TrieNode {
    constructor() {
        this.children = {};
        this.word = null;
    }

    addWord(word) {
        let curr = this;

        for (const c of word) {
            if (!curr.children[c]) {
                curr.children[c] = new TrieNode();
            }
            curr = curr.children[c];
        }

        curr.word = word;
    }
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    const root = new TrieNode();

    // Build Trie
    for (const word of words) {
        root.addWord(word);
    }

    const ROWS = board.length;
    const COLS = board[0].length;
    const res = [];

    function dfs(r, c, node) {
        if (
            r < 0 || c < 0 ||
            r >= ROWS || c >= COLS ||
            board[r][c] === '#' ||
            !node.children[board[r][c]]
        ) {
            return;
        }

        const ch = board[r][c];
        node = node.children[ch];

        if (node.word) {
            res.push(node.word);
            node.word = null; // avoid duplicates
        }

        board[r][c] = '#';

        dfs(r + 1, c, node);
        dfs(r - 1, c, node);
        dfs(r, c + 1, node);
        dfs(r, c - 1, node);

        board[r][c] = ch;
    }

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            dfs(r, c, root);
        }
    }

    return res;
};
