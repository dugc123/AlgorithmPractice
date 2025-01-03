/*
 * 给定一个非负整数数组，你最初位于数组的第一个位置。

    数组中的每个元素代表你在该位置可以跳跃的最大长度。

    你的目标是使用最少的跳跃次数到达数组的最后一个位置。

    示例:
        输入: [2,3,1,1,4]
        输出: 2
        解释: 跳到最后一个位置的最小跳跃数是 2。从下标为 0 跳到下标为 1 的位置，跳  1  步，然后跳  3  步到达数组的最后一个位置。
        说明: 假设你总是可以到达数组的最后一个位置。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let curIndex = 0, // 当前能达到的最远位置索引
    nextIndex = 0, // 下一步能达到的最远位置索引
    res = 0; // 跳跃次数
    for (let i = 0; i < nums.length - 1; i++) { // 遍历数组，直到倒数第二个元素即可
        // 更新下一步能达到的最远位置索引
        nextIndex = Math.max(nextIndex, i + nums[i]);
        if (i === curIndex) {// 当前能达到的最远位置索引到达当前位置，则跳跃一次
            res++;
            curIndex = nextIndex;
        }
    }

    return res;
};

let nums = [2,3,1,1,4];
console.log('jump',jump(nums));