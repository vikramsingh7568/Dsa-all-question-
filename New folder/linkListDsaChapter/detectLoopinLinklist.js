
// JavaScript program to detect loop in a linked list
	var head; // head of list

	/* Linked list Node */
	class Node {
		constructor(val) {
			this.data = val;
			this.next = null;
		}
	}
	/* Inserts a new Node at front of the list. */
	function push(new_data) {
		/*
		* 1 & 2: Allocate the Node & Put in the data
		*/
        var new_node = new Node(new_data);

		/* 3. Make next of new Node as head */
		new_node.next = head;

		/* 4. Move the head to point to new Node */
		head = new_node;
	}

	// Returns true if there is a loop in linked
	// list else returns false.
	function detectLoop(h) {
		var s = new Set();
		while (h != null) {
			// If we have already has this node
			// in hashmap it means their is a cycle
			// (Because you we encountering the
			// node second time).
			if (s.has(h))
				return true;

			// If we are seeing the node for
			// the first time, insert it in hash
			s.add(h);

			h = h.next;
		}

		return false;
	}

	/* Driver program to test above function */
	
        push(10);
		push(20);
		//push(4);
		//push(15);
		//push(10);

		/* Create loop for testing */
		head.next = head;

		if (detectLoop(head))
		 console.log("Loop Found");
		else
			console.log("No Loop");

141