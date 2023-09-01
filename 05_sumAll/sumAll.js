const sumAll = function(firstInteger, secondInteger) {
    if ((firstInteger < 0) || (secondInteger < 0) || !Number.isInteger(firstInteger) || !Number.isInteger(secondInteger)) {
        return "ERROR";
    }
    let sum = 0;
    let smallerInteger = Math.min(firstInteger, secondInteger);
    let biggerInteger = Math.max(firstInteger, secondInteger);
    for(let i = smallerInteger; i <= biggerInteger; i++) {
        sum += i;
    }
    return sum;
};

const sumAll2 = function(min, max) {
    if ((min < 0) || (max < 0) || !Number.isInteger(min) || !Number.isInteger(max)) {
        return "ERROR";
    }
    let sum = 0;
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
        }

    for(let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
