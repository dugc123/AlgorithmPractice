/**
 * 示例 1:
        输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
        输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
    示例 2:
        输入: strs = [""]
        输出: [[""]]
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = {};
    for (let i = 0; i < strs.length; i++) {
        let curStr = strs[i];
        let array = Array.from(curStr);
        array.sort();
        let key = array.toString();
        let list = map[key] ? map[key] : [];
        list.push(curStr);
        map[key] = list;
    }
    return Object.values(map);
};
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log('groupAnagrams',groupAnagrams(strs));