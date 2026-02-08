/**
 * 703. Kth Largest Element in a Stream
 * Link: https://leetcode.com/problems/kth-largest-element-in-a-stream/
 *
 * Time Complexity:
 * - Constructor: O(n log k)
 * - add(): O(log k)
 *
 * Space Complexity:
 * - O(k)
 */

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.heap = [];

    for (const num of nums) {
        this.add(num);
    }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.heap.push(val);
    this.heapifyUp(this.heap.length - 1);

    if (this.heap.length > this.k) {
        this.pop();
    }

    return this.heap[0];
};

KthLargest.prototype.heapifyUp = function(i) {
    while (i > 0) {
        let parent = Math.floor((i - 1) / 2);
        if (this.heap[parent] <= this.heap[i]) break;
        [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
        i = parent;
    }
};

KthLargest.prototype.pop = function() {
    const last = this.heap.pop();
    if (!this.heap.length) return;

    this.heap[0] = last;
    this.heapifyDown(0);
};

KthLargest.prototype.heapifyDown = function(i) {
    const n = this.heap.length;

    while (true) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let smallest = i;

        if (left < n && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
        if (right < n && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }
        if (smallest === i) break;

        [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
        i = smallest;
    }
};
