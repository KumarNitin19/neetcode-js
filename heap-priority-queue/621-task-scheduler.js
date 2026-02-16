/**
 * 621. Task Scheduler
 * https://leetcode.com/problems/task-scheduler/
 *
 * Approach: Max Heap + Queue (Greedy)
 *
 * Idea:
 * - Count frequency of each task
 * - Always execute the task with the highest remaining frequency
 * - Use a cooldown queue to track tasks that cannot be re-executed yet
 *
 * Time Complexity:
 *  - O(n log n), where n = number of tasks
 *
 * Space Complexity:
 *  - O(n)
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
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const freq = new Map();

    for (const t of tasks) {
        freq.set(t, (freq.get(t) || 0) + 1);
    }

    const heap = new MaxHeap();
    for (const count of freq.values()) {
        heap.push(count);
    }

    let time = 0;
    const q = []; // [remainingCount, availableTime]

    while (heap.size() || q.length) {
        time++;

        if (heap.size()) {
            let cnt = heap.pop() - 1;
            if (cnt > 0) {
                q.push([cnt, time + n]);
            }
        }

        if (q.length && q[0][1] === time) {
            heap.push(q.shift()[0]);
        }
    }

    return time;
};
