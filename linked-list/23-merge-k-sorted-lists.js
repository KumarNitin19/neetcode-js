/**
 * 23. Merge k Sorted Lists
 * Time: O(N log k)
 * Space: O(1) 
 */

function mergeLists(l1, l2) {
    const dummy = new ListNode();
    let tail = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }

    tail.next = l1 || l2;
    return dummy.next;
}

var mergeKLists = function (lists) {
    if (!lists || lists.length === 0) return null;

    while (lists.length > 1) {
        const merged = [];

        for (let i = 0; i < lists.length; i += 2) {
            const l1 = lists[i];
            const l2 = (i + 1 < lists.length) ? lists[i + 1] : null;
            merged.push(mergeLists(l1, l2));
        }

        lists = merged;
    }

    return lists[0];
};
