const removeFirstAndLast = arr => {
    if (arr.length >= 3) {
        return arr.slice(1, -1);
    } else {
        throw new Error("You need at least three elements in the array");
    };
};

removeFirstAndLast([1, 2, 3, 4, 5]);//?
removeFirstAndLast(['A', 'B', 'C', 'D']);//?
console.log(removeFirstAndLast([1, 2]));