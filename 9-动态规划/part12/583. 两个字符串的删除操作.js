/*
 * 给定两个单词 word1 和 word2 ，返回使得 word1 和  word2 相同所需的最小步数。
每步 可以删除任意一个字符串中的一个字符。

    示例 1：
        输入: word1 = "sea", word2 = "eat"
        输出: 2
        解释: 第一步将 "sea" 变为 "ea" ，第二步将 "eat "变为 "ea"
    示例  2:
        输入：word1 = "leetcode", word2 = "etco"
        输出：4
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let word1Len = word1.length, word2Len = word2.length;
    let dp = new Array(word1Len + 1).fill(0).map(ele => Array(word2Len + 1).fill(0));

    for (let i = 0; i <= word1Len; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j <= word2Len; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= word1Len; i++) {
        for (let j = 1; j <= word2Len; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1,
                    dp[i][j - 1] + 1,
                    dp[i - 1][j - 1] + 2
                )
            }
        }
    }

    return dp[word1Len][word2Len];
};

let word1 = "a", word2 = "b";
console.log('minDistance', minDistance(word1, word2));