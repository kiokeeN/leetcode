// https://leetcode.com/problems/median-of-two-sorted-arrays/

const findMedianSortedArrays = (nums1, nums2) => {
  const newArr = [...nums1, ...nums2];
  const sortedArr = newArr.sort((a, b) => a - b);

  const medianForOdd = sortedArr[Math.floor(sortedArr.length / 2)];
  const medianForEvenn = (sortedArr[Math.floor(sortedArr.length / 2) - 1] + medianForOdd) / 2
  return sortedArr.length % 2 !== 0 ? medianForOdd : medianForEvenn
};