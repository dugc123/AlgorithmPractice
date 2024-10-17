/*
 * 字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。返回一个表示每个字符串片段的长度的列表。
    示例 1：
        输入：s = "ababcbacadefegdehijhklij"
        输出：[9,7,8]
        解释：
        划分结果为 "ababcbaca"、"defegde"、"hijhklij" 。
        每个字母最多出现在一个片段中。
        像 "ababcbacadefegde", "hijhklij" 这样的划分是错误的，因为划分的片段数较少。 
    示例 2：
        输入：s = "eccbbbbdec"
        输出：[10]
 */
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    if (!s) {
        return [0]
    }
    let res = [], hash = {}, left = 0, right = 0;
    for (let i = 0; i < s.length; i++) {
        hash[s[i]] = i;
    }
    for (let i = 0; i < s.length; i++) {
        right = Math.max(right, hash[s[i]]);
        if (right === i) {
            res.push(right - left + 1);
            left = i + 1;
        }
    }
    return res;
};

let s = "ababcbacadefegdehijhklij";
console.log('partitionLabels',partitionLabels(s))