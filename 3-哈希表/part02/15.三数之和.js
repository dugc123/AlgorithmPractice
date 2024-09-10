/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

    注意： 答案中不可以包含重复的三元组。

    示例：

    给定数组 nums = [-1, 0, 1, 2, -1, -4]，

    满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (!nums || !nums.length) {
        return [];
    }
    nums.sort((a,b) => a - b);
    let res = [], len = nums.length;
    for (let i = 0; i < len; i++) {
        let left = i + 1, right = len - 1, iNum = nums[i];
        if (iNum > 0) {
            return res;
        }
        //给i去重
        if (iNum === nums[i - 1]) {
            continue;
        }
        while(left < right) {
            let lNum = nums[left], rNum = nums[right], sum = iNum + lNum + rNum;
            //如果三数之和小于0，left向右移动
            if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            } else {
                res.push([iNum, lNum, rNum]);
                //去重
                while(left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                while(left < right && nums[right] === nums[right - 1]) {
                    right--;
                }
                left++;
                right--;
            }
        }
    }
    return res;
};

let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));