# Valid Palindrome
# https://leetcode.com/problems/valid-palindrome/

import re


class Solution:
    def isPalindrome(self, s: str) -> bool:
        cleaned_str = re.sub(r'[^a-zA-Z0-9]', '', s.lower())

        for i in range(len(cleaned_str) // 2):
            if cleaned_str[i] != cleaned_str[-1 - i]:
                return False

        return True
