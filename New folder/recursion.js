
// ek code commnet kro or ek code chalao

// is program me fibonacci ke last 2 element jod kar bhej rahe he 
// jese fibonacci 1,1,2,3,5,8,13,21
// hamne 5 bheja he to 5 3 or 2 ko jodd kar bana he 
// ye sawal leet code par bi he 
function fibo(n){
  if(n == 0 ) return 0
  if(n==1) return 1
  let l = fibo(n-1) 
  console.log(l,"l ki value")
  let r =   fibo(n-2)
  console.log(r,"r ki vale")
  return l+r
 //return  fibo(n-1) + fibo (n-2)
  // console.log(n)
}
let result = fibo(4)
console.log(result)



// next question ka anser idhar he 

// let n = [8,1,5];
// let len = n.length
// let i = 0
// let mul = 1
// function fibo(n,i){
//   console.log(i)
// //  i++
//   mul *= n[i]*n[i+1]   
//   if(i == len-2) return mul
//   return fibo(n,++i)
// }

// let result = fibo(n,i)
// console.log(result)




//next idhar he 
//multiply of array //product of all the element of the array
//  let n = [3,4,5,6]
//  let len=n.length
//  let i=-1
// function fibo(n,len){

//   if(len == 0) return 1
//   console.log(n,i,len)
//   i++
//    n[i]*fibo(n,len-1)   
//   //splice har bar ek index ko delete karta jayega 
//   console.log(n,i,len)
// }
// let result = fibo(n,len)
// console.log(result)

// product of arrays every element 
// let n = [3,4,5,6]  //360 output hoga

//  function Product(n){
//    if(n.length ==0 ) return 1 
//     console.log(n)

//      n[0]* Product(n.splice(1))
     
//  }

// let result =  Product(n)
// console.log(result)



// next question idahr he 

// is function me power function ka kam recursion se kar rahe he


//Recursion is a process of calling itself.
// A function that calls itself is called a recursive function.




// function pow(b,exp){
//   if(exp==0) return 1
//   //console.log(b,exp)
//   return b * pow(b,exp-1)
// }

// let result = pow(6,2)
// console.log(result)








