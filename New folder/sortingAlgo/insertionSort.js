let arr = [4,56,5,34,43,54,65,7,8]
//insertion sort
for(let i = 1; i<arr.length; i++){
    let current = arr[i];
    let j = i-1;
    while(j>=0 && current < arr[j]){
      arr[j+1] = arr[j]
      j--
    }
    //element placement
    arr[j+1] = current;
}
console.log(arr)