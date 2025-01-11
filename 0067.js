/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var index_a = a.length - 1
    var index_b = b.length - 1
    var carry = 0
    var result = ""

    // we first hanlde a, b from the bottom 
    while (index_a > -1 && index_b > -1) {
        var a_num = Number(a[index_a])
        var b_num = Number(b[index_b])
        var sum = carry + a_num + b_num
        var digit = sum % 2
        result = digit + result
        if (sum >= 2) {
            carry = 1
        } else {
            carry = 0
        }
        index_a = index_a - 1
        index_b = index_b - 1
    }

    // if a is longer than b
    while (index_a > -1) {
        var a_num = Number(a[index_a])
        var sum = carry + a_num
        var digit = sum % 2
        result = digit + result
        if (sum >= 2) {
            carry = 1
        } else {
            carry = 0
        }
        index_a = index_a - 1
    }

    // if b is longer than a
    while (index_b > -1) {
        var b_num = Number(b[index_b])
        var sum = carry + b_num
        var digit = sum % 2
        result = digit + result
        if (sum >= 2) {
            carry = 1
        } else {
            carry = 0
        }
        index_b = index_b - 1
    }
    // if no carry; we just return
    if (carry === 0) {
        return result
    }
    // else, we prepend the carry and return
    result = "1" + result
    return result 
};