/**
 * https://leetcode.com/problems/group-anagrams/
 * 
 * @param {string[]} strs
 * @return {string[][]}
 */
// O(n * nlogm)
var groupAnagrams = function (strs) {
  let sortedStrs = [];
  let hmap = {};
  for (let i = 0; i < strs.length; i++) {
    sortedStrs.push(strs[i].split('').sort().join(''));
  }

  for (let j = 0; j < sortedStrs.length; j++) {
    if (!hmap[sortedStrs[j]]) {
      hmap[sortedStrs[j]] = [strs[j]];
    } else {
      hmap[sortedStrs[j]].push(strs[j]);
    }
  }
  return Object.values(hmap);
};

// Using hashed keys (Optimized) - O(n^2)
var groupAnagrams = function (strs) {
  let hmap = {};
  for (let i = 0; i < strs.length; i++) {
    let s = strs[i];
    let freqArr = Array(26).fill(0);

    // Populate freq array
    for (let j = 0; j < s.length; j++) {
      let index = s[j].charCodeAt() - 'a'.charCodeAt();
      freqArr[index]++;
    }

    let key = '';
    // Create key using populated freq array
    for (let k = 0; k < 26; k++) {
      key = key + String.fromCharCode(k) + freqArr[k];
    }

    if (hmap[key]) {
      hmap[key].push(s);
    } else {
      hmap[key] = [s];
    }
  }

  return [...Object.values(hmap)];
};