// There are a number of tiles on the floor, each 
// numbered with a different non-negative integer.
// Treat this set of tiles as an array. You are initially
// standing on the first tile. Each tile in the set represents
// your maximum jumping distance at that position. (For example, if you are
// standing on 3, you can jump up to 3 tiles forward).
// Find out if you can reach the last tile.

// Javascript

function can_reach_end(nums) {
  let n = nums.length - 1
  for( let i = n - 1; i >= -1; i-- ){
    if( nums[i] + i >= n ) n = i
  }
  return n == 0
}






// 3 / 5 - Duplicated number
// The input nums is supposed to be an array of
// unique integers ranging from 1 to nums.length
// (inclusive). However, there is a mistake: one
// of the numbers in the array is duplicated, which 
// means another number is missing.


// Find and return the sum of the duplicated number
// and the missing number.



function sum_missing_duplicated(arr) {
    // sort the array first
    let sorted = arr.sort((a, b) => a - b)
    // declaring two variables
    let missing, repeated

    // loop to iterate the array
    for (let i = 0; i < sorted.length; i++) {
        let item = sorted[i];
        if( !arr.includes(i + 1)){
            missing = i + 1
        }
        for (let j = i; j < sorted.length; j++) {
            if (item === sorted[j + 1]) repeated = sorted[i];
        }
    }
    return missing + repeated
}

// --------------------------

let myArray = [1, 2, 3, 3, 5, 6];
console.log("Answer is: " + sum_missing_duplicated(myArray));






// 4 / 5 - ASCII deletion distance
// The deletion distance between two strings is
// the minimum sum of ASCII values of characters
// that you need to delete in the two strings in 
// order to have the same string. The deletion 
// distance between cat and at is 99, because you 
// can just delete the first character of cat and 
// the ASCII value of 'c' is 99. The deletion distance between cat and
// bat is 98 + 99, because you need to delete the first character of both
// words. Of course, the deletion distance between two strings 
// can't be greater than the sum of their total ASCII values, because
// you can always just delete both of the strings entirely.

// Implement an efficient function to find the deletion distance
// between two strings.

// You can refer to the Wikipedia article on the algorithm for 
// edit distance if you want to. The algorithm there is not 
// quite the same as the algorithm required here, but it's similar.

function ascii_deletion_distance(str1, str2) {
  let word1 = str1
  let word2 = str2
  const chartCode = (s = '') => {
    let code = 0
    for (const c of s) {
      code += c.charCodeAt(0)
    }
    return code
  }

  let prev = new Array(word2.length + 1).fill(0)
  for (let index1 = word1.length; index1 >= 0; index1--) {
    const current = new Array(word2.length + 1).fill(0)
    for (let index2 = word2.length; index2 >= 0; index2--) {
      if (index1 === word1.length) {
        current[index2] = chartCode(word2.slice(index2))
      } else if (index2 === word2.length) {
        current[index2] = chartCode(word1.slice(index1))
      } else if (word1[index1] === word2[index2]) {
        current[index2] = prev[index2 + 1]
      } else {
        current[index2] = Math.min(
          prev[index2] + (word1[index1]).charCodeAt(0),
          current[index2 + 1] + (word2[index2]).charCodeAt(0),
        )
      }
    }
    prev = current
  }
  return prev[0]
}

//5/5 interleaving strings
// for example a = vikram b  = singh output vsiiknrgahm
// interchnage change each character of the two strings 