let s = "12vbbv  21"
const isAlphaNumeric = str => /^[a-z0-9]$/gi.test(str);

var isPalindrome = function(s){
    let newStr = ""
    let l = s.length
    for(let i = 0; i<l; i++){
        let ch=s[i].toLowerCase()
        if(isAlphaNumeric(ch)){
            newStr += ch
           
        }
    }
   // console.log(newStr)
    let str2 = newStr
    let str3 = ""
   str2 =  str2.split("").reverse().join("")
   for(let j= 0; j<str2.length; j++){
    if(str2[j] == newStr[j]){
        str3 += str2[j]
    }else { return false }  
}
   if(str2 == str3 ) return true
}
console.log(isPalindrome(s))