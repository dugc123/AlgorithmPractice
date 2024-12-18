/*
 *  示例 1：
        输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
        输出：[[1,6],[8,10],[15,18]]
        解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
    示例 2：
        输入：intervals = [[1,4],[4,5]]
        输出：[[1,5]]
        解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (!intervals || intervals.length === 0) {
        return [];
    }
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [[...intervals[0]]];
    for (let i = 0; i < intervals.length; i++) {
        let cur = intervals[i];
        let last = res[res.length - 1];
        if (cur[0] <= last[1]) {
            last[1] = Math.max(last[1], cur[1])
        } else {
            res.push(cur);
        }
    }
    return res;
};

let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log('merge', merge(intervals))