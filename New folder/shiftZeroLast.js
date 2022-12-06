let nums = [0,0,2,3,4,56,0,9,8,0,0,2,3,4,6,7,0,0];
let n = nums.length-1
// iski time complexity order of n he jo ki best he linear he 
 function pushZerosToEnd(nums,n){
      let lastNonZeroIndex = 0;
      
      for(let i= 0; i<nums.length; i++){
          if(nums[i] != 0){
              nums[lastNonZeroIndex] = nums[i];
              lastNonZeroIndex++;
          }
      }
        for(let i = lastNonZeroIndex; i<=n; i++){
            nums[i] = 0;
        }
         //console.log(lastNonZeroIndex,nums)
        return nums
 }
 console.log(pushZerosToEnd(nums,n))


// time complexity n*n jayda he iski to 

 function pushZeroToEnd(){
    let arr = [2,3,4,56,0,9,8,0,0,2,3,4,6,7,0,0]
    let n = nums.length-1
for(let i = 0; i<arr.length; i++){
  for(let j = i+1; j<arr.length; j++){
    if(arr[i] == 0){
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }else{
      break
    }
  }
}
   console.log(arr)
 }
 pushZeroToEnd()