/*
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

    返回 滑动窗口中的最大值 。

    示例 1：

    输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
    输出：[3,3,5,5,6,7]

    示例 2：
    输入：nums = [1], k = 1
    输出：[1]
 */
//超时
    /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (!nums || !nums.length || !k) {
        return nums;
    }

    let stack = [];
    for (let i = 0; i < nums.length; i++) {
        let tempArr = nums.slice(i, i + k);
        console.log('tempArr',tempArr)
        if (tempArr.length === k) {
            stack.push(Math.max(...tempArr))
        }
    }
    return stack;
};

let nums = [1,3,-1,-3,5,3,6,7], k = 3;
console.log(maxSlidingWindow(nums, k))