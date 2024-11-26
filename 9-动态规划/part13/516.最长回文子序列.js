/*
 * 给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。
子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。

    示例 1：
        输入：s = "bbbab"
        输出：4
        解释：一个可能的最长回文子序列为 "bbbb" 。
    示例 2：
        输入：s = "cbbd"
        输出：2
        解释：一个可能的最长回文子序列为 "bb" 。
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
    let sLength = s.length;
    let dp = Array(sLength).fill(0).map(ele => Array(sLength).fill(0));
    for (let i = 0; i < sLength; i++) {
        dp[i][i] = 1;
    }

    for (let i = sLength - 1; i >= 0; i--) {
        for (let j = i + 1; j < sLength; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(
                    dp[i + 1][j],
                    dp[i][j - 1]
                )
            }
        }
    }
    console.log('dp',dp);
    return dp[0][sLength - 1];
};

let s = "bbbab";
console.log('longestPalindromeSubseq', longestPalindromeSubseq(s))