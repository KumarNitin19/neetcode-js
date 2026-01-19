/**
 * 4. Median of Two Sorted Arrays
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 *
 * Problem:
 * Given two sorted arrays nums1 and nums2 of size m and n respectively,
 * return the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 */

/**
 * ------------------------------------
 * Optimal Solution (Binary Search)
 * ------------------------------------
 * Time Complexity: O(log(min(m, n)))
 * Space Complexity: O(1)
 */

var findMedianSortedArrays = function (nums1, nums2) {
    let A = nums1;
    let B = nums2;

    if (A.length > B.length) {
        A = nums2;
        B = nums1;
    }

    const total = A.length + B.length;
    const half = Math.floor(total / 2);

    let l = 0;
    let r = A.length - 1;

    while (true) {
        const i = Math.floor((l + r) / 2);
        const j = half - i - 2;

        const Aleft = i >= 0 ? A[i] : Number.NEGATIVE_INFINITY;
        const Aright = i + 1 < A.length ? A[i + 1] : Number.POSITIVE_INFINITY;

        const Bleft = j >= 0 ? B[j] : Number.NEGATIVE_INFINITY;
        const Bright = j + 1 < B.length ? B[j + 1] : Number.POSITIVE_INFINITY;

        if (Aleft <= Bright && Bleft <= Aright) {
            if (total % 2 === 1) {
                return Math.min(Aright, Bright);
            }
            return (
                Math.max(Aleft, Bleft) + Math.min(Aright, Bright)
            ) / 2;
        } else if (Aleft > Bright) {
            r = i - 1;
        } else {
            l = i + 1;
        }
    }
};
