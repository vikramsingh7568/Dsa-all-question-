//time complexity is n*n
function CountPairs(){
    let arr = [1, 5, 7, 1]
    let n = arr.length
    let k = 6
let count = 0;
for(let i =0; i<n; i++){
 for(let j = i+1; j<n; j++){
     if(arr[i] + arr[j] == k){
         count++
     }
}
}
  console.log(count)
}
CountPairs()

//