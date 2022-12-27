class Node{
    constructor(value){
            this.value = value;
            this.next = null;
    }
}

// classs link list creating
class LinkedList{
    constructor(){
        this.head = null
        this.size = 0;
    }

    //creating empty check method
    isEmpty(){
        return this.size ===0;
    }

    // get size method
    getSize(){
        return this.size;
    }

   //adding values in node so we are creating instance
   prepend(value){
    const node = new Node(value);
      if(this.isEmpty()){
        this.head = node;
      }else{
        node.next = this.head
        this.head = node
      }
      this.size++
   }

      ///creating print method to print all the linklist data here 
      print(){
        if(this.isEmpty()){
            console.log('list is empty')
        }else{
            let current = this.head;
            let listValues = ''
            while(current){
                listValues += `${current.value} `
              //  listValues+=" "
                current = current.next
            }
            console.log(listValues)
            return listValues;
        }
      }



}
//calling this class
const list = new LinkedList()
console.log('list is empty',list.isEmpty());
console.log('list size',list.getSize());
// calling print method 

list.prepend(10)
//list.print()
list.prepend(20)
//list.print()
list.prepend(30)
console.log(list.print())
