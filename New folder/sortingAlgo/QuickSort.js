


// function partition(arr,low,high){
//     let  pivot = arr[high];
//     let  i =  low-1;

//     for(let j = low; j<high; j++){
//        /// console.log(pivot)
//         if(arr[j] < pivot){
//             i++;
//             // swapping 
//             let temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp 
//         }
//     }
//        i++
//         let temp = arr[i]
//         arr[i] = pivot
//         arr[high] = temp
//         return i ; // pivot index 
// }
// function Quicksort(arr,low,high){
//     if(low <= high){
//         let pivot = partition(arr,low,high)
//       //  console.log(pivot)
//         Quicksort(arr,low,pivot-1);
//         Quicksort(arr,pivot+1,high);
//     }
// }
// let arr=[6,3,-76,453,5]
// let len = arr.length;

// Quicksort(arr,0,len-1)
// // print array 
// console.log(arr)










function partition(arr,low,high){
     let pivot = arr[high]
     let i = low-1

        for(let j= low; j<high; j++){
            if(arr[j]< pivot){
                i++
                // swapping
               // let temp = arr[i]
                //arr[i] = arr[j]
                //arr[j] = temp

            }
        }
        i++
        let temp = arr[i]
        arr[i] = arr[high]
        arr[high] = temp
        return i 
}


let arr  = [6,7,-9,99,97,95]
let low = 0
let high = arr.length-1
function Quicksort(arr,low,high){
       if(low<high){
         let pivotIndex = partition(arr,low,high)
         Quicksort(arr,low,pivotIndex-1)
         Quicksort(arr,pivotIndex+1,high)
       }
}
Quicksort(arr,low,high)
console.log(arr)



