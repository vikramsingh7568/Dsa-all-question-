var allValues  =''

class Node{
     constructor(value){
          this.value = value;
          this.next = null;
     }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }
    

     SetValues(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head 
            this.head = node 
        }
        this.size++
     }


      PrintValues(){
        if(this.isEmpty()){
            console.log('no element present')
        }else{
            let current = this.head
            //let allValues =''
            while(current.next){
                allValues += `${current.value} `
                current = current.next
            }
            console.log(allValues)
        }
      }
}
let list = new LinkedList()
let arr= [10,20,30,40,50]
 
  for(let i = 0; i<arr.length; i++){
    list.SetValues(arr[i])
  }

list.PrintValues()
console.log(allValues)