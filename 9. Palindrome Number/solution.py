class Solution:
    def isPalindrome(self, x: int) -> bool:
        # base case
        if x < 0:
            return False
        temp = x
        result = 0
        acc = 10
        while temp != 0:
            result = result * acc + temp % 10
            temp = temp // 10
        return result == x