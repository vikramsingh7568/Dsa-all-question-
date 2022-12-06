
let arr = [18,18,18,2,2,2,1,1,1]
let map = new Map()
let n = arr.length
       for(let i = 0 ; i<n; i++){
           let ar = arr[i]
           if(map.has(ar)){
            // console.log("hello")
               map.set(ar,map.get(ar)+1)
           }else{
               map.set(ar,1)
           }
       }
       let result = 0
       let max = -Infinity
       for(let i of map){
         max = Math.max(max,i[1])
       }
       let arr2 = []
       for(let j of map){
         if(max == j[1]) arr2.push(j[0])
       }
       let min = Infinity
       for(let i = 0; i<arr2.length; i++){
          min = Math.min(min,arr2[i])
       }
        console.log(min)//return min   
     