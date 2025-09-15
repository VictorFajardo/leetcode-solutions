# Valid Parentheses
# https://leetcode.com/problems/valid-parentheses/

class Solution:
    def isValid(self, s: str) -> bool:
        brackets = {")": "(", "}": "{", "]": "["}
        stack = []

        for char in s:
            if char not in brackets:
                stack.append(char)
            elif len(stack) != 0 and brackets.get(char) != stack.pop() if stack else True:
                return False

        return len(stack) == 0
