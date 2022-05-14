var MinStack = function() {
  this.stack = []
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return Math.min(...this.stack)
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// 2022/05/14 done
// Runtime: 325 ms, faster than 15.22% of JavaScript online submissions for Min Stack.
// Memory Usage: 49.3 MB, less than 85.67% of JavaScript online submissions for Min Stack.
