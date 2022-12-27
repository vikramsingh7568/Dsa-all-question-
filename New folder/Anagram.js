let s = "vikram"
let t = "makriv"

var isAnagram = function(s, t) {
    let obj = {}
if(s.length != t.length){
    return false
}
for(let i of s){
    obj[i] = obj[i]+1 || 1
}
for(let i of t){
    if(!obj[i]){
        return false
    }else{
        obj[i] = obj[i]-1
    }
}return true
};
console.log(isAnagram(s,t))

// second approach is here 

var isAnagram = function(s, t) {
    if(s.length != t.length) return false
    let counter1 = new Array(26).fill(0)
    let counter2 = new Array(26).fill(0)
  
    for(let i = 0; i<s.length; i++){
        counter1[s[i].charCodeAt()-"a".charCodeAt()]++;
        counter2[t[i].charCodeAt()-"a".charCodeAt()]++;
    }
  
    counter1 = counter1.join()
    counter2 = counter2.join()
  
    if(counter1 == counter2) return true
    else return false
  
};
console.log(isAnagram(s,t))
