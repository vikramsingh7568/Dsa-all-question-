let arr = [1,1,1,0,0,0,0,1,1,1,1]

let left = 0
let right = arr.length-1

while(left < right){
  if(arr[left] ==0){
    left++
    continue
  } 
  if(arr[right] == 1){
    right--
    continue
  }
  
  //swap krenge 
   arr[left]  = arr[left] + arr[right]
   arr[right] = arr[left] - arr[right]
   arr[left]  = arr[left] - arr[right]
    left++;
    right--
  
}
console.log(arr)