/**
 * 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

示例 1：
1 -> 2 -> 3
          |
8 -> 9    4
|         |
7 <- 6 <- 5

输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]

示例 2：

输入：n = 1
输出：[[1]]

提示：

1 <= n <= 20

 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let startX = 0, startY = 0; //起始位置
    let loop = Math.floor(n / 2);   // 旋转圈数
    let mid = Math.floor(n / 2);    // 中间位置
    let offset = 1;    // 控制每一层填充元素个数
    let count = 1;     // 更新填充数字
    let res = new Array(n).fill(0).map(() => new Array(n).fill(0));
    while (loop--) {
        let row = startX, col = startY;
        //上行从左到右(左闭右开)
        for (; col < n - offset; col++) {
            res[row][col] = count++;
        }
        //右列从上到下(上闭右开)
        for (; row < n - offset; row++) {
            res[row][col] = count++;
        }
        //下行从左到右(左开右闭)
        for (; col > startY; col--) {
            res[row][col] = count++;
        }

        //左列从下到上(上开下闭)
        for (; row > startX; row--) {
            res[row][col] = count++;
        }
        //更新起始位置
        startX++;
        startY++;
        //更新offset
        offset += 1;
    }
    // 如果n为奇数的话，需要单独给矩阵最中间的位置赋值
    if (n % 2 !== 0) {
        res[mid][mid] = count;
    }
    return res;
};

console.log(generateMatrix(4))