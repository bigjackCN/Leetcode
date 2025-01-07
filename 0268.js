/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // we first loop through nums to find its sum
    var sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]
    }
    // find total sum of 0-n using formula
    var total = (1 + nums.length) * nums.length / 2
    var miss = total - sum
    return miss
};