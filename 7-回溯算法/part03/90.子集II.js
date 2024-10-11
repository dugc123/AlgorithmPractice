/*
 * 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的 子集（幂集）。

    解集不能包含重复的子集。返回的解集中，子集可以按任意顺序排列。

    示例 1：
        输入：nums = [1,2,2]
        输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]

    示例 2：
        输入：nums = [0]
        输出：[[],[0]]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let res = [], path = [];
    let sortNums = nums.sort((a, b) => a - b);
    function backtracing(startIndex, sortNums) {
        res.push([...path])
        if (startIndex > nums.length - 1) {
            return
        }
        for (let i = startIndex; i < nums.length; i++) {
            if (i > startIndex && nums[i] === nums[i - 1]) {
                continue
            }
            path.push(nums[i])
            backtracing(i + 1, sortNums)
            path.pop()
        }
    }
    backtracing(0, sortNums)
    return res;
};

let nums = [1, 2, 2];
console.log('subsetsWithDup', subsetsWithDup(nums))