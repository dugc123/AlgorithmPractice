/*
 * nums1 中数字 x 的 下一个更大元素 是指 x 在 nums2 中对应位置 右侧 的 第一个 比 x 大的元素。
给你两个没有重复元素的数组 nums1 和 nums2 ，下标从 0 开始计数，其中nums1 是 nums2 的子集。
对于每个 0 <= i < nums1.length ，找出满足 nums1[i] == nums2[j] 的下标 j，并且在 nums2 确定 nums2[j] 的下一个更大元素。
如果不存在下一个更大元素，那么本次查询的答案是 -1 。
返回一个长度为 nums1.length 的数组 ans 作为答案，满足 ans[i] 是如上所述的 下一个更大元素 。

    示例 1：
        输入：nums1 = [4,1,2], nums2 = [1,3,4,2].
        输出：[-1,3,-1]
        解释：nums1 中每个值的下一个更大元素如下所述：
        - 4 ，用加粗斜体标识，nums2 = [1,3,**4**,2]。不存在下一个更大元素，所以答案是 -1 。
        - 1 ，用加粗斜体标识，nums2 = [**1**,3,4,2]。下一个更大元素是 3 。
        - 2 ，用加粗斜体标识，nums2 = [1,3,4,**2**]。不存在下一个更大元素，所以答案是 -1 。
    示例 2：
        输入：nums1 = [2,4], nums2 = [1,2,3,4].
        输出：[3,-1]
        解释：nums1 中每个值的下一个更大元素如下所述：
        - 2 ，用加粗斜体标识，nums2 = [1,**2**,3,4]。下一个更大元素是 3 。
        - 4 ，用加粗斜体标识，nums2 = [1,2,3,**4**]。不存在下一个更大元素，所以答案是 -1 。
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let res = [];
    let stack = [];
    let map = new Map();
    for (let i = 0; i < nums2.length; i++) {
        while(stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
            let top = stack.pop();
            map.set(nums2[top], nums2[i]);
        }
        stack.push(i);
    }
    for (let j = 0; j < nums1.length; j++) {
        res[j] = map.get(nums1[j]) || -1;
    }
    return res;
};

let nums1 = [2,4], nums2 = [1,2,3,4];
console.log('nextGreaterElement', nextGreaterElement(nums1, nums2))