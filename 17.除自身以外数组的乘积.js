/*
 *  输入: nums = [1,2,3,4]
    输出: [24,12,8,6]
 */
/**
 * 通过两次遍历数组来分别计算每个元素左侧所有元素的乘积和右侧所有元素的乘积
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let len = nums.length;
    let res = Array(len).fill(1);
    let left = 1;

    for (let i = 0; i < nums.length; i++) {
        res[i] = left;
        left *= nums[i];
    }
    let right = 1;
    for (let i = nums.length - 1; i >= 0 ; i--) {
        res[i] *= right;
        right *= nums[i];
    }
    return res;
};

let nums = [2, 3, 4, 5];
console.log('productExceptSelf', productExceptSelf(nums));
