/*
 *  示例 1：
        输入：nums = [1,2,0]
        输出：3
        解释：范围 [1,2] 中的数字都在数组中。
    示例 2：
        输入：nums = [3,4,-1,1]
        输出：2
        解释：1 在数组中，但 2 没有。
    示例 3：
        输入：nums = [7,8,9,11,12]
        输出：1
        解释：最小的正数 1 没有出现。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    // 把每个正数放到它应该在的位置，即nums[i] = i + 1
    for (let i = 0; i < nums.length; i++) {
        while(nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
             // 交换元素到正确的位置
            const correctIndex = nums[i] - 1;
            [nums[correctIndex], nums[i]] = [nums[i], nums[correctIndex]];
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    return nums.length + 1;
};

let nums = [3,4,-1,1];
console.log('firstMissingPositive',firstMissingPositive(nums));