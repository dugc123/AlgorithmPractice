/*
 * 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
进阶：
如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？

    示例 1：
        输入：s = "abc", t = "ahbgdc"
        输出：true
    示例 2：
        输入：s = "axc", t = "ahbgdc"
        输出：false
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    //双指针
    // let sLen = s.length, tLen = t.length;
    // let i = 0, j = 0;
    // while(i < sLen && j < tLen) {
    //     if (s[i] === t[j]) {
    //         i++;
    //     }
    //     j++;
    // }

    // return i == sLen;

    //动态规划
    let sLen = s.length, tLen = t.length;
    //dp[i][j] 表示以下标i-1为结尾的字符串s，和以下标j-1为结尾的字符串t，相同子序列的长度为dp[i][j]。
    let dp = Array(sLen + 1).fill(0).map(ele => Array(tLen + 1).fill(0));

    for (let i = 1; i <= sLen; i++) {
        for (let j = 1; j <= tLen; j++) {
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                //删除t中的元素
                dp[i][j] = dp[i][j - 1];
            }
        }
    }
    console.log('dp',dp)
    return dp[sLen][tLen] === sLen ? true : false;
};

let s = "abc", t = "ahbgdc";
console.log('isSubsequence',isSubsequence(s,t))