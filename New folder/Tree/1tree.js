//pre ordered traversal in tree
// first take root data
// left subtree
// right subtree
 //      1 
 //    2     3
 // 5    6
 // output 12563 this is output 


 //post order
 // left 
 //right
 //root node

 //      1
 //   2     3
//   5   6

//56231


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

          search(root,value){
              if(!root){
                return false
              }else{
                if(root.value === value){
                    return true
                }else if (value < root.value){
                    return this.search(root.left,value)
                }else{
                    return this.search(root.right, value)
                }
              }
          }

}

let bst = new BinarySearchTree()
 // console.log("binary tree is empty "+ bst.isEmpty())
bst.insert(10)
bst.insert(7)
bst.insert(15)
bst.insert(20)
console.log(bst.search(bst.root,20))




