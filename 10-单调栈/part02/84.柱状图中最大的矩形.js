/**
 * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
    求在该柱状图中，能够勾勒出来的矩形的最大面积。

    示例 1:
        输入：heights = [2,1,5,6,2,3]
        输出：10
        解释：最大的矩形为图中红色区域，面积为 10
    示例 2：
        输入： heights = [2,4]
        输出： 4
 */
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    //一、暴力解法
    // let sum = 0;
    // for (let i = 0; i < heights.length; i++) {
    //     let left = i;
    //     let right = i;
    //     for (; left >= 0; left--) {
    //         if (heights[left] < heights[i]) break;
    //     }
    //     for (; right < heights.length; right++) {
    //         if (heights[right] < heights[i]) break;
    //     }
    //     console.log('right', right, 'left', left)
    //     let w = right - left - 1;
    //     let h = heights[i];
    //     sum = Math.max(sum, w * h);
    // }
    // return sum;

    //二、单调栈
    let st = [], sum = 0;
    heights = [0, ...heights, 0];
    for (let i = 0; i < heights.length; i++) {
        while (st.length && heights[i] < heights[st[st.length - 1]]) {
            const stackTopIndex = st.pop();// 栈顶元素出栈，并保存栈顶bar的索引
            let w = i - st[st.length -1] - 1;
            let h = heights[stackTopIndex]
            // 计算面积，并取最大面积
            sum = Math.max(sum, w * h);
        }
        st.push(i);
    };
    return sum;
}
let heights = [2, 1, 5, 6, 2, 3];

console.log('largestRectangleArea', largestRectangleArea(heights))