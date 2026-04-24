/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Solution 1
var merge = function (nums1, m, nums2, n) {
  let nums1Copy = nums1.slice(0, m);
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < m + n; i++) {
    if ((nums1Copy[p1] < nums2[p2] && p1 < m) || p2 >= n) {
      nums1[i] = nums1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
};

// Solution 2
var merge2 = function (nums1, m, nums2, n) {

  let p1 = m - 1;
  let p2 = n - 1;
  for (let i = m + n - 1; i > 0; i--) {
    if (p2 < 0) {
      break;
    }
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
};