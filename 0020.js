/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    /* we use stack to push for open brackets
        and pop for close brackets
        Notice: We need to check the brackets are paired
    */
    var stack = []
    
    // we now loop through our string
    for (let i = 0; i < s.length; i++) {
        var current = s[i]

        // check for "(", "{", "["
        var check_one = current === ")" && stack[stack.length-1] === "("
        var check_two = current === "}" && stack[stack.length-1] === "{"
        var check_three = current === "]" && stack[stack.length-1] === "["

        if (current === "(" || current === "{" || current == "[") {
            stack.push(current)
        } else if ( check_one || check_two || check_three) {
            stack.pop()
        } else {
            // false if not matched
            return false
        }
    }
    // check if stack is empty
    return (stack.length === 0)
};