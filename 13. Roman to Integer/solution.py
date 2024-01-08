class Solution:
    def romanToInt(self, s: str) -> int:
        roman_numeral = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        result = 0
        last = 0    # use last to check for previous value
        for symbol in s:
            result = result + roman_numeral[symbol]
            if roman_numeral[symbol] <= last:
                last = roman_numeral[symbol]
            else:
                result = result - 2 * last
                last = roman_numeral[symbol]
        return result
