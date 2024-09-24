/*
 * 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
    candidates 中的每个数字在每个组合中只能使用 一次 。
    注意：解集不能包含重复的组合。 

    示例 1:
        输入: candidates = [10,1,2,7,6,1,5], target = 8,
        输出:
            [
                [1,1,6],
                [1,2,5],
                [1,7],
                [2,6]
            ]
    示例 2:
        输入: candidates = [2,5,2,1,2], target = 5,
        输出:
            [
                [1,2,2],
                [5]
            ]
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let res = [], path = [];
    if (!candidates || !candidates.length) return res;
    candidates.sort((a, b) => a - b);
    // [1, 1, 2, 5, 6, 7, 10]
    const backtracking = (start, target) => {
        if (target < 0) return;
        if (!target) {
            res.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) continue;
            path.push(candidates[i]);
            backtracking(i + 1, target - candidates[i]);
            path.pop();
        }
    }
    backtracking(0, target);
    return res;
};

let candidates = [10, 1, 2, 7, 6, 1, 5], target = 8;
console.log('combinationSum2', combinationSum2(candidates, target))