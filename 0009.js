/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // base case: all the negative number return false
    if (x < 0) {
        return false
    }
    // base case: 0-9 return true
    if (x < 10) {
        return true
    }
    // base case: all the positive number ends with 0 return false
    if (x % 10 == 0) {
        return false
    }
    // general case: convert x to string and using two pointers to check if they identical
    
    // rewrite x to string
    x = x.toString()
    var low = 0
    var high = x.length - 1
    while (low < high) {
        if (x[low] != x[high]) {
            return false
        }
        low = low + 1
        high = high - 1
    }
    return true
}; 