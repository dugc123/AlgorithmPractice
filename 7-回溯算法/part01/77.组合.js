/*
 * 示例 1：
        输入：n = 4, k = 2
        输出：
        [
            [2,4],
            [3,4],
            [2,3],
            [1,2],
            [1,3],
            [1,4],
        ]

    示例 2：
        输入：n = 1, k = 1
        输出：[[1]]
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    // 回溯法
    let result = [],
        path = [];
    let backtracking = (_n, _k, startIndex) => {
        if (path.length === k) {
            result.push([...path]);
            return;
        }

        for (let i = startIndex; i <= n - (_k - path.length) + 1; i++) {
            path.push(i);
            backtracking(_n, _k, i + 1);
            path.pop();
        }
    }
    backtracking(n, k, 1);
    return result;
};
let n = 4, k = 2;
console.log('combine', combine(n, k))
