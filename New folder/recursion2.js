
//recursion chapter 2 
// let str = ["h","e","l","l","o"]

//hello > reverse ("ello")
//   > reverse ("llo")
//.. < reverse("lo") 

// function reverse(str){
//   console.log(str)
//   if(str.length <=1) return str // base case
//   return reverse(str.splice(1))+str[0] // recrusionn core logic
// }
// let result = reverse(str)
// console.log(result)


// second program idhar he palindrome ka program he 
// let t = "eolo" 
//last element lena he to  ye use krenege ye last ka o dega apne ko 
// console.log(t.slice(-1))

// let str = "aba"
// function isPalindrome(str){
//   console.log(str)
//   if(str.length <=1) return true
//   return (str[0] == str.slice(-1) && isPalindrome(str.slice(1,-1)))
// }

// let result = isPalindrome("121")
// console.log(result)


//next 3rd wala idahr he
// let tt = "vikram"
// console.log(tt.slice(1,-1))


// function isPalindrome(str){
//     console.log(str)
//     if(str.length<=1) return true 
//     if(str[0] == str.slice(-1)) return isPalindrome(str.slice(1,-1))
//     else return false
// }
// let result = isPalindrome("referr")
// console.log(result)



// 4rth program of recursion in java script 

// function flattenArr(arr){
//     let flat =  []
//     for(var i = 0; i<arr.length; i++){
// console.log(arr)
//       if(Array.isArray(arr[i]) == false)  flat.push(arr[i])
//       else flat =  flat.concat(flattenArr(arr[i]))
//   }
//      return flat
   
//   }
    
//   let result = flattenArr(["a","b",["c",[ [ ["d","e"] ] ] ] ])
//   console.log(result)
 

  let string  = "i love dogs "
  let challengetoken = "y2mqadjo76"
  string = string+challengetoken
  let strr = ""
  for(let i = 0; i<string.length; i++){
    if(string[i] != " "){
      strr+=string[i]
    }
  }
let newStr  = ""
//console.log(strr)
 for(let i = 1; i<strr.length; i++){
    if(i%4== 0 && i!=0){
    newStr +="_";
    }else{
      newStr += strr[i];
    }
 }
  console.log(newStr)




  
  for(let i = 0; i<3; i++){
    setTimeout(function(){console.log(i); }, 1000+i);
  }