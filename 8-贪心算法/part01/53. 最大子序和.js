/*
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
    示例:
        输入: [-2,1,-3,4,-1,2,1,-5,4]
        输出: 6
        解释: 连续子数组 [4,-1,2,1] 的和最大，为6。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maxValue = -Infinity;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        // 若当前局部和大于之前的最大结果，对结果进行更新
        maxValue = sum > maxValue ? sum : maxValue;
        // 若当前局部和为负，对结果无益。则从nums[i+1]开始应重新计算。
        sum = sum > 0 ? sum : 0;
    }
    return maxValue;
};

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log('maxSubArray', maxSubArray(nums));