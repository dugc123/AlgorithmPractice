/*
 * 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。
你可以对一个单词进行如下三种操作：
    插入一个字符
    删除一个字符
    替换一个字符

    示例 1：
        输入：word1 = "horse", word2 = "ros"
        输出：3
        解释：
        horse -> rorse (将 'h' 替换为 'r')
        rorse -> rose (删除 'r')
        rose -> ros (删除 'e')
    示例 2：
        输入：word1 = "intention", word2 = "execution"
        输出：5
        解释：
        intention -> inention (删除 't')
        inention -> enention (将 'i' 替换为 'e')
        enention -> exention (将 'n' 替换为 'x')
        exention -> exection (将 'n' 替换为 'c')
        exection -> execution (插入 'u')
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let word1Len = word1.length, word2Len = word2.length;
    let dp = Array(word1Len + 1).fill(0).map(ele => Array(word2Len + 1).fill(0));

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
                    dp[i - 1][j] + 1, // 删除word1一个字符
                    dp[i][j - 1] + 1, // word1插入一个字符，新插入的元素抵消掉word2中一个字符, 相当于word2少一个需要匹配的字符
                    dp[i - 1][j - 1] + 1 //替换一个字符
                )
            }
        }
    }
    return dp[word1Len][word2Len];
};

let word1 = "intention", word2 = "execution";
console.log('minDistance',minDistance(word1, word2));