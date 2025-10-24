const sumAll = function(a, b) {
    if (a < 0 || b < 0) {return 'ERROR'}
    if (!Number.isInteger(a) || !Number.isInteger(b)) {return 'ERROR'}

    let low = 0;
    let high = 0;
    
    if (a < b) {
        low = a;
        high = b;
    } else {
        low = b;
        high = a;
    }

    let total = 0;

    for (i = low; i <= high; i++) {
        total += i;
    }

    return total
};

// Do not edit below this line
module.exports = sumAll;
