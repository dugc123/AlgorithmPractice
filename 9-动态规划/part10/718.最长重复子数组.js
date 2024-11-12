/*
 * 给两个整数数组 nums1 和 nums2 ，返回 两个数组中 公共的 、长度最长的子数组的长度 。

    示例 1：
        输入：nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
        输出：3
        解释：长度最长的公共子数组是 [3,2,1] 。
    示例 2：
        输入：nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
        输出：5
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
    let len1 = nums1.length, len2 = nums2.length,res = 0;
    //dp[i][j] ：以下标i - 1为结尾的A，和以下标j - 1为结尾的B，最长重复子数组长度为dp[i][j]
    let dp = Array(len1 + 1).fill(0).map(n => Array(len2 + 1).fill(0));
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            }
            res = Math.max(res, dp[i][j])
        }
    }
    return res;
};
let nums1 = [1, 2, 3, 2, 1], nums2 = [3, 2, 1, 4, 7];
console.log('findLength', findLength(nums1, nums2));