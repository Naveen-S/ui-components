/**
 * https://leetcode.com/problems/jewels-and-stones/description/
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let jset = new Set();
  // Add Jewels to Set.
  for (let i = 0; i < jewels.length; i++) {
    jset.add(jewels[i]);
  }

  let count = 0;
  // Count
  for (let j = 0; j < stones.length; j++) {
    if (jset.has(stones[j])) {
      count++;
    }
  }
  return count;
};