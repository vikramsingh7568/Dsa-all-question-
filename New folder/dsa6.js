// filter out duplicate elemetns in the array and filter out only unique elements give unique elements

let arr = [11,1,1,1,1,2,2,2,3,4,5,6,7,53]
let map =  new Map()

for(let i = 0; i<arr.length; i++){
    if(map.get(arr[i]) == undefined) map.set(arr[i],1)
    else map.set(arr[i], map.get(arr[i])+1)
}
let arr2  = []
for(let j  of map){
    if(j[1] == 1)arr2.push(j[0])
}
console.log(arr2)


//find unique pairs of elements(inside an array ) whose sum is equal to a target k
let arr3  = [7,2,4,6,9,11,3,2,1]
let k = 5
let map2 = new Map()
for(let i= 0; i<arr3.length; i++){
    if(map2.get(arr3[i]) == undefined) map2.set(arr3[i],1)
  else map2.set(arr3[i], map2.get(arr3[i])+1)
}
let find;
let tr = []
for(let j of map2){
    find = k-j[0]
    if(map2.has(find)) tr.push(j[0])
}
console.log(tr)

/// take an input and check whether the input is an integer or not
let inp = 89
function checkIn(inp){
  if(Number.isInteger(inp)) return true
    else return false
 }
console.log(checkIn(inp))
// let v = "8"
// console.log(v.charCodeAt(0))

// second approach using regex
let val = "78"
let regex = /^-?[0-9]+$/;
let result = regex.test(val)
if(result === true) console.log("true")
else console.log("false")

// next questions 
// take a number and if number is multiple of 3 print "Foo"
// if number is multiple of 5 print "Bar"
// if numbers are multiple of both 3 and 5 print "FooBar"
// if not a multiple of either , print nothing

let number = 3;
if(number%3==0) console.log("Foo")
if(number%5==0) console.log("Bar")
if(number%3 == 0 && number%5 == 0) console.log("FooBar") 






