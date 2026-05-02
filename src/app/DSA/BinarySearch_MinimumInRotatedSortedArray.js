// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

/* 
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (a) {
  let l = 0;
  let r = a.length - 1;


  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    // Sorted and not rotated case. 
    if (a[l] <= a[r]) {
      return a[l];
    }
    // Inflection point
    if (a[m + 1] < a[m]) {
      return a[m + 1];
    }
    // Right unsorted
    if (a[m] > a[r]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
};