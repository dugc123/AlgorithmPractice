/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.cache.has(key)) return -1; // 如果缓存中没有该键，返回-1

    // 由于我们访问了这个键，所以需要把它移到最后（表示最近使用）
    let value = this.cache.get(key);
    this.cache.delete(key); // 删除旧的入口
    this.cache.set(key, value); // 再重新设置，这样就移动到了Map的最后
    return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.cache.has(key)) {
        // 如果已经存在，先删除旧的入口
        this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
        // 如果没有达到容量限制，则直接添加；如果达到了，则需要移除最老的键值对（即Map的第一个）
        let oldestKey = this.cache.keys().next().value; // 获取第一个键
        this.cache.delete(oldestKey); // 删除它
    }

    // 最后将新的键值对加入到缓存中
    this.cache.set(key, value);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */