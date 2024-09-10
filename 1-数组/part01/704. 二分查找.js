/**
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。


示例 1:

输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
示例 2:

输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1


提示：

你可以假设 nums 中的所有元素是不重复的。
n 将在 [1, 10000]之间。
nums 的每个元素都将在 [-9999, 9999]之间。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//版本一）左闭右闭区间
// var search = function (nums, target) {
//     let mid, left = 0, right = nums.length - 1;
//     while(left <= right) {
            //mid = left + ((right - left) >> 1)
//         mid = Math.floor(left + ((right - left) / 2)); // 防止溢出 等同于(left + right)/2    
//         if (nums[mid] > target) {
//             right = mid - 1; // target 在左区间，所以[left, middle - 1]
//         } else if(nums[mid] < target) {
//             left = mid + 1; // target 在右区间，所以[middle + 1, right]
//         } else { // nums[middle] == target
//             return mid; // 数组中找到目标值，直接返回下标
//         }
//     }
//     return -1;
// };

// 版本二）左闭右开区间
var search = function (nums, target) { //[)
    let mid, left = 0, right = nums.length;
    while(left < right) {
        mid = Math.floor(left + ((right - left) / 2)); // 防止溢出 等同于(left + right)/2
        if (nums[mid] > target) {
            right = mid; // target 在左区间，所以[left, middle - 1]
        } else if(nums[mid] < target) {
            left = mid + 1; // target 在右区间，所以[middle + 1, right]
        } else { // nums[middle] == target
            return mid; // 数组中找到目标值，直接返回下标
        }
    }
    return -1;
};

const nums = [-1,0,3,5,9,12];

console.log('---', search(nums, 9))
