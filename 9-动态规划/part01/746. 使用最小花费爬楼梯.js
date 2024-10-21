/*
 * 数组的每个下标作为一个阶梯，第 i 个阶梯对应着一个非负数的体力花费值 cost[i]（下标从 0 开始）。
    每当你爬上一个阶梯你都要花费对应的体力值，一旦支付了相应的体力值，你就可以选择向上爬一个阶梯或者爬两个阶梯。
    请你找出达到楼层顶部的最低花费。在开始时，你可以选择从下标为 0 或 1 的元素作为初始阶梯。

    示例 1：
        输入：cost = [10,15,20]
        输出：15
        解释：你将从下标为 1 的台阶开始。
        - 支付 15 ，向上爬两个台阶，到达楼梯顶部。
        总花费为 15 。
    示例 2：
        输入：cost = [1,100,1,1,1,100,1,1,100,1]
        输出：6
        解释：你将从下标为 0 的台阶开始。
        - 支付 1 ，向上爬两个台阶，到达下标为 2 的台阶。
        - 支付 1 ，向上爬两个台阶，到达下标为 4 的台阶。
        - 支付 1 ，向上爬两个台阶，到达下标为 6 的台阶。
        - 支付 1 ，向上爬一个台阶，到达下标为 7 的台阶。
        - 支付 1 ，向上爬两个台阶，到达下标为 9 的台阶。
        - 支付 1 ，向上爬一个台阶，到达楼梯顶部。
        总花费为 6 。
 */
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let dp = [0, 0];

    for (let i = 2; i <= cost.length; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
    }
    console.log('dp',dp)
    return dp[cost.length]
};

const cost =  [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log('minCostClimbingStairs',minCostClimbingStairs(cost));