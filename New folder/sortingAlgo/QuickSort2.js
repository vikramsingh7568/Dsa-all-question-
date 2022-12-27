
 function partition(arr,low,high){
    let pivot = arr[high]
    let i = low-1

      for(let j = low; j<high; j++){
         if(arr[j] < pivot){
            i++
              let temp = arr[i]
              arr[i] = arr[j]
              arr[j] =temp
         }
      }
      i++
      let temp = arr[i]
      arr[i] = pivot
      arr[high] = temp
      return i 
}


let arr = [45,76,-87,-65,34,67,67]
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