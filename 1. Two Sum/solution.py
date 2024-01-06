class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map = {}
        index = 0
        for num in nums:
            if map.get(num, None) == None:      # Use Dictionary.get to handle KeyError
                map[target - num] = index
                index += 1
            else:
                return [map[num], index]