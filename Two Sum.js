// https://leetcode.com/problems/two-sum/

const twoSum = (nums, target) => {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] + nums[j] === target) {
        return [j, i];
      }
    }
  }
};