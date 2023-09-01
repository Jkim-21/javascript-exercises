const removeFromArray = function(numberArray, ...removedNumbers) {
    for (const removingNumber of removedNumbers) {
        let removingNumberIndex = numberArray.indexOf(removingNumber);
        if (removingNumberIndex !== -1) {
            numberArray.splice(removingNumberIndex, 1);
        }
    }
    return numberArray;
};

// Do not edit below this line
module.exports = removeFromArray;