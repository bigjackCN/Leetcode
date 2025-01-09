/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // use Map to store Roman [Symbol, Value] pairs
    var dict = new Map()
    dict.set("I", 1)
    dict.set("V", 5)
    dict.set("X", 10)
    dict.set("L", 50)
    dict.set("C", 100)
    dict.set("D", 500)
    dict.set("M", 1000)
    // set global result
    var result = 0
    // we only loop through Roman numeral n-1 to avoid index out of bound
    for (let i = 0; i < s.length - 1; i++) {

        // get current value and the next value
        var current = dict.get(s[i])
        var next = dict.get(s[i+1])
        
        if (current >= next) {
            result = result + current
        } else {
            result = result - current
        }
    }
    // we now handle the last digit, notice it is always being added
    result = result + dict.get(s[(s.length - 1)])
    return result
};