// let nums1 = [100,101,102]
// let nums2 =[4,5,6,7,8,9,10,11,12,13]
// let len = nums1.length+nums2.length;
// let arr3 = []
// let k = 0;
// let j = 0;
// for(let i  = 0; i<len; i++){
//   console.log(j,k)
//    if(nums1[k] != undefined){
//      if(nums1[k] < nums2[j]){
//        arr3.push(nums1[k])
//        k++
//      } 
//    }else{
//      arr3.push(nums2[j])
//      j++
//    }
//     if(nums2[j] != undefined){
//       if(nums2[j] < nums1[k]){
//       arr3.push(nums2[j])
//       j++
//       }
//     }else{
//       arr3.push(nums1[k])
//       k++
//     }
// }
// console.log(arr3)


// some modification ke bad me 
let nums1 = [100,101,102,103,104,105,106,1000,3000]
let nums2 =[4,5,6,7,8,9,10,11,12,13,400,700]
let len = nums1.length+nums2.length;
let arr3 = []
let k = 0;
let j = 0;
for(let i  = 0; i<len; i++){
   if(nums1[k] != undefined){
     if(nums1[k] < nums2[j]){
       arr3.push(nums1[k])
       k++
     } 
   }else{
     if(nums2.length != j){
     arr3.push(nums2[j])
     j++
     }
   }
    if(nums2[j] != undefined){
      if(nums2[j] < nums1[k]){
      arr3.push(nums2[j])
      j++
      }
    }else {
     if(nums1.length != k){
        arr3.push(nums1[k])
       k++
     } 
    }
}
console.log(arr3)



// function of merge two array 

const merge2Arr = function (Arr1, Arr2) {
    let lengthOfArr1 = Arr1.length;
    let lengthOfArr2 = Arr2.length;
    let arr = new Array(lengthOfArr1 + lengthOfArr2);
  
    let i1 = 0,
      i2 = 0,
      f = 0;
    while (i1 < lengthOfArr1 && i2 < lengthOfArr2) {
      if (Arr1[i1] < Arr2[i2]) {
        arr[f] = Arr1[i1];
        i1++;
      } else {
        arr[f] = Arr2[i2];
        i2++;
      }
      f++;
    }
    while (i1 < lengthOfArr1) {
      arr[f] = Arr1[i1];
      f++;
      i1++;
    }
    while (i2 < lengthOfArr2) {
      arr[f] = Arr2[i2];
      f++;
      i2++;
    }
    console.log(arr);
  };
  merge2Arr([100,101,102,103,104,105,106],[4,5,6,7,8,9,10,11,12,13,400])
  
//   let nums1 = [100,101,102,103,104,105,106]
// let nums2 =[4,5,6,7,8,9,10,11,12,13]