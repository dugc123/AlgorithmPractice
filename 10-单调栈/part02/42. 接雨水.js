/*
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
    示例 2：
        输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
        输出：6
        解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
    示例 2：
        输入：height = [4,2,0,3,2,5]
        输出：9
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let sum = 0;
    const len = height.length;
    //一、暴力解法
    // for (let i = 0; i < len; i++) {
    //     if (i === 0 || i === len - 1) {
    //         continue;
    //     }
    //     let rHeight = height[i];
    //     let lHeight = height[i];
    //     for (let r = i + 1; r < len; r++) {
    //         if (height[r] > rHeight) {
    //             rHeight = height[r];
    //         }
    //     }

    //     for (let l = i - 1; l >= 0; l--) {
    //         if (height[l] > lHeight) {
    //             lHeight = height[l];
    //         }
    //     }
    //     let h = Math.min(lHeight, rHeight) - height[i];
    //     if (h > 0) {
    //         sum += h;
    //     }
    // }
    // return sum;
    //二、双指针解法
    // let maxLeft = Array(len).fill(0);
    // let maxRight = Array(len).fill(0);

    // maxLeft[0] = height[0];
    // for (let i = 1; i < len; i++) {
    //     maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);
    // }

    // maxRight[len - 1] = height[len - 1];
    // for (let i = len - 2; i > 0; i--) {
    //     maxRight[i] = Math.max(maxRight[i + 1], height[i]);
    // }
    // for (let i = 0; i < len; i++) {
    //     let h = Math.min(maxLeft[i], maxRight[i]) - height[i];
    //     if (h > 0) {
    //         sum += h;
    //     }
    // }

    //三、单调栈解法--横向求解
    if (len <= 2) return 0;
    const st = [];// 存着下标，计算的时候用下标对应的柱子高度
    st.push(0);
    for (let i = 1; i < len; i++) {
        while (st.length !== 0 && height[i] > height[st[st.length - 1]]) { // 注意这里是while
            let mid = st[st.length - 1];
            st.pop();
            if (st.length !== 0) {
                let h = Math.min(height[st[st.length - 1]], height[i]) - height[mid];
                let w = i - st[st.length - 1] - 1; //注意减一，只求中间宽度----右边柱子下标 - 左边柱子下标 
                sum += h * w;
            }
        }
        st.push(i);
    }
    return sum;
};
let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log('trap', trap(height))