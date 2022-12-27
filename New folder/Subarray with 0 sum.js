class Solution {
    //Function to check whether there is a subarray present with 0-sum or not.
    subArrayExists(arr, n){
    
   //   let arr = [4,2,-3,1,6]
//function checkSum(arr) {

    let curSum = 0;
    let map = {}
    for (let i = 0; i < arr.length; i++) {
        curSum += arr[i];
        if (curSum == 0) return true
        if (map[curSum]) return true

        map[curSum] = 1;
    }
    return false;
}
  
}