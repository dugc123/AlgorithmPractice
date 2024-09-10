/**
 * 给定两个数组 nums1 和 nums2 ，返回它们的交集。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

    示例 1：
        输入：nums1 = [1,2,2,1], nums2 = [2,2]
        输出：[2]

    示例 2：
        输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
        输出：[9,4]
        解释：[4,9] 也是可通过的

    提示：
        1 <= nums1.length, nums2.length <= 1000
        0 <= nums1[i], nums2[i] <= 1000
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function (nums1, nums2) {
//     if (!nums1 || !nums1.length || !nums2 || !nums2.length) {
//         return [];
//     }
//     let arr = [];
//     for (let i = 0; i < nums1.length; i++) {
//         for (let j = 0; j < nums2.length; j++) {
//             if (nums1[i] === nums2[j]) {
//                 arr.push(nums1[i])
//             }
//         }
//     }
//     return [...new Set(arr)];
// };

var intersection = function (nums1, nums2) {
    if (!nums1 || !nums1.length || !nums2 || !nums2.length) {
        return [];
    }
    let resSet = new Set(), nums1Set = new Set(nums1);
    nums2.forEach(n => {
        if (nums1Set.has(n)) {
            resSet.add(n)
        }
    })
    return [...resSet];
};

let nums1 = [1,2,2,1], nums2 = [2,2];
console.log(intersection(nums1, nums2));