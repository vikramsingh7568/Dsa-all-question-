
function FindDuplicate(){
    // time complexity is n log n because we are suing sort function in this program
let arr = [1,1,2,2,3,4,5]
let map = new Map()
for(let i = 0; i<arr.length; i++){
    let x = arr[i]
    if(map.has(x)){
        map.set(x,map.get(x)+1)
    }else{
        map.set(x,1)
    }
}
  let ans = []

  map.forEach((value,key) => {
   if(value > 1 ){
       ans.push(key)
     }}
  )

  if(ans.length == 0) {
    ans.push(-1)
  }
   ans.sort((a,b) => a-b)
   return ans
}
console.log(FindDuplicate())


function findDuplicate(){
    // time complexity is order of n linear
let arr = [2,2,4,5,5,3,4]
 let map = {}
 for(let i =0; i<arr.length; i++){
    let x = arr[i]
    if(map[x]){
        map[x]++
    }else{
        map[x]=1
    }
 }
 console.log(map)
 let arr2 = []
 let map2 = Object.entries(map)
 map2 = map2.flat(2)
 console.log(map2)
 for(let i = 0; i<map2.length; i++){
    if(i%2!=0){
       if(map2[i] >1){
          arr2.push(map2[i-1])   
       }
    }
 }
    if(arr2.length == 0){
         arr2.push(-1)
         return arr2
    } 
       return arr2
 console.log(arr2)
}
console.log(findDuplicate())