// // prime number all found optimised approch 

//     // create a boolean array prime
//     // initilize all entries it as true , 
//     // will finally be false if i is not a prime else true
    function sieveOfErathomas(n){
        let  prime = Array(n).fill(true)
          for(p = 2; p*p <= n; p++ ){
               // if prime[p] is not  changed, then it is a 
               // prime
               if(prime[p] == true) // prime
               {
                   // update all multiple of p 
                   for(i = p * p ; i<=n; i+=p)
                        prime[i] = false;
               }
          }
            let primes = []
            // print all prime numbers
          
            for(i = 2; i<=n; i++){
              
                if(prime[i] == true) primes.push(i)
             }
             console.log(primes)
      }
      sieveOfErathomas(10)


//       // seive of erathomas ka ek or code thoda easy optimized

//       // leet code par bi ye chal jeyaga 
// {
//     var countPrimes = function(n) {
//         let prime = new Array(n).fill(true)
//         prime[0] = false
//         prime[1] = false
//         for(let i=2; i*i<n; i++){
//            // if(!prime[i]) continue;
//             for(let j = i*i; j<n; j += i){
//                 console.log(j)
//                 prime[j] = false
//             }
//         }
//         // this for count the prime number 
//         let count = 0
//         for(let p of prime){
//             if(p) count++
//         }return count

//         // if you want to push array then use this
//         // let primes = []
//         // // print all prime numbers
      
//         // for(i = 2; i<=n; i++){
          
//         //     if(prime[i] == true) primes.push(i)
//         //  }
//         //  console.log(primes)
//     }
//     console.log(countPrimes(10))
// }

// [1,2,3,4,5,6,7,8,9,10]
// sieveOfErathomas
let n = 10
let arr = new Array(n).fill(true)
console.log(arr)
arr[0] = false
arr[1] = false
for(let i = 2; i*i < n; i++){
     if(arr[i] == true){
     for(let j = i*i; j<n; j+=i){
        arr[j] = false
     }
    }
}
  let count = 0
  for(let i of arr) {
    if(i==true) count++
  }
  console.log(count)
  