
let nums = [1,3,4,2,2]
function find(){
let map = new Map()
if(nums.length==0)return 0
for(let i = 0; i<nums.length; i++){
   if(!map.has(nums[i])){
     map.set(nums[i])
   }else{
     return nums[i]
   }
}
return 0
}
console.log(find())

//leet code problem 287. Find the Duplicate Number
// this is optimised approach in this aproach we are creating
var findDuplicate = function(nums) {
  let slow = 0;
      let fast = 0;
      do{
          slow = nums[slow];
          fast = nums[nums[fast]];
      }while(slow!=fast);
      let start = 0;

      while(start != slow){
          slow = nums[slow];
          start = nums[start];
      }
      return start;

  }

    // second approch in this approach we are creating an new array it means creating space 
  {
     let map = new Map()
   if(nums.length==0)return 0
   for(let i = 0; i<nums.length; i++){
      if(!map.has(nums[i])){
        map.set(nums[i])
      }else{
        return nums[i]
      }
   }
   return 0
};