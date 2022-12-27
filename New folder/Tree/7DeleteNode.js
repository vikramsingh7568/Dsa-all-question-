
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




      min(root){
        if(!root.left){
           return root.value
        }else{
         return this.min(root.left)
        }
     }



                    delete(value){
                        this.root = this.deleteNode(this.root,value)
                    }


                    deleteNode(root,value){
                        if(root == null){
                            return root
                        }
                        if(value<root.value){
                            root.left = this.deleteNode(root.left,value)
                        }else if(value>root.value){
                            root.right = this.deleteNode(root.right,value)
                        }else{
                            if(!root.left && !root.right){
                                return null
                            }
                            if(!root.left){
                                return root.right
                            }else if(!root.right){
                                return root.left
                            }
                            root.value = this.min(root.right)
                            root.right = this.deleteNode(root.right,root.value)
                        }
                        return root
                    }

}

let bst = new BinarySearchTree()
 // console.log("binary tree is empty "+ bst.isEmpty())
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
//bst.insert(7)

bst.levelOrder()
console.log("//////")
bst.delete(10)
bst.levelOrder()




