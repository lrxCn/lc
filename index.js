/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort();

    const middleIndex = ~~(nums.length / 2);
    return nums[middleIndex] === nums.slice(0).pop() || nums[middleIndex] === nums[0]? nums[middleIndex] : -1
};


console.log(majorityElement([-1,1,1,1,2,1]))