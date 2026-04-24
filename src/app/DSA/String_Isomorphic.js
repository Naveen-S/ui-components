/**
 * https://leetcode.com/problems/isomorphic-strings/
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let st = {};
  let ts = {};
  for (let i = 0; i < s.length; i++) {
    // st mapping
    if (st[s[i]]) {
      if (st[s[i]] !== t[i]) {
        return false;
      }
    }
    else {
      st[s[i]] = t[i];
    }
    
    // ts mapping
    if (ts[t[i]]) {
      if (ts[t[i]] !== s[i]) {
        return false;
      }
    }
    else {
      ts[t[i]] = s[i];
    }
  }
  return true;
};