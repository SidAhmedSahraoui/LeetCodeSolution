/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findErrorNums = function(nums) {
    let d,m,r = 0
    for (let i = 0; i < nums.length; i++) {
            if(nums.find(el => el === i+1) === undefined) {
                     m = i+1;
                }
            for (let j = 0; j < nums.length; j++) {
                if(i !== j){
                     if(nums[j] === nums[i]){
                        d = nums[j];
                        break;
                    }
                }
                
            }
    }
    return [d,m]
};