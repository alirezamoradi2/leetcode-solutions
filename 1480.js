/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {

    let numsNew = new Array(nums.length);
    numsNew[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        numsNew[i] = numsNew[i - 1] + nums[i]
    }
    return numsNew;
};
