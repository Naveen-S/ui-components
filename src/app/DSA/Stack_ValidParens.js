// https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  s = s.split('');
  let stack = [];
  let mapping = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  for (let i = 0; i < s.length; i++) {
    if (Object.keys(mapping).includes(s[i])) {
      stack.push(s[i]);
    } else {
      let popValue = stack.pop();
      if (mapping[popValue] !== s[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};