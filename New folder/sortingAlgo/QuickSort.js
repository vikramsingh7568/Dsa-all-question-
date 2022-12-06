

function Quicksort(arr,low,high){
    if(low < high){
        let pivot = partition(arr,low,high)
        Quicksort(arr,low,pivot-1);
        Quicksort(arr,pivot+1,high);
    }
}
let arr=[6,3,9,23,4,5,667,78,76,453,5,2,9]
let len = arr.length;

Quicksort(arr,0,len-1)
// print array 
console.log(arr)


function partition(arr,low,high){
    let  pivot = arr[high];
    let  i =  low-1;

    for(let j = low; j<high; j++){
        if(arr[j] < pivot){
            i++;

            // swapping 
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp 
        }
    }
       i++
        let temp = arr[i]
        arr[i] = pivot
        arr[high] = temp
        return i ; // pivot index 
}