/*
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

    示例 1：
        输入：nums = [1,1,2]
        输出：
        [[1,1,2],[1,2,1],[2,1,1]]

    示例 2：
        输入：nums = [1,2,3]
        输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let res = [];
    nums.sort((a, b) => a - b);
    const dfs = (path, used) => {
        if (path.length === nums.length) return res.push(path.slice());
        for (let i = 0; i < nums.length; i++) {
            // 如果当前数字已经使用过，跳过
            if (used[i]) continue;
            // 如果当前数字与前一个数字相同，并且前一个数字未被使用过，跳过
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
            path.push(nums[i]);
            used[i] = true;
            dfs(path, used);
            path.pop();
            used[i] = false;
        }
    }
    dfs([], []);
    return res;
};

let nums = [1,1,2];
console.log('permuteUnique',permuteUnique(nums))