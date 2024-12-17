/**
 * 示例 1：
    输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
    输出：6
    解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    // 一，动态规划
    //dp表示以第 i 个数结尾的「连续子数组的最大和」
    // let dp = Array(nums.length).fill(0);
    // dp[0] = nums[0];
    // let max = dp[0];
    // for (let i = 1; i < nums.length; i++) {
    //     dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    //     max = Math.max(dp[i], max);
    // }
    // console.log('dp',dp)
    // return max;

    let res = nums[0];
    let sum = 0;

    for (const item of nums) {
        if (sum > 0) {
            sum += item;
        } else {
            sum = item;
        }
        res = Math.max(res, sum);
    }
    return res;
};

let nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log('maxSubArray',maxSubArray(nums));