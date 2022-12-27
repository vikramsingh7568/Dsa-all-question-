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
