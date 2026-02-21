/**
 * 46. Permutations
 * https://leetcode.com/problems/permutations/
 *
 * Time Complexity: O(n!)
 * Space Complexity: O(n)
 */

/**
 * Recursive
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    if (nums.length === 0) {
        return [[]];
    }

    const permu = permute(nums.slice(1));
    const res = [];

    for (const p of permu) {
        for (let i = 0; i <= p.length; i++) {
            const permu_copy = [...p];
            permu_copy.splice(i, 0, nums[0]);
            res.push(permu_copy);
        }
    }

    return res;
};

/**
 * Iterative
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let permu = [[]];

    for (const n of nums) {
        const new_permu = [];
        for (const p of permu) {
            for (let i = 0; i <= p.length; i++) {
                const p_copy = [...p];
                p_copy.splice(i, 0, n);
                new_permu.push(p_copy);
            }
        }
        permu = new_permu;
    }

    return permu;
};