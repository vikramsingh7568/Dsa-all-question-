
// creating binary search tree

// postorder Traversal

// visit the left subtree
// visit the right subtree
// read the data of the node

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
              PostOrder(root){
                   if(root){
                    this.PostOrder(root.left)
                    this.PostOrder(root.right)
                    console.log(root.value)
                   }
              }


}

let bst = new BinarySearchTree()
 // console.log("binary tree is empty "+ bst.isEmpty())
 let arr = [1,2,3,4,5,6,7]
 for(let i = 0; i<arr.length; i++){
    bst.insert(arr[i])
 }

// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(20)
// bst.insert(3)
// bst.insert(7)
bst.PostOrder(bst.root)






