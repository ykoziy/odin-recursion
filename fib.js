const iterativeFib = (num) => {
    if (num == 1) {
        return [0];
    } else if (num == 2) {
        return [0, 1];
    } else if (num == 0) {
        return [];
    }
    let result = [0, 1];
    num -= 2;
    while (num > 0) {
        result.push(result[result.length - 1] + result[result.length - 2]);
        num--;
    }
    return result;
}

const recursiveFib = (num, arr = [0, 1]) => {
    if (num == 1) {
        return [0];
    } else if (num == 2) {
        return [0, 1];
    } else if (num == 0) {
        return [];
    }    
    if (arr.length === num) {
        return arr;
    } else {
        return recursiveFib(num, [...arr, (arr[arr.length - 1] + arr[arr.length - 2])]);        
    }
}

console.log(iterativeFib(8));
console.log(iterativeFib(2));
console.log(iterativeFib(1));
console.log(iterativeFib(0));

console.log(recursiveFib(8));
console.log(recursiveFib(2));
console.log(recursiveFib(1));
console.log(recursiveFib(0));
