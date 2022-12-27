// there can be three types of DFS traversals 

//preorder Traversal
// post order
// inorder

// preorder traversal
// read the data of the node
// visit the left subtree
// visit the right subtree'

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

           //preorder search is here
            preOrder(root){
                   if(root){
                    console.log(root.value)
                    this.preOrder(root.left)
                    this.preOrder(root.right)
                   }
            }

}

let bst = new BinarySearchTree()
 // console.log("binary tree is empty "+ bst.isEmpty())
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(20)
bst.insert(3)
bst.insert(7)
console.log(bst.search(bst.root,20))

// preorder
bst.preOrder(bst.root)





