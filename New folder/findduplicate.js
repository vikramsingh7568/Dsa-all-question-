//leet code problem 287. Find the Duplicate Number
// this is optimised approach in this aproach we are creating
let nums = [1,2,3,4,3,5,6,,7,3,8,9,3]
var findDuplicate = function(nums) {
    let slow = 0;
        let fast = 0;
        do{
            slow = nums[slow];
            fast = nums[nums[fast]];
            // console.log(fast)
        }while(slow!=fast);
        let start = 0;
  
        while(start != slow){
            slow = nums[slow];
           // console.log(slow)
            start = nums[start];
            console.log(slow)
        }
        return start;
  
    }
    console.log(findDuplicate(nums))