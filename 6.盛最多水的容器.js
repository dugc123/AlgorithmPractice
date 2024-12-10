/*
 *  输入：[1,8,6,2,5,4,8,3,7]
    输出：49 
    解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0, right = height.length - 1, res = 0;
    while (left < right) {
        let curArea = Math.min(height[left], height[right]) * (right - left);
        res = Math.max(curArea, res);
        // 如果左边的高度小于右边的高度，移动左边的指针
        if (height[left] < height[right]) {
            left++;
        } else {
            // 否则移动右边的指针
            right--;
        }
    }

    return res;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log('maxArea', maxArea(height));