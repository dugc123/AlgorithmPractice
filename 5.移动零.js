/*
 *  示例 1:
        输入: nums = [0,1,0,3,12]
        输出: [1,3,12,0,0]
    示例 2:
        输入: nums = [0]
        输出: [0]
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let len = nums.length;
    if (len === 0 || len === 1) {
        return nums;
    }
    // j 前存放都是不等于 0 的元素
    // let j = 0;
    // for (let i = 0; i < len; i++) {
    //     if (nums[i] !== 0) {
    //         let t = nums[i];
    //         nums[i] = nums[j];
    //         nums[j++] = t;
    //     }
    // }

    let nonZeroCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroCount++] = nums[i];
        }
    }

    // 从非零元素的末尾开始，将零填充到数组的剩余位置
    while (nonZeroCount < nums.length) {
        nums[nonZeroCount++] = 0;
    }
    return nums;
};

let nums = [0, 1, 0, 3, 12];
console.log('moveZeroes', moveZeroes(nums));