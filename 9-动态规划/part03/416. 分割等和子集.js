/*
 * 给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
    注意: 每个数组中的元素不会超过 100 数组的大小不会超过 200

    示例 1:
    输入: [1, 5, 11, 5]
    输出: true
    解释: 数组可以分割成 [1, 5, 5] 和 [11].

    示例 2:
    输入: [1, 2, 3, 5]
    输出: false
    解释: 数组不能分割成两个元素和相等的子集.
 */
    var canPartition = function(nums) {
        let sum = nums.reduce((a, b) => a + b);
        if (sum % 2 !== 0) return false;
        let dp = new Array(sum / 2  + 1).fill(0);
        for (let i = 0; i < nums.length; i++) {
            for (let j = sum / 2 ; j >= nums[i]; j--) {
                dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
                if (dp[j] === sum / 2) {
                    return true;
                }
            }
        }
        console.log('dp',dp)
        return dp[sum / 2] === sum / 2;;
    }

    let nums = [1, 5, 11, 5];
    console.log(canPartition(nums));