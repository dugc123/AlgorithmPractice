/*
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

    给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母

    示例 1：
        输入：digits = "23"
        输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]

    示例 2：
        输入：digits = ""
        输出：[]

    示例 3：
        输入：digits = "2"
        输出：["a","b","c"]
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let arr = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    let res = [], path = [];
    let len = digits.length;
    if (len == 0) return res;
    if (len == 1) return arr[digits].split('');
    const backtracking = (n, len, a) => {
        if (path.length == len) {
            res.push(path.join(''))
            return;
        }
        for(const v of arr[n[a]]) {
            path.push(v);
            backtracking(n, len, a + 1);
            path.pop();
        }
    }
    backtracking(digits, len, 0);
    return res;
};

let digits = "23";
console.log('letterCombinations', letterCombinations(digits))