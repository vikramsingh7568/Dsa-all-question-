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
}
//calling this class
const list = new LinkedList()
console.log('list is empty',list.isEmpty());
console.log('list size',list.getSize());