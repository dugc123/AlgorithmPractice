/**
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

示例 1：

输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]
排序后，数组变为 [0,1,9,16,100]
示例 2：

输入：nums = [-7,-3,2,3,11]
输出：[4,9,9,49,121]

提示：

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums 已按 非递减顺序 排序
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortedSquares = function (nums) {
//     return nums.map(num => num * num).sort((a,b) => a - b);
// };

var sortedSquares = function (nums) {
    let len = nums.length;
    let i = 0, j = len - 1, k = len - 1, res = new Array(len).fill(0);
    while(i <= j) {
        let left = nums[i] * nums[i];
        let right = nums[j] * nums[j];
        if (right >= left) {
            res[k--] = right;
            j--;
        } else {
            res[k--] = left;
            i++;
        }
    }
    return res;
};

const nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums));