/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // we only check the substring with "needle" length
    var check_length = needle.length

    for (let i = 0; i <= haystack.length - check_length; i++) {
        if (haystack.slice(i, i + check_length) === needle) {
            return i
        }
    }
    // if do not occur, return -1
    return -1
};