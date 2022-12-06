// {
// //   //with recursion peak element 
// let arr = [1,2,3,4,5,6,71,8,9,10,9]
// let n = arr.length

// function PeakElement(arr,left,right,n){
//   let mid = Math.floor(right+left/2)
//   if((mid== 0  ||  arr[mid-1] <= arr[mid]) && (mid == n-1 || arr[mid+1] <= arr[mid])){
//   return mid

//   } else if(mid > 0 &&  arr[mid-1] >arr[mid]){
//     return PeakElement(arr,left,mid-1,n)
//   }else{
//     return PeakElement(arr,left,mid+1,n)
//   }

// }
// console.log(PeakElement(arr,0,n-1,n))
// }



// //without recursion peak element 

//let arr = [1,22,3,6,5,6,1,8]
// let arr =[0,7,6,5,7,3,2,1]
          
// let left = 0;
// let right = arr.length-1;
// function PeakElement(arr){
//   while(left <= right){
//   let mid = Math.floor(right+left/2)
//     if((mid== 0 && arr[mid+1] <= arr[mid]) || (mid == right && arr[mid-1] <= arr[mid]) ){
//   return mid
//   } else if(mid > 0 &&  arr[mid-1] > arr[mid]){
//     right = mid-1
//     console.log(right,mid)
//   }else{
//     left = mid+1
//   }
//   }
// }
// console.log(PeakElement(arr))



//let v = 
// let  t = [..."12345678"].map(Number)
// console.log(t)

// quick sort 
// selection sort
// insertion sort

// peak element 
// peak elemtn in array
// har array ke andr ke andr hota he 
let arr = [10,1,2,6,4,1] 
// indexNu 0,,1,2,3,4,5         
let left = 0;
let right = arr.length-1;
function PeakElement(){
while(left <= right){
    let mid = Math.floor(right+left/2)
    if((mid == 0 && arr[mid+1] <= arr[mid])  || (mid == right && arr[mid-1] <= arr[mid])){
        return mid
    }else if(mid > 0 && arr[mid-1] > arr[mid]){
        right = mid-1
    }else{
        left = mid+1
    }
}
}
console.log(PeakElement())
   
