/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // we loop through and truncate it for longest common prefix    
    var common = strs[0]
    for (var i = 1; i < strs.length; i++) {
        // base case
        if (common.length === 0) {
            return ""
        }
        var current = strs[i]
        // we truncate if current length is longer
        if (current.length < common.length) {
            common = common.slice(0, current.length)
        }
        // we then check for each character 
        for (var j = 0; j < current.length; j++) {
            if (common[j] !== current[j]) {
                common = common.slice(0, j)
            }
        }
    }
    return common
};