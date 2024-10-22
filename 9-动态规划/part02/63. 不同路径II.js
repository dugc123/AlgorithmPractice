/*
 * 给定一个 m x n 的整数数组 grid。一个机器人初始位于 左上角（即 grid[0][0]）。机器人尝试移动到 右下角（即 grid[m - 1][n - 1]）。机器人每次只能向下或者向右移动一步。
    网格中的障碍物和空位置分别用 1 和 0 来表示。机器人的移动路径中不能包含 任何 有障碍物的方格。
    返回机器人能够到达右下角的不同路径数量。
    测试用例保证答案小于等于 2 * 109。

    示例 1：
        输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
        输出：2
        解释：3x3 网格的正中间有一个障碍物。
        从左上角到右下角一共有 2 条不同的路径：
        1. 向右 -> 向右 -> 向下 -> 向下
        2. 向下 -> 向下 -> 向右 -> 向右

    示例 2：
        输入：obstacleGrid = [[0,1],[0,0]]
        输出：1
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    const dp = Array(m).fill().map(item => Array(n).fill(0));
    for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
        dp[i][0] = 1;
    }
    for (let j = 0; j < n && obstacleGrid[0][j] === 0; j++) {
        dp[0][j] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1];
        }
    }
    console.log('dp', dp)
    return dp[m - 1][n - 1];
};

let obstacleGrid = [[0,1],[0,0]];
console.log('uniquePathsWithObstacles', uniquePathsWithObstacles(obstacleGrid));