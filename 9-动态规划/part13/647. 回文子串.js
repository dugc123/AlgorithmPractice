/*
 * 给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。
    回文字符串 是正着读和倒过来读一样的字符串。
    子字符串 是字符串中的由连续字符组成的一个序列。

    示例 1：
        输入：s = "abc"
        输出：3
        解释：三个回文子串: "a", "b", "c"
    示例 2：
        输入：s = "aaa"
        输出：6
        解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
 */
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    //dp表示下标范围[i + 1, j - 1],是否是回文。
    let dp = Array(s.length).fill(false).map(ele => Array(s.length).fill(false));
    let res = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i; j < s.length; j++) {
            if (s[i] === s[j]) {
                if (j - i <= 2) {
                    dp[i][j] = true;
                    res++;
                } else if (dp[i + 1][j - 1]) {
                    res++;
                    dp[i][j] = true;
                }
            } else {
                dp[i][j] = false;
            }
        }
    }
    return res;
};

let s = "aaa";
console.log('countSubstrings',countSubstrings(s))