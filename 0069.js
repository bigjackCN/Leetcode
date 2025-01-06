/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    for (let i = 0; i <= x; i++) {
        // i square equal x, return i
        if (i * i == x) {
            return i
        } else if (i * i < x) {
            continue
        } else {
            i = i - 1
            return i
        }
    }
};