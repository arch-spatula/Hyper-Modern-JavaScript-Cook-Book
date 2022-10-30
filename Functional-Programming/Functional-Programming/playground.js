const indexes = Object.freeze([...Array(6).keys()]);

function addElement(arr) {
    // indexes.push(arr.length)
    return Object.freeze([...arr, arr.length])
}

console.log(

    addElement(addElement(addElement(indexes)))
)

// [
//     0, 1, 2, 3, 4,
//     5, 6, 7, 8
// ]