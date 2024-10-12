/*
 * 给你一个整数数组 nums，找出并返回所有该数组中不同的递增子序列，递增子序列中 至少有两个元素 。你可以按 任意顺序 返回答案。
    数组中可能含有重复元素，如出现两个整数相等，也可以视作递增序列的一种特殊情况。


    示例 1：
        输入：nums = [4,6,7,7]
        输出：[[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]

    示例 2：
        输入：nums = [4,4,3,2,1]
        输出：[[4,4]]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
    const resArr = [];

    function backTracking(nums, startIndex, route) {
        let length = nums.length;
        if (route.length >= 2) {
            resArr.push(route.slice());
        }
        const usedSet = new Set();
        for (let i = startIndex; i < length; i++) {
            if (nums[i] < route[route.length - 1] || usedSet.has(nums[i])) continue;
            usedSet.add(nums[i]);
            route.push(nums[i]);
            backTracking(nums, i + 1, route);
            route.pop();
        }
    }
    backTracking(nums, 0, []);
    return resArr;
};
let nums = [4, 6, 7, 7]
console.log('findSubsequences', findSubsequences(nums))