

// reverse link list program is here 

class Node {
      constructor(value){
              this.value = value
              this.next  = null
      }
}

  class LinkedList{
         constructor() {
             this.head = null
             this.size = 0
         }


         addValue(value){
            let node = new Node(value)
            if(!this.head){
               this.head = node
               this.size  = 1
            }else{
                node.next = this.head
                this.head = node
                this.size++
            }
         }


  

          // reverse method is here 
          reverse(){
              let previous = null
              let current = this.head
              while(current){
                  let next = current.next
                  current.next = previous
                  previous = current 
                  current = next
              }
              this.head = previous
           console.log(previous)
          }

          print(){
            let curr = this.head
            let list = ''
           while(curr){
            list+= curr.value+" "
            console.log(list)
            curr = curr.next
        }
        console.log(list)
    }

         
  }
  let list = new LinkedList()
      list.addValue(10)
      list.addValue(20)
      list.addValue(30)
      list.reverse()
      list.print()
