/**
 *  输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
    输出：6
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    //一、单调栈解法
    // let stack = [], res = 0;
    // stack.push(0);
    // for (let i = 1; i < height.length; i++) {
    //     while (stack.length && height[i] > height[stack[stack.length - 1]]) {
    //         let mid = stack[stack.length - 1];
    //         stack.pop();
    //         if (stack.length) {
    //             let h = Math.min(height[stack[stack.length - 1]], height[i]) - height[mid];
    //             let w = (i - stack[stack.length - 1]) - 1;
    //             res += h * w;
    //         }
    //     }
    //     stack.push(i);
    // }
    // return res;

    //二、双指针解法
    let left = 0, right = height.length - 1;//记录左右指针的位置
    let res = 0;
    let leftMax = 0, rightMax = 0; //记录左右指针之前的最大高度
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] < leftMax) {
                res += leftMax - height[left];
            } else {
                leftMax = height[left];
            }
            left++;
        } else {
            if (height[right] < rightMax) {
                res += rightMax - height[right];
            } else {
                rightMax = height[right];
            }
            right--;
        }
    }
    return res;

};

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log('trap', trap(height));