/*
 * 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。
一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。

    示例 1：
        输入：text1 = "abcde", text2 = "ace" 
        输出：3  
        解释：最长公共子序列是 "ace" ，它的长度为 3 。
    示例 2：
        输入：text1 = "abc", text2 = "abc"
        输出：3
        解释：最长公共子序列是 "abc" ，它的长度为 3 。
    示例 3：
        输入：text1 = "abc", text2 = "def"
        输出：0
        解释：两个字符串没有公共子序列，返回 0 。
 */
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    let len1 = text1.length, len2 = text2.length;
    let dp = Array(len1).fill(0).map(ele => Array(len2).fill(0));
    // 初始化
    for (let j = 0; j < len1; j++) {
        // 第一列
        if (text1[j] == text2[0]) {
            dp[j][0] = 1;
        } else if (j > 0) {
            dp[j][0] = Math.max(dp[j - 1][0], dp[j][0]);
        }
    }

    for (let i = 0; i < len2; i++) {
        // 第一行
        if (text1[0] == text2[i]) {
            dp[0][i] = 1;
        } else if (i > 0) {
            dp[0][i] = Math.max(dp[0][i - 1], dp[0][i]);
        }
    }
    for (let i = 1; i < len1; i++) {
        for (let j = 1; j < len2; j++) {
            if (text1[i] === text2[j]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }

    }
    console.log('dp', dp)
    return dp[len1 - 1][len2 - 1];
};

let text1 = "abcde", text2 = "ace";
console.log('longestCommonSubsequence', longestCommonSubsequence(text1, text2));