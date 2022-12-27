

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

// deleting head node in this linked 
let temp = head

while(temp.next != null){
    temp = temp.next
}
temp.next  = null

while(head.next){
    console.log(head.value)
    head = head.next 
}