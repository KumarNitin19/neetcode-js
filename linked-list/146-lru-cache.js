/**
 * 146. LRU Cache
 * https://leetcode.com/problems/lru-cache/
 *
 * Problem:
 * Design a data structure that follows the constraints of a
 * Least Recently Used (LRU) cache.
 *
 * Implement the LRUCache class:
 * - LRUCache(int capacity)
 * - int get(int key)
 * - void put(int key, int value)
 *
 * get and put must run in O(1) average time complexity.
 */

/**
 * ------------------------------------
 * Optimal Solution (HashMap + Doubly Linked List)
 * ------------------------------------
 * HashMap → O(1) access
 * Doubly Linked List → O(1) insert & remove
 */

class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

var LRUCache = function (capacity) {
    this.cap = capacity;
    this.cache = new Map();

    // Dummy head & tail
    this.left = new Node(0, 0);   // LRU
    this.right = new Node(0, 0);  // MRU

    this.left.next = this.right;
    this.right.prev = this.left;
};

// Remove node from list
LRUCache.prototype.remove = function (node) {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
};

// Insert node at MRU position
LRUCache.prototype.insert = function (node) {
    const prev = this.right.prev;
    prev.next = node;
    node.prev = prev;
    node.next = this.right;
    this.right.prev = node;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.cache.has(key)) return -1;

    const node = this.cache.get(key);
    this.remove(node);
    this.insert(node);
    return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.cache.has(key)) {
        this.remove(this.cache.get(key));
    }

    const node = new Node(key, value);
    this.cache.set(key, node);
    this.insert(node);

    if (this.cache.size > this.cap) {
        const lru = this.left.next;
        this.remove(lru);
        this.cache.delete(lru.key);
    }
};
