/**
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

    注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

    示例 1:
    输入: s = "anagram", t = "nagaram"
    输出: true

    示例 2:
    输入: s = "rat", t = "car"
    输出: false

    提示:
    1 <= s.length, t.length <= 5 * 104
    s 和 t 仅包含小写字母
 */

/**
* @param {string} s
* @param {string} t
* @return {boolean}
*/
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let map = new Map();
    for (const item of s) {
        map.set(item, map.get(item) ? map.get(item) + 1 : 1)
    }
    for (const item of t) {
        if (!map.get(item)) {
            return false;
        }
        map.set(item, map.get(item) - 1)
    }
    return true;
};

let  s = "anagrama", t = "nagaram";
console.log(isAnagram(s, t))