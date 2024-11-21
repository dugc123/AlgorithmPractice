function addLargeNumbers(num1, num2) {
    let carry = 0; // 进位
    let result = ""; // 结果字符串

    // 获取最长的字符串长度
    const maxLength = Math.max(num1.length, num2.length);

    // 补零，确保两个数字字符串长度相同
    num1 = num1.padStart(maxLength, "0");
    num2 = num2.padStart(maxLength, "0");

    // 从最低位开始逐位相加
    for (let i = maxLength - 1; i >= 0; i--) {
        let sum = parseInt(num1[i], 10) + parseInt(num2[i], 10) + carry;
        carry = Math.floor(sum / 10); // 更新进位
        result = (sum % 10) + result; // 添加到结果字符串
    }

    // 如果最后还有进位，需要添加到结果字符串开头
    if (carry > 0) {
        result = carry + result;
    }

    return result;
}

let num1 = '8991', num2 = '89132';
console.log('addLargeNumbers',addLargeNumbers(num1, num2));