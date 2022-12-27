
//order of n cube time complexity

let arr = [5, 1, 3, 4, 7];
     
function countTriplets(n,sum)
{
    // Initialize result
    let ans = 0;   
    // Fix the first element as A[i]
    for (let i = 0; i < n-2; i++)
    {
       // Fix the second element as A[j]
       for (let j = i + 1; j < n-1; j++)
       {
           // Now look for the third number
           for (let k = j + 1; k < n; k++)
               if (arr[i] + arr[j] + arr[k] < sum)
                   ans++;
       }
    }
    return ans;
}


// second approach is here
{
    // order of n square time 
    let arr = [-2,0,1,3]
     
    function countTriplets(n,sum)
    {
       // Sort input array
       arr = arr.sort((a,b) => a-b )
        let ans = 0;
         
        for (let i = 0; i < n - 2; i++)
        {
            let j = i + 1
            let k = n - 1;
            while (j < k)
            {
                if (arr[i] + arr[j] + arr[k] >= sum)
                    k--;
                else
                {
                    ans += (k - j);
                    j++;
                }
            }
        }
        return ans;
    }
     
    // Driver method to test the above function
    let sum = 2;
    console.log(countTriplets(arr.length, sum));
     

}







