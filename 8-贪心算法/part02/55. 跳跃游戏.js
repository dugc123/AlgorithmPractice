/*
 * 给定一个非负整数数组，你最初位于数组的第一个位置。

    数组中的每个元素代表你在该位置可以跳跃的最大长度。

    判断你是否能够到达最后一个位置。

    示例1:
        输入: [2,3,1,1,4]
        输出: true
        解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。

    示例2:
        输入: [3,2,1,0,4]
        输出: false
        解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ，所以你永远不可能到达最后一个位置。
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    if (nums.length === 1) return true;
    let cover = 0; // 覆盖范围
    for (let i = 0; i <= cover; i++) {
        cover = Math.max(cover, i + nums[i]); // 更新覆盖范围
        if (cover >= nums.length - 1) { // 如果覆盖范围已经超过最后一个位置，则返回true; 若没有，继续循环。
            return true;
        }
    }

    return false;
};

let nums = [2,3,1,1,0];
console.log('canJump',canJump(nums));