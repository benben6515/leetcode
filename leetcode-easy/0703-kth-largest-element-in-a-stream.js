/**
 * @param {number} k
 * @param {number[]} nums
 */
/**
 * @param {number} val
 * @return {number}
 */
class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.pq = new MinPriorityQueue();

    for(let num of nums) {
        this.add(num)
    }
  }
  add(val) {
    if (this.pq.size() < this.k){
        this.pq.enqueue(val);
        return this.pq.front().element
    }
    let min = this.pq.front().element;
    if (val > min){
        this.pq.dequeue();
        this.pq.enqueue(val);
    }
    return this.pq.front().element;
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

// 2022/05/30 done.
// Runtime: 231 ms, faster than 61.13% of JavaScript online submissions for Kth Largest Element in a Stream.
// Memory Usage: 51.7 MB, less than 54.10% of JavaScript online submissions for Kth Largest Element in a Stream.
