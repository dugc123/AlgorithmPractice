/*
 * 示例 1：
        输入：nums = [100,4,200,1,3,2]
        输出：4
        解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
    示例 2：
        输入：nums = [0,3,7,2,5,8,4,6,0,1]
        输出：9
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
    if (nums.length === 0) return 0;

    let numSet = new Set(nums);
    let res = 0;

    for (let num of numSet) {
        // 只有当num是序列的开始时才进行处理
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // 检查连续序列
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }
            res = Math.max(res, currentStreak);
        }
    }

    return res;
}

// 示例
let nums = [100, 4, 200, 1, 3, 2];
console.log('longestConsecutive', longestConsecutive(nums));