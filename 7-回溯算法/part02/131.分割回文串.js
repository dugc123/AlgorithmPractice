/*
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是回文串。返回 s 所有可能的分割方案。

    示例 1：
        输入：s = "aab"
        输出：[["a","a","b"],["aa","b"]]
    示例 2：
        输入：s = "a"
        输出：[["a"]]
    
    提示：
    1 <= s.length <= 16
    s 仅由小写英文字母组成
 */
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let res = [], path = [];
    const backtracking = (start) => {
        if (start === s.length) {
            res.push([...path]);
            return;
        }
        for (let i = start; i < s.length; i++) {
            if (isPalindrome(s, start, i)) {
                path.push(s.substring(start, i + 1));
                backtracking(i + 1);
                path.pop();
            }
        }
    };

    const isPalindrome = (s, left, right) => {
        while (left < right) {
            if (s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    };
    backtracking(0);
    return res;
};

let s = "aab";
console.log('partition', partition(s))