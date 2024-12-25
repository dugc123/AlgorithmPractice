/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    if (nums.length <= 1) {
        return nums[0];
    }
    let map = new Map();
    for (const item of nums) {
        map.set(item, (map.get(item) || 0) + 1);
        if (map.get(item) > nums.length / 2) {
            return item;
        }
    }
};

let nums = [2, 2, 1, 1, 1, 2, 2];
console.log('majorityElement', majorityElement(nums));