

class Node{
    constructor(value){
        this.value = value 
        this.next = null
        
    }
}
let head = null
let tail = null
let arr =[10,20,30,40,50]
for(element of arr){
let node = new Node(element)
if(!head){
    head = node
    tail = node
}  
    else{
         tail.next = node
         tail = tail.next
     }
}

// deleting head node in this linked list 

let temp = head
head = head.next
temp.next=null

//console.log(head)

for(let i = 0; i<arr.length-1; i++){
    console.log(head)
   head = head.next
}