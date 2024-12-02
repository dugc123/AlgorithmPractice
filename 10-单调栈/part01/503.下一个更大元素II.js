/*
 * 给定一个循环数组 nums （ nums[nums.length - 1] 的下一个元素是 nums[0] ），返回 nums 中每个元素的 下一个更大元素 。
数字 x 的 下一个更大的元素 是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。
如果不存在，则输出 -1 。
    示例 1:
        输入: nums = [1,2,1]
        输出: [2,-1,2]
        解释: 第一个 1 的下一个更大的数是 2；
        数字 2 找不到下一个更大的数； 
        第二个 1 的下一个最大的数需要循环搜索，结果也是 2。
    示例 2:
        输入: nums = [1,2,3,4,3]
        输出: [2,3,4,-1,4]
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let stack = [];
    let res = Array(nums.length).fill(-1);
    //拼接两个数组，然后再过滤掉超出的部分
    // let cacheNums = nums.concat(nums);
    // for (let i = 0; i < cacheNums.length; i++) {
    //     while(stack.length && cacheNums[i] > cacheNums[stack[stack.length - 1]]){
    //         let top = stack.pop();
    //         res[top] = cacheNums[i];
    //     }
    //     stack.push(i);
    // }
    // return res.slice(0, nums.length);
    let len = nums.length;
    for (let i = 0; i < len * 2; i++) {
        while (stack.length && nums[i % len] > nums[stack[stack.length - 1]]) {
            let top = stack.pop();
            res[top] = nums[i % len];
        }
        stack.push(i % len);
    }
    return res;
};

let nums = [1, 2, 3, 4, 3];
console.log('nextGreaterElements', nextGreaterElements(nums));