# Valid Parentheses

Given a string s containing just the characters &#39;(&#39;, &#39;)&#39;, &#39;{&#39;, &#39;}&#39;, &#39;[&#39; and &#39;]&#39;, determine if the input string is valid.

An input string is valid if:


	Open brackets must be closed by the same type of brackets.
	Open brackets must be closed in the correct order.
	Every close bracket has a corresponding open bracket of the same type.


&nbsp;
Example 1:


Input: s = &quot;()&quot;

Output: true


Example 2:


Input: s = &quot;()[]{}&quot;

Output: true


Example 3:


Input: s = &quot;(]&quot;

Output: false


Example 4:


Input: s = &quot;([])&quot;

Output: true


Example 5:


Input: s = &quot;([)]&quot;

Output: false


&nbsp;
Constraints:


	1 &lt;= s.length &lt;= 104
	s consists of parentheses only &#39;()[]{}&#39;.


