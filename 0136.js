/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // base case: just one item in array, return whatever it is
    if (nums.length == 1) {
        return nums[0]
    }
    // general case: using xor(^) bit operation to find the only one
    var res = nums[0]
    for (let i = 1; i < nums.length; i++) {
        res = res ^ nums[i]
    }
    return res
};