// // making function for merge sort technique in java script to sort array lement in n log n time complexity


// function mergeSort(arr,start,end){

//    if(start >= end){
//      return
//    }
//    var mid =start+ parseInt((end-start)/2);
//    mergeSort(arr, start,mid)
//    mergeSort(arr, mid+1, end)
//    merge(arr,start,mid,end)

// }

// let arr = [10,8,9,6,5,343,56,87]
// let len = arr.length
// mergeSort(arr,0,len-1)

// console.log(arr)

// function merge(arr,start,mid,end){
//      //let x = end - start+1
//      let mergeArray = new Array()
     
//      let index1 = start;
//      let index2 = mid+1;
//      let mergeArrayTrack = 0;

//     while(index1 <= mid && index2 <= end){
//         if(arr[index1] <= arr[index2]){
//             mergeArray[mergeArrayTrack] = arr[index1];
//             mergeArrayTrack++;
//             index1++;
//         }else{
//             mergeArray[mergeArrayTrack] = arr[index2];
//             mergeArrayTrack++;
//             index2++;
//         }
//     }

//       while(index1 <= mid){
//         mergeArray[mergeArrayTrack] = arr[index1];
//         mergeArrayTrack++;
//         index1++;
//       }

//       while(index2 <= end){
//         mergeArray[mergeArrayTrack] = arr[index2];
//         mergeArrayTrack++;
//         index2++
//       }
//        let j = start;
//       for(let i = 0; i<mergeArray.length; i++){
//           arr[j] = mergeArray[i]
//           j++
//       }

// }
// merge sort in java script 
// divde and conquor  
// N*n 
// n log n
let arr = [10,8,12,11,100,409,343,56,87]
let len = arr.length-1

function MergeSort(arr, start , end ){
   let mid = start+parseInt((end-start)/2)
   
   if(start >= end){
    return // simple return 
   }
   MergeSort(arr,start,mid)
   MergeSort(arr,mid+1,end)
   merge(arr,start,mid,end)      
}

MergeSort(arr,0, len)
 console.log(arr) 


function  merge(arr,start,mid,end){
    let mergeArray =  [] //new Array()

    let index1 = start;
    let index2 = mid+1;
    let mergeArrayindex = 0;

    while(index1 <= mid && index2 <= end ){
        if(arr[index1] <= arr[index2]){
            mergeArray[mergeArrayindex] = arr[index1]
            mergeArrayindex++;
            index1++;
        }else{
            mergeArray[mergeArrayindex] = arr[index2];
            mergeArrayindex++;
            index2++;
        }
    }

    while(index1 <= mid){
        mergeArray[mergeArrayindex] = arr[index1]
        mergeArrayindex++;
        index1++;
    }

    while(index2 <= end){
        mergeArray[mergeArrayindex] = arr[index2];
        mergeArrayindex++;
        index2++;
    }

      let j = start; 
      for(let i = 0 ; i<mergeArray.length; i++){
           arr[j] = mergeArray[i]
           j++
      }
}






