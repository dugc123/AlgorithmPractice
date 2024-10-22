/*
 * 给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。

    示例 1:
        输入: 2
        输出: 1
        解释: 2 = 1 + 1, 1 × 1 = 1。

    示例 2:
        输入: 10
        输出: 36
        解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
        说明: 你可以假设 n 不小于 2 且不大于 58。
 */
function integerBreak(n) {
    /**
        dp[i]: i对应的最大乘积
        dp[2]: 1;
        ...
        dp[i]: max(
            1 * dp[i - 1], 1 * (i - 1),
            2 * dp[i - 2], 2 * (i - 2),
            ..., (i - 2) * dp[2], (i - 2) * 2
        );
     */
    const dp = new Array(n + 1).fill(0);
    dp[2] = 1;
    for (let i = 3; i <= n; i++) {
        for (let j = 1; j <= i / 2; j++) {
            dp[i] = Math.max(dp[i], j * dp[i - j], j * (i - j));
        }
    }
    return dp[n];
};

let n = 10;
console.log('integerBreak',integerBreak(n))