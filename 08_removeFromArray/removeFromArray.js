const removeFromArray = function(arr, ...items) {
    let newArr = arr.filter(item => !items.includes(item));
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
