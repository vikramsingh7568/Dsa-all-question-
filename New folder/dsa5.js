// // swappling two values without using third varaibale

// a = 5
// b = 10

// a = a+b // a = 5 b = 10
// b = a-b // a= 15 - b = 10
// a = a-b // a= 15 - b= 10
 
// console.log(a,b)
// reverse stirng wihtout using extra varaible
// let x = "some"
// let y = "Good"

// //x = "someGood" //concat x and y 
// x = y+x
// y = x.slice(0,y.length)
// x = x.slice(y.length)
// //x = x.slice(x.length)
// console.log(x,y)

// reverse array without using extra array
let arr = [12,4,67,2,34]
let left  = 0
let right = arr.length-1
while(left < right){
  arr[left]  = arr[left] + arr[right]
  arr[right] = arr[left] - arr[right]
  arr[left]  = arr[left] - arr[right]
  left++
  right--
}

console.log(arr)

// write a js program to cyclically rotate an array rotate(arr,d) that rotates arr by d elements

//let arr = [12,3,6,2,9,11]
//rotate(arr,2) //=> [9,11,12,3,4,6,2]
//otate(arr,1) //  [11,12,3,6,2,9]
//rotate(arr,4) // [6,2,9,11,12,3]

//[11,9,2,6,3,12]



// given an array of repeated elements return the most
// repeted elemtn from the array 
// highest frequecy element in an array

let arr7= [23,56,678,12,2,34,23,98,12,3,12,2,12]
//step 1 frequecy counter method create hash map
// step 2 iterateover the map and return the element with highest frequecy

let arr2 = [12,4,67,2,34]
// find the maximum sum of any two elements in an array
//


let x = "vikram";
let y = "singh";
console.log(x,y);
x = x+y
y = x.slice(0,-y.length)
x = x.slice(y.length)

console.log(x,y)












