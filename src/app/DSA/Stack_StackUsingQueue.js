
// https://leetcode.com/problems/implement-stack-using-queues/

var MyStack = function () {
  this.q = [];
  // this.q2.= [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.q.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  for (let i = 0; i < this.q.length - 1; i++) {
    let item = this.q.shift();
    this.q.push(item);
  }
  return this.q.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.q[this.q.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return !this.q.length;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */



//  Using two queues
var MyStack = function() {
    this.q = [];
    this.q2= [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while(this.q.length > 1) {
        let item = this.q.shift();
        this.q2.push(item);
    }
    let popValue = this.q.shift(); 
    // exchange q & q2
    let temp = this.q;
    this.q = this.q2;
    this.q2 = temp;

    return popValue;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    while(this.q.length > 1) {
        let item = this.q.shift();
        this.q2.push(item);
    }

    let item = this.q.shift();
    this.q2.push(item);

    // exchange q & q2
    let temp = this.q;
    this.q = this.q2;
    this.q2 = temp;
    
    return item;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.q.length;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */