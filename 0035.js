/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var res = 0
    // base case: insert first position
    if (nums[0] >= target) {
        return 0
    }
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < target && nums[i+1] >= target) {
            return i+1
        }
    }
    // insert at the end
    return nums.length
};