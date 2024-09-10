/**
 * 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。

    如果可以，返回 true ；否则返回 false 。

    magazine 中的每个字符只能在 ransomNote 中使用一次。

    示例 1：
    输入：ransomNote = "a", magazine = "b"
    输出：false

    示例 2：
    输入：ransomNote = "aa", magazine = "ab"
    输出：false

    示例 3：
    输入：ransomNote = "aa", magazine = "aab"
    输出：true

    提示：

    1 <= ransomNote.length, magazine.length <= 105
    ransomNote 和 magazine 由小写英文字母组成
 */

/**
* @param {string} ransomNote
* @param {string} magazine
* @return {boolean}
*/
var canConstruct = function (ransomNote, magazine) {
    if (!ransomNote || !magazine) {
        return false;
    }
    for (const r of magazine) {
        for (const m of ransomNote) {
            if (r === m) {
                let inx = ransomNote.indexOf(r);
                if (inx > -1) {
                    ransomNote = ransomNote.substring(0, inx) + ransomNote.substring(inx + 1);
                    break;
                }
            }
        }
    }

    if (ransomNote.length === 0) {
        return true;
    }
    return false;
};

let ransomNote = "aa", magazine = "ab";
console.log(canConstruct(ransomNote, magazine))