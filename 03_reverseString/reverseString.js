const reverseString = function(originalString) {
    let reversedString = "";
    for (let i = (originalString.length - 1); i >= 0; i--) {
        reversedString += originalString.charAt(i);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
