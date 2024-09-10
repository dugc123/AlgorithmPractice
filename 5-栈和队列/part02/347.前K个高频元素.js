/*
 * 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。

    示例 1:
    输入: nums = [1,1,1,2,2,3], k = 2
    输出: [1,2]

    示例 2:
    输入: nums = [1], k = 1
    输出: [1]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    if (!nums || !nums.length || !k) {
        return nums;
    }
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }

    return [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0 ,k).map(ele => ele[0])
};
let nums = [1,1,1,2,2,3], k = 2
console.log(topKFrequent(nums, k))