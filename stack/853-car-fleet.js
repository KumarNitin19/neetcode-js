/**
 * 853. Car Fleet
 * https://leetcode.com/problems/car-fleet/
 *
 * Problem:
 * Given positions and speeds of cars heading toward a target,
 * return the number of car fleets that arrive at the destination.
 */

/**
 * -------------------------------
 * Optimal Solution (Sorting + Stack)
 * -------------------------------
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */

var carFleet = function(target, position, speed) {
     // create a pair of position and speed
    const cars = position.map((pos, i) => [pos, speed[i]]);

    // Sort cars by starting position in descending order
    cars.sort((a, b) => b[0] - a[0]);

    const stk = []; // stack of time to reach target

    for (const [pos, spd] of cars) {
        const time = (target - pos) / spd;

        // If this car takes longer than the fleet ahead, it forms a new fleet
        if (!stk.length || time > stk[stk.length - 1]) {
            stk.push(time);
        }
        
    }

    return stk.length;
};