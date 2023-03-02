const merge = (listA, listB) => {
    let result = [];
  
    while (listA.length > 0 && listB.length > 0) {
        if (listA[0] > listB[0]) {
            result.push(listB[0]);
            listB.splice(0,1);
        } else {
            result.push(listA[0]);
            listA.splice(0,1);
        }
    }
    
    while (listA.length > 0) {
        result.push(listA[0]);
        listA.splice(0,1);        
    }
    
    while (listB.length > 0) {
        result.push(listB[0]);
        listB.splice(0,1);        
    }
    
    return result;
}

const mergeSort = (list) => {
    if (list.length <= 1) {
        return list;
    }
    let left = [];
    let right = [];
    
    for (let i = 0; i < list.length; i++) {
        if (i < (list.length)/2) {
            left.push(list[i]);
        } else {
            right.push(list[i]);
        }
    }
    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right);
}

console.log(mergeSort([1,90,3,2,34]));
console.log(mergeSort([1]));
console.log(mergeSort([]));
console.log(mergeSort([1,2,3,4,5,6]));
console.log(mergeSort([6,5,4,3,2,1]));
