/**
 * 给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。

    如果剩余字符少于 k 个，则将剩余字符全部反转。
    如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。

    示例 1：
        输入：s = "abcdefg", k = 2
        输出："bacdfeg"

    示例 2：
        输入：s = "abcd", k = 2
        输出："bacd"

    提示：
        1 <= s.length <= 104
        s 仅由小写英文组成
        1 <= k <= 104
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    if (!s || !k) {
        return s;
    }
    let arr = s.split('');
    let len = arr.length;
    let temp;
    for(let i = 0; i < len; i += 2*k) {
        let l = i, r = i + k -1 > len - 1 ? len - 1 : i + k - 1;
        while(l < r) {
            temp = arr[r];
            arr[r] = arr[l];
            arr[l] = temp
            l++;
            r--;
        }
    }
    return arr.join("")
};

let s = "abcd", k = 2;
console.log(reverseStr(s, k));