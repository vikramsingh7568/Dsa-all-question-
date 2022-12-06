
function solution(b) {
    let min= Infinity
    let max= 0
    for(let i=0;i<b.length;i++){
        // storing maximum value
        if(b[i]>max){
          max =b[i]
        }
        // storing minimum value
        if(b[i]<min){
        min=b[i]
       }
    }
     console.log(max,min)
     return max-min
 }
console.log(solution([10,4,205,32,607,605,1]))