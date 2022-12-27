
// creating binary search tree

class Node{
    constructor(value){
        this.value = value;
        this.left  = null
        this.right = null
    }
}


class BinarySearchTree{
     constructor(){
           this.root = null
     }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

      insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right == null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
      }
           //bfs
           levelOrder(){
             // using the optimised queue implementation
             const queue = []
              queue.push(this.root)
              while(queue.length){
                let curr = queue.shift()
                console.log(curr.value)
                if(curr.left){
                    queue.push(curr.left)
                }
                if(curr.right){
                    queue.push(curr.right)
                }
              }
           }     


}

let bst = new BinarySearchTree()
 // console.log("binary tree is empty "+ bst.isEmpty())
bst.insert(1)
bst.insert(2)
bst.insert(0)
bst.insert(5)
bst.insert(3)
bst.insert(5)
bst.levelOrder()




