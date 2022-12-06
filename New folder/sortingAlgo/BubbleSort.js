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

