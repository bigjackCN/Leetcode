/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var last_digit = digits[digits.length - 1] + 1
    // base case: no carry to worry about
    if (digits[digits.length - 1] < 9) {
        digits[digits.length - 1] = last_digit
        return digits
    }
    // need to worry about carry over
    var carry = 1
    last_digit = last_digit % 10
    // update last digits
    digits[digits.length - 1] = last_digit
    // we need to update until carry is done
    var index = digits.length - 2
    while (carry !== 0 && index !== -1) {
        if (digits[index] < 9) {
            digits[index] = digits[index] + 1
            return digits
        }
        digits[index] = 0
        index = index - 1
    }
     
    digits.unshift(1)
    return digits
};