/*
 *  输入：nums = [-1,0,1,2,-1,-4]
    输出：[[-1,-1,2],[-1,0,1]]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let len = nums.length, res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < len; i++) {
        let curNum = nums[i], left = i + 1, right = len - 1;

        if (curNum > 0) {
            return res;
        }
        if (curNum === nums[i - 1]) {
            continue;
        }

        while(left < right) {
            let sum = curNum + nums[left] + nums[right];
            if (sum < 0) {
                left++;
            } else if(sum > 0) {
                right--;
            } else {
                res.push([curNum, nums[left], nums[right]]);
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
console.log('threeSum', threeSum(nums));