

// let arr = [1,1,1,0,0,1,1,1,1,0,0,0]

// let n= arr.length
// let left  = 0
// let right = n-1

// while(left<right){
// while(arr[left] == 0 && left <right){
//      left++;}
     
//      while(arr[right] == 1 && left < right)
//         right--; 

//  if(left < right){
//    arr[left] =  0;
//    arr[right] = 1;
//    left++;
//    right--;
//     } 
//   }

// console.log(arr)


//two number question thoda improve version 



// let a = [1,2,2,0,0,1,1,1,1,0,0,0]

// let n = a.length;
// //let left = 0;
// let right = n-1
// let mid = 0
// let temp;

//   while(mid < right){
//     if(a[mid] == 1){
//       temp  = a[mid];
//       a[mid]  = a[right];
//       a[right] = temp
//    //   left++
//       mid++
//     }else if(a[mid] == 2){
//       temp = a[mid];
//       a[mid] = a[right];
//       a[right] = temp
//       right--;
//     }else
//     mid++;
//   }
//   console.log(a)




var myPow = function(x, n) {
    
  if(n === 0){
      return 1
  }
  
  if(n == 1){
      return x
  }
  
  if(n<0){
      x = 1/x
  n = -n
  }
  
  
  if(n%2==1){
      return myPow(x,(n-1)/2) **2*x
      console.log(myPow)
  }else{
      return myPow(x,n/2) ** 2
  }
};
let result = myPow(2,3)
console.log(result)