/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // fibonacci number 1, 1, 2, 3
    var prev = 0
    var cur = 1
    var accumulator = 0
    while (n > 0) {
        accumulator = cur + prev
        prev = cur
        cur = accumulator
        n = n - 1
    }
    return cur
};