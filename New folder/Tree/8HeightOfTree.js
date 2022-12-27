  
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

    //   BTHheight(root){
    //     if(root == null){
    //       return 0
    //     }
    //      else{
    //     let   leftheifht = this.BTHheight(root.left)
    //     let    rightheight = this.BTHheight(root.right)
    //       return Math.max(leftheifht,rightheight)+1;
           
    //      }
         
    //   }


    BTHheight(root){
        if(root == null){
          return 0
        }
         else{
          return Math.max(this.BTHheight(root.left),this.BTHheight(root.right))+1;
         }
         
      }
    

}

let bst = new BinarySearchTree()
 // console.log("binary tree is empty "+ bst.isEmpty())
bst.insert(11)
bst.insert(12)
bst.insert(13)
bst.insert(14)
bst.insert(15)
bst.insert(17)
bst.insert(20)
//bst.insert(13)
console.log(bst.BTHheight(bst.root))
console.log(bst)
//14 20 15 17 12 11 13
//-7 8 9 -12
//1 2 3 4 5
// 1 4 9 3 2 5