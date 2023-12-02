const palindromes = function (word) {
    let lowerCaseWord = word.toLowerCase();
    let validLetters = /[a-z0-9]/;
    let l = 0;
    let r = lowerCaseWord.length - 1;
    while (l < r) {
        if (!validLetters.test(lowerCaseWord[l])) {
            l++;
        }
        else if (!validLetters.test(lowerCaseWord[r])) {
            r--;
        }
        else if (lowerCaseWord[l] != lowerCaseWord[r]) {
            return false;
        }
        else {
            l++
            r--;
        }
    }
    return true;
};


const palindromes2 = function (word) {
    const filteredWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    const wordArr = filteredWord.split("");
    return wordArr.reverse().join("") === filteredWord;

};

// Do not edit below this line
module.exports = palindromes;
