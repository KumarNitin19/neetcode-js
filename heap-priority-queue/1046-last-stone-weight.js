/**
 * 1046. Last Stone Weight
 * https://leetcode.com/problems/last-stone-weight/
 *
 * Use a Max Heap to always smash the two heaviest stones.
 */

/**
 * ------------------------------------
 * Optimal Solution (Heap)
 * ------------------------------------
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */

class MaxHeap {
    constructor() {
        this.heap = [];
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
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    if (!stones.length) return 0;

    const heap = new MaxHeap();

    for (const stone of stones) heap.push(stone);

    while (heap.size() > 1) {
        const first = heap.pop();
        const second = heap.pop();

        if (first !== second) {
            heap.push(Math.abs(first - second));
        }
    }

    return heap.size() ? heap.pop() : 0;
};
