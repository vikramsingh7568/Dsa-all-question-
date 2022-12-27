
class List{
	 constructor(val){
		this.head ={
			value: val,
			next : null
		};
		this.tail = this.head;
		this.size = 1
	 }
        //new node tial increae
		appendNode(nodeData){
			let newNode ={
				value : nodeData,
				next : null
			};
			this.tail.next = newNode;
			this.tail = newNode;
			this.size++
		}
	   


}

let list = new List(200);
list.appendNode(300);
list.appendNode(400);
console.log(list)
list.appendNode(500);
console.log(list)
list.appendNode(600);
console.log(list)
