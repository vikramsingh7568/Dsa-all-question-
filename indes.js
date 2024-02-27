//merge sorted array 

// function mergeArrays(arr1, arr2) {
//     let mergedArray = [];
//     let i = 0;
//     let j = 0;

//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             mergedArray.push(arr1[i]);
//             i++;
//         } else {
//             mergedArray.push(arr2[j]);
//             j++;
//         }
//     }

//     // If there are remaining elements in arr1, append them to mergedArray
//     while (i < arr1.length) {
//         mergedArray.push(arr1[i]);
//         i++;
//     }

//     // If there are remaining elements in arr2, append them to mergedArray
//     while (j < arr2.length) {
//         mergedArray.push(arr2[j]);
//         j++;
//     }

//     return mergedArray;
// }

// // Test cases
// console.log(mergeArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
// // console.log(mergeArrays([-2, 0, 4, 7], [-1, 2, 6])); // Output: [-2, -1, 0, 2, 4, 6, 7]


// gfg maximum sum problem 


// function maxSum(n) {
//     let dp = [];

//     function findMaxSum(n) {
//       console.log(n)
//         if (n <= 0) return 0;
//         if (dp[n]) return dp[n];

//         let sum = findMaxSum(Math.floor(n / 2)) + findMaxSum(Math.floor(n / 3)) + findMaxSum(Math.floor(n / 4));
//         console.log('sum',sum)
//         dp[n] = Math.max(n, sum);
        
//         return dp[n];
//     }

//     return findMaxSum(n);
// }

// // Test cases
// // console.log(maxSum(12)); // Output: 13
// console.log(maxSum(24)); // Output: 27








// function maxSum(n) {
//     let dp = [];
//     dp[0] = 0; // Base case

//     for (let i = 1; i <= n; i++) {
//         let sum = dp[Math.floor(i / 2)] + dp[Math.floor(i / 3)] + dp[Math.floor(i / 4)];
//         dp[i] = Math.max(i, sum);
//     }

//     return dp[n];
// }

// // Test cases
// console.log(maxSum(12)); // Output: 13
// console.log(maxSum(24)); // Output: 27






//buy and sell share

// function maxProfit(prices) {
//     if (prices.length < 2) {
//         return 0; // Not enough data to make a profit
//     }

//     // Initialize variables to store the maximum profit
//     let firstBuy = Number.MIN_SAFE_INTEGER;
//     let firstSell = 0;
//     let secondBuy = Number.MIN_SAFE_INTEGER;
//     let secondSell = 0;

//     for (let price of prices) {
//         // Calculate the maximum profit after the first buy
//         firstBuy = Math.max(firstBuy, -price);
//         // Calculate the maximum profit after the first sell
//         firstSell = Math.max(firstSell, firstBuy + price);
//         // Calculate the maximum profit after the second buy
//         secondBuy = Math.max(secondBuy, firstSell - price);
//         // Calculate the maximum profit after the second sell
//         secondSell = Math.max(secondSell, secondBuy + price);
//     }

//     // The maximum profit achievable is the maximum value of secondSell
//     return secondSell;
// }

// const prices = [10, 22, 5, 75, 65, 80];
// console.log("Maximum profit: ", maxProfit(prices));















// function maxSumFind(n){
//          let dp = []
//          //initial value
//          dp[0] = 0;

//          for(let i = 1; i<= n; i++){

//             let sum = dp[Math.floor(i / 2)] + dp[Math.floor( i / 3)] + dp[Math.floor( i / 4)]
//             dp[i] = Math.max(i,sum)

//          }

//          return dp[n]
// }

// console.log(maxSumFind(24))






function count(n) {
    // Initialize an array to store the counts for each score up to n
    const dp = new Array(n+1).fill(0);
    console.log('dp',dp);

    // Base case: There is one way to score 0 points (by not making any move)
    dp[0] = 1;

    // Iterate through each possible move (3, 5, 10) and update counts
    [3, 5, 10].forEach(score => {
        for (let i = score; i <= n; i++) {
          console.log('log',dp[i])
            dp[i] += dp[i - score];
            console.log('inside loop',dp[i])
        }
    });

    return dp[n];
}

// Example usage:
const n1 = 10;
console.log(count(n1)); // Output: 2

// const n2 = 20;
// console.log(count(n2)); // Output: 4












// Given an array of N integers arr[] where each element represents the maximum length of the jump that can be made forward from that element. This means if arr[i] = x, then we can jump any distance y such that y ≤ x.
// Find the minimum number of jumps to reach the end of the array (starting from the first element). If an element is 0, then you cannot move through that element.

// Note: Return -1 if you can't reach the end of the array.


//  if (n <= 1) return 0; // If array size is 0 or 1, no jumps needed

function minJumps(arr, n) {
    if (n <= 1) return 0; // If array size is 0 or 1, no jumps needed

    if (arr[0] === 0) return -1; // If the first element is 0, we cannot move forward

    let maxReach = arr[0]; // Maximum index that can be reached from current index
    let steps = arr[0]; // Number of steps remaining at current index
    let jumps = 1; // Initial jump from the first index

    for (let i = 1; i < n; i++) {
        if (i === n - 1) return jumps; // If reached the last index, return number of jumps

        maxReach = Math.max(maxReach, i + arr[i]); // Update the maximum reachable index

        steps--; // Decrement steps as we move forward

        if (steps === 0) { // If no more steps remaining
            jumps++; // Increment jumps
            if (i >= maxReach) return -1; // If the current index cannot be reached from the previous reachable indices, return -1
            steps = maxReach - i; // Update steps to the difference between maxReach and current index
        }
    }

    return -1; // If the last index cannot be reached
}



















