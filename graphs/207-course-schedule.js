/**
 * 207. Course Schedule
 * https://leetcode.com/problems/course-schedule/
 *
 * Time Complexity: O(V + E)
 * Space Complexity: O(V + E)
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const preMap = new Map();

    for (let i = 0; i < numCourses; i++) {
        preMap.set(i, []);
    }

    for (const [crs, pre] of prerequisites) {
        preMap.get(crs).push(pre);
    }

    const visit = new Set();

    function dfs(crs) {
        if (visit.has(crs)) return false;
        if (preMap.get(crs).length === 0) return true;

        visit.add(crs);

        for (const pre of preMap.get(crs)) {
            if (!dfs(pre)) return false;
        }

        visit.delete(crs);
        preMap.set(crs, []);

        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }

    return true;
};