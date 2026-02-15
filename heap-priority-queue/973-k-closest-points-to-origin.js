/**
 * 973. K Closest Points to Origin
 * https://leetcode.com/problems/k-closest-points-to-origin/
 *
 * Use a max-heap based on squared distance from origin.
 * Push all points into heap, then extract k closest points.
 */

/**
 * ------------------------------------
 * Heap-based Solution
 * ------------------------------------
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */

class minHeap {
    constructor() {
        this.heap = [];
    }

    heapifyUp(i) {
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.heap[parent][0] <= this.heap[i][0]) break;
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

            if (left < n && this.heap[left][0] < this.heap[smallest][0]) {
                smallest = left;
            }
            if (right < n && this.heap[right][0] < this.heap[smallest][0]) {
                smallest = right;
            }
            if (smallest === i) break;

            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    pop() {
        const top = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length) {
            this.heap[0] = last;
            this.heapifyDown(0);
        }
        return top;
    }

    size() {
        return this.heap.length;
    }
}

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const heap = new minHeap();

    for (const [x, y] of points) {
        const dist = x * x + y * y; // squared distance
        heap.push([dist, x, y]);
    }

    const res = [];
    while (k > 0 && heap.size()) {
        const [, x, y] = heap.pop();
        res.push([x, y]);
        k--;
    }

    return res;
};
