// selection sort me ek ek element check krenege or smallest elemen ko aage kar denge
// sabse pehele chhota element search kro usko sabse aage sort kro 
// uske bad usse bade wale ko sort kro
let arr = [19,22,39,4,56,7,8,1,9,1]
// selectionSort
function selectionSort(){
  for(let i = 0; i<arr.length; i++){
      let smallest = i;
      for(let j = i+1; j<arr.length; j++){
             if(arr[smallest] > arr[j]){
               smallest = j
             }
      }
     let temp = arr[smallest]
         arr[smallest]  =   arr[i] 
         arr[i] = temp
  }  
    return arr
}
console.log(selectionSort())
