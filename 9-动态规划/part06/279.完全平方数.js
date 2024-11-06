/*
 * 给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。
    完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

    示例 1：
        输入：n = 12
        输出：3 
        解释：12 = 4 + 4 + 4

    示例 2：
        输入：n = 13
        输出：2
        解释：13 = 4 + 9
 */
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    let dp = Array(n + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i ** 2 <= n; i++) {
        let val = i ** 2;
        for (let j = val; j <= n; j++) {
            dp[j] = Math.min(dp[j], dp[j - val] + 1)
        }
    }
    console.log('dp',dp)
    return dp[n] === Infinity ? 0 : dp[n];
};

let n = 12;
console.log('numSquares', numSquares(n))
