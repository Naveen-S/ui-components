/**
 * 
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let hmap = {};
  // Add into hashMap
  for (let i = 0; i < s.length; i++) {
    if (hmap[s[i]]) {
      hmap[s[i]] += 1;
    } else {
      hmap[s[i]] = 1;
    }
  }

  // Remove from HashMap
  for (let i = 0; i < t.length; i++) {
    if (hmap[t[i]]) {
      hmap[t[i]] -= 1;
    } else {
      return false;
    }
  }
  return true;
};