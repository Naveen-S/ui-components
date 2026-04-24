/**
 * https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/
 * 
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  let hmap = {};
  // Create Hashmap
  for (let i = 0; i < s.length; i++) {
    if (hmap[s[i]]) {
      hmap[s[i]] += 1;
    } else {
      hmap[s[i]] = 1;
    }
  }

  // Find max vowel & max consonants
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let mapKeys = Object.keys(hmap);

  let maxVowel = 0;
  let maxConsonant = 0;

  for (let j = 0; j < mapKeys.length; j++) {
    let letter = mapKeys[j];
    if (vowels.includes(letter)) {
      let tempV = hmap[letter];
      if (tempV > maxVowel) {
        maxVowel = tempV;
      }
    } else {
      let tempC = hmap[letter];
      if (tempC > maxConsonant) {
        maxConsonant = tempC;
      }
    }
  }
  return maxVowel + maxConsonant;
};