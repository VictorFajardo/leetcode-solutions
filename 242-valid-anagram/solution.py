# Valid Anagram
# https://leetcode.com/problems/valid-anagram/

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        freq = {}

        for char in s:
            if char not in freq:
                freq[char] = 0
            freq[char] += 1

        for char in t:
            if char not in freq:
                return False
            freq[char] -= 1
            if not freq[char]:
                del freq[char]

        return len(freq) == 0
