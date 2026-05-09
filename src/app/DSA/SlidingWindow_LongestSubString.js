// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
/* 
Given a string s, find the length of the longest substring without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let i = 0;
  let max = 0;
  let map = {};

  for (let j = 0; j < s.length; j++) {
    if (map[s[j]] != undefined && map[s[j]] >= i) {
      i = map[s[j]] + 1;
    }
    max = Math.max(max, j - i + 1);
    map[s[j]] = j;
    // console.log(map);
  }
  return max;
};