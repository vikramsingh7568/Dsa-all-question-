// check this number is prime or not 
let a = 23
flag = false
for(let i =2 ; i<a; i++){
    if(a%i==0){
        flag = true
        break;
    }
}
  if(flag == true){
  console.log("not a prime ")
  }else{
    console.log("this is prime number")
  }

  // next optimise code using factor 
  // time complexity sqrt of n ho gai yani 100 he t =o 10 times loop chalega yani 10 times kam ho gai 
  {
    let a = 23
   let flag = false
   console.log(Math.sqrt(a))
    for(let i =2 ; i<Math.sqrt(a); i++){
        if(a%i==0){
            flag = true
            break;
        }
    }
      if(flag == true){
      console.log("not a prime ")
      }else{
        console.log("this is prime number")
      }
    
  }
  // without using inbuild function math 
  {
    let a = 23
   let flag = false
    for(let i =2 ; i*i<a; i++){
        if(a%i==0){
            flag = true
            break;
        }
    }
      if(flag == true){
      console.log("not a prime ")
      }else{
        console.log("this is prime number")
      }
  }

// check prime no between all prime in given number
{
    // time complexity 
    // O(n*sqrt(n))
    let  a = 10;
    let primes = []
    for(let i = 2; i<=a; i++){
           if(isPrime(i)){
           primes.push(i)
           }
    } 
  console.log(primes)
} 
  function isPrime(a){
         for(let i = 2; i<a; i++){
             if(a%i == 0){
                return false 
             }
         }
         return true
}  

// prime number all found optimised approch 
     function sieveOfErathomas(n){
          // create a boolean array prime
          // initilize all entries it as true , 
          // will finally be false if i is not a prime else true

        let  prime = Array.from({length: n+1}, (_, i) => true);
console.log(prime)
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
                primes.push[i]
             }
             console.log(primes)
     }
sieveOfErathomas(10)

{   
    let n = 100 
    let prime = new Array(100000).fill(0)
    
    for(let i = 2;  i<=n ; i++){
           if(prime[i] =0){
              for(let j = i*i; j<=n; j+=i){
                prime[j]=1;
              }
           }
    }
       for(let i = 2; i<=n; i++){
          if(prime[i] = 0){
            console.log(i," ")
          }
          break;
       }
}


