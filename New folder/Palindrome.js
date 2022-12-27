

function checkPalindrome(str,l,r){
    if(l==r)return true
    if(str[l]!=str[r])
        return false
    return checkPalindrome(str,l+1,r-1)
}


let str = "prince";
let left = 0;
let right = str.length-1;

console.log(checkPalindrome(str,left,right))