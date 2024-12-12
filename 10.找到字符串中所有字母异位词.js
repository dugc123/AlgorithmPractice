/*
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
    示例 1:
        输入: s = "cbaebabacd", p = "abc"
        输出: [0,6]
        解释:
        起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
        起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
    示例 2:
        输入: s = "abab", p = "ab"
        输出: [0,1,2]
        解释:
        起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
        起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
        起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let pCount = {}; // 存储p中每个字符出现的次数
    let sCount = {}; // 存储s中当前窗口内每个字符出现的次数
    let result = []; // 存储所有异位词的起始索引
    let pLen = p.length; // p的长度
    let sLen = s.length; // s的长度

    // 初始化p中每个字符的计数
    for (let i = 0; i < pLen; i++) {
        pCount[p[i]] = (pCount[p[i]] || 0) + 1;
    }

    // 初始化s中第一个窗口的计数
    for (let i = 0; i < pLen; i++) {
        sCount[s[i]] = (sCount[s[i]] || 0) + 1;
    }

    // 如果s的窗口与p相等，添加到结果中
    if (isMatch(sCount, pCount)) {
        result.push(0);
    }
    // 滑动窗口
    for (let i = pLen; i < sLen; i++) {
        // 移除窗口左侧字符的计数
        sCount[s[i - pLen]]--; // 减少离开窗口的字符计数
        if (sCount[s[i - pLen]] === 0) {
            delete sCount[s[i - pLen]]; // 如果计数为0，从计数中删除该字符
        }

        // 增加窗口右侧字符的计数
        sCount[s[i]] = (sCount[s[i]] || 0) + 1;

        // 如果当前窗口与p相等，添加到结果中
        if (isMatch(sCount, pCount)) {
            result.push(i - pLen + 1);
        }
    }

    return result;
};
function isMatch(sCount, pCount) {
    // 检查两个计数是否相等
    for (let char in pCount) {
        if (sCount[char] !== pCount[char]) {
            return false;
        }
    }
    return true;
}
let s = "cbaebabacd", p = "abc";
console.log('findAnagrams', findAnagrams(s, p))