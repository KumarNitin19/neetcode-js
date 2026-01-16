/**
 * LeetCode 74 - Search a 2D Matrix
 * Time Complexity: O(logm) + O(logn)
 * Space Complexity: O(1)
 */

var searchMatrix = function (matrix, target) {
    const rows = matrix.length - 1;
    const cols = matrix[0].length - 1;

    let top = 0;
    let bot = rows;
    let mid;

    while (top <= bot) {
        mid = Math.floor((top + bot) / 2);

        if (matrix[mid][0] > target) {
            bot = mid - 1;
        } else if (matrix[mid][cols] < target) {
            top = mid + 1;
        } else {
            break;
        }
    }

    if (top > bot) return false;

    const row = Math.floor((top + bot) / 2);
    let l = 0;
    let r = cols;

    while (l <= r) {
        mid = Math.floor((l + r) / 2);

        if (matrix[row][mid] > target) {
            r = mid - 1;
        } else if (matrix[row][mid] < target) {
            l = mid + 1;
        } else {
            return true;
        }
    }

    return false;
};
