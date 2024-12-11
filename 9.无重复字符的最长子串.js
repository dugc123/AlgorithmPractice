/*
 * 示例 1:
    输入: s = "abcabcbb"
    输出: 3 
    解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */
/**
 * 滑动窗口
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (!s) return 0;
    let left = 0, res = 0;
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        let curStr = s[i];
        if (map.has(curStr) && map.get(curStr) >= left) {
            // 如果字符已经出现过，并且索引在当前窗口内，则移动左边界
            left = map.get(curStr) + 1;
        }
        // 更新字符的索引
        map.set(curStr, i);
        // 更新最长不重复子串的长度
        res = Math.max(i - left + 1, res);
    }
    return res;
};

let s = "abcabcbb";
console.log('lengthOfLongestSubstring', lengthOfLongestSubstring(s))