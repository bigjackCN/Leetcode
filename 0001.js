/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // base case: assume always exist two nums sum to target
    if (nums.length == 2) {
            return [0,1]
        }
    // look at general case
    // use Map to store [candidate, index] pairs
    let dict = new Map()

    for (let i = 0; i < nums.length; i++) {
        let candidate = dict.get(nums[i])
        // check if our candidate is already stored in dict, if so, return
        if (candidate !== undefined) {
            return [candidate, i]
        } 
        // if not, we store our candidate and its index
        dict.set(target - nums[i], i)
    }
};