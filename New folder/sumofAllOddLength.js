
// leet code 
//1588. Sum of All Odd Length Subarrays
let  arr = [1,4,2,5,3]
let sum= 0;
for(let i =0; i<arr.length; i++){
        for(let j = i+1; j<=arr.length; j++){
          let slit = arr.slice(i,j)
        
          if(slit.length%2==1){
              console.log(slit)
            for(let i = 0; i<slit.length; i++){
              sum+=slit[i]
            }
          }
    }
  }
  console.log(sum)
