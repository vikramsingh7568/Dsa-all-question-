class Node{
     constructor(value){  
        let node =  {  
         value : value,
         next : null
        }
        this.tail = this.node
         this.tail = node
        this.size = 1
     }
          add(data){
            let node ={
                value : data,
                next : null
            }
        this.tail.next = this.node
        this.tail = node
        this.size++
          }


}

let node = new Node(10)
node.add(20)
console.log(node)