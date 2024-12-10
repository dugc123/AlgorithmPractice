/*
 * 示例 1：
    输入：nums = [2,7,11,15], target = 9
    输出：[0,1]
    解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
    示例 2：

    输入：nums = [3,2,4], target = 6
    输出：[1,2]
    示例 3：

    输入：nums = [3,3], target = 6
    输出：[0,1]
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let curNum = nums[i]; //当前值
        let targetNum = target - curNum; //目标值
        let inx = map[targetNum];
        if(inx !== undefined){
            return [inx, i]
        } else {
            map[curNum] = i;
        }
    }
};
let nums = [3,2,4], target = 6;
console.log('twoSum',twoSum(nums, target))