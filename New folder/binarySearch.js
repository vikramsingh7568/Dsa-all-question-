// binary search in java script 
// first condition array sorted hona chiye 
// divide and conquer
// ascending 
// descending 
// log n




// let target = 15
// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// let  left = 0
// let  right = arr.length-1
//   function Binarysearch(){
//  while(left <= right){
//     let mid = left + parseInt((right-left)/2)
//     console.log(mid)
//      if(arr[mid] == target) return mid
//      if(arr[mid] > target) right = mid-1
//      if(arr[mid] < target) left =  mid+1
//  }
//  return -1
// }
// console.log(Binarysearch())





// binary search using recurison in java script
let arr = [3, 7, 11, 34, 78, 90, 96, 98]
let start = 0
let end = arr.length - 1
let target = 98
function BinarySearch(arr, start, end, target) {
  while (end >= start) {
    //mid = Math.floor((start+end)/2)
    mid = Math.floor(start + (end - start) / 2)
    console.log(mid)
    if (target == arr[mid]) {
      return mid
    }
    else if (target > arr[mid]) {
      return BinarySearch(arr, mid + 1, end, target)
    }
    else {
      return BinarySearch(arr, start, mid - 1, target)
    }
  }
   {
    return -1
  }
}
console.log(BinarySearch(arr, start, end, target))

// domain name or hosting for node js 
// node js 