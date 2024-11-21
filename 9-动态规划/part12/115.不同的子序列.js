/*
 * 给你两个字符串 s 和 t ，统计并返回在 s 的 子序列 中 t 出现的个数，结果需要对 10^9 + 7 取模。

    示例 1：
        输入：s = "rabbbit", t = "rabbit"
        输出：3
        解释：
        如下所示, 有 3 种可以从 s 中得到 "rabbit" 的方案。
        rabb b it
        rab b bit
        ra b bbit
    示例 2：
        输入：s = "babgbag", t = "bag"
        输出：5
        解释：
        如下所示, 有 5 种可以从 s 中得到 "bag" 的方案。 
        ba b g bag
        ba bgba g
        b abgb ag
        ba b gb ag
        babg bag
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    let sl = s.length, tl = t.length;
    if (sl < tl) return 0;
    //dp在s[0, i-1]的子序列中，有多少个t[0, j - 1]的匹配，由于是完全匹配，实际匹配到的s的子序列结尾必须以t[j - 1]为结尾
    let dp = new Array(sl + 1).fill(0).map(ele => Array(tl + 1).fill(0))
    for (let i = 0; i <= sl; i++) {
        dp[i][0] = 1;
    }
    for (let i = 1; i <= sl; i++) {
        for (let j = 1; j <= tl; j++) {
            // 当此元素相等时, 则求s的前面有多少个"ba" + 前面有多少个完整"bag"
            // 若此元素不相等, 则求s的前面有多少个"bag"
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    console.log('dp', dp)
    return dp[sl][tl];
};

let s = "babgbag", t = "bag";
console.log('numDistinct', numDistinct(s, t))