// binary search using recurison in java script
let arr = [3,7,11,34,78,90,96,98], start = 0,end = arr.length-1,num=34
function BinarySearch(arr, start, end, num){
    if(end >= start ) {
    //mid = Math.floor((start+end)/2)
  mid  = Math.floor(start + (end - start) /2)
    if(num == arr[mid]) {return mid}
    else if(num > arr[mid]){ return BinarySearch(arr, mid+1 , end , num) }
    else { return BinarySearch(arr,start,mid-1,num)}
}
else {
    return -1}
}
console.log(BinarySearch(arr,start,end,num))

//bubble short in java script check elemetn adjacent to each other and swaps them 
// bubble sort is simplest and also most asked algorith
//time complexity  worst case n*n average n*n best n hoga 
let arr2 = [233,12,6,89,34,56,987] 
function BubbleSort(arr){
  for(let i = 0; i<arr.length; i++){
    let swap = false
    console.log("hii")
      for(let j= 0; j< arr.length-1; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
            swap = true
        }        
      }   
      if(swap == false) break 
  } 
  console.log(arr)    
}
BubbleSort(arr2)



// merger sort technique
{ // we are making this block so we can make same name varible in this file 
// time complexity best verse averge same he n log time hi run hlta he
let arr = [233,12,6,3,89,34,56], start = 0 , end = arr.length-1
function MergeSort(arr){
   if(start >= end) return 
    let mid  = Math.round((start+end)/2)
    MergeSort(arr,start,mid)
    MergeSort(arr,mid+1,end)
   
    Merge(arr,start,mid,end)
  }

   function Merge(arr, start,mid, end){
       let arr1 = []
       let arr2 = []
       //logic 
       let lenArr1 = mid - start+1
       let lenArr2 = end - (mid+1) +1

       // copy the data in the respective arrays
        for(let i = 0; i< lenArr1; i++){
           arr1[i] = arr[start+i]
        }

        for(let j = 0; j< lenArr1; j++){
          arr2[j] = arr[mid+1+i]
       }

         let a = 0 // index of arr1
         let b = 0 // index of arr2
 
         let c = start // index of arr

          while(a < lenArr1 && b < lenArr2){
            if(arr1[a] <= arr2[b]){
              arr[c] = arr1[a]
             }
          }
      }

}

// abhinav sir ki class ka solutin idhar he 

// given an un sorted array you have to find the maximum sum pair in that array in order of n time complexity

{
    let arr  = [1,2,3,4,567,87]
   let max = 0
    for(let i = 0 ; i<arr.length; i++){
        max = Math.max(max,arr[i])
    }
       console.log(max)
    for(let j = 0; j<arr.length; j++){
       if(max === arr[j]) arr[j] = 0
    }
    console.log(arr)
   let max2 = 0
    for(let i = 0 ; i<arr.length; i++){
      max2 = Math.max(max2,arr[i])
   }
    console.log(max+max2)

}

// second approach for this progarm is here
{
   let arr = [2,3,4,,5,56,7,56,34,54,78]

    let sum = 0
    let max = 0
    let smax = 0
  
       for(let i =0; i<arr.length; i++){
          if(arr[i] > max){
            smax = max
            max = arr[i]
         // }else if(arr[i] > smax){
           //    smax = arr[i]
          }
       }
   console.log(max, smax)


}






