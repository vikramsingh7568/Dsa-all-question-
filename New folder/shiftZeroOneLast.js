
function ShifrZeros(){
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
}
//ShifrZeros()


function ShiftZerosFirst(){
  let arr= [1,1,1,1,0,0,1,1,0,1,1,1,0]
  let arr2 = []
  let index  = 0 
  let last = arr.length-1
  for(let i =0; i<arr.length; i++){
      if(arr[i] == 0){
        arr2[index++] = 0
      }
      if(arr[i] == 1){
        arr2[last--] = 1
      }
   }
   console.log(arr2,arr2.length,arr.length)

}
ShiftZerosFirst()
