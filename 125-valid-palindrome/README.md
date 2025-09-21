# Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

&nbsp;
Example 1:


Input: s = &quot;A man, a plan, a canal: Panama&quot;
Output: true
Explanation: &quot;amanaplanacanalpanama&quot; is a palindrome.


Example 2:


Input: s = &quot;race a car&quot;
Output: false
Explanation: &quot;raceacar&quot; is not a palindrome.


Example 3:


Input: s = &quot; &quot;
Output: true
Explanation: s is an empty string &quot;&quot; after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.


&nbsp;
Constraints:


	1 &lt;= s.length &lt;= 2 * 105
	s consists only of printable ASCII characters.


