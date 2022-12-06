//capitalize first element in an array using for loop

let s= ""
 let arr =  ["abc" , "pqr" , "xyz" , "jkl"] // 2d aarray    
 let arr2 = []
 let len = arr.length
for(let i = 0; i<len; i++){
 let s = arr[i][0].toUpperCase() + arr[0].slice(1) 
  arr2.push(s) 
}
console.log(arr2)


//second method using recursion method

 //let arr =  ["abc" , "pqr" , "xyz" , "jkl"]     
function capitalisefn(arr){
  let result = []
  if(arr.length == 0) return []
  //pull out arr[0] and capitalisefn 1st char 0f arr[0] 
let s = arr[0][0].toUpperCase() +arr[0].slice(1)

result.push(s) 
return result.concat(capitalisefn(arr.slice(1)))
}
 console.log(capitalisefn(arr))



//second question reverse each string in a given manner example game = emag

 function reverse(str){
  if(str.length == 0) return ""
  return reverse(str.slice(1))+str[0]
 }
 
// reverese all the element in there place 
let str = "hello this is me ok"
//str = str.split("")
function revSentWords(sent){
  let words = sent.split(" ")
  for(let i = 0; i<words.length; i++){
    words[i] = reverse(words[i])
  }
  words = words.join(" ")
  return words
}
 console.log(revSentWords(str))


// object map diffrece
// object keys are stirngs "name" , "1" both are stirng 
// map me keys is anything numbers, array, object etc
// map ka size/length easy to get
// object me hamesa order maintan nahi hota he 
//object ka koi order nahi he unorder me save hota he 
//while map me order of keys fixed hota he 
//map me order of kesy manintan hota he to easy to iterat hota he
//

//question 3 print the number of duplicate in the array 

// //create hash map 
let arr3  = [23,3,2,1,3,1]
function duplicates(arr3){
    let frequencies = new Map()
    for(let i=0; i< arr3.length; i++){
        if(frequencies.get(arr3[i]) == undefined)  frequencies.set(arr3[i],1)
        else frequencies.set(arr3[i], frequencies.get(arr3[i])+1)
    }
    console.log(frequencies)

let res = []
for(let pairs of frequencies){
    if(pairs[1] > 1) res.push(pairs[0])
}
console.log(res)
}
duplicates(arr3)