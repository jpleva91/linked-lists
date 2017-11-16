/* Linked List */
function List() {
    this.start = null;
    this.end = null;
}

/*  List methods */
List.prototype = {
    /*
        Method: makeNode
        Make a simple Node object
    */
    makeNode : function() {
        return {data: null, next: null};
    },

    /*
        Method: insertAtTail
        Adds a Node to the END of the List
    */
    insertAtTail: function(data) {
        // if linkedList is empty
        if(this.start === null) {
            // start becomes a node
            this.start = this.makeNode();
            // end becomes the start node
            this.end = this.start;

            // else linkedList isn't empty
        } else {
            // create a next property for end and assign it a new Node
            this.end.next = this.makeNode();
            // move the end node to end's next node
            this.end = this.end.next;
        }
        // finally, add the data to the end Node
        this.end.data = data;
    },

    /*
        Method: print
        Traverse the list. For each node, append the current node's data to
        a master list of all data, including head and tail
    */
    print: function() {
        var listString = 'Head -> ';
        // set our 'current' Node to the starting node
        var current = this.start;
        // while the 'current' Node isn't null
        while(current !== null) {
            // print out the 'current' Node's data
            listString += current.data + ' -> ';
            // assign our 'current' Node's next to be 'current' (increment!)
            current = current.next;
        }
        console.log(listString +'Tail');
    },

    /*
        Method: insertAtHead
        Insert a new Node at the head of the list.
    */
    insertAtHead: function(data) {
        // Enter code here!
        this.start = { data: data, next: this.start};
    },

    /*
        Method: length
        Traverse the list. Return the amount of Nodes in the list.
    */
    length: function() {
        // Enter code here!
        let count = 0;
        let current = this.start;

        while(current !== null) {
            current = current.next;
            count ++;
        }
        return count;
    },

    /*
        Method: exists
        Traverse the list. If a Node with the data passed in exists, then return
        true. If not, return false
    */
    exists: function(data) {
        // Enter code here!
        let current = this.start;
        let found = false;
        while(current !== null) {
            if(current.data == data) {
                found = true;
            }
            current = current.next;
        }
        return found;
    },

    /*
        Method: each
        Traverse the list. For each Node, call the function f on that Node.
        Example: f(current);
    */
    each: function(f) {
        // Enter code here!
        let current = this.start;
        while(current !== null) {
            f(current.data);
            current = current.next;
        }
    },

    /*
        Method: indexOf
        Traverse the list. If a Node with the data passed is found, return an
         index (integer) of that Node's location.
    */
    indexOf: function(data) {
        // Enter code here!
        let current = this.start;
        let found = false;
        let count = 0;
        while(current !== null) {
            if(current.data == data) {
                found = true;
                return count;
            }
            current = current.next;
            count ++;
        }
        return -1;
    },

    /*
        Method: dataFrom
        Traverse the list to the ith position and return the corresponding data.
              */
    dataFrom: function(i) {
        // Enter code here!
        let current = this.start;
        let count = 0;
        while(current !== null) {
            if(count === i) {
                return current.data;
            }
            current = current.next;
            count ++;
        }
    },

    /*
        Method: insertAt
        Traverse the List.  Find the ith Node in the list and insert a new Node
         after it.  You must preserve the list structure!
    */
    insertAt: function(i, data){
        // Enter code here!
        let current = this.start;
        let count = 0;
        while(current !== null) {
            if(count === i) {
                current.next.next.data = current.next.data;
                current.next.data = data;
            }
            current = current.next;
            count ++;
        }
        LinkedList.print();
    },

    /*
        Method: delete
        Traverse the list, find the node with the corresponding data,
        and remove that node. List must still be fully intact after
        you remove the node!
    */
    delete: function(data) {
        // Enter code here!
        let current = this.start;
        while(current !== null) {
            if(current.data === data) {
               current.data = current.next.data;
               current.next = current.next.next;
            }
            current = current.next;
        }
        LinkedList.print();
    }
};


/* LinkedList initialization */
var LinkedList = new List();
var i = 2;
while(i <= 20) {
    LinkedList.insertAtTail(i);
    i+=2;
}

// LinkedList.insertAtHead(44);
// LinkedList.print();
// console.log(LinkedList.length());
// console.log(LinkedList.exists(2));
// LinkedList.each(console.log);
// console.log(LinkedList.indexOf(2));
// console.log(LinkedList.dataFrom(9));
// LinkedList.insertAt(2, 72);
// LinkedList.delete(6);
