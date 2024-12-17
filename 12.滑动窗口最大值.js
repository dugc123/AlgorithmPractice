/*
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
    返回 滑动窗口中的最大值 。

    示例 1：
        输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
        输出：[3,3,5,5,6,7]
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    if (!nums || !nums.length || !k) {
        return nums;
    }

    let queue = []; // 单调递减队列，存储的是数组下标
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        // 移除队列中不在当前窗口范围内的元素
        if (queue.length > 0 && queue[0] <= i - k) {
            queue.shift();
        }

        // 保持queue为单调递减，移除所有小于当前元素的索引
        while (queue.length > 0 && nums[i] > nums[queue[queue.length - 1]]) {
            queue.pop();
        }

        // 将当前元素的索引加入queue
        queue.push(i);

        // 当窗口达到所需大小时，将当前窗口最大值加入结果列表
        // 当 i 第一次等于 k - 1，就有了第一个完整的窗口 
        if (i >= k - 1) {
            result.push(nums[queue[0]]);
        }
    }

    return result;
};

let nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3;
console.log('maxSlidingWindow', maxSlidingWindow(nums, k))