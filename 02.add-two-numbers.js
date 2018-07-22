var addTwoNumbers = function (l1, l2) {
    var list1AsArray = new SinglyLinkedList(l1).returnArray();
    var list2AsArray = new SinglyLinkedList(l2).returnArray();

    return returnCombinedArray(list1AsArray, list2AsArray);
};

var list1 = {
    val: 9, next: {
        val: 0, next: {
            val: 9, next: null
        }
    }
};

var list2 = {
    val: 1, next: {
        val: 2, next: {
            val: 3, next: null
        }
    }
};

function sumArrays(array1, array2) {
    array1.forEach(function (item, index) {
        const sumOfArrayItems = item + (array2[index] || 0);
        if (sumOfArrayItems > 9) {
            if(array1[index + 1] === 0 || array1[index + 1]) {
                array1[index + 1]++;
            }
            else {
                array1.push(1);
            }
            array1[index] = sumOfArrayItems - 10;
        }
        else {
            array1[index] = sumOfArrayItems;
        }
    })
    return array1;
}

function returnCombinedArray(array1, array2) {
    if (array1.length >= array2.length) {
        return sumArrays(array1, array2);
    }
    else {
        return sumArrays(array2, array1);
    }
}

// console.log(returnCombinedArray([9, 2, 3, 4], [1, 2]));

function ListNode(data) {
    this.val = data;
    this.next = null;
}

function LinkedListFromArray(array) {
    let topItem = array.shift();
    const head = new ListNode(topItem);
    let tail = head;

    while (array.length) {
        topItem = array.shift();
        const current = new ListNode(topItem);
        tail.next = current;
        tail = current;
    }
    return head;
}

function SinglyLinkedList(list) {
    this.arrayFromList = [];

    let node = new ListNode(list.val);
    node.next = list.next;

    while (node.next) {
        // this.addToArray(node.val);
        this.arrayFromList.push(node.val);
        const current = new ListNode(node.next.val);
        current.next = node.next.next;
        node = current;
    }

    // use last val, when there is no next
    // this.addToArray(node.val);
    this.arrayFromList.push(node.val);
}

SinglyLinkedList.prototype.addToArray = function (item) {
    this.arrayFromList.push(item);
}

SinglyLinkedList.prototype.returnArray = function () {
    return this.arrayFromList;
}

// const newList = new SinglyLinkedList(list1);

console.log(addTwoNumbers(list1, list2));

const newList1 = new LinkedListFromArray([2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 9]);
const newList2 = new LinkedListFromArray([5, 6, 4, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 9, 9, 9, 9]);
// console.log(addTwoNumbers(newList1, newList2));

// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
// console.log(addTwoNumbers([2, 4, 3, 0], [5, 6, 4, 6, 6]));
// console.log(addTwoNumbers([0], [0]));