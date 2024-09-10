/**
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。

    示例：

    输入：s = 7, nums = [2,3,1,2,4,3]
    输出：2
    解释：子数组 [4,3] 是该条件下的长度最小的子数组。
    提示：

    1 <= target <= 10^9
    1 <= nums.length <= 10^5
    1 <= nums[i] <= 10^5
 */

/**
* 暴力解法
*/
// var minSubArrayLen = function (target, nums) {
//     let subLen = 0, sum = 0, result = Infinity;
//     for (let i = 0; i < nums.length; i++) {
//         sum = 0;
//         for (let j = i; j < nums.length; j++) {
//             sum += nums[j];
//             if (sum >= target) {
//                 subLen = j - i + 1;
//                 result = result < subLen ? result : subLen;
//                 break;
//             }
//         }
//     }
//     return result === Infinity ? 0 : result;
// };

var minSubArrayLen = function (target, nums) {
    let subLen = 0, sum = 0, result = Infinity, left = 0, right = 0;
    while(right < nums.length) {
        sum += nums[right];
        while (sum >= target) {
            subLen = right - left + 1;
            result = Math.min(subLen, result);
            sum -= nums[left];
            left++;
        }

        right++;
    }
    
    return result === Infinity ? 0 : result;
};

const s = 7, nums = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(7, nums));