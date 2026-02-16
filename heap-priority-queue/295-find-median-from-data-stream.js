/**
 * 295. Find Median from Data Stream
 * https://leetcode.com/problems/find-median-from-data-stream/
 *
 * ------------------------------------
 * Two Heaps Solution (MaxHeap + MinHeap)
 * ------------------------------------
 * Time Complexity:
 *   addNum     -> O(log n)
 *   findMedian -> O(1)
 *
 * Space Complexity:
 *   O(n)
 */

// ---------- Max Heap ----------
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return top;
    }

    heapifyUp(i) {
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.heap[parent] >= this.heap[i]) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    heapifyDown(i) {
        const n = this.heap.length;
        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let largest = i;

            if (left < n && this.heap[left] > this.heap[largest]) largest = left;
            if (right < n && this.heap[right] > this.heap[largest]) largest = right;
            if (largest === i) break;

            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
            i = largest;
        }
    }
}

// ---------- Min Heap ----------
class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return top;
    }

    heapifyUp(i) {
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.heap[parent] <= this.heap[i]) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    heapifyDown(i) {
        const n = this.heap.length;
        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;

            if (left < n && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < n && this.heap[right] < this.heap[smallest]) smallest = right;
            if (smallest === i) break;

            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
    }
}

// ---------- Median Finder ----------
var MedianFinder = function() {
    this.small = new MaxHeap(); // lower half
    this.large = new MinHeap(); // upper half
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.small.push(num);

    if (this.large.size() && this.small.peek() > this.large.peek()) {
        this.large.push(this.small.pop());
    }

    if (this.small.size() > this.large.size() + 1) {
        this.large.push(this.small.pop());
    }

    if (this.large.size() > this.small.size()) {
        this.small.push(this.large.pop());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.small.size() > this.large.size()) {
        return this.small.peek();
    }
    return (this.small.peek() + this.large.peek()) / 2;
};

/**
 * Usage:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var median = obj.findMedian()
 */
