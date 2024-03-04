class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addFirst(data) {
        this.head = new Node(data, this.head)
    }

    addLast(data) {
        let node = new Node(data);
        let current;

        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next){
                current = current.next;
            }
            current.next = node;
        } 
    }

    clear() {
        this.head = null;
        this.tail = null;
    }

    getAt(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count === index) {
                console.log(current.data)
                return current.data;
            }
            count++;
            current = current.next;
        }
        return null; // index out of range
    }

    indexOf(data) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.data === data) {
                return index;
            }
            index++;
            current = current.next;
        }

        return -1; // if data is not found
    }

    insertAfter(index, data) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count === index) {
                const newNode = new Node(data, current.next);
                current.next = newNode;
                return;
            }
            count++;
            current = current.next;
        }
    }

    insertBefore(index, data) {
        if (index === 0) {
            this.addFirst(data);
            return;
        }

        let current = this.head;
        let count = 0;
        let previous = null;

        while (current) {
            if (count === index) {
                const newNode = new Node(data, current);
                previous.next = newNode;
                return;
            }
            count++;
            previous = current;
            current = current.next;
        }
          }

    first() {
        return this.head ? this.head.data : null;
    }

    last() {
        if (!this.head) return null;

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        return current.data;
    }

    remove(index) {
        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        let count = 0;
        let previous = null;

        while (current) {
            if (count === index) {
                previous.next = current.next;
                return;
            }
            count++;
            previous = current;
            current = current.next;
        }
        return null;
    }

    removeFirst() {
        if (!this.head) return;

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) return;

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let current = this.head;
        let previous = null;

        while (current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
    }

    dumpList() {
        let current = this.head;

        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
    insertAfterNode(payload, existingNode) {
        if (!existingNode) return; 

        const newNode = new Node(payload);
        newNode.next = existingNode.next;
        existingNode.next = newNode;
    }

    insertBeforeNode(payload, existingNode) {
        if (!existingNode) return; 

        const newNode = new Node(payload);
        newNode.next = existingNode;
        
        let current = this.head;
        let previous = null;
        
        while (current && current !== existingNode) {
            previous = current;
            current = current.next;
        }

        if (previous) {
            previous.next = newNode;
        } else {
            this.head = newNode;
        }
    }

    removeNode(node) {
        if (!node) return; 

        let current = this.head;
        let previous = null;

        while (current && current !== node) {
            previous = current;
            current = current.next;
        }

        if (current) {
            if (previous) {
                previous.next = current.next;
            } else {
                this.head = current.next;
            }
        }
    }

    nodeAt(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count === index) {
                return current;
            }
            count++;
            current = current.next;
        }

        return null; // Handle index out of range
    }

    swapNodes(nodeA, nodeB) {
        if (!nodeA || !nodeB || nodeA === nodeB) return; 

        let current = this.head;
        let prevA = null;
        let prevB = null;
        let foundA = false;
        let foundB = false;

        while (current && (!foundA || !foundB)) {
            if (current.next === nodeA) {
                prevA = current;
                foundA = true;
            }
            if (current.next === nodeB) {
                prevB = current;
                foundB = true;
            }
            current = current.next;
        }

        if (foundA && foundB) {
            if (prevA) {
                prevA.next = nodeB;
            } else {
                this.head = nodeB;
            }

            if (prevB) {
                prevB.next = nodeA;
            } else {
                this.head = nodeA;
            }

            let temp = nodeA.next;
            nodeA.next = nodeB.next;
            nodeB.next = temp;
        }
    }
}


export default LinkedList;